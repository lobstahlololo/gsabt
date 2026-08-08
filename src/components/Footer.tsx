const LINKS = [
  { href: "#features", label: "Features" },
  { href: "#how", label: "How it works" },
  { href: "#play", label: "Play & earn" },
  { href: "#faq", label: "FAQ" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#0d090b]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-start md:justify-between md:text-left">
          <div className="max-w-xs">
            <a href="#top" className="font-script text-3xl leading-none text-white">
              GlycoSnap
            </a>
            <p className="mt-3 text-sm font-medium text-ink-soft">
              Know your plate. Know your glucose.
            </p>
            <p className="mt-1.5 text-xs text-white/40">
              The AI food tracker built for people managing diabetes.
            </p>
          </div>

          <nav className="flex flex-col gap-2.5 text-sm font-medium">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-ink-soft transition-colors hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://github.com/lobstahlololo/gsabt"
              className="text-ink-soft transition-colors hover:text-white"
            >
              GitHub ↗
            </a>
          </nav>

          <div className="max-w-sm text-xs leading-relaxed text-white/40">
            <p className="font-semibold uppercase tracking-[0.16em] text-ink-soft">Health note</p>
            <p className="mt-2">
              GlycoSnap is a tracking and educational tool, not a medical device. Always discuss your
              numbers and treatment changes with your care team.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs font-medium text-white/40 sm:flex-row">
          <p>© 2026 GlycoSnap. Grown with care, one plate at a time.</p>
          <p className="flex items-center gap-2">
            <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-inrange" />
            Know your plate. Know your glucose.
          </p>
        </div>
      </div>
    </footer>
  );
}
