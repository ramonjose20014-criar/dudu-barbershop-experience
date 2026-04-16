import { Package } from "lucide-react";
import { FadeIn } from "./animations/FadeIn";

const products = [
  { name: "Pomadas", price: "R$15" },
  { name: "Shampoo", price: "R$20" },
  { name: "Pó modelador", price: "R$20" },
  { name: "Minoxidil", price: "R$45" },
  { name: "Máquina de cortar cabelo", price: "R$120" },
];

export function ProductsSection() {
  return (
    <section id="produtos" className="pb-20 pt-8 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        <FadeIn direction="up">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-foreground">
            <span className="gold-gradient">Produtos</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((p, i) => (
            <FadeIn key={p.name} direction="up" delay={i * 0.15}>
              <div className="bg-card/90 backdrop-blur-sm border border-border rounded-xl p-6 text-center hover:border-gold/50 transition-all duration-300 hover:gold-glow group h-full">
                <Package className="w-8 h-8 text-gold mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-foreground font-semibold mb-2">{p.name}</h3>
                <p className="text-gold text-2xl font-bold font-heading">{p.price}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn direction="up" delay={0.4}>
          <p className="text-center text-muted-foreground text-sm mt-8 italic">
            Produtos disponíveis diretamente na barbearia.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
