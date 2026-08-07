import { MapPin, Calendar, Users, Newspaper, ExternalLink } from "lucide-react";

type EventItem = {
  img: string;
  alt: string;
  title: string;
  desc: string;
  place: string;
  when: string;
  kind: string;
  link?: { href: string; label: string };
};

const events: EventItem[] = [
  {
    img: "/images/event-rag-keynote.jpg",
    alt: "Keynote session with slides on vector databases and RAG",
    title: "Industry Keynote on Data & AI",
    desc: "Attending a keynote session focused on the convergence of vector databases and Retrieval-Augmented Generation (RAG).",
    place: "Dallas–Fort Worth, TX",
    when: "2024",
    kind: "Conference",
  },
  {
    img: "/images/event-materials-lab.jpg",
    alt: "Hands-on materials lab workshop with stress-testing equipment",
    title: "Aerospace Materials Lab & Collaborative Design",
    desc: "Collaborating in a hands-on workshop focused on material stress testing and CAD review for UAV prototypes.",
    place: "Arlington, TX",
    when: "2024",
    kind: "Workshop",
  },
  {
    img: "/images/event-microsoft-ai.jpg",
    alt: "Microsoft AI Tour main stage with large screens",
    title: "Microsoft AI Tour — Deep Dive",
    desc: "Exploring large-scale AI deployment strategies at the regional Microsoft AI event.",
    place: "Dallas, TX",
    when: "2024",
    kind: "Conference",
  },
  {
    img: "/images/event-snowflake.jpg",
    alt: "Snowflake World Tour Dallas keynote stage",
    title: "Snowflake World Tour",
    desc: "Analyzing modern data architecture and governance models for mission-critical systems.",
    place: "Dallas, TX",
    when: "2024",
    kind: "Data summit",
  },
  {
    img: "/images/event-commencement.jpg",
    alt: "Receiving a degree on stage at UTA commencement",
    title: "University of Texas at Arlington — Commencement",
    desc: "Formally accepting my degree and celebrating completion of academic research in software engineering.",
    place: "Globe Life Field, Arlington, TX",
    when: "2025",
    kind: "Milestone",
  },
  {
    img: "/images/event-student-senate.jpg",
    alt: "Being sworn in during a UTA Student Senate general body meeting",
    title: "Sworn in as Student Senator, College of Business",
    desc: "Taking the oath at a Student Senate general body meeting in the Student Government Chambers — featured in The Shorthorn, UTA's student publication.",
    place: "UTA, Arlington, TX",
    when: "Oct 2023",
    kind: "In the news",
    link: {
      href: "https://www.theshorthorn.com/news/student-senate-swears-in-new-officials-introduces-new-resolution/article_2d13e24a-6c36-11ee-bb35-9353b4e06cd9.html",
      label: "Read the article",
    },
  },
  {
    img: "/images/event-symposium-networking.jpg",
    alt: "Conversation with attendees at the UTA Business Analytics Symposium",
    title: "UTA Business Analytics Symposium",
    desc: "Round-table discussions and poster sessions on applied analytics — trading notes with faculty and industry panelists from Ericsson and beyond.",
    place: "UTA, Arlington, TX",
    when: "Mar 2025",
    kind: "Symposium",
  },
  {
    img: "/images/event-symposium-poster.jpg",
    alt: "Poster session on digital data collection at the UTA symposium",
    title: "Symposium Poster Sessions",
    desc: "Reviewing student research on digital data collection and management — the kind of grounded systems work that scales up to telemetry pipelines.",
    place: "UTA, Arlington, TX",
    when: "Mar 2025",
    kind: "Symposium",
  },
];

export default function EventGallery() {
  return (
    <section id="gallery" className="scroll-mt-24 pt-20 sm:pt-24">
      <p className="eyebrow">Event gallery · flight log</p>
      <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-deep-space sm:text-3xl">
        Rooms I&rsquo;ve learned in
      </h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {events.map((ev) => (
          <article
            key={ev.title}
            className="group overflow-hidden rounded-md border border-hairline bg-white"
          >
            <div className="aspect-[16/10] overflow-hidden bg-panel">
              <img
                src={ev.img}
                alt={ev.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <div className="p-5">
              <p className="eyebrow flex items-center gap-1.5">
                {ev.kind === "In the news" ? (
                  <Newspaper size={12} aria-hidden="true" />
                ) : (
                  <Users size={12} aria-hidden="true" />
                )}
                {ev.kind}
              </p>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-lg font-semibold leading-snug text-deep-space">
                {ev.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink">{ev.desc}</p>
              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-satellite">
                <span className="inline-flex items-center gap-1">
                  <MapPin size={12} aria-hidden="true" /> {ev.place}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Calendar size={12} aria-hidden="true" /> {ev.when}
                </span>
              </div>
              {ev.link && (
                <a
                  href={ev.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm text-telemetry underline decoration-hairline underline-offset-4 transition-colors hover:decoration-telemetry"
                >
                  {ev.link.label}{" "}
                  <ExternalLink size={13} aria-hidden="true" />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
