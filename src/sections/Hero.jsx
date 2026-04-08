import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef();
  const cursorRef = useRef();
  const cursorPos = useRef({ x: 0, y: 0 });
  const targetPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Track target position
    const onMouseMove = (e) => {
      targetPos.current.x = e.clientX;
      targetPos.current.y = e.clientY;
    };

    // Lerp-based cursor with inertia (0.1 factor)
    const lerp = (start, end, factor) => start + (end - start) * factor;
    let raf;
    const animate = () => {
      cursorPos.current.x = lerp(cursorPos.current.x, targetPos.current.x, 0.1);
      cursorPos.current.y = lerp(cursorPos.current.y, targetPos.current.y, 0.1);
      gsap.set(cursor, {
        x: cursorPos.current.x,
        y: cursorPos.current.y,
      });
      raf = requestAnimationFrame(animate);
    };
    animate();

    // Cursor hover scale on interactive elements
    const interactiveEls = document.querySelectorAll("a, button, [data-hover]");
    const onEnter = () => cursor.classList.add("hovering");
    const onLeave = () => cursor.classList.remove("hovering");
    interactiveEls.forEach(el => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    window.addEventListener("mousemove", onMouseMove);

    // Scroll reveal via IntersectionObserver
    const revealEls = document.querySelectorAll(".reveal-element");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    revealEls.forEach(el => observer.observe(el));

    // Hero entrance animation
    const ctx = gsap.context(() => {
      gsap.from(".hero-text > *", {
        y: 60,
        opacity: 0,
        duration: 1.4,
        stagger: 0.15,
        ease: "expo.out",
        delay: 0.3,
      });
      gsap.from(".hero-image", {
        scale: 0.9,
        opacity: 0,
        duration: 1.6,
        ease: "power4.out",
        delay: 0.5,
      });
    }, containerRef);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(raf);
      interactiveEls.forEach(el => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
      observer.disconnect();
      ctx.revert();
    };
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <div ref={cursorRef} className="custom-cursor hidden md:block" />

      {/* Sticky Navigation */}
      <nav className="nav-sticky px-6 md:px-20 py-5 flex justify-between items-center">
        <a href="#" className="text-lg font-header tracking-tight">
          VINAYAK
        </a>
        <div className="hidden md:flex items-center gap-10">
          {["About", "Projects", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[13px] font-medium text-muted hover:text-white transition-opacity duration-300 uppercase tracking-widest"
            >
              {link}
            </a>
          ))}
        </div>
        {/* Mobile menu icon */}
        <button className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5">
          <span className="w-6 h-[1.5px] bg-white"></span>
          <span className="w-4 h-[1.5px] bg-white"></span>
        </button>
      </nav>

      {/* Hero Section */}
      <section
        ref={containerRef}
        id="about"
        className="min-h-screen bg-black text-white flex items-center px-6 md:px-20 pt-24 pb-20"
      >
        <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left: Text */}
          <div className="hero-text flex flex-col gap-8 order-2 md:order-1">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-[11px] font-semibold text-muted uppercase tracking-[0.2em]">
                Available for work
              </span>
            </div>

            <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-header leading-[0.95] tracking-tight">
              I Craft <br />
              <span className="text-muted">AI-Powered</span> <br />
              Digital Systems
            </h1>

            <p className="text-base text-muted max-w-md leading-relaxed">
              Blending artificial intelligence with premium design to build
              digital products that are both intelligent and beautiful.
            </p>

            <div className="flex items-center gap-6 mt-4">
              <a
                href="#contact"
                data-hover
                className="inline-flex items-center gap-3 bg-white text-black px-7 py-3.5 rounded-full text-[12px] font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-500"
              >
                Let's Talk
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a
                href="#work"
                className="text-[12px] font-semibold text-muted uppercase tracking-widest hover:text-white transition-colors duration-300 underline underline-offset-4 decoration-white/20 hover:decoration-white"
              >
                View Work
              </a>
            </div>
          </div>

          {/* Right: Portrait */}
          <div className="hero-image order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-[280px] h-[360px] md:w-[420px] md:h-[540px] rounded-container overflow-hidden bg-surface border border-white/10">
              <img
                src="/avatar.png"
                alt="Vinayak Galande"
                className="w-full h-full object-cover"
                loading="eager"
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
