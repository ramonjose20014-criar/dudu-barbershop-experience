import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";

interface SplashScreenProps {
  onComplete?: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse Parallax Effect
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const springX = useSpring(0, { stiffness: 50, damping: 20 });
  const springY = useSpring(0, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      springX.set(x);
      springY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [springX, springY]);

  useEffect(() => {
    const duration = 3500; 
    const interval = 20;
    
    const startTime = Date.now();
    
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min((elapsed / duration) * 100, 100);
      
      setProgress(currentProgress);
      
      if (currentProgress >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          setIsFinished(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 1000); // Wait for exit animation
        }, 800);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence mode="wait">
      {!isFinished && (
        <motion.div
          ref={containerRef}
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.2, 
            filter: "blur(40px)",
            transition: { duration: 1.2, ease: [0.7, 0, 0.3, 1] }
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505] overflow-hidden"
        >
          {/* Subtle Smoke/Grain Effect */}
          <div className="absolute inset-0 opacity-[0.4] pointer-events-none mix-blend-screen">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat opacity-[0.05] animate-grain" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
          </div>
          
          {/* Animated Glow Background */}
          <motion.div 
            style={{ x: springX, y: springY }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37] opacity-[0.08] blur-[180px] rounded-full pointer-events-none" 
          />

          <motion.div 
            style={{ x: useTransform(springX, (v) => v * 1.5), y: useTransform(springY, (v) => v * 1.5) }}
            className="relative flex flex-col items-center gap-12 z-10"
          >
            {/* Pulsing Icon (Stylized Barber Pole/Razor Shape) */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.8, 1, 0.8],
                rotateZ: [0, 2, -2, 0]
              }}
              transition={{ 
                scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
                rotateZ: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                initial: { duration: 1 }
              }}
              className="mb-4 relative"
            >
               {/* Bloom/Glow behind the icon */}
               <div className="absolute inset-0 bg-[#D4AF37] opacity-20 blur-xl rounded-full" />
               
               <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                <path d="M12 2L4 7V17L12 22L20 17V7L12 2Z" stroke="#D4AF37" strokeWidth="0.5" strokeDasharray="100" />
                <path d="M12 22V12M12 12L4 7M12 12L20 7" stroke="#D4AF37" strokeLinecap="round" strokeWidth="1.5" />
                <path d="M7 14.5L12 17.5L17 14.5" stroke="#D4AF37" strokeLinecap="round" strokeWidth="1" />
              </svg>
            </motion.div>

            {/* Main Typography Area */}
            <div className="text-center relative">
              <motion.div 
                initial={{ letterSpacing: "0.2em", opacity: 0 }}
                animate={{ letterSpacing: "-0.02em", opacity: 1 }}
                transition={{ duration: 1.5, ease: [0.6, 0.01, -0.05, 0.95] }}
                className="flex flex-col items-center"
              >
                {/* DUDU - Serif Modern */}
                <h1 className="text-7xl md:text-9xl font-black text-white font-serif leading-none tracking-tighter relative">
                  DUDU
                  {/* Golden Line Animation under the name */}
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 2, delay: 0.8, ease: "circOut" }}
                    className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent shadow-[0_0_20px_#D4AF37]"
                  />
                  
                  {/* Subtle Stroke Animation (SVG Overlay) */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" viewBox="0 0 400 120">
                    <text x="50%" y="80" textAnchor="middle" className="fill-none stroke-[#D4AF37] stroke-[0.5] font-serif text-[80px] font-black" style={{ opacity: 0.3 }}>
                      DUDU
                      <animate attributeName="stroke-dasharray" from="0, 500" to="500, 0" dur="4s" fill="freeze" />
                    </text>
                  </svg>
                </h1>

                {/* BARBEARIA - Industrial Sans */}
                <motion.h2 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 1 }}
                  className="text-xl md:text-2xl font-bold tracking-[0.8em] text-[#D4AF37] mt-8 font-sans uppercase drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]"
                >
                  BARBEARIA
                </motion.h2>
              </motion.div>
            </div>

            {/* Premium Loading Section */}
            <div className="mt-16 w-72 md:w-96 flex flex-col items-center">
              <div className="w-full flex justify-between items-center mb-4 px-1">
                <span className="text-[10px] uppercase tracking-[0.4em] font-sans font-light text-white/40">Iniciando protocolo de estilo</span>
                <span className="text-[12px] font-medium tabular-nums text-[#D4AF37] font-sans">{Math.round(progress)}%</span>
              </div>
              
              {/* Glassmorphism Progress Container */}
              <div className="relative h-[6px] w-full bg-white/[0.03] rounded-full overflow-hidden border border-white/5 backdrop-blur-xl">
                {/* Liquid Gold Fill */}
                <motion.div 
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.6)]"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "easeInOut" }}
                />
                
                {/* Glossy Overlay/Sheen */}
                <motion.div
                  animate={{ 
                    x: ["-100%", "200%"],
                  }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                  className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-25deg]"
                />
              </div>
            </div>
          </motion.div>

          {/* Minimalist Footer */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1.5 }}
            className="absolute bottom-16 flex flex-col items-center gap-4 text-white/20"
          >
            <div className="h-[1px] w-12 bg-white/10" />
            <span className="text-[9px] uppercase tracking-[0.6em] font-sans">© 2026 Dudu Barbearia — Exclusive Experience</span>
          </motion.div>

          {/* CSS Animations */}
          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes grain {
              0%, 100% { transform:translate(0, 0) }
              10% { transform:translate(-5%, -10%) }
              20% { transform:translate(-15%, 5%) }
              30% { transform:translate(7%, -25%) }
              40% { transform:translate(-5%, 25%) }
              50% { transform:translate(-15%, 10%) }
              60% { transform:translate(15%, 0%) }
              70% { transform:translate(0%, 15%) }
              80% { transform:translate(3%, 35%) }
              90% { transform:translate(-10%, 10%) }
            }
            .animate-grain {
              animation: grain 8s steps(10) infinite;
            }
          `}} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
