import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import aboutImg1 from "@/assets/about-barber-1.jpg";
import aboutImg2 from "@/assets/about-barber-2.jpg";

export function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="sobre" className="py-20 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-foreground transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          Sobre a <span className="gold-gradient">DUDU BARBEARIA</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className={`space-y-4 text-muted-foreground leading-relaxed transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <p>
              A <strong className="text-foreground">DUDU BARBEARIA</strong> nasceu com um propósito simples: entregar autoestima, estilo e confiança em cada atendimento.
            </p>
            <p>
              Por trás da barbearia está <strong className="text-foreground">Cléber Maciel (Dudu)</strong>, barbeiro profissional premiado como o melhor de sua cidade e com mais de 10 anos de experiência transformando o visual de centenas de clientes.
            </p>
            <p>
              Ao longo dos anos, Dudu construiu uma clientela fiel baseada em confiança, qualidade e atenção aos detalhes. Cada corte é feito com dedicação, técnica e paixão.
            </p>
            <p>
              Aqui você não encontra apenas um corte — encontra um ambiente confortável, boas conversas e uma experiência completa.
            </p>

            <div className="pt-4">
              <Button variant="goldOutline" size="lg" asChild>
                <a href="#como-funciona">Saiba como funciona o atendimento</a>
              </Button>
            </div>
          </div>

          <div className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <img
              src={aboutImg1}
              alt="Barbeiro profissional trabalhando"
              className="rounded-xl w-full h-64 object-cover border border-border"
              loading="lazy"
              width={800}
              height={1024}
            />
            <img
              src={aboutImg2}
              alt="Ambiente confortável da barbearia"
              className="rounded-xl w-full h-64 object-cover border border-border mt-8"
              loading="lazy"
              width={800}
              height={1024}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
