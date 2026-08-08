import { Reveal, SectionLabel } from "./ui";

const FEATURES = [
  {
    emoji: "📸",
    title: "AI meal analysis",
    text: "Upload a photo or type a description and get instant estimates of calories, net carbs, protein, fat, sugar, and glycemic load — Low, Medium, or High. iPhone HEIC photos are converted automatically.",
  },
  {
    emoji: "📈",
    title: "Glucose tracking",
    text: "Log blood sugar readings (mg/dL) with optional notes and watch them on a live trend chart with the 70–180 target band shaded in — meals appear as 🍽️ markers, so spikes line up with what you ate.",
  },
  {
    emoji: "🧬",
    title: "Estimated A1c & time-in-range",
    text: "Your last 30 days of readings become an estimated A1c via the ADAG formula, plus time-in-range, above, and below percentages, event counts, and a confidence score based on how much data you have.",
  },
  {
    emoji: "💡",
    title: "AI insights & trends",
    text: "Recent readings color-coded by range — red high, blue low, green in range — alongside an AI-written summary of your meal-vs-glucose patterns with practical tips for next time.",
  },
  {
    emoji: "📜",
    title: "History log",
    text: "Every analyzed meal is archived with its calories, net carbs, and glycemic load badge — with a daily total at a glance, so you always know where your day stands.",
  },
  {
    emoji: "🔌",
    title: "Device sync",
    text: "Import CSV exports from Dexcom, FreeStyle Libre, Accu-Chek, OneTouch, or any generic meter — mmol/L values are auto-converted to mg/dL, sharpening your A1c estimate and doctor-ready reports.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative scroll-mt-20 py-20 sm:py-28">
      <div
        aria-hidden
        className="absolute right-[-10%] top-32 h-[26rem] w-[26rem] rounded-full bg-sky/[0.06] blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionLabel>What you get</SectionLabel>
          <h2 className="mt-5 font-display text-3xl tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            Six tools, one app that finally{" "}
            <em className="italic text-clay">connects the dots</em>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            Everything you need to understand your meals and your numbers — designed to feel calm,
            not clinical.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 90}>
              <article className="liquid-glass group h-full rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_44px_rgb(127_176_224_/_0.08)]">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-sky/30 bg-sky/[0.14] text-2xl transition-transform duration-300 group-hover:scale-110">
                  {f.emoji}
                </span>
                <h3 className="mt-5 font-display text-xl tracking-tight text-ink">{f.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">{f.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
