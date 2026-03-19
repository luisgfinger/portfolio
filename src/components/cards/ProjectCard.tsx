import { useId } from "react";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "../icons/GitHubIcon";

interface ProjectCardProps {
  video?: string;
  image?: string;
  title: string;
  description: string;
  stacks: string[];
  gitHubLink?: string;
  live?: string;
  darkMode: boolean;
}

export function ProjectCard({
  video,
  image,
  title,
  description,
  stacks,
  gitHubLink,
  live,
  darkMode,
}: ProjectCardProps) {
  const titleId = useId();

  return (
    <article
      aria-labelledby={titleId}
      className="md:max-w-2xl h-4xl flex flex-col overflow-hidden items-center bg-[var(--surface)] rounded-xl border border-[var(--border-color)]"
    >
      <figure className="h-[200px] md:h-[340px] w-full overflow-hidden flex items-center justify-center shrink-0">
        {video ? (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            aria-label={`Demonstração do projeto ${title}`}
            className="w-full h-full object-fill"
          />
        ) : (
          <img
            src={image}
            alt={`Prévia do projeto ${title}`}
            className="w-full h-full object-cover"
          />
        )}
      </figure>

      <div className="py-4 md:py-6 px-6 flex flex-col items-center overflow-hidden h-full">
        <header className="flex flex-col items-center">
          <h3 id={titleId}>{title}</h3>
        </header>
        <p className="text-justify">{description}</p>

        <footer className="flex flex-col items-center mt-auto">
          <ul className="pt-6 flex flex-wrap gap-2 justify-center" aria-label="Tecnologias utilizadas">
            {stacks.map((stack, index) => (
              <li
                key={`${stack}-${index}`}
                className="px-2 py-1 text-xs rounded bg-[var(--background)]"
              >
                {stack}
              </li>
            ))}
          </ul>

          <ul className="flex flex-row pt-6 gap-4" aria-label="Links do projeto">
            {gitHubLink && (
              <li>
                <a
                  href={gitHubLink}
                  className="flex items-center gap-1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GithubIcon darkMode={darkMode} />
                  GitHub
                </a>
              </li>
            )}

            {live && (
              <li>
                <a
                  href={live}
                  className="flex items-center gap-1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalLink aria-hidden="true" className="w-5 h-5" />
                  Página
                </a>
              </li>
            )}
          </ul>
        </footer>
      </div>
    </article>
  );
}
