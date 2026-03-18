import { useEffect, useState } from "react";
import { getInitialTheme, applyTheme } from "../utils/theme";

export function useTheme() {
  const [darkMode, setDarkMode] = useState<boolean>(getInitialTheme);

  useEffect(() => {
    applyTheme(darkMode);
  }, [darkMode]);

  function toggleTheme() {
    setDarkMode((prev) => !prev);
  }

  return {
    darkMode,
    toggleTheme,
  };
}