import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ValuesSection from "@/components/ValuesSection";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PartnersSection from "@/components/PartnersSection";
import CTASection from "@/components/CTASection";
import CareerSection from "@/components/CareerSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <Navbar />
      <HeroSection />
      <ValuesSection />
      <ServicesSection />
      <TeamSection />
      <AboutSection />
      <TestimonialsSection />
      <PartnersSection />
      <CTASection />
      <CareerSection />
      <Footer />
    </div>
  );
};

export default Index;
