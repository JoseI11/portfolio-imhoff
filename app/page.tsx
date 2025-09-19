import dynamic from 'next/dynamic';

// Componentes esenciales que se cargan de inmediato
import Intro from "./components/intro";
import SectionDivider from "./components/section-divider";

// Componentes que se cargarán dinámicamente
const About = dynamic(() => import('./components/about'));
const Projects = dynamic(() => import('./components/projects'));
const Skills = dynamic(() => import('./components/skills'));
const Services = dynamic(() => import('./components/services'));
const Experience = dynamic(() => import('./components/experience'));
const Contact = dynamic(() => import('./components/contact'));

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Services />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Contact />
    </main>
  );
}
