import { useState, useEffect } from "react";
import { projects } from "../data/content";
import gsap from "gsap";

export default function Projects() {
  const [active, setActive] = useState(projects[0]);

  useEffect(() => {
    const items = document.querySelectorAll(".beaker");

    gsap.from(items, {
      opacity: 0,
      y: 40,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.out",
    });
  }, []);

  return (
    <section id="projects" className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-10">

        {/* Beaker Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((proj, i) => (
            <div
              key={i}
              tabIndex={0}
              onClick={() => setActive(proj)}
              onKeyDown={(e) => e.key === "Enter" && setActive(proj)}
              className={`
                beaker relative w-24 h-32 border border-gray-500 rounded-lg cursor-pointer flex items-end justify-center overflow-hidden transition-all
                ${active.name === proj.name ? "border-blue-500 scale-105 shadow-lg shadow-blue-500/30" : "hover:border-gray-400"}
              `}
            >
              {/* Liquid Fill */}
              <div
                className="w-full bg-gradient-to-t from-blue-600 to-blue-400 opacity-80 transition-all duration-700 ease-in-out"
                style={{ height: `${proj.level}%` }}
              />

              {/* Label */}
              <span className="absolute bottom-2 text-[10px] font-bold tracking-tighter text-white drop-shadow-md px-1">
                {proj.name}
              </span>
            </div>
          ))}
        </div>

        {/* Info Panel */}
        <div className="max-w-md text-center md:text-left bg-gray-900/50 p-8 rounded-2xl border border-white/5 backdrop-blur-sm shadow-xl shadow-blue-500/10">
          <h2 className="text-3xl font-bold text-white drop-shadow-sm">{active.name}</h2>
          <p className="mt-4 text-gray-300 leading-relaxed font-medium">{active.desc}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {active.tech.map((t, i) => (
              <span key={i} className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full text-xs font-semibold">
                {t}
              </span>
            ))}
          </div>

          <button className="mt-8 flex items-center gap-2 text-blue-400 font-bold hover:text-blue-300 transition-colors group">
            View Project <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>

      </div>
    </section>
  );
}
