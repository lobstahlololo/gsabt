import { Reveal, SectionLabel } from "./ui";

const PAINS = [
  {
    emoji: "✍️",
    title: "Carb counting is tedious",
    text: "Estimating carbs by eye is slow, and small mistakes add up across every meal.",
  },
  {
    emoji: "🤷",
    title: "Guessing at nutrition",
    text: "Most people either guess at portion sizes or skip logging entirely because it feels hopeless.",
  },
  {
    emoji: "📱📱📱",
    title: "Scattered across three apps",
    text: "One app for meals, one for glucose, one for notes — none of them connect the dots.",
  },
];

const WINS = [
  {
    emoji: "🧮",
    title: "AI does the nutrition math",
    text: "Snap a plate or type a description — calories, net carbs, protein, fat, and glycemic load appear instantly.",
  },
  {
    emoji: "📈",
    title: "Meals and glucose, one timeline",
    text: "Readings plotted against your meals, so spikes line up with exactly what you ate.",
  },
  {
    emoji: "🗣️",
    title: "Plain-English, personal tips",
    text: "GlycoSnap reads your pattern and turns it into practical guidance you can actually use.",
  },
];

export default function Problem() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[28rem] w-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-clay/[0.07] blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionLabel>Why GlycoSnap</SectionLabel>
          <h2 className="mt-5 font-display text-3xl tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            Two hard jobs, one simple loop
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            Managing diabetes means constantly juggling what you eat and how your blood sugar
            responds. GlycoSnap connects them so you see the cause and effect — and logging stops
            feeling like homework.
          </p>
        </Reveal>

        <div className="relative mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal delay={80}>
            <div className="liquid-glass h-full rounded-3xl p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/40">
                The problem
              </p>
              <ul className="mt-6 space-y-6">
                {PAINS.map((p) => (
                  <li key={p.title} className="flex gap-4">
                    <span className="mt-0.5 text-xl">{p.emoji}</span>
                    <div>
                      <p className="font-semibold text-ink">{p.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-ink-soft">{p.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="relative h-full overflow-hidden rounded-3xl border border-clay/25 bg-clay/[0.08] p-7">
              <div
                aria-hidden
                className="absolute -top-20 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-clay/20 blur-3xl"
              />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-clay-deep">
                  The solution
                </p>
                <ul className="mt-6 space-y-6">
                  {WINS.map((w) => (
                    <li key={w.title} className="flex gap-4">
                      <span className="mt-0.5 text-xl">{w.emoji}</span>
                      <div>
                        <p className="font-semibold text-ink">{w.title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-ink-soft">{w.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
