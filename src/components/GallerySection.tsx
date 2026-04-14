import React, { useState } from "react";
import galleryImg1 from "@/assets/gallery-1.jpg";
import galleryImg2 from "@/assets/gallery-2.jpg";
import galleryImg3 from "@/assets/gallery-3.jpg";
import { FadeIn } from "./animations/FadeIn";

const gallery = [
  { src: galleryImg1, alt: "Corte degradê perfeito" },
  { src: galleryImg2, alt: "Corte moderno estiloso" },
  { src: galleryImg3, alt: "Corte pompadour com barba" },
];

function GalleryCard({ img }: { img: { src: string, alt: string } }) {
  const [angle, setAngle] = useState<number | null>(null);
  const [isSpinning, setIsSpinning] = useState(true);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Se estiver parado, ao clicar volta a rodar
    if (!isSpinning) {
      setIsSpinning(true);
      return;
    }

    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const x = e.clientX - rect.left - centerX;
    const y = e.clientY - rect.top - centerY;
    
    // Math.atan2 retorna ângulo onde a direita é 0.
    // CSS conic-gradient começa do topo (0deg) onde direita é 90deg.
    let clickAngle = Math.atan2(y, x) * (180 / Math.PI) + 90;
    while (clickAngle < 0) clickAngle += 360;
    
    setAngle(clickAngle);
    setIsSpinning(false);
  };

  return (
    <div 
      onClick={handleClick}
      className={`relative p-[5px] rounded-2xl overflow-hidden cursor-pointer group shadow-xl transition-all duration-300 ${!isSpinning ? 'scale-[1.02]' : 'hover:scale-[1.02]'}`}
    >
      {/* Container de Neon para as bordas */}
      <div className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
        {isSpinning ? (
           <>
             {/* Borda sólida */}
             <div className="absolute inset-0 animate-[spin_2.5s_linear_infinite]" style={{
                background: 'conic-gradient(transparent 65%, var(--color-gold) 90%, var(--color-gold-light) 100%)'
             }} />
             {/* Borda borrada para efeito Neon forte */}
             <div className="absolute inset-0 animate-[spin_2.5s_linear_infinite] blur-xl opacity-80" style={{
                background: 'conic-gradient(transparent 65%, var(--color-gold) 90%, var(--color-gold-light) 100%)'
             }} />
           </>
         ) : (
           <>
             {/* Ao clicar, as porcentagens de gradiente são congeladas no exato ângulo que o mouse estava */}
             <div className="absolute inset-0 transition-opacity duration-300" style={{
                background: `conic-gradient(from ${angle}deg, transparent 65%, var(--color-gold) 90%, var(--color-gold-light) 100%)`
             }} />
             <div className="absolute inset-0 blur-xl opacity-100 transition-opacity duration-300" style={{
                background: `conic-gradient(from ${angle}deg, transparent 65%, var(--color-gold) 90%, var(--color-gold-light) 100%)`
             }} />
           </>
         )}
      </div>

      {/* Camada Interna da Foto */}
      <div className="relative z-10 w-full h-80 rounded-[11px] overflow-hidden bg-surface">
        <img
          src={img.src}
          alt={img.alt}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          loading="lazy"
          width={640}
          height={800}
        />
        {/* Camada interna para sutil interação se precisar */}
        <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(212,175,55,0.15)] pointer-events-none" />
      </div>
    </div>
  );
}

export function GallerySection() {
  return (
    <section className="py-20 px-4 bg-surface">
      <div className="max-w-6xl mx-auto">
        <FadeIn direction="up">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-foreground">
            Nosso <span className="gold-gradient">Trabalho</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {gallery.map((img, i) => (
            <FadeIn key={i} direction="up" delay={i * 0.2}>
              <GalleryCard img={img} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
