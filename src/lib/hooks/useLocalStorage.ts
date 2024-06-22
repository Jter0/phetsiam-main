import { useState, useEffect } from "react";

// Custom hook to read and write data to localStorage
function useLocalStorage<T>(key: string, initialValue: T) {
  // Use useState to initialize the state with the value from localStorage (if available)
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      if (typeof window === "undefined") return;
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading from localStorage: ${key}`, error);
      return initialValue;
    }
  });

  // Define a function to set the value in localStorage and update the state
  const setValue = (value: T) => {
    try {
      // If the new value is a function, compute its value
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Update the state
      setStoredValue(valueToStore);
      // Update localStorage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Error setting value in localStorage: ${key}`, error);
    }
  };

  // Use useEffect to listen for changes to the key and update the state accordingly
  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        setStoredValue(JSON.parse(item));
      }
    } catch (error) {
      console.error(`Error reading from localStorage: ${key}`, error);
    }
  }, [key]);

  return [storedValue, setValue] as const;
}

export default useLocalStorage;
