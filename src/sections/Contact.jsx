import { useEffect, useRef } from "react";
import { contacts } from "../data/content";
import gsap from "gsap";

const iconMap = {
  code: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    </svg>
  ),
  link: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
    </svg>
  ),
  mail: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
};

export default function Contact() {
  const sectionRef = useRef();

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll(".contact-card");
    if (cards?.length) {
      gsap.from(cards, {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.7,
        ease: "power3.out",
      });
    }
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-screen bg-[#0B0D11] text-white flex flex-col items-center justify-center px-6 py-24 border-b border-white/5"
    >
      <div className="w-full max-w-3xl space-y-16">

        {/* Section Header */}
        <div className="space-y-5">
          <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-green-400 uppercase">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Transmission Terminal
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1]">
            Connect to the<br /><span className="text-blue-500">Network.</span>
          </h2>
          <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-xl">
            Initiate protocol for professional inquiries or technical collaboration.
            Our systems are ready to receive data refraction requests.
          </p>
        </div>

        {/* Navigation Arrows */}
        <div className="flex gap-3">
          <button className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-all">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-all">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>

        {/* Contact Cards */}
        <div className="space-y-5">
          {contacts.map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${item.name}`}
              className="contact-card group block bg-white/[0.02] border border-white/5 rounded-2xl p-6 md:p-8 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 cursor-pointer will-change-transform"
            >
              <div className="flex items-start justify-between mb-5">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  {iconMap[item.icon]}
                </div>
                {/* Secondary Icon */}
                <div className="text-gray-600">
                  {iconMap[item.icon]}
                </div>
              </div>

              {/* Name */}
              <h3 className="text-xl font-black text-white mb-2">{item.name}</h3>

              {/* Description */}
              <p className="text-sm text-gray-400 leading-relaxed mb-5">{item.desc}</p>

              {/* Action */}
              <div className="flex items-center gap-2 text-sm font-black tracking-wider text-blue-500 uppercase group-hover:text-blue-400 transition-colors">
                {item.action}
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Status + Downloads */}
        <div className="space-y-6 text-center">
          <div className="space-y-1">
            <div className="text-sm font-black text-white tracking-wider uppercase">Current Status: Online</div>
            <div className="text-xs text-gray-500">Response Latency: 12-24 Hours</div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <button className="px-8 py-3.5 bg-blue-600 text-white text-xs font-black tracking-wider uppercase rounded-xl hover:bg-blue-500 hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_20px_rgba(37,99,235,0.25)]">
              Download_CV.pdf
            </button>
            <button className="px-8 py-3.5 bg-white/5 border border-white/10 text-white text-xs font-black tracking-wider uppercase rounded-xl hover:bg-white/10 hover:scale-[1.02] active:scale-95 transition-all">
              System_Specs
            </button>
          </div>
        </div>

        {/* Bottom Nav Bar + Footer */}
        <div className="flex flex-col items-center gap-8">
          <nav className="flex items-center justify-center p-1.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] shadow-2xl">
            <button className="p-5 hover:bg-white/10 rounded-2xl transition-all hover:scale-110 active:scale-95">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
            </button>
            <button className="p-5 hover:bg-white/10 rounded-2xl transition-all hover:scale-110 active:scale-95">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" /></svg>
            </button>
            <button className="p-5 hover:bg-white/10 rounded-2xl transition-all hover:scale-110 active:scale-95">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" /></svg>
            </button>
            <button className="p-5 bg-blue-600 rounded-2xl border border-blue-400 text-white shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-transform hover:scale-110 active:scale-95">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </button>
          </nav>

          <div className="text-center space-y-4 opacity-30">
            <div className="text-[11px] font-black tracking-[0.4em] text-blue-200 uppercase italic">© 2024 Obsidian Laboratory // Data Refraction</div>
          </div>
          <div className="flex gap-10 text-[10px] font-bold tracking-widest uppercase opacity-30">
            <a href="#" className="hover:text-blue-400 transition-colors">Terminal</a>
            <a href="#" className="hover:text-blue-400 transition-colors">System_Logs</a>
            <a href="#" className="hover:text-blue-400 transition-colors underline">Encrypt</a>
          </div>
        </div>

      </div>
    </section>
  );
}
