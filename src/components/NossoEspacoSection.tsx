import { FadeIn } from "./animations/FadeIn";

export function NossoEspacoSection() {
  return (
    <section id="nosso-espaco" className="py-24 px-4 bg-background relative overflow-hidden z-10">
      {/* Luzes de fundo decorativas */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-gold/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gold/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Lado do Texto: Nosso Espaço */}
          <FadeIn direction="right" delay={0.2}>
            <div className="space-y-8">
              <div className="inline-block">
                <span className="text-gold text-sm font-semibold tracking-[0.4em] uppercase border-b border-gold/30 pb-2">
                  Experiência Única
                </span>
              </div>
              
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground leading-none">
                Nosso <span className="gold-gradient">Espaço</span>
              </h2>
              
              <p className="text-muted-foreground text-xl leading-relaxed">
                Cada detalhe foi planejado para oferecer não apenas um corte, mas um momento de relaxamento e estilo. Um ambiente clássico com um toque de modernidade.
              </p>
            </div>
          </FadeIn>

          {/* Lado do Vídeo VSL */}
          <FadeIn direction="left" delay={0.4}>
            <div className="relative group mx-auto lg:ml-auto w-full max-w-[340px]">
              {/* Moldura Animada */}
              <div className="absolute -inset-1 bg-gradient-to-b from-gold via-gold/50 to-gold rounded-[2.5rem] blur-sm opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
              
              <div className="relative aspect-[9/16] w-full bg-black rounded-[2rem] overflow-hidden border-4 border-background shadow-2xl overflow-hidden">
                <iframe
                  className="w-full h-full object-cover"
                  src="https://www.youtube.com/embed/tqob0w2zIh8?autoplay=0&controls=1&rel=0&modestbranding=1"
                  title="Tour Nosso Espaço"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Tag Flutuante */}
              <div className="absolute top-6 -left-8 bg-gold text-background px-4 py-2 rounded-full font-bold text-xs tracking-tighter shadow-xl -rotate-12 group-hover:rotate-0 transition-transform duration-500 z-20">
                100% PREMIUM
              </div>
              
              <div className="absolute -bottom-8 -right-4 bg-surface border border-gold/30 text-gold px-6 py-4 rounded-2xl font-heading font-bold shadow-2xl z-20 hidden md:block group-hover:scale-110 transition-transform duration-500">
                TOUR VIRTUAL
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
