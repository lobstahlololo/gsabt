import { Reveal, DoubleRule } from "./ui";

const STATS = [
  { value: "6", label: "tools in one app" },
  { value: "10 · 5", label: "badges & growth levels" },
  { value: "4", label: "diabetes profiles" },
  { value: "4+", label: "compatible devices" },
];

export default function Stats() {
  return (
    <section className="relative py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="liquid-glass rounded-3xl px-6 py-10">
            <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label}>
                  <p className="text-glow font-display text-4xl tracking-tight text-white sm:text-5xl">
                    {s.value}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-ink-soft">{s.label}</p>
                </div>
              ))}
            </div>
            <DoubleRule className="mt-9" />
            <p className="mt-4 text-center text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
              Meal analysis · glucose log · chart · A1c · insights · reports
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
