import { useState, useEffect } from "react";
import { skills } from "../data/content";
import gsap from "gsap";

export default function TechStack() {
  const [active, setActive] = useState(skills[0]);

  useEffect(() => {
    const nodes = document.querySelectorAll(".skill-node");

    gsap.from(nodes, {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.out",
    });
  }, []);

  return (
    <section id="tech" className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-10">

        {/* Funnel (Left) */}
        <div className="flex flex-col items-center gap-6">
          {skills.map((skill, i) => (
            <div
              key={i}
              tabIndex={0}
              onClick={() => setActive(skill)}
              onKeyDown={(e) => e.key === "Enter" && setActive(skill)}
              className={`
                skill-node w-16 h-16 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 border-2 font-bold text-xl
                ${active.name === skill.name ? "bg-blue-600 border-blue-400 scale-110 shadow-[0_0_20px_rgba(59,130,246,0.5)]" : "bg-gray-800 border-gray-700 hover:border-gray-500"}
              `}
            >
              {skill.name[0]}
            </div>
          ))}
        </div>

        {/* Info Panel (Right) */}
        <div className="max-w-lg text-center md:text-left bg-gray-900/40 p-8 rounded-2xl border border-white/5 backdrop-blur-sm">
          <h2 className="text-4xl font-extrabold text-white tracking-tight">{active.name}</h2>
          <div className="w-12 h-1 bg-blue-500 mt-2 mb-6 rounded-full mx-auto md:mx-0"></div>
          <p className="text-xl text-gray-300 leading-relaxed max-w-md italic">
            "{active.desc}"
          </p>
        </div>

      </div>
    </section>
  );
}
