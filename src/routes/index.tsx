import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProductsSection } from "@/components/ProductsSection";
import { AboutSection } from "@/components/AboutSection";
import { GallerySection } from "@/components/GallerySection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { LocationSection } from "@/components/LocationSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DUDU BARBEARIA — Seu estilo começa aqui" },
      { name: "description", content: "Barbearia profissional em Amparo, PB. Cortes masculinos, barba, sobrancelha e muito mais. Atendimento por ordem de chegada." },
      { property: "og:title", content: "DUDU BARBEARIA — Seu estilo começa aqui" },
      { property: "og:description", content: "Mais do que apenas um corte, uma experiência única. Visite a DUDU BARBEARIA." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <WhyChooseSection />
      <ServicesSection />
      <ProductsSection />
      <AboutSection />
      <GallerySection />
      <HowItWorksSection />
      <LocationSection />
      <CTASection />
      <Footer />
    </div>
  );
}
