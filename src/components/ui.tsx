import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

/* ---------- Reveal on scroll ---------- */

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            io.unobserve(el);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}

/* ---------- Decorative rules ---------- */

function RuleLine({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 140 12"
      className={`h-3 w-16 text-white/40 sm:w-28 ${flip ? "-scale-x-100" : ""}`}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 3 Q 18 0.5 36 3 T 72 3 T 108 3 T 138 3"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M2 9 Q 18 6.5 36 9 T 72 9 T 108 9 T 138 9"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DoubleRule({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <RuleLine />
      <span className="h-2 w-2 rounded-full bg-clay shadow-[0_0_12px_rgb(224_137_95_/_0.8)]" />
      <RuleLine flip />
    </div>
  );
}

/* ---------- Section label ---------- */

export function SectionLabel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/55 ${className}`}
    >
      <span className="h-px w-7 bg-gradient-to-r from-transparent to-white/50" />
      {children}
      <span className="h-px w-7 bg-gradient-to-l from-transparent to-white/50" />
    </p>
  );
}

/* ---------- CTA links ---------- */

export function CtaLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300";
  const styles =
    variant === "primary"
      ? "bg-white text-[#0a0608] button-glow hover:bg-white/90"
      : "border border-white/15 text-white/80 hover:border-white/40 hover:text-white";
  return (
    <a href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </a>
  );
}

/* ---------- Film grain layer ---------- */

export function Paper({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 grain opacity-[0.04] ${className}`}
    />
  );
}
