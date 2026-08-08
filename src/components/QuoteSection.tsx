import { useEffect, useRef } from "react";

const RAINBOW =
  "https://soft-zoom-63098134.figma.site/_assets/v11/8d520a7515d06cbfc403d0125e3d05b1a7ccd29c.png";
const CLOUD =
  "https://soft-zoom-63098134.figma.site/_assets/v11/0d6dfd3f90b930f21726f2ed56a3320d79b7a797.png";

const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));
const lerp = (a: number, b: number, f: number) => a + (b - a) * f;

export default function QuoteSection() {
  const ref = useRef<HTMLElement>(null);
  const rainbowRef = useRef<HTMLImageElement>(null);
  const cloudLRef = useRef<HTMLImageElement>(null);
  const cloudRRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let progress = 0;
    let rainbow = 120;
    let cloudL = -200;
    let cloudR = 200;
    let cloudY = 0;
    let raf = 0;

    const apply = () => {
      if (rainbowRef.current) {
        rainbowRef.current.style.transform = `translate3d(0, ${rainbow}px, 0)`;
      }
      if (cloudLRef.current) {
        cloudLRef.current.style.transform = `translate3d(${cloudL}px, ${cloudY}px, 0)`;
        cloudLRef.current.style.opacity = String(clamp(1 - Math.abs(cloudL) / 220, 0, 1));
      }
      if (cloudRRef.current) {
        cloudRRef.current.style.transform = `translate3d(${cloudR}px, ${cloudY}px, 0) scaleX(-1)`;
        cloudRRef.current.style.opacity = String(clamp(1 - Math.abs(cloudR) / 220, 0, 1));
      }
    };

    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      progress = clamp(
        0,
        1,
        (window.innerHeight - rect.top) / (window.innerHeight + rect.height),
      );
    };

    if (reduced) {
      rainbow = -160;
      cloudL = 0;
      cloudR = 0;
      apply();
      return;
    }

    const frame = () => {
      raf = requestAnimationFrame(frame);

      const rainbowTarget = lerp(120, -160, progress);
      rainbow = lerp(rainbow, rainbowTarget, 0.06);

      cloudY = lerp(cloudY, -50 * progress, 0.04);

      const inView = progress > 0.12 && progress < 0.92;
      const t = clamp((progress - 0.12) / 0.8, 0, 1);
      cloudL = lerp(cloudL, inView ? lerp(-200, 0, t) : -200, 0.04);
      cloudR = lerp(cloudR, inView ? lerp(200, 0, t) : 200, 0.04);

      apply();
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    raf = requestAnimationFrame(frame);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      id="promise"
      ref={ref}
      className="relative h-screen min-h-[600px] overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #010A17 0%, #0A4267 30%, #20658E 60%, #6BADC4 100%)",
      }}
    >
      {/* Rainbow — drifts down then up as you scroll */}
      <img
        ref={rainbowRef}
        src={RAINBOW}
        alt=""
        aria-hidden="true"
        className="absolute inset-x-0 top-0 z-30 w-full will-change-transform"
        style={{ transform: "translate3d(0, 120px, 0)" }}
      />

      {/* Clouds — slide in from the edges, drift up */}
      <img
        ref={cloudLRef}
        src={CLOUD}
        alt=""
        aria-hidden="true"
        className="absolute bottom-[10%] left-0 z-10 hidden w-[500px] will-change-transform sm:block md:w-[650px]"
        style={{ marginLeft: "-50%", transform: "translate3d(-200px, 0, 0)", opacity: 0 }}
      />
      <img
        ref={cloudRRef}
        src={CLOUD}
        alt=""
        aria-hidden="true"
        className="absolute bottom-[15%] right-0 z-10 hidden w-[500px] will-change-transform sm:block md:w-[650px]"
        style={{ marginRight: "-75%", transform: "translate3d(200px, 0, 0) scaleX(-1)", opacity: 0 }}
      />

      {/* Quote */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-6 text-center">
        <blockquote className="max-w-4xl">
          <p className="font-instrument text-xl leading-[1.45] text-white sm:text-2xl md:text-4xl md:leading-[1.5] lg:text-[42px]">
            &ldquo;GlycoSnap was founded on a belief that managing diabetes should feel warm, not
            clinical. We pursue clear numbers, considered guidance, and lasting habits. We spend time
            learning what matters to you before recommending what serves you best — no guessing, no
            scattered notes, just support that lets you feel in control of your numbers.&rdquo;
          </p>
        </blockquote>
        <p className="mt-6 text-sm tracking-wide text-white/80 md:mt-8 md:text-base">
          The GlycoSnap team — built with care
        </p>
      </div>
    </section>
  );
}
