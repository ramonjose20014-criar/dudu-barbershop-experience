import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ClipboardList, HandMetal, Sparkles, Clock, AlertTriangle } from "lucide-react";

const steps = [
  { icon: ClipboardList, num: "1", text: "Atendimento por ORDEM DE CHEGADA" },
  { icon: HandMetal, num: "2", text: "Você escolhe o serviço desejado" },
  { icon: Sparkles, num: "3", text: "Realizamos seu serviço!" },
];

export function HowItWorksSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="como-funciona" className="py-20 px-4 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className={`text-3xl md:text-4xl font-heading font-bold text-center mb-4 text-foreground transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          Como <span className="gold-gradient">Funciona</span>
        </h2>
        <p className={`text-center text-muted-foreground mb-12 transition-all duration-700 delay-100 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          Simples, rápido e sem complicação
        </p>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {steps.map((step, i) => (
            <div key={step.num} className="text-center bg-card border-2 border-gold/30 rounded-xl p-8 hover:border-gold transition-all duration-300" style={{ transitionDelay: `${i * 150}ms` }}>
              <div className="w-16 h-16 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mx-auto mb-4">
                <span className="text-gold text-2xl font-bold font-heading">{step.num}</span>
              </div>
              <step.icon className="w-8 h-8 text-gold mx-auto mb-3" />
              <p className="text-foreground font-semibold">{step.text}</p>
            </div>
          ))}
        </div>

        <div className={`bg-card border border-border rounded-xl p-8 text-center transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <Clock className="w-10 h-10 text-gold mx-auto mb-4" />
          <h3 className="text-xl font-heading font-bold text-foreground mb-4">Horário de Funcionamento</h3>
          <div className="space-y-2 text-muted-foreground">
            <p><strong className="text-foreground">Terça a Sábado:</strong> 8h às 12h | 14h às 18h</p>
            <p><strong className="text-foreground">Domingo:</strong> 8h às 12h</p>
          </div>
        </div>

        <div className={`mt-8 bg-gold/10 border border-gold/40 rounded-xl p-6 flex items-start gap-4 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <AlertTriangle className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
          <p className="text-foreground text-sm leading-relaxed">
            <strong>Não trabalhamos com agendamento online.</strong> Caso queira agendar, venha até a barbearia e agende seu horário para outro momento do dia.
          </p>
        </div>
      </div>
    </section>
  );
}
