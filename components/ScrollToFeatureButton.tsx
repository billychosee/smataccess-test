"use client";

import { ArrowRightIcon } from "@heroicons/react/24/outline";

interface ScrollToFeatureButtonProps {
  featureId: string;
  label: string;
}

export default function ScrollToFeatureButton({
  featureId,
  label,
}: ScrollToFeatureButtonProps) {
  const handleClick = () => {
    const element = document.getElementById(featureId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="cursor-pointer text-[#2090C4] hover:text-blue-800 font-semibold flex items-center"
    >
      {label}
      <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
    </button>
  );
}
