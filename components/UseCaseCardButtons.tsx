"use client";

interface UseCaseCardButtonsProps {
  index: number;
  useCaseName: string;
}

export default function UseCaseCardButtons({
  index,
  useCaseName,
}: UseCaseCardButtonsProps) {
  const handleLearnMoreClick = () => {
    const card = document.getElementById(`usecase-${index}`);
    if (card) {
      card.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex items-center justify-between">
      <button
        onClick={handleLearnMoreClick}
        className="text-[#2090C4] hover:text-[#1a7bb7] font-semibold"
        aria-label={`Learn more about ${useCaseName}`}
      >
        Learn More →
      </button>

      <button
        onClick={() => {
          // Keep video button in place for now
          // Will be connected to video modal later
        }}
        className="inline-flex items-center gap-2 bg-[#2090C4] text-white px-4 py-2 rounded-full text-sm font-semibold shadow hover:bg-[#1a7bb7]"
      >
        Watch
      </button>
    </div>
  );
}
