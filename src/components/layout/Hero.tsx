import { ProfilePicture } from "../general/ProfilePicture"
import { GithubIcon } from "../icons/GitHubIcon";
import {Linkedin} from "lucide-react"

export function Hero() {

  return (
    <section className="w-full md:h-screen bg-[var(--background)] flex flex-col items-center py-16 border-1 border-[var(--border-color)]/20">
      <div className="flex flex-col items-center gap-4">
        <ProfilePicture />
        <h2>Luis Gustavo Grando Finger</h2>
        <p className="text-xl">Engenheiro de Software</p>
        <p className="text-lg">Desenvolvedor Full-Stack</p>
        <p className="text-base text-center max-w-sm md:max-w-xl px-4 md:px-0">Desenvolvedor Full Stack focado em criar aplicações escaláveis e soluções em nuvem. 
          Transformo ideias em sistemas robustos utilizando tecnologias modernas e arquitetura cloud.
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/luisgfinger"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-blue-500/50 rounded-lg hover:opacity-90 transition-opacity shadow-md"
          >
            <GithubIcon />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/luis-gustavo-grando-finger-497596206/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-lg hover:opacity-90 transition-opacity shadow-md"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}