import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const containerRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-reveal", {
        y: 50,
        opacity: 0,
        stagger: 0.12,
        duration: 1.4,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={containerRef}
      id="contact"
      className="bg-black text-white px-6 md:px-20 pt-32 pb-12"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Main CTA area */}
        <div className="text-center mb-32">
          <p className="contact-reveal text-[11px] font-semibold text-muted uppercase tracking-[0.3em] mb-8">
            Let's work together
          </p>

          <h2 className="contact-reveal text-[clamp(2.5rem,8vw,7rem)] font-header leading-[0.9] tracking-tight mb-10">
            Got a project <br />
            <span className="text-muted">in mind?</span>
          </h2>

          <a
            href="mailto:vinayakpgalande90@gmail.com"
            data-hover
            className="contact-reveal inline-flex items-center gap-4 bg-white text-black px-10 py-4 rounded-full text-[12px] font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-500"
          >
            Get in Touch
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        {/* Large email */}
        <div className="contact-reveal text-center mb-24">
          <a
            href="mailto:vinayakpgalande90@gmail.com"
            className="text-[clamp(1rem,3.5vw,2.5rem)] font-header tracking-tight text-muted hover:text-primary transition-colors duration-500 break-all"
          >
            vinayakpgalande90@gmail.com
          </a>
        </div>

        {/* Bottom bar */}
        <div className="contact-reveal flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/10 pt-8">
          <div className="flex gap-8">
            {["LinkedIn", "GitHub", "Behance", "Medium"].map(link => (
              <a
                key={link}
                href="#"
                className="text-[11px] font-semibold text-muted uppercase tracking-widest hover:text-white transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>

          <p className="text-[11px] text-muted/60 uppercase tracking-widest">
            © 2024 Vinayak Galande. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
