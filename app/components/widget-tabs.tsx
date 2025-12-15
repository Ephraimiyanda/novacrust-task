import React from "react";
import { TabType } from "../types";

interface WidgetTabsProps {
  activeTab: TabType;
  onChange: (tab: TabType) => void;
}

export const WidgetTabs = ({ activeTab, onChange }: WidgetTabsProps) => {
  return (
    <div className="flex justify-center mb-6 ">
      <div className="bg-gray-100 p-1 rounded-full flex space-x-1 ">
        <TabButton
          label="Crypto to cash"
          isActive={activeTab === "crypto-cash"}
          onClick={() => onChange("crypto-cash")}
        />
        <TabButton
          label="Cash to crypto"
          isActive={activeTab === "cash-crypto"}
          onClick={() => onChange("cash-crypto")}
        />
        <TabButton
          label="Crypto to fiat loan"
          isActive={activeTab === "crypto-loan"}
          onClick={() => onChange("crypto-loan")}
        />
      </div>
    </div>
  );
};

const TabButton = ({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`
      px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 cursor-pointer
      ${
        isActive
          ? "bg-[#013535] text-white shadow-md"
          : "bg-transparent text-gray-500 hover:text-gray-900"
      }
    `}
  >
    {label}
  </button>
);
