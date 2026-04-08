import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "../data/content";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const containerRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".service-row", {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="services"
      className="bg-black text-white px-6 md:px-20 py-32"
    >
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-header leading-[0.95] tracking-tight mb-24">
          What I Offer
        </h2>

        <div className="space-y-0">
          {services.map((s) => (
            <div
              key={s.id}
              className="service-row group grid grid-cols-[60px_1fr] md:grid-cols-[80px_280px_1fr] gap-6 md:gap-12 py-10 border-b border-white/10 items-start cursor-default hover:bg-white/[0.02] transition-colors duration-500 -mx-4 px-4 rounded-lg"
            >
              {/* Index */}
              <span className="text-[clamp(2rem,3vw,3.5rem)] font-header leading-none text-white/20 group-hover:text-primary transition-colors duration-500">
                {s.id}
              </span>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-header tracking-tight leading-tight group-hover:translate-x-2 transition-transform duration-500">
                {s.title}
              </h3>

              {/* Description (hidden on small mobile) */}
              <p className="hidden md:block text-sm text-muted leading-relaxed max-w-md self-center">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
