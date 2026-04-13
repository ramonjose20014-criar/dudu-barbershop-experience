import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function CTASection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 px-4 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-t from-gold/5 to-transparent pointer-events-none" />

      <div className={`max-w-3xl mx-auto text-center relative z-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
          Seu visual diz muito <span className="gold-gradient">sobre você.</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-2">
          Você merece um atendimento de qualidade.
        </p>
        <p className="text-xl font-heading font-bold text-gold">
          Vem pra DUDU BARBEARIA!
        </p>
      </div>
    </section>
  );
}
