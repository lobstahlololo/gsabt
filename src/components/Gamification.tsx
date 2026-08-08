import { Reveal, SectionLabel } from "./ui";

const POINTS = [
  { action: "Meal analyzed", value: "+10", emoji: "🍽️" },
  { action: "Glucose reading", value: "+5", emoji: "📉" },
  { action: "Insight earned", value: "+2", emoji: "💡" },
];

const STREAKS = [
  { label: "3-day streak", value: "+10" },
  { label: "7-day streak", value: "+25" },
  { label: "30-day streak", value: "+50" },
];

const LEVELS = [
  { emoji: "🌱", name: "Sprout", points: "0" },
  { emoji: "📒", name: "Tracker", points: "100" },
  { emoji: "🪴", name: "Steady", points: "500" },
  { emoji: "🌳", name: "Pro", points: "1,500" },
  { emoji: "🏆", name: "Champion", points: "5,000" },
];

const BADGES = [
  { emoji: "💧", name: "First Drop", how: "first reading" },
  { emoji: "👨‍🍳", name: "Chef's Hat", how: "first meal" },
  { emoji: "🔥", name: "Building Habits", how: "3-day streak" },
  { emoji: "⭐", name: "Weekly Warrior", how: "7-day streak" },
  { emoji: "🌟", name: "Monthly Maven", how: "30-day streak" },
  { emoji: "📊", name: "Data Devotee", how: "50 readings" },
  { emoji: "🧠", name: "Glucose Guru", how: "200 readings" },
  { emoji: "🎯", name: "Sweet Spot", how: "50 in range" },
  { emoji: "🏹", name: "Bullseye", how: "100 in range" },
  { emoji: "🥗", name: "Plate Pro", how: "10 meals analyzed" },
];

export default function Gamification() {
  return (
    <section id="play" className="relative scroll-mt-20 overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden
        className="absolute right-[-8%] top-24 h-[24rem] w-[24rem] rounded-full bg-honey/[0.07] blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionLabel>Play &amp; earn</SectionLabel>
          <h2 className="mt-5 font-display text-3xl tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            Logging that doesn&rsquo;t feel like <em className="italic text-clay">homework</em>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            Every action earns Insight Score, streaks stack bonus points, and your little sprout grows
            from 🌱 to 🏆 as you build the habit.
          </p>
        </Reveal>

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left: mechanics */}
          <div className="space-y-6">
            <Reveal delay={80}>
              <div className="liquid-glass rounded-3xl p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/40">
                  Earn points
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {POINTS.map((p) => (
                    <div
                      key={p.action}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-center"
                    >
                      <span className="text-2xl">{p.emoji}</span>
                      <p className="mt-1 font-display text-2xl tracking-tight text-clay">
                        {p.value}
                      </p>
                      <p className="text-xs font-semibold text-ink-soft">{p.action}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="liquid-glass rounded-3xl p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/40">
                  Streak bonuses
                </p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {STREAKS.map((s) => (
                    <span
                      key={s.label}
                      className="inline-flex items-center gap-2 rounded-full border border-honey/40 bg-honey/[0.12] px-4 py-2 text-sm font-semibold text-honey"
                    >
                      🔥 {s.label} <span className="font-bold text-clay-deep">{s.value}</span>
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Levels ladder */}
            <Reveal delay={240}>
              <div className="liquid-glass rounded-3xl p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/40">
                  Five growth levels
                </p>
                <div className="mt-4 grid gap-2 sm:grid-cols-5">
                  {LEVELS.map((l, i) => (
                    <div
                      key={l.name}
                      className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-3.5 text-center transition-colors duration-300 hover:border-white/25"
                    >
                      <span className="text-3xl">{l.emoji}</span>
                      <p className="mt-1.5 text-sm font-bold text-ink">{l.name}</p>
                      <p className="text-[11px] font-medium text-white/40">{l.points} pts</p>
                      {i < LEVELS.length - 1 && (
                        <span aria-hidden className="absolute -right-2 top-1/2 hidden -translate-y-1/2 text-white/25 sm:block">
                          ›
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: example score card */}
          <Reveal delay={200} className="lg:sticky lg:top-24">
            <div className="liquid-glass rounded-3xl p-7">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/40">
                    Insight Score
                  </p>
                  <p className="text-glow mt-2 font-display text-6xl tracking-tight text-white">
                    640
                  </p>
                </div>
                <span className="rounded-full border border-white/10 bg-white/[0.06] px-3.5 py-1.5 text-sm font-semibold text-ink">
                  🪴 Steady
                </span>
              </div>

              <div className="mt-6">
                <div className="flex justify-between text-xs font-semibold text-ink-soft">
                  <span>Steady · 500</span>
                  <span>Pro · 1,500</span>
                </div>
                <div className="mt-2 h-3 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[14%] rounded-full bg-gradient-to-r from-clay to-honey" />
                </div>
                <p className="mt-2 text-xs font-medium text-white/40">
                  Example journey — 640 of 1,500 points to Pro
                </p>
              </div>

              <div className="mt-6 space-y-2">
                {[
                  { emoji: "🍽️", label: "Lunch analyzed", pts: "+10" },
                  { emoji: "📉", label: "Reading logged", pts: "+5" },
                  { emoji: "💡", label: "New insight", pts: "+2" },
                ].map((a) => (
                  <div
                    key={a.label}
                    className="flex items-center justify-between rounded-xl bg-white/[0.04] px-4 py-2.5 text-sm"
                  >
                    <span className="font-semibold text-ink">
                      {a.emoji} {a.label}
                    </span>
                    <span className="font-bold text-sage-deep">{a.pts}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Badges */}
        <Reveal className="mt-16">
          <h3 className="text-center font-display text-2xl tracking-tight text-ink">
            Ten badges to unlock
          </h3>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {BADGES.map((b, i) => (
            <Reveal key={b.name} delay={(i % 5) * 70}>
              <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-honey/50">
                <span className="text-3xl grayscale-[0.35] transition group-hover:grayscale-0">
                  {b.emoji}
                </span>
                <p className="mt-2 text-sm font-bold text-ink">{b.name}</p>
                <p className="mt-0.5 text-[11px] font-medium text-white/40">{b.how}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
