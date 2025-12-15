import React, { useState, useRef, useEffect } from "react";
import { SelectFieldProps } from "../types";
import Icon from "./icon";

export const SelectField = ({
  label,
  value,
  placeholder,
  options,
  onChange,
  error,
}: SelectFieldProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="mb-4 relative cursor-pointer " ref={dropdownRef}>
      <label className="block text-[#013535] text-sm font-semibold mb-2">
        {label}
      </label>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-full flex items-center justify-between cursor-pointer p-4 bg-white rounded-[30px]  h-15 border text-left
          transition-all duration-200
          ${
            isOpen
              ? "border-[#013535] ring-1 ring-[#013535]"
              : "border-gray-200 hover:border-gray-300"
          }
        `}
      >
        <div className="flex items-center  space-x-3">
          {value ? (
            <>
              <Icon alt={value.name} src={value.icon} size={32}></Icon>
              <span className="font-semibold text-gray-800 text-sm">
                {value.name}
              </span>
            </>
          ) : (
            <span className="text-gray-500 text-sm font-medium">
              {placeholder}
            </span>
          )}
        </div>
        <Icon
          src="/images/arrow-down.svg"
          className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          alt={"arrow down"}
        />
      </button>
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
      {isOpen && (
        <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 z-40 overflow-hidden overflow-y-auto max-h-62">
          <div className="py-2">
            {options.map((option) => (
              <button
                key={option.id}
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center px-4 py-3 hover:bg-[#F5F5F5] cursor-pointer transition-colors text-left ${
                  value?.id === option.id && "bg-[#F5F5F5]"
                }`}
              >
                <Icon
                  alt={option.name}
                  src={option.icon}
                  size={32}
                  className="mr-3"
                ></Icon>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-800">
                    {option.name}
                  </span>
                  {option.description && (
                    <span className="text-[10px] text-gray-400 mt-0.5">
                      {option.description}
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
