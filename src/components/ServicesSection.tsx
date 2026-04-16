import { Button } from "@/components/ui/button";
import { Scissors, Star } from "lucide-react";
import { FadeIn } from "./animations/FadeIn";

const services = [
  { name: "Corte masculino", price: "R$18" },
  { name: "Barba", price: "R$10" },
  { name: "Sobrancelha", price: "R$5" },
  { name: "Corte feminino", price: "R$25" },
  { name: "Lavagem de cabelo masculino", price: "R$5" },
  { name: "Lavagem de cabelo masculino com hidratação com micro queratina", price: "R$10" },
  { name: "Lavagem e hidratação com condicionador restaurador com micro queratina", price: "R$15" },
];

const combos = [
  { name: "Corte + Sobrancelha", price: "R$20" },
  { name: "Corte + Sobrancelha + Barba", price: "R$30" },
];

function ServiceCard({ name, price }: { name: string; price: string }) {
  return (
    <div className="bg-card/90 backdrop-blur-sm border border-border rounded-xl p-6 text-center hover:border-gold/50 transition-all duration-300 hover:gold-glow group h-full">
      <Scissors className="w-8 h-8 text-gold mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
      <h3 className="text-foreground font-semibold mb-2">{name}</h3>
      <p className="text-gold text-2xl font-bold font-heading">{price}</p>
    </div>
  );
}

export function ServicesSection() {
  return (
    <section id="servicos" className="py-20 px-4">
      <div className="max-w-6xl mx-auto relative z-10">
        <FadeIn direction="up">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4 text-foreground">
            Nossos <span className="gold-gradient">Serviços</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Serviços profissionais com preço justo
          </p>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {services.map((s, i) => (
            <FadeIn key={s.name} direction="up" delay={i * 0.1}>
              <ServiceCard {...s} />
            </FadeIn>
          ))}
        </div>

        <FadeIn direction="up" delay={0.2}>
          <h3 className="text-xl font-heading font-bold text-center mb-6 text-foreground flex items-center justify-center gap-2">
            <Star className="w-5 h-5 text-gold" /> Combos <Star className="w-5 h-5 text-gold" />
          </h3>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {combos.map((s, i) => (
            <FadeIn key={s.name} direction="up" delay={i * 0.1 + 0.3}>
              <ServiceCard {...s} />
            </FadeIn>
          ))}
        </div>

        <FadeIn direction="up" delay={0.5}>
          <div className="text-center mt-10">
            <Button variant="goldOutline" size="lg" asChild className="hover:scale-105 transition-transform duration-300">
              <a href="#como-funciona">👉 Entenda como funciona o atendimento</a>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
