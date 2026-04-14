import { FadeIn } from "./animations/FadeIn";

export function CTASection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-gold/5 to-transparent pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <FadeIn direction="up">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4 drop-shadow-sm">
            Seu visual diz muito <span className="gold-gradient">sobre você.</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-2">
            Você merece um atendimento de qualidade.
          </p>
          <p className="text-xl font-heading font-bold text-gold">
            Vem pra DUDU BARBEARIA!
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
