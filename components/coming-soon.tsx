import React from "react";

interface ComingSoonProps {
  featureName: string;
}

export const ComingSoon = ({ featureName }: ComingSoonProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-8 px-2 text-center animate-in fade-in duration-500 w-full">
      <h2 className="text-3xl font-bold text-[#013535] mb-2">Coming Soon!</h2>

      <p className="text-gray-600 font-medium text-lg">
        {featureName} is almost here.
      </p>

      <p className="text-gray-500 text-sm mb-8 mt-1">
        Enter your email and we'll let you know the moment it's live.
      </p>

      <div className="w-full text-left">
        <label className="block text-[#013535] text-sm font-bold mb-2 pl-1">
          Email
        </label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-4 border border-gray-200 rounded-[30px] bg-white text-gray-900 placeholder-gray-400 outline-none focus:border-[#013535] focus:ring-1 focus:ring-[#013535] transition-all"
        />
      </div>

      <button className="w-full mt-8 bg-[#013535] hover:bg-[#024444] text-white font-bold py-4 rounded-[30px] shadow-lg hover:shadow-xl transition-all duration-300 transform active:scale-[0.99]">
        Update me
      </button>
    </div>
  );
};
