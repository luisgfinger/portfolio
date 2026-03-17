import { useEffect, useState } from "react";
import { BurgerMenu } from "../buttons/BurgerMenu";
import { ToogleTheme } from "../buttons/ToogleTheme";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      return savedTheme === "dark";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <header id="home" className="w-full border-b-1 border-[var(--border-color)]/20 bg-[var(--surface)]">
      <div className="container flex items-center justify-between py-4">
        <h3 className="mx-4 font-bold">Luis Gustavo</h3>

        <nav className="hidden gap-8 md:flex">
          <a href="#home" className="hover:text-[var(--text-primary)]">
            Home
          </a>

          <a href="#about" className="hover:text-[var(--text-primary)]">
            Sobre
          </a>

          <a href="#projects" className="hover:text-[var(--text-primary)]">
            Projetos
          </a>

          <a href="#contact" className="hover:text-[var(--text-primary)]">
            Contato
          </a>
        </nav>

        <span className="flex items-center gap-2">
          <ToogleTheme darkTheme={darkMode} onClick={() => setDarkMode((prev) => !prev)} />
          <BurgerMenu darkTheme={darkMode} onClick={() => setMenuOpen((prev) => !prev)} />
        </span>
      </div>

      {menuOpen && (
        <nav className="border-t border-[var(--border-color)] md:hidden">
          <div className="flex flex-col gap-4 p-4 items-center">
            <a href="#home">Home</a>
            <a href="#about">Sobre</a>
            <a href="#projects">Projetos</a>
            <a href="#contact">Contato</a>
          </div>
        </nav>
      )}
    </header>
  );
}