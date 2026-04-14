import { Scissors, Instagram, MapPin, Clock } from "lucide-react";
import { FadeIn } from "./animations/FadeIn";

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <FadeIn direction="up" delay={0.1}>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Scissors className="w-5 h-5 text-gold" />
              <span className="font-heading font-bold text-foreground">DUDU <span className="text-gold">BARBEARIA</span></span>
            </div>
            <p className="text-muted-foreground text-sm">
              Mais do que apenas um corte, uma experiência única.
            </p>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-gold" />
              <h3 className="font-semibold text-foreground">Horário</h3>
            </div>
            <div className="text-muted-foreground text-sm space-y-1">
              <p>Terça a Sábado: 8h às 12h | 14h às 18h</p>
              <p>Domingo: 8h às 12h</p>
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.3}>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-gold" />
              <h3 className="font-semibold text-foreground">Localização</h3>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Rua João Pedro Xavier, S/N, Amparo, 58548-000, PB, Brasil
            </p>
            <a
              href="https://www.instagram.com/clebermacielsilva?igsh=MTk0b2U0NmwyNm9kMQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-light hover:translate-x-1 transition-all text-sm duration-300"
            >
              <Instagram className="w-5 h-5" />
              @clebermacielsilva
            </a>
          </div>
        </FadeIn>
      </div>

      <FadeIn direction="up" delay={0.5}>
        <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-border text-center">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} DUDU BARBEARIA — Todos os direitos reservados.
          </p>
        </div>
      </FadeIn>
    </footer>
  );
}
