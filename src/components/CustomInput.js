// CustomInput.js
import clsx from "clsx";
import React, { useState } from "react";

const CustomInput = ({ labelText, inputType, tagType, value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (!value.trim()) {
      setIsFocused(false);
    }
  };

  return (
    <div
      className={clsx(
        "flex-[1] px-[14px] py-4 border hover:border-gray-700 rounded-md relative transition-all duration-300",
        isFocused || value ? "border-gray-700" : "border-gray-400"
      )}
    >
      {tagType == "input" ? (
        <>
          <label
            className={`label absolute translate-x-[-8%] translate-y-[-50%] z-0 pointer-events-none text-[#112a3f] font-light ${
              isFocused || value
                ? "top-[0%] left-[6%] bg-white px-2 text-sm"
                : "text-md top-[50%] left-[8%]"
            } transition-all duration-500`}
          >
            {labelText}
          </label>
          <input
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={onChange}
            className="input bg-white text-[#112a3f] w-full z-10"
            type={inputType}
            required
            value={value}
          />
        </>
      ) : tagType == "textarea" ? (
        <>
          <label
            className={`label absolute translate-x-[-4%] translate-y-[-50%] z-0 pointer-events-none text-[#112a3f] font-light ${
              isFocused || value
                ? "top-[0%] left-[3%] bg-white px-2 text-sm"
                : "text-md top-[12%] left-[4%]"
            } transition-all duration-500`}
          >
            {labelText}
          </label>
          <textarea
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={onChange}
            className="input bg-white h-56 text-[#112a3f] w-full z-10 pl-[0.5rem]"
            value={value}
            rows={10}
            cols={12}
            name="Phetsiam form submission"
          />
        </>
      ) : null}
    </div>
  );
};

export default CustomInput;
