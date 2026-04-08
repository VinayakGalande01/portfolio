import { useState, useEffect, useRef } from "react";
import { skills } from "../data/content";
import gsap from "gsap";

export default function TechStack() {
  const [active, setActive] = useState(skills[0]);
  const [phaseIndex, setPhaseIndex] = useState(0);
  const sectionRef = useRef();
  const panelRef = useRef();

  useEffect(() => {
    const nodes = sectionRef.current?.querySelectorAll(".skill-row");
    if (nodes?.length) {
      gsap.from(nodes, {
        opacity: 0,
        x: -30,
        stagger: 0.15,
        duration: 0.7,
        ease: "power3.out",
      });
    }
  }, []);

  useEffect(() => {
    setPhaseIndex(skills.findIndex((s) => s.name === active.name));
    if (panelRef.current) {
      gsap.fromTo(
        panelRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [active]);

  return (
    <section
      id="tech"
      ref={sectionRef}
      className="min-h-screen bg-[#0B0D11] text-white flex flex-col items-center justify-center px-6 py-24 border-b border-white/5"
    >
      <div className="w-full max-w-3xl space-y-16">

        {/* Section Header */}
        <div className="space-y-5">
          <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-gray-500 uppercase">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            System Status: Operational
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-none">
            Tech Stack<br />
            <span className="text-blue-500 italic">Refraction</span>
          </h2>
          <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-xl">
            Interfacing with high-precision neural architectures and distributed data pipelines. Select a node to initiate data extraction.
          </p>
        </div>

        {/* Node Selector */}
        <div className="space-y-6">
          <div className="space-y-1">
            <div className="text-[10px] font-bold tracking-widest text-gray-600 uppercase">Input_Nodes</div>
            <h3 className="text-2xl font-bold text-white">Neural Architecture</h3>
          </div>

          <div className="space-y-3">
            {skills.map((skill, i) => (
              <button
                key={i}
                tabIndex={0}
                onClick={() => setActive(skill)}
                onKeyDown={(e) => e.key === "Enter" && setActive(skill)}
                className={`
                  skill-row w-full flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 cursor-pointer group text-left
                  ${active.name === skill.name
                    ? "bg-blue-600/10 border-blue-500/40 shadow-[0_0_25px_rgba(59,130,246,0.15)]"
                    : "bg-white/[0.02] border-white/5 hover:bg-white/[0.04] hover:border-white/10"
                  }
                `}
              >
                {/* Icon */}
                <div className={`
                  w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0 transition-colors
                  ${active.name === skill.name ? "bg-blue-600 shadow-lg" : "bg-white/5"}
                `}>
                  {skill.icon}
                </div>

                {/* Label */}
                <div className="flex-1 min-w-0">
                  <div className="text-base font-bold text-white">{skill.name}</div>
                  <div className="text-[11px] font-semibold tracking-widest text-gray-500 uppercase truncate">{skill.subtitle}</div>
                </div>

                {/* Arrow */}
                <svg className={`w-5 h-5 shrink-0 transition-colors ${active.name === skill.name ? "text-blue-400" : "text-gray-600"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            ))}
          </div>
        </div>

        {/* Extraction Panel */}
        <div ref={panelRef} className="bg-white/[0.03] border border-white/5 rounded-3xl p-8 space-y-8 backdrop-blur-sm">

          {/* Phase Header */}
          <div className="flex items-center justify-between">
            <div className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">
              Extraction_Phase: {String(phaseIndex + 1).padStart(2, "0")}
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-1 text-[10px] font-black tracking-wider uppercase bg-blue-600 text-white rounded-md">Point</span>
              <span className="px-3 py-1 text-[10px] font-black tracking-wider uppercase bg-blue-600 text-white rounded-md">Over</span>
            </div>
          </div>

          {/* Name & Version */}
          <div>
            <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight">{active.name}</h3>
            <div className="text-2xl font-bold text-gray-500 mt-1">{active.version}</div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-[10px] font-bold tracking-widest text-gray-600 uppercase mb-1">Efficiency</div>
              <div className="text-xl font-black text-white">{active.efficiency}</div>
            </div>
            <div>
              <div className="text-[10px] font-bold tracking-widest text-gray-600 uppercase mb-1">Compatibility</div>
              <div className="text-xl font-black text-white">{active.compatibility}</div>
            </div>
            <div>
              <div className="text-[10px] font-bold tracking-widest text-gray-600 uppercase mb-1">Deployment</div>
              <div className="text-xl font-black text-white">{active.deployment}</div>
            </div>
            <div>
              <div className="text-[10px] font-bold tracking-widest text-gray-600 uppercase mb-1">Runtime</div>
              <div className="text-xl font-black text-white">{active.runtime}</div>
            </div>
          </div>

          {/* Operational Brief */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-1 h-4 bg-blue-500 rounded-full"></div>
              <span className="text-[11px] font-black tracking-widest text-gray-400 uppercase">Operational Brief</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">{active.brief}</p>
          </div>

          {/* Core Integration Tags */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-1 h-4 bg-blue-500 rounded-full"></div>
              <span className="text-[11px] font-black tracking-widest text-gray-400 uppercase">Core Integration</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {active.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-4 py-2 text-xs font-bold tracking-wider text-white bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* System Command */}
          <div className="text-center pt-2">
            <div className="text-[9px] font-bold tracking-widest text-gray-600 uppercase">System_Command</div>
          </div>
        </div>

        {/* Bottom Nav Bar */}
        <div className="flex flex-col items-center gap-8">
          <nav className="flex items-center justify-center p-1.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] shadow-2xl">
            <button className="p-5 hover:bg-white/10 rounded-2xl transition-all hover:scale-110 active:scale-95">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
            </button>
            <button className="p-5 bg-blue-600 rounded-2xl border border-blue-400 text-white shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-transform hover:scale-110 active:scale-95">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"/></svg>
            </button>
            <button className="p-5 hover:bg-white/10 rounded-2xl transition-all hover:scale-110 active:scale-95">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z"/></svg>
            </button>
            <button className="p-5 hover:bg-white/10 rounded-2xl transition-all hover:scale-110 active:scale-95">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            </button>
          </nav>

          {/* Section Footer */}
          <div className="text-center space-y-4 opacity-30">
            <div className="text-[11px] font-black tracking-[0.5em] text-blue-200 uppercase italic">Obsidian Laboratory</div>
            <div className="text-[9px] font-medium tracking-[0.15em] text-gray-500 uppercase">© 2024 Data Refraction System</div>
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
