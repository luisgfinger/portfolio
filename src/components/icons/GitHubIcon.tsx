import { siGithub } from "simple-icons";

type Props = {
  darkMode: boolean;
  className?: string;
};

export function GithubIcon({ darkMode, className }: Props) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      className={className ?? "w-5 h-5"}
      fill={darkMode ? "#ffffff" : `#${siGithub.hex}`}
    >
      <path d={siGithub.path} />
    </svg>
  );
}
