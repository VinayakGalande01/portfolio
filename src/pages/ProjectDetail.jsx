import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../data/content";
import { useEffect } from "react";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-10">
        <h1 className="text-4xl font-header mb-8">System Error: Project Not Found</h1>
        <button 
          onClick={() => navigate("/")}
          className="px-8 py-4 border border-white/10 rounded-full hover:bg-white/5 transition-all font-mono"
        >
          ← Return to Command Center
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary selection:text-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 inset-x-0 z-[100] px-6 py-8 flex justify-between items-center backdrop-blur-md bg-black/20">
        <button 
          onClick={() => navigate("/")}
          className="flex items-center gap-4 text-muted hover:text-white transition-colors group"
        >
          <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-colors">
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7 7-7" />
            </svg>
          </div>
          <span className="font-mono text-sm tracking-widest uppercase">Back to Archive</span>
        </button>
        <div className="font-mono text-xs opacity-30 tracking-[0.3em] uppercase hidden md:block">
          Project Archival Record // {project.id}
        </div>
      </nav>

      <main className="max-w-[1600px] mx-auto px-6 pt-40 pb-32">
        {/* HERO SECTION: 50/50 split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* LEFT: Info Column */}
          <div className="flex flex-col">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary font-mono text-sm tracking-widest uppercase mb-6"
            >
              {project.category}
            </motion.span>
            
            <motion.h1 
              layoutId={`project-title-${project.id}`}
              className="text-[clamp(3.5rem,8vw,6rem)] font-header leading-[0.9] tracking-tighter mb-8"
            >
              {project.name}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-muted leading-relaxed font-medium mb-16 max-w-xl"
            >
              {project.overview}
            </motion.p>

            {/* META TABLE */}
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.2 }}
               className="border-t border-white/10 pt-10 grid grid-cols-2 md:grid-cols-3 gap-8"
            >
              <div>
                <span className="block text-[10px] text-muted uppercase tracking-widest mb-2">Client</span>
                <span className="text-sm font-bold uppercase">{project.client}</span>
              </div>
              <div>
                <span className="block text-[10px] text-muted uppercase tracking-widest mb-2">Year</span>
                <span className="text-sm font-bold">{project.year}</span>
              </div>
              <div>
                <span className="block text-[10px] text-muted uppercase tracking-widest mb-2">Live Project</span>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-primary flex items-center gap-2 hover:underline decoration-2 transition-all"
                >
                  Visit Site ↗
                </a>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Media Column */}
          <div className="relative">
             <motion.div 
              layoutId={`project-img-${project.id}`}
              className="rounded-3xl overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] border border-white/5 relative z-10"
             >
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full aspect-[4/3] object-cover" 
                />
             </motion.div>
             {/* Subtle floating shadow/glow */}
             <div className="absolute -inset-4 bg-primary/10 blur-[100px] -z-10 rounded-full opacity-30" />
          </div>
        </div>

        {/* DETAILS SECTION */}
        <div className="mt-40 grid grid-cols-1 md:grid-cols-2 gap-20">
           {/* Tech Stack */}
           <section>
              <h2 className="text-sm font-mono text-muted uppercase tracking-[0.3em] mb-12 flex items-center gap-4">
                <span className="w-8 h-px bg-white/20"></span> Tech Stack
              </h2>
              <div className="flex flex-wrap gap-4">
                 {project.tech.map((t) => (
                   <span key={t} className="px-6 py-3 bg-white/[0.03] border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest text-primary/80">
                     {t}
                   </span>
                 ))}
              </div>
           </section>

           {/* Challenges & Solutions */}
           <section className="space-y-12">
              <div>
                <h3 className="text-primary font-mono text-[10px] uppercase tracking-widest mb-4">Core Challenge</h3>
                <p className="text-muted leading-relaxed font-medium italic">"{project.challenges}"</p>
              </div>
              <div className="p-8 bg-surface border border-white/5 rounded-2xl">
                <h3 className="text-white font-header text-sm uppercase mb-4 tracking-widest">The Implementation</h3>
                <p className="text-sm text-muted leading-relaxed">{project.solutions}</p>
              </div>
           </section>
        </div>
      </main>

      {/* FOOTER CTA */}
      <footer className="border-t border-white/5 py-32 px-6">
         <div className="max-w-[1600px] mx-auto flex flex-col items-center text-center">
            <h2 className="text-muted font-mono text-xs uppercase tracking-[0.5em] mb-8">Next Level Architecture</h2>
            <button 
               onClick={() => navigate("/")}
               className="text-[clamp(2rem,5vw,4rem)] font-header hover:text-primary transition-colors hover:scale-105 transform duration-500 uppercase tracking-tighter"
            >
              View More Archivals ↓
            </button>
         </div>
      </footer>
    </div>
  );
}
