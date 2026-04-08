import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/content";

export default function Projects() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 = flip forward, -1 = flip backward

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Keyboard Support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Physics settings with 2-degree overshoot
  const springSettings = {
    type: "spring",
    stiffness: 150,
    damping: 12, // Reduced damping for overshoot
    restDelta: 0.001,
  };

  // Motion Variants with 3D Arc Physics
  const variants = {
    enter: (direction) => ({
      rotateX: direction > 0 ? 110 : -110, // Start flipped over the top
      opacity: 0,
      y: -50,
      z: 0,
    }),
    center: {
      rotateX: 0,
      opacity: 1,
      scale: 1,
      y: 0,
      z: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 12,
        restDelta: 0.001,
      },
    },
    exit: (direction) => ({
      rotateX: direction > 0 ? -110 : 110, // Arc up and over the top
      opacity: 0,
      y: -50,
      z: 100, // Move toward viewer during flip for arc depth
      transition: { 
        duration: 0.45, 
        ease: "circIn" 
      },
    }),
  };

  const nextIndex = (index + 1) % projects.length;

  return (
    <section
      id="projects"
      className="bg-black text-white px-6 md:px-20 py-32 min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto w-full flex flex-col items-center">
        {/* Header & Counter */}
        <div className="w-full flex justify-between items-end mb-16 px-4">
          <div className="flex items-center gap-6">
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-header leading-[0.95] tracking-tight">
              Project <br /> Archival
            </h2>
            {/* The Binding Rings */}
            <div className="hidden md:flex gap-3 px-6 py-3 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm self-start">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-white/20 shadow-inner shadow-black" />
              ))}
            </div>
          </div>

          <div className="font-mono text-2xl tracking-tighter opacity-50 tabular-nums">
            {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
          </div>
        </div>

        {/* Calendar A-Frame Stack */}
        <div 
          className="relative w-full max-w-[850px] aspect-[16/11] flex items-center justify-center"
          style={{ perspective: "1200px" }}
        >
          {/* Deep Ambient Occlusion Shadow Layer */}
          <div className="absolute inset-0 bg-black/60 blur-[120px] rounded-[100px] scale-90 translate-y-12 -z-10" />

          {/* Background Card (The "Next" page in stack) */}
          <div 
            className="absolute w-[98%] h-[98%] top-4 opacity-15 filter grayscale"
            style={{ transform: "rotateX(2deg)" }}
          >
            <div className="w-full h-full rounded-2xl bg-surface border border-white/10 overflow-hidden">
               <img src={projects[nextIndex].image} className="w-full h-full object-cover" alt="" />
            </div>
          </div>

          {/* Active Flip Card */}
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute w-full h-full rounded-2xl bg-surface border border-white/10 overflow-hidden shadow-[0_30px_60px_-12px_rgba(0,0,0,0.7),0_18px_36px_-18px_rgba(0,0,0,0.8)]"
              style={{
                transformOrigin: "top center",
                backfaceVisibility: "hidden",
                transformStyle: "preserve-3d"
              }}
            >
              <img
                src={projects[index].image}
                alt={projects[index].name}
                className="w-full h-full object-cover grayscale brightness-50 hover:grayscale-0 transition-all duration-1000"
              />

              {/* Stamped-style CTA Badge */}
              <div className="absolute top-8 right-8 z-20">
                <a
                  href="#"
                  data-hover
                  className="w-20 h-20 md:w-28 md:h-28 rounded-full border-2 border-primary/40 text-primary flex items-center justify-center text-center uppercase text-[9px] md:text-[11px] font-bold leading-none -rotate-12 hover:rotate-0 hover:bg-primary hover:text-white transition-all duration-500 scale-90 md:scale-100 backdrop-blur-md"
                >
                  <span className="p-2">Move Out<br/>Project<br/>View ↘</span>
                </a>
              </div>

              {/* "Sticky Note" Insertion Overlay (Hyper-Glassmorphism) */}
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 max-w-sm">
                <div className="p-6 md:p-8 bg-white/[0.03] backdrop-blur-[40px] border border-white/10 rounded-2xl rotate-1 shadow-2xl">
                  <h3 className="text-2xl md:text-3xl font-header leading-tight mb-2 tracking-tight">
                    {projects[index].name}
                  </h3>
                  <p className="text-[12px] text-muted leading-relaxed font-medium">
                    {projects[index].desc}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {projects[index].tech.map((t) => (
                      <span key={t} className="text-[9px] font-bold uppercase tracking-widest text-primary/60">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Stands (The Base) */}
          <div className="absolute -bottom-16 flex gap-4">
             <button
               onClick={handlePrev}
               className="px-10 py-5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-[11px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500 group"
             >
                <span className="flex items-center gap-2">← Back</span>
             </button>
             <button
               onClick={handleNext}
               className="px-10 py-5 rounded-full bg-primary text-white text-[11px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500"
             >
                <span className="flex items-center gap-2">Proceed →</span>
             </button>
          </div>
        </div>
      </div>
    </section>
  );
}
