import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Scissors, Star } from "lucide-react";

const services = [
  { name: "Corte masculino", price: "R$18" },
  { name: "Barba", price: "R$10" },
  { name: "Sobrancelha", price: "R$5" },
  { name: "Corte feminino", price: "R$25" },
];

const combos = [
  { name: "Corte + Sobrancelha", price: "R$20" },
  { name: "Corte + Sobrancelha + Barba", price: "R$30" },
];

function ServiceCard({ name, price, delay }: { name: string; price: string; delay: number }) {
  return (
    <div
      className="bg-card border border-border rounded-xl p-6 text-center hover:border-gold/50 transition-all duration-300 hover:gold-glow group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <Scissors className="w-8 h-8 text-gold mx-auto mb-3 group-hover:scale-110 transition-transform" />
      <h3 className="text-foreground font-semibold mb-2">{name}</h3>
      <p className="text-gold text-2xl font-bold font-heading">{price}</p>
    </div>
  );
}

export function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="servicos" className="py-20 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-3xl md:text-4xl font-heading font-bold text-center mb-4 text-foreground transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          Nossos <span className="gold-gradient">Serviços</span>
        </h2>
        <p className={`text-center text-muted-foreground mb-12 transition-all duration-700 delay-100 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          Serviços profissionais com preço justo
        </p>

        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {services.map((s, i) => (
            <ServiceCard key={s.name} {...s} delay={i * 100} />
          ))}
        </div>

        <h3 className={`text-xl font-heading font-bold text-center mb-6 text-foreground flex items-center justify-center gap-2 transition-all duration-700 delay-300 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <Star className="w-5 h-5 text-gold" /> Combos <Star className="w-5 h-5 text-gold" />
        </h3>

        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {combos.map((s, i) => (
            <ServiceCard key={s.name} {...s} delay={i * 100} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="goldOutline" size="lg" asChild>
            <a href="#como-funciona">👉 Entenda como funciona o atendimento</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
