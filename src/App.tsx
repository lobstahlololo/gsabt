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
    <div className="relative overflow-x-clip bg-[#0a0608] text-ink">
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
  );
}
