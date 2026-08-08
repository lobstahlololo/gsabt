import Hero from "./components/Hero";
import QuoteSection from "./components/QuoteSection";
import Problem from "./components/Problem";
import Features from "./components/Features";
import Stats from "./components/Stats";
import HowItWorks from "./components/HowItWorks";
import Profiles from "./components/Profiles";
import Gamification from "./components/Gamification";
import Brand from "./components/Brand";
import Faq from "./components/Faq";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative overflow-x-clip bg-[#071120] text-ink">
      {/* Ambient backdrop — carries the ocean-blue palette down the whole page */}
      <div aria-hidden className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(110%_60%_at_50%_-10%,rgb(21_66_104_/_0.55),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(100%_60%_at_50%_115%,rgb(43_108_148_/_0.16),transparent_62%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(55%_40%_at_85%_45%,rgb(127_176_224_/_0.05),transparent_60%)]" />
      </div>
      {/* Film grain over everything — consistent cinematic texture */}
      <div aria-hidden className="pointer-events-none fixed inset-0 z-[70] grain opacity-[0.03]" />

      <div className="relative">
        <Hero />
        <QuoteSection />
        <main>
          <Problem />
          <Features />
          <Stats />
          <HowItWorks />
          <Profiles />
          <Gamification />
          <Brand />
          <Faq />
          <Cta />
        </main>
        <Footer />
      </div>
    </div>
  );
}
