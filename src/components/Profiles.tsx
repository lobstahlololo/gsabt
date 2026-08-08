import { Reveal, SectionLabel } from "./ui";

const PROFILES = [
  { emoji: "💉", type: "Type 1", range: "80–180 mg/dL", a1c: "~6.5%" },
  { emoji: "🩸", type: "Type 2", range: "80–180 mg/dL", a1c: "~7.0%" },
  {
    emoji: "🤰",
    type: "Gestational",
    range: "63–140 mg/dL",
    a1c: "~6.0%",
    note: "stricter, for fetal safety",
  },
  { emoji: "🧪", type: "Prediabetes", range: "70–140 mg/dL", a1c: "~5.7%" },
];

export default function Profiles() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden
        className="absolute left-[-8%] top-1/3 h-[24rem] w-[24rem] rounded-full bg-clay/[0.06] blur-3xl"
      />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionLabel>Personalized by diabetes type</SectionLabel>
          <h2 className="mt-5 font-display text-3xl tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            Targets that fit <em className="italic text-clay">your</em> profile
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            GlycoSnap adapts its target band, time-in-range, and guidance to how you manage — Type 1,
            Type 2, Gestational, or Prediabetes.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="liquid-glass mt-12 overflow-hidden rounded-3xl">
            <div className="grid grid-cols-[1fr_1.1fr_0.8fr] gap-2 border-b border-white/10 bg-white/[0.04] px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/40 sm:grid-cols-[0.9fr_1.2fr_0.8fr]">
              <span>Type</span>
              <span>Daytime target range</span>
              <span className="text-right">A1c target</span>
            </div>
            {PROFILES.map((p) => (
              <div
                key={p.type}
                className="group grid grid-cols-[1fr_1.1fr_0.8fr] items-center gap-2 border-b border-white/5 px-6 py-4.5 transition-colors last:border-0 hover:bg-white/[0.04] sm:grid-cols-[0.9fr_1.2fr_0.8fr]"
              >
                <span className="flex items-center gap-2.5 font-semibold text-ink">
                  <span className="text-lg">{p.emoji}</span>
                  {p.type}
                </span>
                <span className="font-display text-lg tracking-tight text-ink-soft">
                  {p.range}
                  {p.note && (
                    <span className="ml-2 hidden font-sans text-[11px] font-medium normal-case text-white/40 lg:inline">
                      {p.note}
                    </span>
                  )}
                </span>
                <span className="text-right font-display text-lg tracking-tight text-clay">
                  {p.a1c}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-4 text-center text-xs font-medium text-white/40">
            Targets shown are general education guidance — your care team sets the numbers that are
            right for you.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
