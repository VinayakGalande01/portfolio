import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef();
  const titleRef = useRef();
  const subtitleRef = useRef();
  const ctaRef = useRef();
  const avatarRef = useRef();
  const tiltRef = useRef();
  const eyeLeftRef = useRef();
  const eyeRightRef = useRef();

  useEffect(() => {
    // Reduced motion check
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!prefersReducedMotion) {
      const tl = gsap.timeline();

      // Intro sequence - Ensure elements are handled even if they take a moment to render
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
        scale: 0.8,
        duration: 1,
        ease: "back.out(1.7)",
      }, "-=0.8");

      // Mouse tracking logic (Neck & Eyes)
      const handleMouseMove = (e) => {
        if (!tiltRef.current || !eyeLeftRef.current || !eyeRightRef.current) return;

        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        
        const xPercent = (clientX / innerWidth) - 0.5;
        const yPercent = (clientY / innerHeight) - 0.5;

        // Neck tilt (container)
        gsap.to(tiltRef.current, {
          rotateY: xPercent * 15,
          rotateX: -yPercent * 12,
          duration: 0.8,
          ease: "power2.out"
        });

        // Eyes movement tracking (constrained within head area)
        const eyeX = xPercent * 14;
        const eyeY = yPercent * 12;
        
        gsap.to([eyeLeftRef.current, eyeRightRef.current], {
          x: eyeX,
          y: eyeY,
          duration: 0.6,
          ease: "power1.out"
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  const handleScrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-between py-12 px-6 bg-[#0B0D11] text-white overflow-hidden border-b border-white/5"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-500/5 blur-[120px] pointer-events-none"></div>

      {/* Header Dashboard Element */}
      <header className="w-full max-w-6xl flex items-center justify-between z-30 mb-8 opacity-90 border-b border-white/5 pb-6 px-4">
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="p-2.5 border border-blue-500/40 rounded-lg bg-blue-500/10 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
            <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M12 3v18m9-9H3m14.5-5.5l-11 11m11 0l-11-11" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <span className="text-2xl font-black tracking-[0.25em] text-blue-50 uppercase group-hover:text-white transition-colors">Obsidian Labs</span>
        </div>
        <div className="flex items-center gap-8">
          <button className="text-gray-400 hover:text-blue-400 transition-colors"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg></button>
          <button className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer"><svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/></svg></button>
        </div>
      </header>

      {/* Center Dashboard Viewport */}
      <div className="flex flex-col items-center justify-center flex-1 w-full max-w-5xl z-20 space-y-12">
        
        {/* Active Node Badge */}
        <div className="flex items-center gap-3 px-5 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-[11px] font-black text-blue-400 tracking-widest uppercase shadow-[0_0_20px_rgba(59,130,246,0.2)]">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          System Status: Active // Lab_042
        </div>

        {/* Central Avatar Visualizer */}
        <div className="relative z-10 [perspective:1200px] py-4">
          <div ref={tiltRef} className="relative group">
            {/* Global Aura */}
            <div className="absolute inset-0 bg-blue-600/10 blur-[80px] rounded-full scale-150 opacity-30 pointer-events-none"></div>
            
            <img
              ref={avatarRef}
              src="/avatar.png"
              alt="Vinayak Scientist"
              className="w-56 md:w-[320px] h-auto object-contain relative z-10 drop-shadow-[0_0_50px_rgba(59,130,246,0.25)] transition-transform duration-500"
            />
            
            {/* Focal Point Eyes - aligned to robot mascot face */}
            <div 
              ref={eyeLeftRef} 
              className="absolute w-[6px] h-[6px] bg-white/90 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)] z-20"
              style={{ top: '38%', left: '45%' }}
            ></div>
            <div 
              ref={eyeRightRef} 
              className="absolute w-[6px] h-[6px] bg-white/90 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)] z-20"
              style={{ top: '38%', left: '53%' }}
            ></div>
          </div>
        </div>

        {/* Console Readout */}
        <div className="text-center space-y-8 max-w-3xl">
          <div className="flex items-center justify-center gap-3 text-[11px] font-bold tracking-[0.5em] text-blue-500 opacity-80 uppercase">
            Initializing Lab Protocol <span className="animate-pulse">🧪</span>
          </div>
          
          <h1
            ref={titleRef}
            className="text-6xl md:text-[7rem] font-black leading-tight text-white tracking-tight drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]"
          >
            Vinayak’s <span className="text-blue-500">AI</span> <br/>
            <span className="text-white">Lab</span> <span className="inline-block animate-bounce text-4xl md:text-6xl">🧪</span>
          </h1>

          <p
            ref={subtitleRef}
            className="text-base md:text-xl text-gray-400 font-medium max-w-2xl mx-auto leading-relaxed px-6 opacity-90"
          >
            Synthesizing next-generation neural architectures and recursive data models in a vacuum of high-precision innovation.
          </p>
        </div>

        {/* Executive Action */}
        <button
          ref={ctaRef}
          onClick={handleScrollToProjects}
          className="group relative px-14 py-6 bg-blue-600 text-white font-black rounded-[2rem] transition-all hover:bg-blue-500 hover:scale-105 active:scale-95 shadow-[0_0_50px_rgba(37,99,235,0.4)] overflow-hidden border border-blue-400/30"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
          <span className="flex items-center gap-5 text-xl tracking-[0.15em] uppercase relative z-10">
            Initiate Sequence <svg className="w-7 h-7 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </span>
        </button>
      </div>

      {/* Telemetry Footer */}
      <footer className="w-full max-w-6xl z-30 flex flex-col items-center gap-10 mt-16 pb-4">
        {/* Live Diagnostics */}
        <div className="flex flex-wrap justify-center gap-x-16 gap-y-6 opacity-60">
          <div className="flex items-center gap-3 text-[11px] font-bold tracking-[0.25em] uppercase group cursor-default">
            <svg className="w-5 h-5 text-blue-500 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
            System: <span className="text-white">Optimized</span>
          </div>
          <div className="flex items-center gap-3 text-[11px] font-bold tracking-[0.25em] uppercase group cursor-default">
            <svg className="w-5 h-5 text-blue-500 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            Neural_Load: <span className="text-white">Stable</span>
          </div>
          <div className="flex items-center gap-3 text-[11px] font-bold tracking-[0.25em] uppercase group cursor-default">
            <svg className="w-5 h-5 text-blue-500 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            Latency: <span className="text-white">0.2ms</span>
          </div>
        </div>

        {/* Global Nav Control */}
        <nav className="flex items-center justify-center p-1.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] shadow-2xl">
          <button className="p-5 bg-blue-600 rounded-2xl border border-blue-400 text-white shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-transform hover:scale-110 active:scale-95"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z"/></svg></button>
          <button className="p-5 hover:bg-white/10 rounded-2xl transition-all hover:scale-110 active:scale-95"><svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg></button>
          <button className="p-5 hover:bg-white/10 rounded-2xl transition-all hover:scale-110 active:scale-95"><svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/></svg></button>
          <button className="p-5 hover:bg-white/10 rounded-2xl transition-all hover:scale-110 active:scale-95"><svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg></button>
        </nav>

        {/* Registry Footer */}
        <div className="text-center space-y-5 opacity-30 mt-4">
          <div className="text-[11px] font-black tracking-[0.5em] text-blue-200 uppercase italic">Obsidian Laboratory // Data Refraction</div>
          <div className="flex gap-10 text-[10px] font-bold tracking-widest uppercase justify-center">
            <a href="#" className="hover:text-blue-400 transition-colors">Terminal</a>
            <a href="#" className="hover:text-blue-400 transition-colors">System_Logs</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Encrypt</a>
          </div>
          <div className="text-[9px] font-medium tracking-[0.15em] text-gray-500 uppercase">© 2024 Vinayak AI Lab. All rights reserved.</div>
        </div>
      </footer>

      {/* Lateral UI Decorations */}
      <div className="absolute top-1/2 right-12 -translate-y-1/2 flex flex-col items-center gap-12 opacity-10 hidden xl:flex">
        <div className="w-[1.5px] h-48 bg-gradient-to-b from-transparent via-blue-400 to-transparent"></div>
        <span className="text-[12px] font-black tracking-[0.8em] rotate-90 uppercase text-blue-100">Lab_Protocol_v042</span>
        <div className="w-[1.5px] h-48 bg-gradient-to-b from-transparent via-blue-400 to-transparent"></div>
      </div>

    </section>
  );
}
