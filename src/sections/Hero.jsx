import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../data/content";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const containerRef = useRef();
  const archRef = useRef();
  const cursorRef = useRef();

  useEffect(() => {
    // Custom Cursor logic
    const xSet = gsap.quickSetter(cursorRef.current, "x", "px");
    const ySet = gsap.quickSetter(cursorRef.current, "y", "px");
    const moveCursor = (e) => {
      xSet(e.clientX);
      ySet(e.clientY);
    };
    window.addEventListener("mousemove", moveCursor);

    // Entrance Animation
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(".reveal", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power4.out",
      })
      .from(archRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
      }, "-=0.8")
      .from(".mockup-strip img", {
        x: 100,
        opacity: 0,
        stagger: 0.05,
        duration: 1,
        ease: "power2.out"
      }, "-=0.5");

      // Auto-scrolling effect for strip
      gsap.to(".mockup-strip-track", {
        xPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1
        }
      });
    }, containerRef);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      ctx.revert();
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      gsap.to(".menu-overlay", { x: 0, duration: 0.8, ease: "expo.inOut" });
      gsap.from(".menu-link", { y: 50, opacity: 0, stagger: 0.1, delay: 0.4 });
    } else {
      gsap.to(".menu-overlay", { x: "100%", duration: 0.8, ease: "expo.inOut" });
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen bg-black text-white flex flex-col items-center pt-32 overflow-hidden"
    >
      {/* Custom Cursor */}
      <div ref={cursorRef} className="custom-cursor hidden md:block"></div>

      {/* Header / Nav */}
      <nav className="absolute top-0 left-0 w-full p-8 flex justify-between items-center z-50">
        <div className="text-xl font-header tracking-tighter uppercase cursor-pointer">
          Vinayak.
        </div>
        <button 
          onClick={toggleMenu}
          className="w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-all z-50"
        >
          <span className={`text-2xl transition-transform duration-500 ${menuOpen ? 'rotate-45' : 'rotate-0'}`}>
            +
          </span>
        </button>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <h1 className="reveal hero-title font-header mb-8">
          Vinayak Galande
        </h1>

        <div 
          ref={archRef}
          className="reveal w-[220px] h-[280px] md:w-[320px] md:h-[420px] arch-container bg-white/5 border border-white/10 relative -mt-16 md:-mt-24 z-20 shadow-2xl"
        >
          <img 
            src="/avatar.png" 
            alt="Vinayak Portrait" 
            className="w-full h-full object-cover grayscale brightness-90"
          />
        </div>

        <div className="reveal mt-8 space-y-6 flex flex-col items-center max-w-lg">
           <p className="text-[12px] md:text-[14px] font-header tracking-wider uppercase leading-snug">
             I'm Vinayak, Crafting AI-powered systems that solve real-world problems.
           </p>

           <button className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-primary hover:text-white transition-all group">
             <span>Confirm Your Seat</span>
             <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
             </svg>
           </button>
        </div>
      </div>

      {/* Project Strip Belt */}
      <div className="mockup-strip w-full mt-24 mb-12 overflow-hidden relative py-10 opacity-30 hover:opacity-100 transition-opacity">
        <div className="mockup-strip-track flex gap-8 whitespace-nowrap min-w-max px-8">
           {[...projects, ...projects].map((p, i) => (
             <div key={i} className="w-[300px] aspect-video rounded-xl overflow-hidden border border-white/10 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-700">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
             </div>
           ))}
        </div>
      </div>

      {/* Full-screen Menu Overlay */}
      <div className="menu-overlay fixed inset-0 bg-white text-black z-[100] translate-x-full px-12 py-32 flex flex-col justify-between">
        <div className="flex flex-col gap-8">
          {["Work", "Manifesto", "Lab", "Contact"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              onClick={toggleMenu}
              className="menu-link text-[12vw] font-header leading-none uppercase tracking-tighter hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="flex justify-between items-end border-t border-black/10 pt-8">
          <div className="text-[10px] font-bold uppercase tracking-widest">© 2024 Vinayak.</div>
          <div className="flex gap-6 uppercase text-[10px] font-bold tracking-widest">
            <a href="#" className="hover:underline">LinkedIn</a>
            <a href="#" className="hover:underline">GitHub</a>
            <a href="#" className="hover:underline">X</a>
          </div>
        </div>
      </div>
    </section>
  );
}
