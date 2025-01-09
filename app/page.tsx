import Intro from "../app/components/intro";
import SectionDivider from "../app/components/section-divider";
import About from "./components/about";
import Contact from "./components/contact";

import Experience from "./components/experience";

import Projects from "./components/projects";
import Skills from "./components/skills";

export default function Home() {
  return <main className="flex flex-col items-center px-4">
    <Intro />
    <SectionDivider />
    <About />
    <Projects />
    <Skills />
    <Experience />
    <Contact />
  
  </main>;
}
