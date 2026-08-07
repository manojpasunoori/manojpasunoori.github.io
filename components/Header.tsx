const links = [
  { href: "#about", label: "About" },
  { href: "#research", label: "Research" },
  { href: "#gallery", label: "Event Gallery" },
  { href: "#blog", label: "Blog" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-hairline bg-paper/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-4xl items-baseline justify-between px-5 py-4">
        <a
          href="#about"
          className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-deep-space"
        >
          Manoj Pasunoori
        </a>
        <nav aria-label="Primary">
          <ul className="flex items-baseline gap-5 text-sm text-satellite sm:gap-7">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="transition-colors hover:text-deep-space"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
