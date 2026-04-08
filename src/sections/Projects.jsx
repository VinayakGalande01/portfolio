import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../data/content";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const [filter, setFilter] = useState("UX / UI");
  const sectionRef = useRef();

  const categories = ["UX / UI", "LOGO", "APP", "DESIGN", "SEO"];

  const filteredProjects = projects.filter(p => p.category === filter);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-card", {
        y: 60,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        scrollTrigger: {
          trigger: ".project-grid",
          start: "top 80%",
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [filter]);

  return (
    <section 
      id="work" 
      ref={sectionRef}
      className="bg-black text-white px-8 md:px-24 py-32"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-xl font-header text-sm tracking-widest uppercase transition-all border ${
                  filter === cat 
                  ? "bg-white text-black border-white" 
                  : "bg-white/5 text-white/40 border-white/5 hover:border-white/20 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <h2 className="text-5xl font-header leading-[0.8] uppercase tracking-tighter text-right">
             Featured <br/> Projects
          </h2>
        </div>

        <div className="project-grid grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {filteredProjects.map((p, i) => (
            <div key={i} className="project-card group cursor-pointer">
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-white/5 border border-white/10 mb-8">
                <img 
                  src={p.image} 
                  alt={p.name} 
                  className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-125 transition-all duration-700"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-12">
                   <div className="flex gap-4">
                      {p.tech.map(t => (
                        <span key={t} className="text-[10px] font-bold uppercase tracking-widest bg-white/10 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">
                          {t}
                        </span>
                      ))}
                   </div>
                </div>
              </div>
              
              <div className="flex justify-between items-start px-2">
                <div>
                  <h3 className="text-3xl font-header leading-none uppercase tracking-normal mb-3 group-hover:text-primary transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-sm text-muted uppercase tracking-[0.1em]">{p.tech.join(" // ")}</p>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <svg className="w-6 h-6 rotate-[-45deg] group-hover:rotate-0 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 text-center">
            <button className="px-12 py-5 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
               View All Projects
            </button>
        </div>
      </div>
    </section>
  );
}
