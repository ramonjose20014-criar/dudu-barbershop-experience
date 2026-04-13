import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import galleryImg1 from "@/assets/gallery-1.jpg";
import galleryImg2 from "@/assets/gallery-2.jpg";
import galleryImg3 from "@/assets/gallery-3.jpg";

const gallery = [
  { src: galleryImg1, alt: "Corte degradê perfeito" },
  { src: galleryImg2, alt: "Corte moderno estiloso" },
  { src: galleryImg3, alt: "Corte pompadour com barba" },
];

export function GallerySection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 px-4 bg-surface" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-foreground transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          Nosso <span className="gold-gradient">Trabalho</span>
        </h2>

        <div className={`grid grid-cols-1 sm:grid-cols-3 gap-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {gallery.map((img, i) => (
            <div key={i} className="overflow-hidden rounded-xl border border-border hover:border-gold/50 transition-all duration-300 group">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width={640}
                height={800}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
