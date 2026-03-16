import { ProfilePicture } from "../general/ProfilePicture"

import {Github, Linkedin} from "lucide-react";

export function Hero() {

  return (
    <section id="home" className="h-screen w-full border-b border-[var(--border-color)] bg-[var(--background)] flex flex-col items-center py-8">
      <div className="flex flex-col items-center gap-4 max-w-xl">
        <ProfilePicture />
        <h2>Luis Gustavo Grando Finger</h2>
        <p className="text-xl">Engenheiro de Software</p>
        <p className="text-lg">Desenvolvedor Full-Stack</p>
        <p className="text-base text-center">Desenvolvedor Full Stack focado em criar aplicações escaláveis e soluções em nuvem. 
          Transformo ideias em sistemas robustos utilizando tecnologias modernas e arquitetura cloud.
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/luisgfinger"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-blue-500 rounded-lg hover:opacity-90 transition-opacity shadow-md"
          >
            <Github className="w-5 h-5" />
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