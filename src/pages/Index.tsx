import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Features } from "@/components/landing/Features";
import { Languages } from "@/components/landing/Languages";
import { Pricing } from "@/components/landing/Pricing";
import { TechStack } from "@/components/landing/TechStack";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider" />
        <section id="how-it-works">
          <HowItWorks />
        </section>
        <div className="section-divider" />
        <section id="features">
          <Features />
        </section>
        <div className="section-divider" />
        <section id="languages">
          <Languages />
        </section>
        <div className="section-divider" />
        <section id="pricing">
          <Pricing />
        </section>
        <TechStack />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
