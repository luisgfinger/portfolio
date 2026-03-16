import nightIcon from "../../assets/icons/night-theme.svg";
import lightIcon from "../../assets/icons/light-theme.svg"

type ToogleThemeProps = {
  onClick: () => void;
  darkTheme: boolean
};

export function ToogleTheme({ onClick, darkTheme }: ToogleThemeProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Set Light Theme"
      className="flex items-center justify-center p-2"
    >
      <img src={darkTheme ? lightIcon : nightIcon } alt="" className={`w-8 h-8 ${darkTheme ? "invert brightness-200" : ""}`} />
    </button>
  );
}