import React, { useState, useRef, useEffect } from "react";
import { Currency, CurrencyInputProps } from "../types";
import { Icon } from "./icon";

export const CurrencyInput = ({
  label,
  amount,
  currency,
  onAmountChange,
  onCurrencyChange,
  availableCurrencies,
  readOnlyAmount = false,
  error,
  disabled,
}: CurrencyInputProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
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

  const filteredCurrencies = availableCurrencies.filter(
    (c) =>
      c.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="mb-4 relative max-w-lg" ref={dropdownRef}>
      <div
        className={`
          flex flex-col items-start justify-between p-6 gap-2 bg-white rounded-[30px] border
          transition-all duration-200
          ${
            isOpen
              ? "border-[#013535] ring-1 ring-[#013535]"
              : "border-gray-200 hover:border-gray-300"
          }
        `}
      >
        <label className="block text-[#828282]  text-base font-medium pl-1">
          {label}
        </label>
        {/* Amount Input */}
        <div className="flex justify-between w-full">
          <input
            type="text"
            value={amount}
            onChange={(e) => {
              const val = e.target.value;
              if (/^\d*\.?\d*$/.test(val)) {
                onAmountChange(val);
              }
            }}
            readOnly={readOnlyAmount}
            placeholder="0.00"
            className="w-full text-2xl font-bold text-gray-900 bg-transparent outline-none placeholder-gray-300 min-w-0"
          />
          <button
            onClick={() => {
              setIsOpen(!isOpen);
              setSearchQuery("");
            }}
            className="flex items-center space-x-2 bg-gray-50 hover:bg-gray-100 py-2 px-3 rounded-full transition-colors ml-4 shrink-0 cursor-pointer"
          >
            <Icon src={currency.icon} className="w-5 h-5" alt={currency.id} />
            <span className="font-semibold text-sm text-gray-700">
              {currency.code}
            </span>
            <Icon
              alt="arrow icon"
              src="/images/arrow-down.svg"
              className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
        {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
      </div>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 z-50 overflow-hidden overflow-y-auto max-h-62">
          <div className="p-3 border-b border-gray-100">
            <div className="relative">
              <Icon
                src="/images/search.svg"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"
                alt={"search icon"}
              />
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="w-full pl-9 pr-3 py-2 bg-gray-50 rounded-xl text-sm outline-none focus:bg-white focus:ring-1 focus:ring-[#013535]"
              />
            </div>
          </div>

          <div className="max-h-60 overflow-y-auto scrollbar-hide py-1">
            {filteredCurrencies.length > 0 ? (
              filteredCurrencies.map((filteredCurrency) => (
                <button
                  key={filteredCurrency.id}
                  onClick={() => {
                    onCurrencyChange(filteredCurrency);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center px-4 py-3 hover:bg-gray-50 transition-colors text-left group ${
                    currency?.id === filteredCurrency.id && "bg-[#F5F5F5]"
                  }`}
                >
                  <Icon
                    src={filteredCurrency.icon}
                    className="mr-3 w-5 h-5 transform group-hover:scale-110 transition-transform"
                    alt={`${filteredCurrency.name} icon`}
                  ></Icon>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-gray-800 flex items-center gap-2 uppercase">
                      {filteredCurrency.code}
                    </span>
                  </div>
                </button>
              ))
            ) : (
              <div className="p-4 text-center text-xs text-gray-400">
                No currency found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
