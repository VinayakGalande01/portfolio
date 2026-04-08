import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../data/content";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const sectionRef = useRef();
  const gridRef = useRef();

  const categories = ["ALL", "UX / UI", "APP", "DESIGN", "LOGO"];

  const filtered = activeFilter === "ALL"
    ? projects
    : projects.filter(p => p.category === activeFilter);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-card", {
        y: 50,
        opacity: 0,
        stagger: 0.12,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [activeFilter]);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="bg-black text-white px-6 md:px-20 py-32"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Header row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-20">
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-header leading-[0.95] tracking-tight">
            Featured <br /> Projects
          </h2>

          {/* Filter pills */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-[11px] font-semibold uppercase tracking-widest transition-all duration-500 border ${
                  activeFilter === cat
                    ? "bg-white text-black border-white"
                    : "bg-transparent text-muted border-white/10 hover:border-white/30 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div
          ref={gridRef}
          className="bento-grid grid grid-cols-1 bento:grid-cols-2 gap-8"
        >
          {filtered.map((p, i) => (
            <div
              key={`${activeFilter}-${i}`}
              className="project-card group cursor-pointer"
              data-hover
            >
              <figure className="relative aspect-[4/5] overflow-hidden rounded-container bg-surface border border-white/10">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-[1.03] group-hover:brightness-110 transition-all duration-700"
                  loading="lazy"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div className="flex gap-3">
                    {p.tech.map(t => (
                      <span
                        key={t}
                        className="text-[10px] font-semibold uppercase tracking-widest bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </figure>

              <figcaption className="mt-6 flex justify-between items-center px-1">
                <div>
                  <h3 className="text-xl font-header tracking-tight group-hover:text-primary transition-colors duration-500">
                    {p.name}
                  </h3>
                  <p className="text-[12px] text-muted mt-1 tracking-wide">
                    {p.desc}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                  <svg className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </figcaption>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
