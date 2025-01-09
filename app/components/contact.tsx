"use client";
import React from "react";
import SectionHeading from "./section-heading";

import { motion } from "motion/react";
import { useSectionInView } from "../lib/hooks";
import { senderEmail } from "../actions/sendEmail";
import toast from "react-hot-toast";
import SubmitBtn from "./submit-btn";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

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
        Contact me
        <p className="text-gray-700 text-sm mt-3 dark:text-white/88">
          Please contact me directly at{" "}
          <a className="underline" href="mailto:jose-imhoff@hotmail.com">
            jose-imhoff@hotmail.com
          </a>{" "}
          or through this form.
        </p>
        <form
          className="mt-10 flex flex-col dark:text-black/80"
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
            className="h-14 px-4 rounded-lg borderBlack text-base dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            type="email"
            required
            name="senderEmail"
            maxLength={500}
            placeholder="Your email"
          />
          <textarea
            className="h-52 px-4 my-3 rounded lg borderBlack text-base dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            required
            name="message"
            maxLength={5000}
            placeholder="Your message"
          ></textarea>
          <SubmitBtn />
        </form>
      </SectionHeading>
    </motion.section>
  );
}
