import { useEffect, useRef } from "react";
import { projects } from "../data/content";
import gsap from "gsap";

export default function Projects() {
  const sectionRef = useRef();

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll(".project-card");
    if (cards?.length) {
      gsap.from(cards, {
        opacity: 0,
        y: 40,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      });
    }
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="min-h-screen bg-[#0B0D11] text-white flex flex-col items-center justify-center px-6 py-24 border-b border-white/5"
    >
      <div className="w-full max-w-3xl space-y-16">

        {/* Section Header */}
        <div className="space-y-5">
          <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-gray-500 uppercase">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            System Status: Active // Lab_042
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-none">
            Projects_<span className="text-blue-500 italic">Refra</span>
          </h2>
          <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-xl">
            Observation of experimental computational models. Each specimen is quantified by its fill level, representing the relative complexity of its neural architecture.
          </p>
        </div>

        {/* Project Cards */}
        <div className="space-y-6">
          {projects.map((proj, i) => (
            <div
              key={i}
              className="project-card bg-white/[0.02] border border-white/5 rounded-2xl p-6 md:p-8 space-y-5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
            >
              {/* Apparatus Label */}
              <div className="text-[10px] font-bold tracking-widest text-gray-600 uppercase">
                Apparatus_{proj.apparatus}
              </div>

              {/* Project Name */}
              <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                {proj.name}
              </h3>

              {/* Complexity Bar + Beaker Visual */}
              <div className="flex items-center gap-6">
                {/* Left: Complexity Info */}
                <div className="flex-1 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold tracking-widest text-gray-600 uppercase">
                      Complexity_Level
                    </span>
                    <span className="text-xs font-black text-gray-400">
                      {proj.complexityLabel}
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${proj.level}%` }}
                    ></div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-400 leading-relaxed mt-4">
                    {proj.desc}
                  </p>

                  {/* View Project Button */}
                  <button className="mt-4 flex items-center gap-3 px-6 py-3 bg-blue-600 text-white text-sm font-black tracking-wider uppercase rounded-xl hover:bg-blue-500 hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_20px_rgba(37,99,235,0.25)]">
                    View Project
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>

                {/* Right: Beaker Visual */}
                <div className="hidden md:flex flex-col items-center shrink-0">
                  <div className="relative w-20 h-36 border border-white/10 rounded-xl bg-white/[0.02] overflow-hidden">
                    {/* Liquid Fill */}
                    <div
                      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-600 via-blue-500 to-blue-400/60 transition-all duration-1000 ease-out rounded-b-lg"
                      style={{ height: `${proj.level}%` }}
                    >
                      {/* Surface shimmer */}
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-blue-300/40"></div>
                    </div>
                    {/* Grid lines */}
                    <div className="absolute inset-0 flex flex-col justify-evenly pointer-events-none">
                      {[...Array(4)].map((_, j) => (
                        <div key={j} className="w-full h-[1px] bg-white/5"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Refractive Indexing Analysis */}
        <div className="bg-white/[0.03] border border-white/5 rounded-3xl p-8 space-y-6 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <div className="w-1 h-4 bg-blue-500 rounded-full"></div>
            <span className="text-[11px] font-black tracking-widest text-gray-400 uppercase">Critical_Report</span>
          </div>

          <h3 className="text-3xl font-black text-white tracking-tight">
            Refractive Indexing<br />Analysis
          </h3>

          <p className="text-sm text-gray-400 leading-relaxed">
            Current experiments indicate a 12.4% increase in tensor extraction throughput when using obsidian core stabilization. All specimens show a symmetric diverging stress loading in environment UV-8.
          </p>

          <button className="flex items-center gap-3 px-8 py-4 bg-blue-600 text-white text-sm font-black tracking-wider uppercase rounded-2xl hover:bg-blue-500 hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)]">
            Analyze_Results
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

        {/* Bottom Nav Bar + Footer */}
        <div className="flex flex-col items-center gap-8">
          <nav className="flex items-center justify-center p-1.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] shadow-2xl">
            <button className="p-5 hover:bg-white/10 rounded-2xl transition-all hover:scale-110 active:scale-95">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
            </button>
            <button className="p-5 hover:bg-white/10 rounded-2xl transition-all hover:scale-110 active:scale-95">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
            </button>
            <button className="p-5 bg-blue-600 rounded-2xl border border-blue-400 text-white shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-transform hover:scale-110 active:scale-95">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" /></svg>
            </button>
            <button className="p-5 hover:bg-white/10 rounded-2xl transition-all hover:scale-110 active:scale-95">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </button>
          </nav>

          <div className="text-center space-y-4 opacity-30">
            <div className="text-[11px] font-black tracking-[0.5em] text-blue-200 uppercase italic">Obsidian Labs v4.2.8</div>
          </div>
          <div className="flex gap-10 text-[10px] font-bold tracking-widest uppercase opacity-30">
            <a href="#" className="hover:text-blue-400 transition-colors">Terminal</a>
            <a href="#" className="hover:text-blue-400 transition-colors">System_Logs</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Encrypt</a>
          </div>
        </div>

      </div>
    </section>
  );
}
