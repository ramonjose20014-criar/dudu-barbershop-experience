import { ClipboardList, HandMetal, Sparkles, Clock, AlertTriangle } from "lucide-react";
import { FadeIn } from "./animations/FadeIn";

const steps = [
  { icon: ClipboardList, num: "1", text: "Atendimento por ORDEM DE CHEGADA" },
  { icon: HandMetal, num: "2", text: "Você escolhe o serviço desejado" },
  { icon: Sparkles, num: "3", text: "Realizamos seu serviço!" },
];

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <FadeIn direction="up">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4 text-foreground">
            Como <span className="gold-gradient">Funciona</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Simples, rápido e sem complicação
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {steps.map((step, i) => (
            <FadeIn key={step.num} direction="up" delay={i * 0.15 + 0.2}>
              <div className="text-center bg-card border-2 border-gold/30 rounded-xl p-8 hover:border-gold transition-all duration-300 h-full">
                <div className="w-16 h-16 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mx-auto mb-4">
                  <span className="text-gold text-2xl font-bold font-heading">{step.num}</span>
                </div>
                <step.icon className="w-8 h-8 text-gold mx-auto mb-3" />
                <p className="text-foreground font-semibold">{step.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn direction="up" delay={0.4}>
          <div className="bg-card border border-border rounded-xl p-8 text-center hover:border-gold/50 transition-colors duration-300">
            <Clock className="w-10 h-10 text-gold mx-auto mb-4" />
            <h3 className="text-xl font-heading font-bold text-foreground mb-4">Horário de Funcionamento</h3>
            <div className="space-y-2 text-muted-foreground">
              <p><strong className="text-foreground">Terça a Sábado:</strong> 8h às 12h | 14h às 18h</p>
              <p><strong className="text-foreground">Domingo:</strong> 8h às 12h</p>
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.6}>
          <div className="mt-8 bg-gold/10 border border-gold/40 rounded-xl p-6 flex items-start gap-4 hover:bg-gold/20 transition-colors duration-300">
            <AlertTriangle className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
            <p className="text-foreground text-sm leading-relaxed">
              <strong>Não trabalhamos com agendamento online.</strong> Caso queira agendar, venha até a barbearia e agende seu horário para outro momento do dia.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
