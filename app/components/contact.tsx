"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "motion/react";
import { useSectionInView } from "../lib/hooks";
import { senderEmail } from "../actions/sendEmail";
import toast from "react-hot-toast";
import SubmitBtn from "./submit-btn";
import { useLanguage } from "../context/language-context";
import FormField from "./formfield";
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
        {language === "en" ? "Contact Form" : "Formulario de Contacto"}
        <p className="text-gray-700 text-[15px] mt-3 dark:text-white">
          {language === "en"
            ? `Please contact me directly at `
            : "Por favor, contactame directamente en "}
          <a className="underline" href="mailto:jose-imhoff@hotmail.com">
            jose-imhoff@hotmail.com
          </a>{" "}
          {language === "en"
            ? `or through this form.`
            : "o por medio de este formulario."}
        </p>
        <form
          className="mt-10 flex flex-col dark:text-white/80"
          action={async (formData) => {
            const { error } = await senderEmail(formData);
            if (error) {
              toast.error(error);
              return;
            }
            toast.success("Email sent successfully");
          }}
        >
          <FormField
            id="email-input"
            type="input"
            name="senderEmail"
            placeholder={{ en: "Your email", es: "Su Correo" }}
            label={{ en: "Your email address", es: "Tu dirección de correo" }}
            required
            maxLength={500}
          />
          <FormField
            id="message-input"
            type="textarea"
            name="message"
            placeholder={{ en: "Your message", es: "Su Mensaje" }}
            label={{ en: "Your message", es: "Tu mensaje" }}
            required
            maxLength={5000}
          />
          <SubmitBtn />
        </form>
      </SectionHeading>
    </motion.section>
  );
}
