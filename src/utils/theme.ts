export function getInitialTheme(): boolean {
  if (typeof window === "undefined") return false;

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    return savedTheme === "dark";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export function applyTheme(darkMode: boolean): void {
  if (typeof window === "undefined") return;

  const root = document.documentElement;

  if (darkMode) {
    root.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    root.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}