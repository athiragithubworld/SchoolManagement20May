import React, { useState, useRef, useEffect } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const InputCustomDropdown = ({
  // label,
  value,
  onChange,
  options,
  buttonStyling,
  optionStyling,
  containerStyling,
  inputDisabled,
  optionValue,
  
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      ref={dropdownRef}
      className={containerStyling ? containerStyling : " w-48 "}
    >
      {/* <div className=""> */}
      <button
        className={
          buttonStyling
            ? buttonStyling
            : "bg-white border h-[53px] w-[80%] lg:w-[190px] md:w-[190px] outline-none rounded-2xl px-3 py-3 shadow-primary text-center flex justify-between gap-5 items-center"
        }
        onClick={handleToggle}
        disabled={inputDisabled ? inputDisabled : false}
      >
        <span className="w-full flex justify-center items-center text-center">
          {value || "Select"}
        </span>
        <span>{isOpen ? <IoChevronUp /> : <IoChevronDown />}</span>
      </button>
      {isOpen && (
        <div
          className={
            optionStyling
              ? optionStyling
              : "absolute h-[120px] overflow-x-auto scrollbarnone z-10 mt-1 w-48 bg-white border border-gray-300 rounded-2xl shadow-md "
          }
        >
          {options.map((option, index) => (
            <div
              key={index}
              className="hover:bg-customblue hover:text-white hover:rounded-[20px] hover:pt-2 hover:pb-2 hover:ml-4 hover:mr-4 pt-2 pb-2 mt-1 mb-1 text-center cursor-pointer"
              onClick={() => handleOptionClick(option)}
              value={optionValue}
            >
              {option}
            </div>
          ))}
        </div>
      )}
      {/* </div> */}
    </div>
  );
};

export default InputCustomDropdown;



