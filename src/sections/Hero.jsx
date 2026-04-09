import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const containerRef = useRef();
  const [navVisible, setNavVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setNavVisible(false);
      } else {
        setNavVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
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
      observer.disconnect();
      ctx.revert();
    };
  }, []);

  // Magnetic Button State
  const [magneticPos, setMagneticPos] = useState({ x: 0, y: 0 });
  const handleMagnetic = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setMagneticPos({ x: x * 0.3, y: y * 0.3 });
  };

  return (
    <>


      {/* Sticky Navigation (Hide on scroll down, Show on scroll up) */}
      <AnimatePresence>
        {navVisible && (
          <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="nav-sticky px-6 md:px-20 py-5 flex justify-between items-center"
          >
            <a href="#" className="text-lg font-header tracking-tight">
              VINAYAK.
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
          </motion.nav>
        )}
      </AnimatePresence>

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
              <motion.a
                href="#contact"
                data-hover
                onMouseMove={handleMagnetic}
                onMouseLeave={() => setMagneticPos({ x: 0, y: 0 })}
                animate={{ x: magneticPos.x, y: magneticPos.y }}
                transition={{ type: "spring", stiffness: 150, damping: 15 }}
                className="inline-flex items-center gap-3 bg-white text-black px-7 py-3.5 rounded-full text-[12px] font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-500"
              >
                Let's Talk
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.a>
              <a
                href="#projects"
                className="text-[12px] font-semibold text-muted uppercase tracking-widest hover:text-white transition-colors duration-300 underline underline-offset-4 decoration-white/20 hover:decoration-white"
              >
                View Work
              </a>
            </div>
          </div>

          {/* Right: Portrait */}
          <div className="hero-image order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-[280px] h-[360px] md:w-[420px] md:h-[540px] rounded-full overflow-hidden bg-surface border border-white/10">
              <img
                src="/Vinayak.png"
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
