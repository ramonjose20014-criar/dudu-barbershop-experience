import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-barbershop.jpg";

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Interior da Dudu Barbearia"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-background/75" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p className="text-gold text-sm font-semibold tracking-[0.3em] uppercase mb-4 animate-fade-in">
          Barbearia Premium
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-foreground mb-4 animate-fade-up">
          DUDU <span className="gold-gradient">BARBEARIA</span>
        </h1>
        <p className="text-xl md:text-2xl text-foreground font-heading mb-2 animate-fade-up" style={{ animationDelay: "0.15s" }}>
          Seu estilo começa aqui.
        </p>
        <p className="text-muted-foreground text-base md:text-lg mb-8 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          Mais do que apenas um corte, uma experiência única.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.45s" }}>
          <Button variant="gold" size="xl" asChild>
            <a href="#servicos">Serviços</a>
          </Button>
          <Button variant="goldOutline" size="xl" asChild>
            <a href="#como-funciona">Como Funciona</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
