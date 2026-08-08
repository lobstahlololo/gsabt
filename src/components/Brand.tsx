import { DoubleRule, Paper, Reveal, SectionLabel } from "./ui";

const SWATCHES = [
  { name: "Deep ocean", hex: "#071120", cls: "bg-[#071120] border-white/15" },
  { name: "Ocean blue", hex: "#7FB0E0", cls: "bg-sky" },
  { name: "Terracotta", hex: "#E0895F", cls: "bg-clay" },
  { name: "Sage", hex: "#9DB894", cls: "bg-sage" },
  { name: "Honey", hex: "#E6BD76", cls: "bg-honey" },
];

export default function Brand() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <Paper />
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[24rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky/[0.05] blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionLabel>Calm by design</SectionLabel>
          <h2 className="mt-5 font-display text-3xl tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            A quiet canvas, <em className="italic text-clay">never clinical</em>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            GlycoSnap&rsquo;s visual identity is calm and deliberately human — a contrast to cold,
            sterile health apps. A deep-navy canvas with liquid-glass panels, soft glows, and a serif
            typeface that reads like a well-set menu, not a monitor readout. Every tone stays warm —
            even the dark is never pure black.
          </p>
        </Reveal>

        <DoubleRule className="mt-10" />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal delay={80}>
            <div className="liquid-glass h-full rounded-3xl p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/40">
                The palette
              </p>
              <div className="mt-5 grid grid-cols-5 gap-3">
                {SWATCHES.map((s) => (
                  <div key={s.name} className="text-center">
                    <div
                      className={`h-16 w-full rounded-xl border ${s.cls} shadow-[0_0_20px_rgb(127_176_224_/_0.12)]`}
                    />
                    <p className="mt-2 text-[11px] font-bold text-ink">{s.name}</p>
                    <p className="text-[10px] font-medium text-white/40">{s.hex}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm leading-relaxed text-ink-soft">
                Ocean blues set the calm, terracotta warms, sage soothes, honey celebrates. Each tone
                sits on a deep-navy canvas so your numbers glow — and the whole app stays warm after
                dark.
              </p>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="flex h-full flex-col justify-center rounded-3xl border border-white/10 bg-white/[0.03] p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/40">
                The type
              </p>
              <div className="mt-5 space-y-5">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="font-instrument text-5xl leading-none text-ink">Aa</p>
                  <p className="mt-2 font-instrument text-lg text-ink">Instrument Serif</p>
                  <p className="text-xs font-medium text-white/40">
                    The editorial serif — quiet, elegant headlines
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-5xl font-semibold leading-none tracking-tight text-ink">Aa</p>
                  <p className="mt-2 text-lg font-semibold text-ink">Inter</p>
                  <p className="text-xs font-medium text-white/40">
                    The body face — precise, readable, calm
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="font-script text-5xl leading-none text-ink">Aa</p>
                  <p className="mt-2 font-script text-lg text-ink">Dancing Script</p>
                  <p className="text-xs font-medium text-white/40">
                    The logo — a handwritten, human touch
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
