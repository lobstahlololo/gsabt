import { useEffect, useState } from "react";

const VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260613_180732_a54afbf6-b30d-470e-861f-669871f09f67.mp4";

const LINKS = [
  { href: "#features", label: "Features" },
  { href: "#how", label: "How it works" },
  { href: "#play", label: "Play & earn" },
  { href: "#faq", label: "FAQ" },
];

const EASE = "ease-[cubic-bezier(0.22,1,0.36,1)]";

export default function Hero() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="top" className="relative h-screen min-h-[600px] overflow-hidden bg-[#071120]">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={VIDEO}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-black/20" />
      {/* blend into the next section */}
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-b from-transparent to-[#071120]" />

      {/* Fixed navbar */}
      <header className="fixed left-0 right-0 top-0 z-50">
        <nav className="flex items-center justify-between px-6 py-5 md:px-12">
          <a href="#top" className="font-script text-2xl leading-none text-white md:text-3xl">
            GlycoSnap
          </a>

          <div className="hidden items-center gap-12 md:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm tracking-wide text-white/80 transition-colors duration-200 hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="#cta"
              className="button-glow inline-block rounded-full bg-white px-8 py-3 text-sm font-medium text-black transition-all duration-300 hover:bg-white/90"
            >
              Get early access
            </a>
          </div>

          {/* Hamburger — animated to X */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[7px] md:hidden"
          >
            <span
              className={`h-[2px] w-6 rounded-full bg-white transition-all duration-300 ${EASE} ${open ? "translate-y-[9px] rotate-45" : ""}`}
            />
            <span
              className={`h-[2px] w-6 rounded-full bg-white transition-all duration-300 ${EASE} ${open ? "scale-x-0 opacity-0" : ""}`}
            />
            <span
              className={`h-[2px] w-6 rounded-full bg-white transition-all duration-300 ${EASE} ${open ? "-translate-y-[9px] -rotate-45" : ""}`}
            />
          </button>
        </nav>
      </header>

      {/* Center content */}
      <div className="absolute inset-0 flex -mt-[96px] flex-col items-center justify-center px-6 text-center sm:-mt-[120px]">
        <h1 className="text-glow font-instrument text-[36px] leading-[0.95] tracking-tight text-white md:text-7xl lg:text-[88px]">
          Know your plate.
          <br />
          <em className="italic">Know your glucose.</em>
        </h1>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-white md:mt-7 md:text-base">
          Snap a photo of your plate — or type what you ate — and GlycoSnap instantly turns your
          meals and glucose readings into clear, actionable insight. Expert nutrition and glucose
          tracking, delivered with warmth and intention.
        </p>
        <a
          href="#cta"
          className="button-glow mt-6 rounded-full bg-white px-8 py-3.5 text-sm font-medium text-black transition-all duration-300 hover:bg-white/90 md:mt-9"
        >
          Start tracking free
        </a>
        <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.26em] text-white/40 md:text-[11px]">
          AI food journal · Glucose tracker · A1c estimates
        </p>
      </div>

      {/* Sound indicator — desktop only */}
      <div className="absolute bottom-8 left-8 z-10 hidden items-center gap-3.5 md:flex">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20">
          <span className="h-[2px] w-4 rounded-full bg-white/70" />
        </div>
        <div className="text-xs leading-snug text-white/60">
          <p className="font-medium text-white/80">Experience</p>
          <p>with sound</p>
        </div>
      </div>

      {/* Mobile slide-in menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <aside
          className={`absolute right-0 top-0 flex h-full w-[85%] max-w-[340px] flex-col justify-between border-l border-white/10 bg-[#071120]/95 p-10 backdrop-blur-xl transition-transform duration-500 ${EASE} ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div>
            <a
              href="#top"
              onClick={() => setOpen(false)}
              className="font-script text-3xl leading-none text-white"
            >
              GlycoSnap
            </a>
            <nav className="mt-10 flex flex-col gap-6">
              {LINKS.map((l, i) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  style={{ transitionDelay: open ? `${150 + i * 75}ms` : "0ms" }}
                  className={`text-xl text-white/85 transition-all duration-500 ${EASE} hover:text-white ${
                    open ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
                  }`}
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
          <a
            href="#cta"
            onClick={() => setOpen(false)}
            style={{ transitionDelay: open ? "450ms" : "0ms" }}
            className={`button-glow rounded-full bg-white px-8 py-3.5 text-center text-sm font-medium text-black transition-all duration-500 ${EASE} ${
              open ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
            }`}
          >
            Get early access
          </a>
        </aside>
      </div>
    </section>
  );
}
