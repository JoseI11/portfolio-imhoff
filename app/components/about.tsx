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
            <span className="italic">What I enjoy most</span> is{" "}
            <span className="font-medium">solving problems and building scalable systems</span>.
            I'm now focusing on{" "}
            <span className="font-medium">backend development with Python</span> (APIs,
            databases, system design). I'm open to simple frontend roles but my main focus
            is backend.
            <br />
            I'm seeking a{" "}
            <span className="font-medium">junior backend role</span> where I can contribute
            to meaningful projects and continuously grow as an engineer.
          </>
        ) : (
          <>
            Después de graduarme como{" "}
            <span className="font-medium">Técnico en Programación</span>, me comprometí con
            el desarrollo de software. Completé un bootcamp de{" "}
            <span className="font-medium">Desarrollador Full Stack</span> y construí
            proyectos reales con{" "}
            <span className="font-medium">
              React, Next.js, Node.js, Tailwind, TypeScript, Firebase y MongoDB
            </span>
            . También tengo{" "}
            <span className="font-medium">~1.5 años de experiencia profesional</span> como
            Desarrollador Full Stack (PHP & Next.js).
            <br />
            <span className="italic">Lo que más disfruto</span> es{" "}
            <span className="font-medium">resolver problemas y construir sistemas escalables</span>.
            Actualmente estoy enfocándome en{" "}
            <span className="font-medium">backend con Python</span> (APIs, bases de datos,
            arquitectura de sistemas). Estoy abierto a roles frontend simples pero mi enfoque principal
            es backend.
            <br />
            Busco un{" "}
            <span className="font-medium">rol junior backend</span> donde pueda aportar a
            proyectos significativos y crecer como ingeniero.
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
