import { Linkedin } from "lucide-react";
import emailIcon from "../../assets/icons/email-icon.svg";
import { GithubIcon } from "../icons/GitHubIcon";

export function Contact() {
  return (
    <section id="contact">
      <div className="w-full bg-[var(--background)] flex flex-col items-center py-16 gap-6">
        <h2 className="text-3xl font-bold">Contato</h2>

        <div className="w-[90%] max-w-4xl bg-[var(--surface)] flex flex-col items-center rounded-xl p-6 gap-6">
          <p className="text-lg text-justify">
            Estou sempre interessado em novas oportunidades e colaborações.
            Fique à vontade para entrar em contato!
          </p>
          <a
            href="https://github.com/luisgfinger"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[var(--background)] rounded-xl flex items-center p-4 gap-3 md:pl-8 
            hover:scale-[1.02] hover:opacity-90 transition-all duration-200 cursor-pointer"
          >
            <div className="w-6 h-6">
              <GithubIcon />
            </div>
            <p>github.com/luisgfinger</p>
          </a>
          <a
            href="https://www.linkedin.com/in/luis-gustavo-grando-finger-497596206/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[var(--background)] rounded-xl flex items-center p-4 gap-3 md:pl-8 
            hover:scale-[1.02] hover:opacity-90 transition-all duration-200 cursor-pointer"
          >
            <div className="w-6 h-6">
              <Linkedin />
            </div>
            <p>linkedin.com/in/luis-gustavo-grando-finger</p>
          </a>

          <a
            href="mailto:luisgfinger@gmail.com"
            className="w-full bg-[var(--background)] rounded-xl flex items-center p-4 gap-3 md:pl-8 
            hover:scale-[1.02] hover:opacity-90 transition-all duration-200 cursor-pointer"
          >
            <div className="w-6 h-6">
              <img src={emailIcon} alt="email" className="w-full h-full" />
            </div>
            <p>luisgfinger@gmail.com</p>
          </a>
        </div>
      </div>
    </section>
  );
}