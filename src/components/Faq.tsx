import { useState } from "react";
import { Reveal, SectionLabel } from "./ui";

const FAQS = [
  {
    q: "Is this medical advice?",
    a: "No — GlycoSnap is a tracking and educational tool, not a medical device. Always discuss your numbers and any treatment changes with your care team.",
  },
  {
    q: "What does the A1c estimate mean?",
    a: "It's an estimate based on the ADAG formula applied to your logged readings — not a lab result. The more readings you log or import, the more confident the estimate becomes, and the app shows a low, moderate, or high confidence badge to match.",
  },
  {
    q: "Which devices can I sync?",
    a: "Any CSV export works — Dexcom, FreeStyle Libre, Accu-Chek, OneTouch, plus generic meters and monitors. mmol/L values are converted to mg/dL automatically on import.",
  },
  {
    q: "Do I need a special camera?",
    a: "No — standard phone photos work great. iPhone HEIC photos are converted automatically before analysis.",
  },
  {
    q: "Where does my data live?",
    a: "In the current build, everything is stored locally on your device — nothing is uploaded or shared. Cloud sync and account backup are on the roadmap.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal className="text-center">
          <SectionLabel>Questions, answered</SectionLabel>
          <h2 className="mt-5 font-display text-3xl tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            Good to <em className="italic text-clay">know</em>
          </h2>
        </Reveal>

        <div className="mt-12 space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 60}>
                <div
                  className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                    isOpen
                      ? "border-white/25 bg-white/[0.06]"
                      : "border-white/10 bg-white/[0.03] hover:border-white/20"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-4.5 text-left"
                  >
                    <span className="font-display text-lg tracking-tight text-ink">{f.q}</span>
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-sm transition-all duration-300 ${
                        isOpen
                          ? "rotate-45 border-white bg-white text-[#0a0608]"
                          : "border-white/20 text-white/60"
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm leading-relaxed text-ink-soft">{f.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
