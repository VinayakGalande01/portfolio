import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skills } from "../data/content";

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

  // Duplicate skills for a dense, seamless ticker
  const tickerItems = [...skills, ...skills, ...skills, ...skills];

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

      {/* Infinite Tech Stack Ticker */}
      <div className="relative w-full overflow-hidden py-10 border-t border-b border-white/5 bg-white/[0.01]">
        <div className="marquee-track flex items-center">
          {tickerItems.map((skill, i) => (
            <div key={i} className="flex items-center">
              <span className={`text-[clamp(3rem,8vw,6rem)] font-header tracking-tighter px-8 whitespace-nowrap ${
                i % 2 === 0 ? "text-white" : "text-stroke opacity-50"
              }`}>
                {skill.name}
              </span>
              <span className="text-primary text-4xl mx-4">·</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
