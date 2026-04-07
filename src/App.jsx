import Hero from "./sections/Hero";
import Journey from "./sections/Journey";
import TechStack from "./sections/TechStack";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="bg-black text-white">
      <Hero />
      <Journey />
      <TechStack />
      <Projects />
      <Contact />
    </div>
  );
}
