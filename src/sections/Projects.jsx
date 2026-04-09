import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { projects } from "../data/content";

export default function Projects() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 = Forward, -1 = Backward
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  // Navigation Logic with prompt gate release
  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(1);
    setIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(-1);
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const navigateToProject = (id) => {
    navigate(`/project/${id}`);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // HIGH-FIDELITY BI-DIRECTIONAL CALENDAR VARIANTS
  const variants = {
    enter: (direction) => {
      return direction > 0 
        ? { scale: 0.92, opacity: 0, y: 10, rotateX: 0, z: 0 } // FORWARD: New Page underneath
        : { rotateX: -120, y: -80, z: 150, opacity: 0, scale: 1 }; // BACKWARD: New Page coming from behind
    },
    center: {
      rotateX: 0,
      y: 0,
      z: 0,
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 180,
        damping: 18,
        mass: 1,
        restDelta: 0.001,
      },
    },
    exit: (direction) => {
      return direction > 0 
        ? { rotateX: -120, y: -80, z: 150, opacity: 0, scale: 1 } // FORWARD: Swing up and back
        : { scale: 0.92, opacity: 0, y: 10, rotateX: 0, z: 0 }; // BACKWARD: Slide back into stack
    },
  };

  const nextIndex = (index + 1) % projects.length;

  return (
    <section
      id="projects"
      className="bg-black text-white px-6 md:px-20 py-32 min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto w-full flex flex-col items-center">
        {/* Header Layer */}
        <div className="w-full flex justify-between items-end mb-12 px-4">
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-header leading-[0.95] tracking-tight">
            Project <br /> Archival
          </h2>
          <div className="font-mono text-2xl tracking-tighter opacity-50 tabular-nums pb-2">
            {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
          </div>
        </div>

        {/* Desk Calendar Object Container */}
        <div 
          className="relative w-full max-w-[850px] aspect-[16/11] flex items-center justify-center"
          style={{ perspective: "2000px" }}
        >
          {/* STATIC: Wedge Stand Base */}
          <motion.div 
            animate={{ 
              boxShadow: isAnimating 
                ? "0 40px 100px -20px rgba(0,0,0,0.9)" 
                : "0 20px 40px -10px rgba(0,0,0,0.7)" 
            }}
            className="absolute inset-0 bg-[#0D0D0D] -z-20 scale-[1.05] translate-y-4"
            style={{ 
              clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)",
              opacity: 0.6
            }}
          />

          {/* THE BINDING RINGS (Top Grommets) */}
          <div 
            className="absolute top-[-12px] left-1/2 -translate-x-1/2 z-[70] flex gap-4 px-6 py-2 bg-white/5 rounded-full backdrop-blur-xl border border-white/10 shadow-lg"
          >
            {[1, 2, 3, 4].map((i) => (
              <div 
                key={i} 
                className="w-3 h-3 rounded-full bg-[#1A1A1A] border border-white/20 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),_0_2px_4px_rgba(0,0,0,0.5)]" 
              />
            ))}
          </div>

          {/* Nav Controls - Outside Restricted Container for Clicks */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between z-[100] pointer-events-none px-4 md:-px-16">
            <button
              onClick={handlePrev}
              disabled={isAnimating}
              className="pointer-events-auto w-12 h-12 rounded-full bg-white/5 backdrop-blur-3xl border border-white/10 flex items-center justify-center text-muted hover:bg-orange-500/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all transform scale-90 md:scale-100 relative md:-left-16 left-0"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button
              onClick={handleNext}
              disabled={isAnimating}
              className="pointer-events-auto w-12 h-12 rounded-full bg-white/5 backdrop-blur-3xl border border-white/10 flex items-center justify-center text-primary hover:bg-orange-500/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all transform scale-90 md:scale-100 relative md:-right-16 right-0"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>

          {/* ACTIVE FLIP STACK */}
          <div className="relative w-full h-full z-10">
            <AnimatePresence 
              initial={false} 
              custom={direction} 
              mode="popLayout"
            >
                <motion.div
                  key={index}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  onAnimationComplete={() => setIsAnimating(false)}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => navigateToProject(projects[index].id)}
                  className="absolute inset-0 rounded-2xl bg-surface border border-white/10 overflow-hidden shadow-[0_30px_60px_-12px_rgba(0,0,0,0.7)] cursor-pointer group"
                  style={{
                    transformOrigin: "top center",
                    backfaceVisibility: "hidden",
                    transformStyle: "preserve-3d"
                  }}
                >
                  {/* BACKFACE LAYER (Visibility Toggle Only) */}
                  <div 
                    className="absolute inset-0 bg-[#1A1A1A] -z-10" 
                    style={{ transform: "rotateX(180deg)", backfaceVisibility: "hidden" }}
                  />

                  <div className="relative w-full h-full">
                    <motion.img
                      layoutId={`project-img-${projects[index].id}`}
                      src={projects[index].image}
                      alt={projects[index].name}
                      className="w-full h-full object-cover"
                    />
                    {/* Bend Highlight */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent h-[15%]" />
                  </div>

                  {/* Circular "Review" CTA */}
                  <div className="absolute top-8 right-8 z-20">
                    <div
                      data-hover
                      className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-primary/30 text-primary flex items-center justify-center text-center uppercase text-[10px] font-bold leading-none -rotate-12 group-hover:rotate-0 group-hover:bg-primary group-hover:text-white transition-all duration-500 backdrop-blur-md"
                    >
                      <span className="p-3">Review<br/>Project<br/>Archival ↘</span>
                    </div>
                  </div>

                {/* Frosted Info Overlay (Staggered Exit) */}
                <motion.div 
                   exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.1 } }}
                   className="absolute bottom-10 left-10 max-w-sm z-30"
                >
                  <div className="p-8 bg-white/[0.03] backdrop-blur-[40px] border border-white/10 rounded-2xl rotate-1 shadow-2xl">
                    <motion.h3 
                      layoutId={`project-title-${projects[index].id}`}
                      className="text-3xl font-header leading-tight mb-2 tracking-tight"
                    >
                      {projects[index].name}
                    </motion.h3>
                    <p className="text-[12px] text-muted leading-relaxed font-medium">
                      {projects[index].desc}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {projects[index].tech.map((t) => (
                        <span key={t} className="text-[9px] font-bold uppercase tracking-widest text-primary/70">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* STATIC BASE FOUNDATION */}
          <div className="absolute -bottom-6 w-[200px] h-3 bg-[#0D0D0D] rounded-full opacity-40 blur-sm" />
        </div>
      </div>
    </section>
  );
}
