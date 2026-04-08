import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Journey() {
  const sectionRef = useRef();

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".journey-fade");
    if (els?.length) {
      gsap.from(els, {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
      });
    }
  }, []);

  return (
    <section
      id="journey"
      ref={sectionRef}
      className="bg-[#0B0D11] text-white px-6 py-24 border-b border-white/5"
    >
      <div className="w-full max-w-3xl mx-auto space-y-24">

        {/* ═══════════════════════════════════════════ */}
        {/* PHASE 01 — ORIGIN                          */}
        {/* ═══════════════════════════════════════════ */}
        <div className="space-y-10">
          {/* Phase Label */}
          <div className="journey-fade text-[10px] font-bold tracking-widest text-blue-400 uppercase">
            Phase_01 // Origin
          </div>

          {/* Title */}
          <h2 className="journey-fade text-4xl md:text-6xl font-black tracking-tight leading-[1.1]">
            Refining<br />Chaotic<br />Intelligence
          </h2>

          {/* Body */}
          <p className="journey-fade text-sm md:text-base text-gray-400 leading-relaxed max-w-xl">
            Obsidian Laboratory was founded on a singular premise: data is not information — until it has been refracted.
            In the void between raw computation and human intuition, we build bridges of high-precision AI.
          </p>

          {/* Quote Block */}
          <div className="journey-fade border-l-2 border-blue-500 pl-6">
            <p className="text-sm text-gray-300 italic leading-relaxed">
              "Started in BioTech + transitioned into AI engineering with focus on real-world systems."
            </p>
          </div>

          {/* Crystal Image */}
          <div className="journey-fade w-full rounded-2xl overflow-hidden border border-white/5">
            <img
              src="/crystal.png"
              alt="Obsidian Crystal Formation"
              className="w-full h-64 md:h-80 object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
            />
          </div>

          {/* Caption */}
          <div className="journey-fade text-[10px] font-bold tracking-widest text-gray-600 uppercase text-center">
            Specimen_01 // Alpha_Phase
          </div>
        </div>

        {/* ═══════════════════════════════════════════ */}
        {/* PHASE 02 — EXECUTION                       */}
        {/* ═══════════════════════════════════════════ */}
        <div className="space-y-10">
          {/* Phase Label */}
          <div className="journey-fade text-[10px] font-bold tracking-widest text-blue-400 uppercase">
            Phase_02 // Execution
          </div>

          {/* Title */}
          <h2 className="journey-fade text-4xl md:text-6xl font-black tracking-tight leading-[1.1]">
            Technological<br /><span className="text-blue-500 italic">Refraction</span>
          </h2>

          {/* Subtitle */}
          <div className="journey-fade text-[10px] font-bold tracking-widest text-gray-600 uppercase">
            From raw input to scalable neural infrastructure
          </div>

          {/* Capability Card — Neural Architectures */}
          <div className="journey-fade bg-white/[0.03] border border-white/5 rounded-2xl p-8 space-y-5">
            <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              Neural<br />Architectures
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              We deploy custom fine-tuned LLMs optimized for proprietary data silos,
              ensuring zero leakage and maximum utility across enterprise clusters.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-4 py-2 text-xs font-bold tracking-wider text-white bg-white/5 border border-white/10 rounded-xl">Transformer_V4</span>
              <span className="px-4 py-2 text-xs font-bold tracking-wider text-white bg-white/5 border border-white/10 rounded-xl">Attention_Heads</span>
            </div>
          </div>

          {/* Data Liquidity Card */}
          <div className="journey-fade bg-white/[0.03] border border-white/5 rounded-2xl p-6 flex items-center gap-5">
            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-base font-bold text-white">Data Liquidity</div>
              <div className="text-xs text-gray-500 mt-0.5">Transforming rigid datasets into dynamic, queryable intelligence.</div>
            </div>
            <svg className="w-5 h-5 text-gray-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>

          {/* Precision Stat */}
          <div className="journey-fade flex flex-col items-center text-center py-8 space-y-3">
            <div className="text-7xl md:text-8xl font-black text-white tracking-tighter drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]">
              99.8<span className="text-blue-500">.</span>
            </div>
            <div className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">Precision_Index</div>
          </div>

          {/* Safe Harbor */}
          <div className="journey-fade text-center space-y-2">
            <div className="text-lg font-black text-white">Safe Harbor Protocols</div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════ */}
        {/* CTA — ENTER THRESHOLD                      */}
        {/* ═══════════════════════════════════════════ */}
        <div className="journey-fade text-center space-y-8 py-12">
          <div className="flex items-center gap-2 justify-center">
            <div className="w-1 h-4 bg-blue-500 rounded-full"></div>
            <span className="text-[11px] font-black tracking-widest text-gray-400 uppercase">Lab_Invitation</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
            Initiate your<br /><span className="text-blue-500">digital refraction.</span>
          </h2>

          <button
            onClick={() => document.getElementById("tech")?.scrollIntoView({ behavior: "smooth" })}
            className="group relative px-12 py-5 bg-blue-600 text-white font-black rounded-2xl transition-all hover:bg-blue-500 hover:scale-[1.02] active:scale-95 shadow-[0_0_40px_rgba(37,99,235,0.3)] overflow-hidden mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
            <span className="flex items-center gap-4 text-lg tracking-[0.15em] uppercase relative z-10">
              Enter Threshold
            </span>
          </button>
        </div>

        {/* Section Footer */}
        <div className="flex flex-col items-center gap-6 opacity-30">
          <div className="text-[11px] font-black tracking-[0.5em] text-blue-200 uppercase italic">Obsidian Laboratory</div>
          <div className="flex gap-10 text-[10px] font-bold tracking-widest uppercase">
            <a href="#" className="hover:text-blue-400 transition-colors">Terminal</a>
            <a href="#" className="hover:text-blue-400 transition-colors">System_Logs</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Encrypt</a>
          </div>
        </div>

      </div>
    </section>
  );
}
