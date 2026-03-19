import menuIcon from "../../assets/icons/burger-menu.svg";

type BurgerMenuProps = {
  onClick: () => void;
  darkTheme: boolean;
  isOpen: boolean;
  controlsId: string;
};

export function BurgerMenu({
  darkTheme,
  onClick,
  isOpen,
  controlsId,
}: BurgerMenuProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
      aria-expanded={isOpen}
      aria-controls={controlsId}
      className="flex items-center justify-center p-2 md:hidden"
    >
      <img
        src={menuIcon}
        alt=""
        aria-hidden="true"
        className={`w-8 h-8 ${darkTheme ? "invert brightness-200" : ""}`}
      />
    </button>
  );
}
