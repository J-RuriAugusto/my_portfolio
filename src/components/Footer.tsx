import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { PROFILE } from "../data/site";

export function Footer() {
  return (
    <footer className="border-t border-line px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-sm text-ink-soft sm:flex-row sm:justify-between">
        <p>Made with care using React &amp; Tailwind</p>

        <div className="flex items-center gap-5">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-primary"
          >
            <FiGithub size={18} />
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-primary"
          >
            <FiLinkedin size={18} />
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            aria-label="Email"
            className="transition-colors hover:text-primary"
          >
            <FiMail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
