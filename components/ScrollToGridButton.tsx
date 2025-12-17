"use client";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import React from "react";

export default function ScrollToGridButton() {
  return (
    <button
      onClick={() =>
        document.getElementById("use-cases-grid")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        })
      }
      className="cursor-pointer bg-white text-[#2090C4] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center mx-auto"
    >
      Explore Use Cases
      <ArrowRightIcon className="w-5 h-5 ml-2" />
    </button>
  );
}
