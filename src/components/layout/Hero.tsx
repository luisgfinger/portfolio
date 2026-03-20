import BackGroundAnimation from "../animations/BackGroundAnimation";
import { ProfilePicture } from "../general/ProfilePicture";
import { GithubIcon } from "../icons/GitHubIcon";
import { Linkedin } from "lucide-react";

interface HeroProps {
  darkMode: boolean;
}

export function Hero({ darkMode }: HeroProps) {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative overflow-hidden w-full md:h-screen bg-[var(--background)] flex flex-col items-center justify-center py-16 md:pt-32 border border-[var(--border-color)]/20"
    >
      <BackGroundAnimation darkMode={darkMode} />

      <div className="relative z-10 flex flex-col items-center gap-4">
        <ProfilePicture />

        <header className="flex flex-col items-center gap-4">
          <h2 id="hero-title">Luis Gustavo Grando Finger</h2>
          <p className="text-xl">Engenheiro de Software</p>
          <p className="text-lg">Desenvolvedor Full-Stack</p>
          <p className="text-base text-center max-w-sm md:max-w-xl px-4 md:px-0">
            Desenvolvedor Full Stack focado em criar aplicações escaláveis e
            soluções em nuvem. Transformo ideias em sistemas robustos
            utilizando tecnologias modernas e arquitetura cloud.
          </p>
        </header>

        <nav aria-label="Perfis profissionais">
          <ul className="flex gap-4">
            <li>
              <a
                href="https://github.com/luisgfinger"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-blue-500/50 rounded-lg hover:opacity-90 transition-opacity shadow-md"
              >
                <GithubIcon darkMode={darkMode} />
                GitHub
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/luis-gustavo-grando-finger-497596206/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-lg hover:opacity-90 transition-opacity shadow-md"
              >
                <Linkedin aria-hidden="true" className="w-5 h-5" />
                LinkedIn
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
