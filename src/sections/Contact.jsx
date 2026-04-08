import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const containerRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-email", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer 
      ref={containerRef}
      id="contact"
      className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center pt-32 pb-12 overflow-hidden px-8"
    >
      <div className="relative z-10 text-center flex flex-col items-center">
        <h2 className="text-8xl md:text-[12rem] font-header leading-none uppercase tracking-tighter mb-12">
          Contact
        </h2>
        
        {/* Arched Footer Image */}
        <div className="w-[300px] h-[380px] md:w-[450px] md:h-[580px] arch-container bg-primary/20 relative z-20 overflow-hidden shadow-[0_-50px_100px_-20px_rgba(255,77,0,0.2)]">
           <img 
            src="/avatar.png" 
            alt="Contact Portrait" 
            className="w-full h-full object-cover grayscale brightness-75 hover:brightness-100 transition-all duration-1000"
           />
        </div>

        {/* Massive Overlapping Email */}
        <div className="footer-email relative -mt-32 md:-mt-52 z-30">
          <a 
            href="mailto:vinayakpgalande90@gmail.com" 
            className="text-[8vw] md:text-[8vw] font-header leading-[0.8] tracking-tighter uppercase whitespace-nowrap hover:text-primary transition-colors"
          >
            vinayakpgalande90@gmail.com
          </a>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-center gap-12 mt-32 border-t border-white/10 pt-12 relative z-40">
        <div className="flex gap-8 uppercase text-[10px] font-bold tracking-[0.3em]">
          <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-primary transition-colors">GitHub</a>
          <a href="#" className="hover:text-primary transition-colors">Medium</a>
          <a href="#" className="hover:text-primary transition-colors">Behance</a>
        </div>

        <div className="text-[10px] uppercase font-bold tracking-widest opacity-40">
           © 2024 Design by Vinayak. Made with Passion.
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-gradient-to-t from-primary/10 to-transparent pointer-events-none"></div>
    </footer>
  );
}
