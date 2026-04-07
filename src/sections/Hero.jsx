import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef();
  const titleRef = useRef();
  const subtitleRef = useRef();
  const ctaRef = useRef();
  const avatarRef = useRef();

  useEffect(() => {
    // Reduced motion check
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!prefersReducedMotion) {
      const tl = gsap.timeline();

      // Intro sequence
      tl.from(titleRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      })
      .from(subtitleRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
      }, "-=0.5")
      .from(ctaRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
      }, "-=0.4")
      .from(avatarRef.current, {
        opacity: 0,
        x: 100,
        duration: 1,
        ease: "power2.out",
      }, "-=0.8");

      // Particle animation (scoped)
      const particles = containerRef.current.querySelectorAll(".particle");
      gsap.to(particles, {
        y: -20,
        repeat: -1,
        yoyo: true,
        duration: 2,
        stagger: {
          amount: 1.5,
          from: "random",
        },
        ease: "sine.inOut",
      });
    }
  }, []);

  const handleScrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-black via-gray-800/80 to-black overflow-hidden pb-16 md:pb-0 border-b border-gray-800"
    >
      {/* Particle Layer (z-0) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="particle w-1.5 h-1.5 bg-blue-400 rounded-full absolute opacity-30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Main Layout (z-20/z-10) */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto z-20">
        
        {/* Left Content (Text) */}
        <div className="max-w-xl text-center md:text-left bg-black/40 backdrop-blur-sm p-6 md:p-10 rounded-2xl border border-white/5 space-y-4">
          <h1
            ref={titleRef}
            className="text-4xl md:text-7xl font-bold leading-tight text-white drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]"
          >
            Vinayak’s <span className="text-blue-400">AI Lab</span> 🧪
          </h1>

          <p
            ref={subtitleRef}
            className="text-lg md:text-xl text-gray-300 leading-relaxed"
          >
            Building intelligent systems through experiments, data modeling, and production-grade AI solutions.
          </p>

          <button
            ref={ctaRef}
            onClick={handleScrollToProjects}
            className="mt-6 px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg transition-all hover:bg-blue-600 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-lg shadow-blue-500/30"
          >
            🚀 Explore Lab
          </button>
        </div>

        {/* Right Content (Avatar) */}
        <div className="hidden md:block relative z-10">
          <img
            ref={avatarRef}
            src="/avatar.png"
            alt="Vinayak Scientist"
            className="w-64 md:w-[28rem] max-h-[80vh] object-contain drop-shadow-[0_0_40px_rgba(59,130,246,0.3)]"
          />
        </div>
      </div>



      {/* Scroll Indicator (z-20) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 animate-bounce flex flex-col items-center gap-2 z-20">
        <span className="text-sm font-medium tracking-widest uppercase">Explore</span>
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="19 13l-7 7-7-7m14-8l-7 7-7-7" />
        </svg>
      </div>

    </section>
  );
}

