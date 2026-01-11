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
        {language === "en" ? (
          <>
            After graduating as a{" "}
            <span className="font-medium">Programming Technician</span>, I decided to
            fully commit to software development. I completed a{" "}
            <span className="font-medium">Full-Stack Developer</span> bootcamp and
            built projects using{" "}
            <span className="font-medium">
              React, Next.js, Node.js, Tailwind, TypeScript, Firebase, and MongoDB
            </span>
            .
            <br />
            <span className="italic">What I enjoy most</span> is problem-solving and
            turning ideas into clean, usable products. Right now, I’m focusing on{" "}
            <span className="font-medium">Backend development with Python</span>{" "}
            (APIs, databases, and best practices) while continuing to strengthen my
            full-stack foundation.
            <br />
            I’m looking for a{" "}
            <span className="font-medium">junior software developer</span> role where I
            can learn, contribute, and grow through real-world projects.
          </>
        ) : (
          <>
            Después de graduarme como{" "}
            <span className="font-medium">Técnico en Programación</span>, decidí
            enfocarme de lleno en el desarrollo de software. Completé un bootcamp de{" "}
            <span className="font-medium">Desarrollador Full Stack</span> y construí
            proyectos con{" "}
            <span className="font-medium">
              React, Next.js, Node.js, Tailwind, TypeScript, Firebase y MongoDB
            </span>
            .
            <br />
            <span className="italic">Lo que más disfruto</span> es resolver problemas y
            convertir ideas en productos claros y útiles. Actualmente estoy
            enfocándome en{" "}
            <span className="font-medium">Backend con Python</span> (APIs, bases de
            datos y buenas prácticas), sin dejar de fortalecer mi base full-stack.
            <br />
            Busco una{" "}
            <span className="font-medium">posición junior</span> donde pueda aprender,
            aportar y crecer con proyectos reales.
          </>
        )}
      </p>

      <p>
        {language === "en" ? (
          <>
            <span className="italic">When I'm not coding</span>, I enjoy playing video
            games, watching movies, and reading light novels. I also like{" "}
            <span className="font-medium">learning new things</span>—currently{" "}
            <span className="font-medium">Python backend</span> and building small
            projects to improve every week.
          </>
        ) : (
          <>
            <span className="italic">Cuando no estoy programando</span>, disfruto
            jugando videojuegos, viendo películas y leyendo novelas ligeras. También
            me gusta{" "}
            <span className="font-medium">aprender cosas nuevas</span>: ahora estoy
            enfocado en{" "}
            <span className="font-medium">backend con Python</span> y en construir
            proyectos pequeños para mejorar cada semana.
          </>
        )}
      </p>
    </motion.section>
  );
}
