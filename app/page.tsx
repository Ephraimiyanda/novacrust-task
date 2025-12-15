"use client";

import { ComingSoon } from "@/components/coming-soon";
import { ConversionForm } from "@/components/conversion-form";
import { WidgetTabs } from "@/components/widget-tabs";
import { TabType } from "@/types";
import { useState } from "react";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("crypto-cash");

  return (
    <div className="min-h-screen overflow-auto flex items-center justify-center p-4 bg-[#111]">
      <div className="w-full  bg-white rounded-4xl p-6 shadow-2xl relative min-h-150 h-full flex flex-col max-w-160  justify-center items-center">
        <WidgetTabs activeTab={activeTab} onChange={setActiveTab} />

        <div className="flex-1 mt-2 max-w-lg w-full">
          {activeTab === "crypto-cash" && <ConversionForm mode="crypto-cash" />}

          {activeTab === "cash-crypto" && (
            <ComingSoon featureName="Cash to crypto" />
          )}

          {activeTab === "crypto-loan" && (
            <ComingSoon featureName="Crypto to Fiat Loan" />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
