import { useEffect, RefObject } from "react";

/**
 * Hook to detect clicks outside a specified element and trigger a callback.
 *
 * @param ref - Reference to the element to track for click-away events.
 * @param onClickAway - Callback function to invoke when a click occurs outside the element.
 */
export default function useClickAway(
  ref: RefObject<HTMLElement>,
  onClickAway: () => void
) {
  useEffect(() => {
    /**
     * Handle click events and check if the click occurred outside the specified element.
     *
     * @param event - The click event.
     */
    function handleClick(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickAway();
      }
    }

    // Add click event listener when the component mounts.
    document.addEventListener("click", handleClick);

    // Remove the click event listener when the component unmounts.
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [ref, onClickAway]);
}
