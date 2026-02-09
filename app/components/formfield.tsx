"use client";

import React from "react";
import { useLanguage } from "../context/language-context";

interface FormFieldProps {
  id: string;
  type?: "input" | "textarea";
  name: string;
  placeholder: { en: string; es: string };
  label: { en: string; es: string };
  required?: boolean;
  maxLength?: number;
  rows?: number;
}

export default function FormField({
  id,
  type = "input",
  name,
  placeholder,
  label,
  required = false,
  maxLength,
  rows = 4,
}: FormFieldProps) {
  const { language } = useLanguage();
  const baseStyles =
    "px-4 rounded-lg borderBlack text-base dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none dark:text-black focus:outline-2 focus:outline-offset-2 focus:outline-blue-500";

  return (
    <>
      <label htmlFor={id} className="sr-only">
        {label[language]}
      </label>
      {type === "input" ? (
        <input
          id={id}
          className={`h-14 ${baseStyles}`}
          type={name === "senderEmail" ? "email" : "text"}
          required={required}
          name={name}
          maxLength={maxLength}
          placeholder={placeholder[language]}
        />
      ) : (
        <textarea
          id={id}
          className={`h-52 my-3 ${baseStyles}`}
          required={required}
          name={name}
          maxLength={maxLength}
          placeholder={placeholder[language]}
          rows={rows}
        />
      )}
    </>
  );
}