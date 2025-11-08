"use client";
import React from "react";
import Image from "next/image";
import Perfilimagen from "../../public/imagenportadaprofesional.webp";
import { motion } from "motion/react";
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { BsArrowBarRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useLanguage } from "../context/language-context";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "../lib/hooks";
import { useActiveSectionContext } from "../context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { language } = useLanguage();
  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center min-h-screen flex flex-col items-center justify-center position-relative bottom-24 sm:mb-0 scroll-mt-[100rem] "
    >
      <div className="flex items-center justify-center mb-32">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src={Perfilimagen}
              alt="jose-imhoff"
              width={200}
              height={200}
              quality="95"
              priority={true}
              className="h-[10rem] w-[10rem] rounded-full object-cover border-[0.35rem] border-white shadow-xl md:h-[20rem] md:w-[20rem]"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {language === 'en' ? (
          <>
            <span className="font-bold">Hello everyone, I'm José Imhoff.</span> I'm a{" "}
            <span className="font-bold">full-stack developer oriented to front-end</span> with{" "}
            <span className="font-bold">2 years</span> of experience. I enjoy
            building <span className="italic">sites & apps</span>. My focus is{" "}
            <span className="underline">React (Next.js) and TailwindCSS</span>.
          </>
        ) : (
          <>
            <span className="font-bold">Hola a todos, soy José Imhoff.</span> Soy un{" "}
            <span className="font-bold">desarrollador full-stack orientado al front-end</span> con{" "}
            <span className="font-bold">2 años</span> de experiencia. Disfruto
            construyendo <span className="italic">sitios y aplicaciones</span>. Mi enfoque es{" "}
            <span className="underline">React (Next.js) y TailwindCSS</span>.
          </>
        )}
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap 2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        onClick={()=>{
          setActiveSection("Contact");
          setTimeOfLastClick(Date.now());
        }}
        >
          {language === 'en' ? 'Contact me here' : 'Contáctame aquí'}{" "}
          <BsArrowBarRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          className="group bg-gray-200 px-7 py-3 flex items-center gap 2 rounded-full outline-none 
        focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="/Jose-Imhoff-Frontend-Developer.pdf"
          download
        >
          {language === 'en' ? 'Download CV' : 'Descargar CV'}{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          className="bg-gray-200 p-4 text-gray-700 flex items-center gap 2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/joseimhoff/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-gray-200 p-4 text-gray-700 flex items-center gap 2 rounded-full text-[1.35rem] focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/JoseI11"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>


    </section>
  );
}
