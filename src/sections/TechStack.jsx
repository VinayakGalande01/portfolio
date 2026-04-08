import { useEffect, useRef } from "react";
import { skills } from "../data/content";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TechStack() {
  const sectionRef = useRef();

  useEffect(() => {
    const listItems = sectionRef.current?.querySelectorAll(".skill-item");
    if (listItems?.length) {
      gsap.from(listItems, {
        opacity: 0,
        x: -50,
        stagger: 0.1,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      });
    }
  }, []);

  return (
    <section
      id="lab"
      ref={sectionRef}
      className="bg-black text-white px-8 py-32 font-body"
    >
      <div className="w-full max-w-5xl mx-auto">
        <div className="mb-24 space-y-4">
          <div className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary">Technical Stack</div>
          <h2 className="text-[8vw] font-header uppercase leading-none tracking-tighter">
            Tools.
          </h2>
        </div>

        <div className="flex flex-col gap-1">
          {skills.map((skill, i) => (
            <div 
              key={i}
              className="skill-item group flex flex-col md:flex-row md:items-center justify-between py-12 border-b border-white/10 hover:border-primary transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-12">
                <span className="text-muted font-bold text-xs uppercase tracking-widest">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="text-5xl md:text-7xl font-header uppercase tracking-tight group-hover:translate-x-4 transition-transform duration-500">
                  {skill.name}
                </h3>
              </div>

              <div className="mt-8 md:mt-0 flex flex-wrap gap-4 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {skill.tags.map((tag, index) => (
                  <span key={index} className="text-[10px] uppercase font-bold tracking-widest px-4 py-2 border border-white/20 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="hidden md:block text-right">
                <div className="text-[10px] font-bold uppercase tracking-widest text-muted mb-1">{skill.subtitle}</div>
                <div className="text-xl font-header uppercase tracking-tight text-white">{skill.efficiency}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 bg-white/[0.03] border border-white/10 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="space-y-4">
             <h4 className="text-2xl font-header uppercase tracking-tight">Need a custom system?</h4>
             <p className="text-sm text-muted max-w-sm">I specialize in engineering high-fidelity interfaces and automated design workflows from the ground up.</p>
           </div>
           <button className="px-12 py-5 bg-primary text-black font-header uppercase tracking-widest rounded-full hover:scale-110 active:scale-95 transition-transform">
             Initiate Project
           </button>
        </div>
      </div>
    </section>
  );
}
