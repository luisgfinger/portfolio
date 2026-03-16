import menuIcon from "../../assets/icons/burger-menu.svg";
import menuDarkIcon from "../../assets/icons/burger-menu-darkTheme.svg"

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
      <img src={darkTheme ? menuDarkIcon : menuIcon} alt="" className="w-6 h-6" />
    </button>
  );
}