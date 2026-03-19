import nextButton from "../../assets/icons/next-button.svg";

interface NextButtonProps {
  onClick: () => void;
  isPrevious?: boolean;
  controlsId?: string;
}

export function NextButton({
  onClick,
  isPrevious = false,
  controlsId,
}: NextButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isPrevious ? "Projeto anterior" : "Próximo projeto"}
      aria-controls={controlsId}
      className="w-10 h-10 hidden md:block"
    >
      <img
        src={nextButton}
        alt=""
        aria-hidden="true"
        className={`w-full h-full ${isPrevious ? "scale-x-[-1]" : ""}`}
      />
    </button>
  );
}
