import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { testimonials } from "../data/content";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const containerRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".testimonial-card", {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="bg-black text-white px-8 md:px-24 py-32"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <h2 className="text-5xl font-header leading-[0.8] uppercase tracking-tighter">
            What <br/> They Say <br/> <span className="text-stroke">From Our Client</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className="testimonial-card relative bg-white/5 border border-white/10 p-12 rounded-2xl flex flex-col justify-between group hover:border-white/20 transition-all duration-500 overflow-hidden"
            >
              <div className="relative z-10">
                <div className="mb-8 opacity-20 group-hover:opacity-40 transition-opacity">
                  <svg width="40" height="30" viewBox="0 0 40 30" fill="white">
                    <path d="M0 30V15C0 6.66667 6.66667 0 15 0H16.6667V6.66667H15C10.3333 6.66667 6.66667 10.3333 6.66667 15V18.3333H15V30H0ZM23.3333 30V15C23.3333 6.66667 30 0 38.3333 0H40V6.66667H38.3333C33.6667 6.66667 30 10.3333 30 15V18.3333H38.3333V30H23.3333Z" />
                  </svg>
                </div>
                <p className="text-lg md:text-xl font-header leading-snug tracking-tight uppercase">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-12 flex items-center justify-between border-t border-white/5 pt-8">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest">{t.author}</h4>
                  <p className="text-[10px] text-muted uppercase tracking-[0.2em] mt-1">{t.role}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                   <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                </div>
              </div>

              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[80px] pointer-events-none group-hover:opacity-100 opacity-0 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
