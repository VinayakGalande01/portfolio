import { testimonials } from "../data/content";

export default function Testimonials() {
  // Triple the array for seamless loop
  const items = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="bg-black text-white py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-20 mb-16">
        <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-header leading-[0.95] tracking-tight">
          Words From <br />
          <span className="text-muted">Our Clients</span>
        </h2>
      </div>

      {/* Infinite Marquee */}
      <div className="relative w-full overflow-hidden border-t border-b border-white/5 py-10">
        <div className="marquee-track gap-6">
          {items.map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[380px] md:w-[450px] bg-surface border border-white/10 rounded-container p-10 mx-3 flex flex-col justify-between min-h-[260px] hover:border-white/20 transition-colors duration-500"
            >
              <p className="text-[15px] font-medium leading-relaxed text-white/90 mb-8">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-[11px] font-bold text-primary">
                    {t.author.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.author}</p>
                  <p className="text-[11px] text-muted">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
