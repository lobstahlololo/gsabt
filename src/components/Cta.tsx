import { CtaLink, DoubleRule } from "./ui";

export default function Cta() {
  return (
    <section id="cta" className="relative scroll-mt-20 overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[30rem] w-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.07] blur-3xl"
      />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <DoubleRule />
        <h2 className="mt-8 font-display text-4xl tracking-tight text-ink sm:text-5xl lg:text-[3.4rem] lg:leading-[1.06]">
          Start seeing the pattern in your <em className="italic text-clay">plate</em>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
          GlycoSnap&rsquo;s tracker is in active development — this page is the home for what&rsquo;s
          coming. Follow the build, watch it grow, and be first to know when the app is ready.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <CtaLink href="https://github.com/lobstahlololo/gsabt" className="text-base">
            Follow the build on GitHub
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17 17 7M9 7h8v8" />
            </svg>
          </CtaLink>
          <CtaLink href="#features" variant="ghost" className="text-base">
            Revisit the features
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
