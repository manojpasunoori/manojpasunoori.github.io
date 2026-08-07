import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

/** Dotted ascent-trajectory arc — the page's one signature flourish. */
function FlightPath() {
  return (
    <svg
      viewBox="0 0 320 56"
      className="mt-5 h-10 w-64 text-telemetry"
      aria-hidden="true"
    >
      <path
        d="M4 50 Q 120 46, 200 28 T 312 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="1 7"
        strokeLinecap="round"
      />
      <circle cx="312" cy="4" r="3" fill="currentColor" />
      <text
        x="4"
        y="42"
        className="fill-satellite font-[family-name:var(--font-mono)] text-[7px] tracking-[0.2em]"
      >
        T+0
      </text>
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="about" className="scroll-mt-24 pt-14 sm:pt-20">
      <div className="grid items-start gap-10 md:grid-cols-[3fr_2fr]">
        {/* Left: text */}
        <div>
          <p className="eyebrow">Aerospace software engineering</p>
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-semibold leading-tight tracking-tight text-deep-space sm:text-5xl">
            Hi, I&rsquo;m Manoj Pasunoori.
          </h1>
          <FlightPath />
          <div className="mt-6 space-y-4 text-[1.05rem] leading-relaxed text-ink">
            <p>
              I&rsquo;m a software engineer drawn to the places where code has
              to answer to physics. My work and study orbit three obsessions:{" "}
              <strong className="font-semibold text-deep-space">
                aerospace guidance systems
              </strong>
              ,{" "}
              <strong className="font-semibold text-deep-space">
                rocket propulsion algorithms
              </strong>
              , and{" "}
              <strong className="font-semibold text-deep-space">
                autonomous UAV software
              </strong>
              .
            </p>
            <p>
              What fascinates me is the discipline the domain demands. A web
              service can retry; a guidance loop running at 400&nbsp;Hz on
              ascent cannot. I study how flight software is architected to be
              deterministic, verifiable, and honest about failure — from
              closed-loop throttle control in liquid engines to state
              estimation that keeps a drone level when GPS drops out.
            </p>
            <p>
              This site is my notebook in public: the systems I&rsquo;m
              studying, the research I&rsquo;m reading, and the rooms
              I&rsquo;ve been lucky to learn in.
            </p>
          </div>
          <ul className="mt-7 flex flex-wrap items-center gap-5 text-sm">
            <li>
              <a
                href="mailto:your.email@example.com"
                className="inline-flex items-center gap-1.5 text-telemetry underline decoration-hairline underline-offset-4 transition-colors hover:decoration-telemetry"
              >
                <Mail size={15} aria-hidden="true" /> Email
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/your-handle"
                className="inline-flex items-center gap-1.5 text-telemetry underline decoration-hairline underline-offset-4 transition-colors hover:decoration-telemetry"
              >
                <LinkedinIcon size={15} /> LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/manojpasunoori"
                className="inline-flex items-center gap-1.5 text-telemetry underline decoration-hairline underline-offset-4 transition-colors hover:decoration-telemetry"
              >
                <GithubIcon size={15} /> GitHub
              </a>
            </li>
          </ul>
        </div>

        {/* Right: profile photo */}
        <figure className="md:pt-2">
          <img
            src="/images/profile.jpg"
            alt="Manoj Pasunoori standing in front of a modern glass building"
            className="w-full rounded-md border border-hairline object-cover shadow-sm"
          />
          <figcaption className="eyebrow mt-3 text-center">
            Arlington, Texas
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
