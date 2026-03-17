import { GithubIcon } from "../icons/GitHubIcon";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  video?: string;
  image?: string;
  title: string;
  description: string;
  stacks: string[];
  gitHubLink?: string;
  live?: string;
}

export function ProjectCard({
  video,
  image,
  title,
  description,
  stacks,
  gitHubLink,
  live,
}: ProjectCardProps) {
  return (
    <div className="md:max-w-2xl h-4xl flex flex-col overflow-hidden items-center bg-[var(--surface)] rounded-xl border border-[var(--border-color)]">
      <div className="h-[200px] md:h-[360px] w-full overflow-hidden flex items-center justify-center shrink-0">
        {video ? (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-fill"
          />
        ) : (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        )}
      </div>

      <div className="py-4 md:py-6 px-6 flex flex-col items-center overflow-hidden h-full">
        <h3>{title}</h3>
        <p className="text-justify">{description}</p>

        <div className="flex flex-col items-center mt-auto">
          <div className="pt-6 flex flex-wrap gap-2 justify-center">
            {stacks.map((stack, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs rounded bg-[var(--background)]"
              >
                {stack}
              </span>
            ))}
          </div>

          <div className="flex flex-row pt-6 gap-4">
            {gitHubLink && (
              <a
                href={gitHubLink}
                className="flex items-center gap-1"
                target="_blank"
                rel="noreferrer"
              >
                <GithubIcon />
                Github
              </a>
            )}

            {live && (
              <a
                href={live}
                className="flex items-center gap-1"
                target="_blank"
                rel="noreferrer"
              >
                <ExternalLink className="w-5 h-5" />
                Página
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
