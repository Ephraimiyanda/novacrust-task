"use client";
import React, { useState, useMemo } from "react";
import { CRYPTOCURRENCIES, CURRENCIES, WALLETS } from "../constants/constants";
import { Currency, WalletOption } from "../types";
import { CurrencyInput } from "./curency-input";
import { SelectField } from "./select";

interface ConversionFormProps {
  mode: "crypto-cash" | "cash-crypto";
}

interface FormErrors {
  payAmount?: string;
  payFrom?: string;
  payTo?: string;
}

export const ConversionForm: React.FC<ConversionFormProps> = ({ mode }) => {
  const [payAmount, setPayAmount] = useState("1.00");
  const [payCurrency, setPayCurrency] = useState<Currency>(CRYPTOCURRENCIES[0]);
  const [receiveCurrency, setReceiveCurrency] = useState<Currency>(
    CURRENCIES[0]
  );
  const [payFrom, setPayFrom] = useState<WalletOption | null>(null);
  const [payTo, setPayTo] = useState<WalletOption | null>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  // Mock calculation
  const receiveAmount = useMemo(() => {
    const val = parseFloat(payAmount) || 0;
    const rate = mode === "crypto-cash" ? 150000 : 0;
    return (val * rate).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }, [payAmount, mode]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!payAmount || Number(payAmount) <= 0) {
      newErrors.payAmount = "Enter a valid amount";
    }

    if (!payFrom) {
      newErrors.payFrom = "Select a payment source";
    }

    if (!payTo) {
      newErrors.payTo = "Select a destination wallet";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    try {
      setIsLoading(true);

      // Simulate API call
      await new Promise((res) => setTimeout(res, 1500));

      alert("Conversion successful");
    } catch {
      setErrors({ payAmount: "Something went wrong. Try again." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 flex flex-col gap-4 justify-center mx-auto">
      <div className="flex flex-col gap-4">
        <CurrencyInput
          label="You pay"
          amount={payAmount}
          currency={payCurrency}
          onAmountChange={setPayAmount}
          onCurrencyChange={setPayCurrency}
          availableCurrencies={CRYPTOCURRENCIES}
          disabled={isLoading}
          error={errors.payAmount}
        />

        <CurrencyInput
          label="You receive"
          amount={receiveAmount}
          currency={receiveCurrency}
          onAmountChange={() => {}}
          onCurrencyChange={setReceiveCurrency}
          availableCurrencies={CURRENCIES}
          readOnlyAmount
          disabled
        />
      </div>

      <div className="flex flex-col gap-4">
        <SelectField
          label="Pay from"
          placeholder="Select an option"
          value={payFrom}
          options={WALLETS}
          onChange={setPayFrom}
          disabled={isLoading}
          error={errors.payFrom}
        />

        <SelectField
          label="Pay to"
          placeholder="Select an option"
          value={payTo}
          options={WALLETS}
          onChange={setPayTo}
          disabled={isLoading}
          error={errors.payTo}
        />
      </div>

      <button
        onClick={handleSubmit}
        disabled={isLoading}
        className="w-full mt-8 cursor-pointer rounded-[30px] bg-[#013535] hover:bg-[#024444] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 shadow-lg transition-all duration-300 active:scale-[0.99]"
      >
        {isLoading ? "Converting..." : "Convert now"}
      </button>
    </div>
  );
};
