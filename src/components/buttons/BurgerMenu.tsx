import menuIcon from "../../assets/icons/burger-menu.svg";

type BurgerMenuProps = {
  onClick: () => void;
  darkTheme: boolean;
};

export function BurgerMenu({ darkTheme, onClick }: BurgerMenuProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Open menu"
      className="flex items-center justify-center p-2 md:hidden"
    >
      <img src={menuIcon} alt="" className={`w-8 h-8 ${darkTheme ? "invert brightness-200" : ""}`} />
    </button>
  );
}