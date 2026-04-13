import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Package } from "lucide-react";

const products = [
  { name: "Pomadas", price: "R$15" },
  { name: "Shampoo", price: "R$20" },
  { name: "Minoxidil", price: "R$45" },
];

export function ProductsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="produtos" className="py-20 px-4 bg-surface" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-foreground transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="gold-gradient">Produtos</span>
        </h2>

        <div className={`grid grid-cols-1 sm:grid-cols-3 gap-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {products.map((p) => (
            <div key={p.name} className="bg-card border border-border rounded-xl p-6 text-center hover:border-gold/50 transition-all duration-300 hover:gold-glow">
              <Package className="w-8 h-8 text-gold mx-auto mb-3" />
              <h3 className="text-foreground font-semibold mb-2">{p.name}</h3>
              <p className="text-gold text-2xl font-bold font-heading">{p.price}</p>
            </div>
          ))}
        </div>

        <p className={`text-center text-muted-foreground text-sm mt-8 italic transition-all duration-700 delay-200 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          Produtos disponíveis diretamente na barbearia.
        </p>
      </div>
    </section>
  );
}
