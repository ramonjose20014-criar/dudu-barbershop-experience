import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { MapPin } from "lucide-react";

export function LocationSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="localizacao" className="py-20 px-4 bg-surface" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-foreground transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="gold-gradient">Localização</span>
        </h2>

        <div className={`bg-card border border-border rounded-xl overflow-hidden transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <iframe
            title="Localização Dudu Barbearia"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d-36.36!3d-7.27!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMTYnMTIuMCJTIDM2wrAyMScyNC4wIlc!5e0!3m2!1spt-BR!2sbr!4v1"
            className="w-full h-64 md:h-80"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div className="p-6 text-center">
            <MapPin className="w-8 h-8 text-gold mx-auto mb-3" />
            <p className="text-foreground font-semibold mb-2">
              Rua João Pedro Xavier, S/N, Amparo, 58548-000, PB, Brasil
            </p>
            <Button variant="gold" size="lg" asChild className="mt-4">
              <a
                href="https://www.google.com/maps/search/Rua+Jo%C3%A3o+Pedro+Xavier+Amparo+58548-000+PB+Brasil"
                target="_blank"
                rel="noopener noreferrer"
              >
                📍 Abrir no Google Maps
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
