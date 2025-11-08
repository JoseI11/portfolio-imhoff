"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "motion/react";
import { useSectionInView } from "../lib/hooks";
import { senderEmail } from "../actions/sendEmail";
import toast from "react-hot-toast";
import SubmitBtn from "./submit-btn";
import { useLanguage } from "../context/language-context";
export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const { language } = useLanguage();
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      id="contact"
      className="mb-20 sm:mb-28 w:[min(%100,38rem)] text-center"
    >
      <SectionHeading>
        { language === 'en' ? "Contact Form" : "Formulario de Contacto" }
        <p className="text-gray-700 text-[15px] mt-3 dark:text-white">
         { language === 'en' ? `Please contact me directly at ` : "Por favor, contactame directamente en " } 
          <a className="underline" href="mailto:jose-imhoff@hotmail.com">
            jose-imhoff@hotmail.com
          </a>{" "}
          {language === 'en' ? `or through this form.` : "o por medio de este formulario."}
        </p>
        <form
          className="mt-10 flex flex-col dark:text-white/80"
          action={async (formData) => {
        
            const {error} = await senderEmail(formData);
            if(error){
              toast.error(error)
              return;
            }
            toast.success("Email sent successfully")
          }}
        >
          <input
            className="h-14 px-4 rounded-lg borderBlack text-base dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none dark:text-black"
            type="email"
            required
            name="senderEmail"
            maxLength={500}
            placeholder={`${language === 'en' ? "Your email"  : 'Su Correo'}`}
          />
          <textarea
            className="h-52 px-4 my-3 rounded lg borderBlack text-base dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none dark:text-black"
            required
            name="message"
            maxLength={5000}
            placeholder={`${language === 'en' ? "Your message"  : 'Su Mensaje'}`}
          ></textarea>
          <SubmitBtn />
        </form>
      </SectionHeading>
    </motion.section>
  );
}
