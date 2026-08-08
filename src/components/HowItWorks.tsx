import { Reveal, SectionLabel } from "./ui";

const STEPS = [
  {
    num: "01",
    emoji: "📸",
    title: "Snap or type",
    text: "Take a photo of your meal — even HEIC straight from an iPhone — or simply type what you ate.",
  },
  {
    num: "02",
    emoji: "✨",
    title: "AI analyzes it",
    text: "Gemini estimates the nutrition and flags the glycemic load, so you instantly know what this meal means for your blood sugar.",
  },
  {
    num: "03",
    emoji: "🔁",
    title: "Track the response",
    text: "Log your reading 1–2 hours later. GlycoSnap connects the dots on the trend chart, refines your A1c estimate, and gives you tips for next time.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionLabel>How it works</SectionLabel>
          <h2 className="mt-5 font-display text-3xl tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            From plate to pattern in{" "}
            <em className="italic text-clay">three small steps</em>
          </h2>
        </Reveal>

        <div className="relative mt-14 grid gap-10 lg:grid-cols-3 lg:gap-8">
          <div
            aria-hidden
            className="absolute left-[16%] right-[16%] top-10 hidden border-t border-dashed border-white/15 lg:block"
          />
          {STEPS.map((s, i) => (
            <Reveal key={s.num} delay={i * 120}>
              <div className="relative flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="liquid-glass flex h-16 w-16 items-center justify-center rounded-2xl text-3xl">
                  {s.emoji}
                </div>
                <p className="mt-5 font-display text-4xl tracking-tight text-white/15">{s.num}</p>
                <h3 className="mt-1 font-display text-2xl tracking-tight text-ink">{s.title}</h3>
                <p className="mt-2.5 max-w-sm text-sm leading-relaxed text-ink-soft">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
