import { BookOpen, Clock } from "lucide-react";

export default function Blog() {
  return (
    <section id="blog" className="scroll-mt-24 pt-20 sm:pt-24">
      <div id="research" className="scroll-mt-24" aria-hidden="true" />
      <p className="eyebrow">Research blog</p>
      <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-deep-space sm:text-3xl">
        What I&rsquo;m reading and writing about
      </h2>

      <article className="mt-8 rounded-md border border-hairline bg-panel/60 p-6 sm:p-8">
        <p className="eyebrow flex items-center gap-1.5">
          <BookOpen size={12} aria-hidden="true" /> Research note · 001
        </p>
        <h3 className="mt-3 font-[family-name:var(--font-display)] text-xl font-semibold leading-snug text-deep-space sm:text-2xl">
          The Rise of Rust in Flight Control Systems: Memory Safety at Mach 3
        </h3>
        <div className="mt-4 space-y-4 text-[0.97rem] leading-relaxed text-ink">
          <p>
            For four decades, safety-critical flight software has been written
            in C and C++ under standards like DO-178C and MISRA — languages
            whose greatest liability, undefined behavior around memory, is
            managed by process rather than by the compiler. A growing body of
            research and early industry adoption asks whether Rust&rsquo;s
            ownership model can move whole classes of faults — use-after-free,
            data races, buffer overruns — from &ldquo;caught in review, we
            hope&rdquo; to &ldquo;rejected at compile time.&rdquo;
          </p>
          <p>
            The open problems are exactly where it gets interesting. Formal
            verification toolchains for Rust (Kani, Prusti, Verus) are young
            compared to decades of C-oriented static analysis, and certifying a
            new compiler under avionics standards is a multi-year effort —
            though qualified toolchains like Ferrocene have begun clearing that
            path. Hard real-time constraints raise their own questions: a
            guidance loop cannot tolerate unpredictable latency, so allocation
            strategy, panic behavior, and worst-case execution timing all have
            to be re-argued in Rust&rsquo;s terms. This note surveys the
            current literature, the early flight heritage, and what a credible
            migration path for legacy C++ control code might look like.
          </p>
        </div>
        <div className="mt-5 flex items-center gap-4 text-xs text-satellite">
          <span className="inline-flex items-center gap-1">
            <Clock size={12} aria-hidden="true" /> 12 min read
          </span>
          <span>Full post coming soon</span>
        </div>
      </article>
    </section>
  );
}
