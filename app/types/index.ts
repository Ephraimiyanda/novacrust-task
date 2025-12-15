import React from "react";

export type TabType = "crypto-cash" | "cash-crypto" | "crypto-loan";

export interface Currency {
  id: string;
  code: string;
  name: string;
  icon: string;
  type: "crypto" | "fiat";
}

export interface WalletOption {
  id: string;
  name: string;
  icon: string;
  description?: string;
}

export interface CurrencyInputProps {
  label: string;
  amount: string;
  currency: Currency;
  onAmountChange: (val: string) => void;
  onCurrencyChange: (currency: Currency) => void;
  availableCurrencies: Currency[];
  readOnlyAmount?: boolean;
  error?: string;
  disabled?: boolean;
}

export interface SelectFieldProps {
  label: string;
  value: WalletOption | null;
  placeholder: string;
  options: WalletOption[];
  onChange: (option: WalletOption) => void;
  error?: string;
  disabled?: boolean;
}
