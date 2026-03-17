import nextButton from "../../assets/icons/next-button.svg";

interface NextButtonProps {
  onClick: () => void;
  isPrevious?: boolean;
}

export function NextButton({ onClick, isPrevious = false }: NextButtonProps) {
  return (
    <button onClick={onClick} className="w-10 h-10 hidden md:block">
      <img
        src={nextButton}
        alt={isPrevious ? "previous" : "next"}
        className={`w-full h-full ${isPrevious ? "scale-x-[-1]" : ""}`}
      />
    </button>
  );
}