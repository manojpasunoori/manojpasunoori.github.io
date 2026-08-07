import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-hairline sm:mt-24">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-satellite sm:flex-row">
        <p>Manoj Pasunoori © {new Date().getFullYear()}</p>
        <ul className="flex items-center gap-5">
          <li>
            <a
              href="mailto:your.email@example.com"
              aria-label="Email"
              className="transition-colors hover:text-deep-space"
            >
              <Mail size={17} />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/your-handle"
              aria-label="LinkedIn"
              className="transition-colors hover:text-deep-space"
            >
              <LinkedinIcon size={17} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/manojpasunoori"
              aria-label="GitHub"
              className="transition-colors hover:text-deep-space"
            >
              <GithubIcon size={17} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
