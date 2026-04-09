import Hero from "../sections/Hero";
import Journey from "../sections/Journey";
import Projects from "../sections/Projects";
import Services from "../sections/Services";
import Testimonials from "../sections/Testimonials";
import Contact from "../sections/Contact";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Hero />
      <Journey />
      <Projects />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  );
}
