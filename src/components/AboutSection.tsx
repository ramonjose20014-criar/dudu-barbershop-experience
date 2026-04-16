import { Button } from "@/components/ui/button";
import aboutImg1 from "@/assets/about-barber-1.jpg";
import aboutImg2 from "@/assets/about-barber-2.jpg";
import award2018 from "@/assets/award-2018.jpg";
import award2023 from "@/assets/award-2023.jpg";
import { FadeIn } from "./animations/FadeIn";

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <FadeIn direction="up">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16 text-foreground">
            Sobre a <span className="gold-gradient">DUDU BARBEARIA</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeIn direction="left" delay={0.2}>
            <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
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

              <div className="pt-6">
                <Button variant="goldOutline" size="lg" asChild className="hover:scale-105 transition-transform duration-300">
                  <a href="#como-funciona">Saiba como funciona o atendimento</a>
                </Button>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.4} className="relative mt-8 lg:mt-0">
            {/* Efeito de brilho de fundo para dar destaque e aspecto premium */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gold/5 blur-[80px] rounded-full pointer-events-none z-0" />
            
            {/* Composição das duas fotos lado a lado com divisória */}
            <div className="relative z-10 flex justify-between items-center gap-4 sm:gap-6 w-full h-[350px] sm:h-[450px]">
              
              {/* Foto 1: Dudu recendo prêmio (Esquerda) */}
              <div className="flex-1 h-full rounded-2xl overflow-hidden border border-border shadow-xl group hover:border-gold/50 transition-all duration-300">
                <img
                  src={aboutImg1}
                  alt="Cléber Maciel (Dudu) recendo prêmio de melhor barbeiro da cidade"
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>

              {/* Divisória Neon Dourada */}
              <div className="w-[3px] h-[70%] bg-gradient-to-b from-transparent via-gold to-transparent shadow-[0_0_15px_rgba(212,175,55,1)] shrink-0" />

              {/* Foto 2: Dudu cortando cabelo sorrindo (Direita) */}
              <div className="flex-1 h-full rounded-2xl overflow-hidden border border-border shadow-xl group hover:border-gold/50 transition-all duration-300">
                <img
                  src={aboutImg2}
                  alt="Dudu realizando um corte de cabelo com técnica, dedicação e um sorriso"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>

            </div>
          </FadeIn>
      </div>

      {/* Seção de Prêmios e Reconhecimento */}
      <div className="max-w-6xl mx-auto mt-24">
        <FadeIn direction="up">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-center mb-10 text-foreground">
            Nossas <span className="gold-gradient">Conquistas</span>
          </h3>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
          {/* Prêmio 2023 */}
          <FadeIn direction="up" delay={0.2}>
            <div className="bg-card/50 backdrop-blur-sm border border-gold/20 rounded-2xl overflow-hidden hover:border-gold/50 transition-all duration-500 group h-full flex flex-col sm:flex-row items-center">
              <div className="w-full sm:w-1/2 h-64 sm:h-full overflow-hidden">
                <img 
                  src={award2023} 
                  alt="Troféu Prêmio Referência 2023" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8 sm:w-1/2">
                <div className="text-gold text-sm font-bold tracking-widest uppercase mb-2">2023</div>
                <h4 className="text-xl font-bold text-foreground mb-4">Prêmio Referência</h4>
                <p className="text-muted-foreground text-sm uppercase leading-relaxed">
                  Dudu Barbeiro foi reconhecido mais uma vez como a grande referência em barbearia na região.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Prêmio 2018 */}
          <FadeIn direction="up" delay={0.4}>
            <div className="bg-card/50 backdrop-blur-sm border border-gold/20 rounded-2xl overflow-hidden hover:border-gold/50 transition-all duration-500 group h-full flex flex-col sm:flex-row items-center">
              <div className="w-full sm:w-1/2 h-64 sm:h-full overflow-hidden">
                <img 
                  src={award2018} 
                  alt="Certificado Prêmio Referência 2018" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8 sm:w-1/2">
                <div className="text-gold text-sm font-bold tracking-widest uppercase mb-2">2018</div>
                <h4 className="text-xl font-bold text-foreground mb-4">Destaque do Ano</h4>
                <p className="text-muted-foreground text-sm uppercase leading-relaxed">
                  Título de Cabeleireiro Referência com base em pesquisa de opinião pública no Cariri.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
