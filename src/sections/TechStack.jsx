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
        <div className="flex flex-col items-center gap-4">
          {skills.map((skill, i) => (
            <div
              key={i}
              tabIndex={0}
              onClick={() => setActive(skill)}
              onKeyDown={(e) => e.key === "Enter" && setActive(skill)}
              className={`
                skill-node w-14 h-14 rounded-full flex items-center justify-center cursor-pointer transition
                ${active.name === skill.name ? "bg-blue-600 scale-110 shadow-2xl" : "bg-blue-500"}
              `}
            >
              {skill.name[0]}
            </div>
          ))}
        </div>

        {/* Info Panel (Right) */}
        <div className="max-w-md text-center md:text-left">
          <h2 className="text-3xl font-bold">{active.name}</h2>
          <p className="mt-4 text-gray-300">{active.desc}</p>
        </div>

      </div>
    </section>
  );
}
