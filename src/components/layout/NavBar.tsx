import { useEffect, useState } from "react";
import { BurgerMenu } from "../buttons/BurgerMenu";
import { ToogleTheme } from "../buttons/ToogleTheme";

type NavbarProps = {
  darkMode: boolean;
  toggleTheme: () => void;
};

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "Sobre" },
  { href: "#projects", label: "Projetos" },
  { href: "#skills", label: "Habilidades" },
  { href: "#contact", label: "Contato" },
];

export function Navbar({ darkMode, toggleTheme }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const mobileNavigationId = "mobile-navigation";

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

  function handleCloseMenu() {
    setMenuOpen(false);
  }

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
        <a href="#home" className="mx-4 font-bold text-[var(--text-primary)]">
          Luis Gustavo
        </a>

        <nav aria-label="Navegação principal" className="hidden md:block">
          <ul className="flex gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-[var(--text-primary)]">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ToogleTheme darkTheme={darkMode} onClick={toggleTheme} />
          <BurgerMenu
            darkTheme={darkMode}
            isOpen={menuOpen}
            controlsId={mobileNavigationId}
            onClick={() => setMenuOpen((prev) => !prev)}
          />
        </div>
      </div>

      <nav
        id={mobileNavigationId}
        aria-label="Navegação principal móvel"
        className={`border-t border-[var(--border-color)] md:hidden ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-4 p-4 items-center">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={handleCloseMenu}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
