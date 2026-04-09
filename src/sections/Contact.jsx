import { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";

// INTERACTIVE COMPONENT: AgentNode Network (Enhanced)
const AgentNetwork = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Use springs for high-end smoothness and performance
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20, mass: 0.5 });

  // Generate nodes only once
  const nodes = useMemo(() => Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 5
  })), []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX - innerWidth / 2) * 0.08);
      mouseY.set((clientY - innerHeight / 2) * 0.08);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-80">
      <svg className="w-full h-full">
        <motion.g style={{ x: springX, y: springY }}>
          {/* Draw connections for nodes within 25% distance */}
          {nodes.map((node, i) =>
            nodes.slice(i + 1).map((target) => {
              const dist = Math.hypot(node.x - target.x, node.y - target.y);
              if (dist > 25) return null;
              return (
                <line
                  key={`${node.id}-${target.id}`}
                  x1={`${node.x}%`}
                  y1={`${node.y}%`}
                  x2={`${target.x}%`}
                  y2={`${target.y}%`}
                  stroke="#FF4D00"
                  strokeWidth="0.8"
                  strokeOpacity={0.7 * (1 - dist / 25)}
                />
              );
            })
          )}
          {nodes.map((node) => (
            <motion.circle
              key={node.id}
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r={node.size + 0.5}
              fill="white"
              initial={{ opacity: 0.4 }}
              animate={{
                opacity: [0.4, 0.9, 0.4]
              }}
              transition={{
                opacity: { duration: 3, repeat: Infinity, delay: node.delay, ease: "easeInOut" }
              }}
            />
          ))}
        </motion.g>
      </svg>
    </div>
  );
};


export default function Contact() {
  const email = "vinayakpgalande90@gmail.com";

  const socialIcons = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/vinayak-galande-361905218/",
      path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
    },
    {
      name: "GitHub",
      link: "https://github.com/VinayakGalande01",
      path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
    },
    {
      name: "Medium",
      link: "https://medium.com/@vinayakgalande6",
      path: "M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.41-3.38 6.41s-3.38-2.87-3.38-6.41 1.51-6.41 3.38-6.41 3.38 2.87 3.38 6.41zM24 12c0 3.17-.53 5.75-1.19 5.75s-1.19-2.58-1.19-5.75.53-5.75 1.19-5.75 1.19 2.58 1.19 5.75z"
    },
    {
      name: "Upwork",
      link: "https://www.upwork.com/freelancers/~0178a987f9954ea5a3",
      path: "M18.56 1.19c-3.14 0-5.75 2.59-6.39 6.01-1.07-1.78-1.99-4-2.58-6l-1.46-.01c-.13 3.4-1.19 6.81-4.09 9.17l-.01.01c-.48.37-1 .69-1.55.94V1.19H1.19v12.28c0 .24-.04.47-.13.68-.31.78-1.06 1.34-1.95 1.35V16.8c1.37 0 2.55-.91 2.92-2.16.03-.1.05-.2.06-.3l.01-.06V11.2c.42-.16.84-.37 1.23-.62 2.1-1.34 3.48-3.69 4.31-6.17a15.8 15.8 0 002.3 5.34l-1.08 4.6h1.29l.86-3.63c.69 1.15 1.7 2.05 3.31 2.05 3.14 0 5.69-2.55 5.69-5.69 0-3.14-2.55-5.69-5.69-5.69zm0 9.1c-1.89 0-3.41-1.53-3.41-3.41s1.53-3.41 3.41-3.41c1.89 0 3.41 1.53 3.41 3.41s-1.52 3.41-3.41 3.41z"
    }
  ];

  return (
    <footer id="contact" className="relative bg-black text-white pt-48 pb-12 overflow-hidden">
      {/* BACKGROUND: Pulse Sphere */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10"
      />

      {/* BACKGROUND: Agent Network */}
      <AgentNetwork />

      <div className="max-w-[1400px] mx-auto px-6 md:px-20 relative z-10">
        {/* MAIN CTA */}
        <div className="mb-32 text-center md:text-left">
          <p className="text-[clamp(1.5rem,3vw,3rem)] font-header text-primary leading-none mb-12">
            CONTACT
          </p>
          <h2 className="text-[clamp(3rem,8vw,7rem)] font-header leading-[0.85] tracking-tighter mb-20">
            Got a project <br />
            <span className="text-muted">in mind?</span>
          </h2>
        </div>

        {/* INFINITE EMAIL MARQUEE (Ghost Twin: Seamless Loop) */}
        <div
          className="relative w-full py-16 border-t border-b border-white/5 overflow-hidden group mb-48"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
          }}
        >
          <motion.div
            className="flex whitespace-nowrap w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            {/* Instance 1 */}
            <span
              className="text-[clamp(2rem,6vw,4.5rem)] font-header pr-32 text-white select-none"
              style={{ textTransform: 'lowercase', fontWeight: 500 }}
            >
              {email}
            </span>
            {/* Instance 2 (Identical Copy for Seamless "Snap") */}
            <span
              className="text-[clamp(2rem,6vw,4.5rem)] font-header pr-32 text-white select-none"
              style={{ textTransform: 'lowercase', fontWeight: 500 }}
            >
              {email}
            </span>
          </motion.div>

          {/* STATIC INVISIBLE HITBOX (Usability Layer) */}
          <a
            href={`mailto:${email}`}
            className="absolute inset-0 z-20 cursor-pointer"
            aria-label="Send Email"
          />
        </div>

        {/* BOTTOM NAVIGATION & CREDITS */}
        <div className="mt-48 flex flex-col md:flex-row justify-between items-end gap-12 border-t border-white/10 pt-12">
          {/* Social Icons Refactored */}
          <div className="flex gap-10">
            {socialIcons.map((social) => (
              <motion.a
                key={social.name}
                href={social.link}
                whileHover={{ y: -5, color: "#FF4D00" }}
                className="text-white/40 hover:text-primary transition-colors duration-300"
                aria-label={social.name}
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d={social.path} />
                </svg>
              </motion.a>
            ))}
          </div>

          {/* CREDITS */}
          <div className="text-right">
            <p className="text-[10px] font-mono tracking-widest text-muted uppercase">
              Copyright © 2026 Vinayak. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
