import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-barbershop.jpg";
import { FadeIn } from "./animations/FadeIn";
import { motion } from "framer-motion";
const WaveText = ({ text, className = "", delayOffset = 0 }: { text: string, className?: string, delayOffset?: number }) => {
  return (
    <span className="inline-block">
      {text.split("").map((char, index) => {
        if (char === " ") return <span key={index}>&nbsp;</span>;
        return (
          <motion.span
            key={index}
            className={`inline-block ${className}`}
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 2.5,
              ease: "easeInOut",
              repeat: Infinity,
              delay: (index + delayOffset) * 0.1,
            }}
          >
            {char}
          </motion.span>
        );
      })}
    </span>
  );
};

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 15, ease: "easeOut", repeat: Infinity, repeatType: "reverse" }}
          src={heroImg}
          alt="Interior da Dudu Barbearia"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <FadeIn delay={0.2} direction="down">
          <p className="text-gold text-sm md:text-base font-semibold tracking-[0.3em] uppercase mb-4">
            Barbearia Premium
          </p>
        </FadeIn>
        
        <FadeIn delay={0.4} direction="up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-foreground mb-4 drop-shadow-2xl">
            <WaveText text="DUDU " />
            <WaveText text="BARBEARIA" className="gold-gradient" delayOffset={5} />
          </h1>
        </FadeIn>

        <FadeIn delay={0.6} direction="up">
          <p className="text-xl md:text-2xl text-foreground font-heading mb-2">
            Seu estilo começa aqui.
          </p>
        </FadeIn>

        <FadeIn delay={0.8} direction="up">
          <p className="text-muted-foreground text-base md:text-lg mb-8">
            Mais do que apenas um corte, uma experiência única.
          </p>
        </FadeIn>

        <FadeIn delay={1.0} direction="up">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="xl" asChild className="hover:scale-105 transition-transform duration-300">
              <a href="#servicos">Serviços</a>
            </Button>
            <Button variant="goldOutline" size="xl" asChild className="hover:scale-105 transition-transform duration-300">
              <a href="#como-funciona">Como Funciona</a>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
