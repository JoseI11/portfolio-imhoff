"use client";
import React from "react";
import Image from "next/image";
import Perfilimagen from "../../public/imagenportadaprofesional.webp";
import { motion } from "motion/react";
import { fadeInUp } from "../lib/animations";
import { BsLinkedin } from "react-icons/bs";
import { BsArrowBarRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useLanguage } from "../context/language-context";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "../lib/hooks";
import { useActiveSectionContext } from "../context/active-section-context";
import Button from "../components/button";
import SocialLink from "../components/social-link";

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
        {...fadeInUp}
      >
        {language === 'en' ? (
          <>
            <span className="font-bold">Hello, I'm José Imhoff.</span> I'm a{" "}
            <span className="font-bold">web developer</span> with{" "}
            <span className="font-bold">~2 years</span> of experience building{" "}
            <span className="italic">fast, accessible, and scalable websites</span>.
            I focus on <span className="underline">performance, SEO, and clean UX</span>,
            with solid experience in <span className="underline">React & Next.js</span>.
          </>
        ) : (
          <>
            <span className="font-bold">Hola, soy José Imhoff.</span> Soy un{" "}
            <span className="font-bold">desarrollador web</span> con{" "}
            <span className="font-bold">~2 años</span> de experiencia creando{" "}
            <span className="italic">sitios rápidos, accesibles y escalables</span>.
            Me enfoco en <span className="underline">performance, SEO y UX limpia</span>,
            con sólida experiencia en <span className="underline">React & Next.js</span>.
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
        <Button
          variant="dark"
          size="md"
          href="#contact"
        onClick={()=>{
          setActiveSection("Contact");
          setTimeOfLastClick(Date.now());
        }}
        >
          {language === 'en' ? 'Contact me here' : 'Contáctame aquí'}{" "}
          <BsArrowBarRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Button>
        <Button
          variant="light"
          size="md"
          href="/CV_Jose_Imhoff_Dev_FullStack.pdf"
          download
        >
          {language === 'en' ? 'Download CV' : 'Descargar CV'}{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </Button>

        <SocialLink 
          href="https://www.linkedin.com/in/joseimhoff/"
          icon={<BsLinkedin />}
          label="Linkedin"
          external
        />
 

       <SocialLink 
          href="https://github.com/JoseI11/"
          icon={<FaGithubSquare />}
          label="GitHub"
          external
          size="lg"
        />
   
       
      </motion.div>


    </section>
  );
}
