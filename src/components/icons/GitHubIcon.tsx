import {siGithub} from "simple-icons"

export function GithubIcon() {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      className="w-5 h-5"
      fill={`#${siGithub.hex}`}
    >
      <path d={siGithub.path} />
    </svg>
  );
}