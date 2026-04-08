import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Journey() {
  const sectionRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".manifesto-word", {
        y: 40,
        opacity: 0.1,
        stagger: 0.05,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 60%",
          scrub: 1,
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const text = "WITH YEARS OF EXPERIENCE ACROSS VARIOUS INDUSTRIES. MY PORTFOLIO SPEAKS TO THE DIVERSITY AND VERSATILITY OF MY WORK";

  return (
    <section 
      ref={sectionRef} 
      id="manifesto" 
      className="relative min-h-screen bg-black text-white flex items-center justify-center px-6 py-32 overflow-hidden"
    >
      <div className="max-w-6xl text-center">
        <h2 className="text-[5vw] md:text-[6.5vw] font-header leading-[1] uppercase tracking-tighter">
          {text.split(" ").map((word, i) => (
            <span key={i} className="manifesto-word inline-block mr-[0.2em] whitespace-nowrap">
              {word}
            </span>
          ))}
        </h2>
      </div>

      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-white/5 rounded-full blur-[150px] pointer-events-none"></div>
    </section>
  );
}
