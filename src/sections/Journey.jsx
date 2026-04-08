import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../data/content";

gsap.registerPlugin(ScrollTrigger);

export default function Journey() {
  const sectionRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger reveal each word
      gsap.from(".manifesto-word", {
        y: 40,
        opacity: 0,
        stagger: 0.04,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const text = "With years of experience across various industries, my portfolio speaks to the diversity and versatility of my work";

  return (
    <section
      ref={sectionRef}
      className="bg-black text-white py-32 md:py-48 overflow-hidden"
    >
      {/* Manifesto Text */}
      <div className="max-w-[1100px] mx-auto px-6 md:px-20 text-center mb-32">
        <h2 className="text-[clamp(1.8rem,4.5vw,4.2rem)] font-header leading-[1.1] tracking-tight">
          {text.split(" ").map((word, i) => (
            <span
              key={i}
              className={`manifesto-word inline-block mr-[0.25em] ${
                ["industries,", "diversity", "versatility"].some(w => word.toLowerCase().includes(w))
                  ? "text-primary"
                  : ""
              }`}
            >
              {word}
            </span>
          ))}
        </h2>
      </div>

      {/* Infinite Project Marquee */}
      <div className="relative w-full overflow-hidden py-8 border-t border-b border-white/5">
        <div className="marquee-track gap-6">
          {[...projects, ...projects, ...projects, ...projects].map((p, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[320px] md:w-[400px] aspect-video rounded-container overflow-hidden bg-surface border border-white/10 mx-3 group"
            >
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
