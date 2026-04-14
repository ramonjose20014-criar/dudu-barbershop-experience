import { Rocket, Flame, Zap, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "./animations/FadeIn";

const reasons = [
  {
    icon: Rocket,
    title: "Bom profissional",
    desc: "Dudu é barbeiro profissional com mais de 10 anos de experiência. Premiado como melhor barbeiro de sua cidade, atendendo inúmeros clientes da melhor forma possível.",
  },
  {
    icon: Flame,
    title: "Ambiente confortável e acolhedor",
    desc: "Ar-condicionado, sofás, televisão, café e boas conversas.",
  },
  {
    icon: Zap,
    title: "Atendimento de qualidade",
    desc: "Equipamentos profissionais e tudo pronto para te atender da melhor forma possível.",
  },
  {
    icon: Trophy,
    title: "Clientes fiéis e satisfeitos",
    desc: "Quem vem uma vez para a DUDU BARBEARIA sempre volta!",
  },
];

export function WhyChooseSection() {
  return (
    <section className="py-20 px-4 bg-surface">
      <div className="max-w-6xl mx-auto">
        <FadeIn direction="up">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-foreground">
            Por que escolher a <span className="gold-gradient">DUDU BARBEARIA</span>?
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((item, i) => (
            <FadeIn key={item.title} direction="up" delay={i * 0.15}>
              <div className="bg-card rounded-xl p-6 border border-border hover:border-gold/50 transition-all duration-500 hover:gold-glow h-full">
                <item.icon className="w-10 h-10 text-gold mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn direction="up" delay={0.4}>
          <div className="text-center mt-10">
            <Button variant="goldOutline" size="lg" asChild className="hover:scale-105 transition-transform duration-300">
              <a href="#como-funciona">👉 Veja como funciona</a>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
