import { useEffect, useState } from "react";
import { BurgerMenu } from "../buttons/BurgerMenu";
import { ToogleTheme } from "../buttons/ToogleTheme";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

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

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`
      fixed top-0 left-0 w-full z-50
      transition-transform duration-300
      ${showNavbar ? "translate-y-0" : "-translate-y-full"}
      border-b border-[var(--border-color)]/20
      bg-[var(--surface)]
      `}
    >
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
          <a href="#skills" className="hover:text-[var(--text-primary)]">
            Habilidades
          </a>

          <a href="#contact" className="hover:text-[var(--text-primary)]">
            Contato
          </a>
        </nav>

        <span className="flex items-center gap-2">
          <ToogleTheme
            darkTheme={darkMode}
            onClick={() => setDarkMode((prev) => !prev)}
          />
          <BurgerMenu
            darkTheme={darkMode}
            onClick={() => setMenuOpen((prev) => !prev)}
          />
        </span>
      </div>

      {menuOpen && (
        <nav className="border-t border-[var(--border-color)] md:hidden">
          <div className="flex flex-col gap-4 p-4 items-center">
            <a href="#home" onClick={() => setMenuOpen((prev) => !prev)}>Home</a>
            <a href="#about" onClick={() => setMenuOpen((prev) => !prev)}>Sobre</a>
            <a href="#projects" onClick={() => setMenuOpen((prev) => !prev)}>Projetos</a>
            <a href="#skills" onClick={() => setMenuOpen((prev) => !prev)}>Habilidades</a>
            <a href="#contact" onClick={() => setMenuOpen((prev) => !prev)}>Contato</a>
          </div>
        </nav>
      )}
    </header>
  );
}
