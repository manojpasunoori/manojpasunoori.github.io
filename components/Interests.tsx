import { Rocket, Satellite, Plane } from "lucide-react";

const interests = [
  {
    icon: Rocket,
    title: "Rocket Propulsion & Control",
    body: "Software architecture for flight dynamics and the management of liquid and solid propulsion — closed-loop throttle control, thrust-vector actuation, engine health monitoring, and the hard-real-time schedulers that keep it all deterministic.",
  },
  {
    icon: Satellite,
    title: "Space Exploration Systems",
    body: "Mission planning software, telemetry ingestion and analysis at scale, and the deep-space communication protocols — CCSDS framing, delay-tolerant networking — that let a probe report home across light-minutes of silence.",
  },
  {
    icon: Plane,
    title: "Aerodynamics & UAVs",
    body: "Flight-simulation control laws, autonomous navigation under sensor dropout, and swarming algorithms — how dozens of small aircraft negotiate shared airspace with nothing but local state and a common protocol.",
  },
];

export default function Interests() {
  return (
    <section id="interests" className="scroll-mt-24 pt-20 sm:pt-24">
      <p className="eyebrow">Core interests</p>
      <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-deep-space sm:text-3xl">
        Three problems I keep returning to
      </h2>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {interests.map((it) => (
          <article
            key={it.title}
            className="rounded-md border border-hairline bg-panel/60 p-5 transition-colors hover:border-telemetry/40"
          >
            <it.icon
              size={22}
              strokeWidth={1.75}
              className="text-telemetry"
              aria-hidden="true"
            />
            <h3 className="mt-3 font-[family-name:var(--font-display)] text-lg font-semibold text-deep-space">
              {it.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink">{it.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
