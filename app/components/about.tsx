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
            I enjoy building websites that not only look good but also perform better:
            <span className="font-medium"> fast, accessible, maintainable, and ready to scale</span>.
            My focus is on web development with{" "}
            <span className="font-medium">
              React, Next.js, Node.js, Tailwind, TypeScript, Firebase, and MongoDB
            </span>
            . I am also focused on{" "}
            <span className="font-medium">continuous optimization</span> and solid frontend
            architecture practices.
          </>
        ) : (
          <>
            Disfruto crear sitios web que se vean bien y funcionen mejor:
            <span className="font-medium"> rápidos, accesibles, mantenibles y preparados para crecer</span>.
            Mi enfoque está en desarrollo web con{" "}
            <span className="font-medium">
              React, Next.js, Node.js, Tailwind, TypeScript, Firebase y MongoDB
            </span>
            . También estoy enfocado en la{" "}
            <span className="font-medium">optimización continua</span> y en aplicar buenas
            prácticas de arquitectura frontend.
          </>
        )}
      </p>

      <p>
        {language === "en" ? (
          <>
            <span className="italic">When I'm not coding</span>, I enjoy playing video
            games, watching movies, and reading light novels. I also like{" "}
            <span className="font-medium">learning new things</span>, especially around
            web performance, UX best practices, and building better web experiences
            every week.
          </>
        ) : (
          <>
            <span className="italic">Cuando no estoy programando</span>, disfruto
            jugando videojuegos, viendo películas y leyendo novelas ligeras. También
            me gusta{" "}
            <span className="font-medium">aprender cosas nuevas</span>, especialmente
            sobre rendimiento web, buenas prácticas de UX y crear mejores experiencias
            web cada semana.
          </>
        )}
      </p>
    </motion.section>
  );
}
