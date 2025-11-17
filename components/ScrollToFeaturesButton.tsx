"use client";

import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function ScrollToFeaturesButton() {
  const handleClick = () => {
    const featuresSection = document.getElementById("features-section");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="cursor-pointer bg-white text-[#2090C4] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center"
    >
      View All Features
      <ArrowRightIcon className="w-5 h-5 ml-2" />
    </button>
  );
}
