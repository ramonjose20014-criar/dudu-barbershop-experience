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
import ShaderBackground from "@/components/ui/shader-background";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <WhyChooseSection />
      
      {/* Wrapper dinâmico com Shader animado suave */}
      <div className="relative isolate overflow-hidden -mt-16 pt-16">
        {/* Background baseado no Shader, renderizado numa div absoluta */}
        <div className="absolute inset-0 z-0">
          <ShaderBackground />
        </div>
        
        {/* Overlay gradient do topo e base para suavizar as bordas (fade no topo e base para não ter corte brusco) */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-background via-background/70 to-background pointer-events-none" />
        
        <ServicesSection />
        <ProductsSection />
      </div>

      <AboutSection />
      <GallerySection />
      <HowItWorksSection />
      <LocationSection />
      <CTASection />
      <Footer />
    </div>
  );
}
