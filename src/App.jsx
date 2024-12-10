import "./App.css";
import { BentoGrid } from "./components/BentoGrid";
import { FeatureLine } from "./components/FeatureLine";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import { PriceSection } from "./components/PriceSection";
import { QuestionSection } from "./components/QuestionSection";
import { StepCard } from "./components/StepCard";
import { Testimonials } from "./components/Testimonials";

function App() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Navbar />
        <main>
          <HeroSection />
          <StepCard />
          <BentoGrid />
          <FeatureLine />
          <Testimonials />
          <PriceSection />
          <QuestionSection />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
