"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "motion/react";
import { useSectionInView } from "../lib/hooks";
import { useLanguage } from "../context/language-context";

export default function About() {
  const { ref } = useSectionInView("About", 0.5);
  const { language } = useLanguage();

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{language === 'en' ? 'About Me' : 'Sobre Mí'}</SectionHeading>
      <p className="mb-3">
        {language === 'en' ? (
          <>
            After graduating with a degree in{" "}
            <span className="font-medium">Programming technnician</span>, I decided to pursue my
            passion for programming. I enrolled in a coding bootcamp "Full Stack Developer" and learned{" "}
            <span className="font-medium">full-stack web development</span>.{" "}
            <span className="italic">My favorite part of programming</span> is the
            problem-solving aspect and some designs of pages and apps. I <span className="underline">love</span> the
            feeling of finally figuring out a solution to a problem. My core stack
            is{" "}
            <span className="font-medium">
              React, Next.js, Node.js, Tailwind, TypeScript, Firebase, MongoDB and some others
            </span>
            . I am also familiar with TypeScript. I am always looking to
            learn new technologies. I am currently looking for a{" "}
            <span className="font-medium">full-time position</span> as a software
            developer junior in order to expand my skills.
          </>
        ) : (
          <>
            Después de graduarme con un título en{" "}
            <span className="font-medium">Técnico en Programación</span>, decidí seguir mi
            pasión por la programación. Me inscribí en un bootcamp "Desarrollador Full Stack" y aprendí{" "}
            <span className="font-medium">desarrollo web full-stack</span>.{" "}
            <span className="italic">Mi parte favorita de la programación</span> es el
            aspecto de resolución de problemas y algunos diseños de páginas y aplicaciones. Me <span className="underline">encanta</span> la
            sensación de finalmente encontrar una solución a un problema. Mi stack principal
            es{" "}
            <span className="font-medium">
              React, Next.js, Node.js, Tailwind, TypeScript, Firebase, MongoDB y algunos otros
            </span>
            . También estoy familiarizado con TypeScript. Siempre estoy buscando
            aprender nuevas tecnologías. Actualmente estoy buscando una{" "}
            <span className="font-medium">posición a tiempo completo</span> como
            desarrollador de software junior para expandir mis habilidades.
          </>
        )}
      </p>
      <p>
        {language === 'en' ? (
          <>
            <span className="italic">When I'm not coding</span>, I enjoy playing
            video games, watching movies, or reading light novels. I also enjoy{" "}
            <span className="font-medium">learning new things</span>. I am currently
            learning about{" "}
            <span className="font-medium">Java and Power BI</span>. I'm also interested in learning to cook.
          </>
        ) : (
          <>
            <span className="italic">Cuando no estoy programando</span>, disfruto jugando
            videojuegos, viendo películas o leyendo novelas ligeras. También disfruto{" "}
            <span className="font-medium">aprendiendo cosas nuevas</span>. Actualmente
            estoy aprendiendo sobre{" "}
            <span className="font-medium">Java y Power BI</span>. También estoy interesado en aprender a cocinar.
          </>
        )}
      </p>
    </motion.section>
  );
}
