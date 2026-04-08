import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "../data/content";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const containerRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".service-item", {
        x: -50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
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
      className="bg-black text-white px-8 md:px-24 py-32"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-24">
        <div className="md:w-1/3">
          <h2 className="text-5xl font-header leading-none uppercase tracking-tighter">
            What <br/> I Offer
          </h2>
        </div>

        <div className="md:w-2/3 space-y-16">
          {services.map((s) => (
            <div key={s.id} className="service-item group flex gap-12 border-t border-white/10 pt-12 cursor-default">
              <span className="text-primary font-header text-sm mt-1">{s.id}</span>
              <div className="space-y-4">
                <h3 className="text-2xl font-header uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                  {s.title}
                </h3>
                <p className="text-muted text-sm leading-loose max-w-lg">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
