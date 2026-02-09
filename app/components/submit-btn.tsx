import React from "react";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";
import { useLanguage } from "../context/language-context";
import Button from "../components/button";
export default function SubmitBtn() {
  const { pending } = useFormStatus();
  const { language } = useLanguage();
  const submit = language === "en" ? "Submit " : "Enviar ";
  return (
    <Button type="submit" variant="dark" size="lg" isLoading={pending}>
      {`${submit}` + " "}
      <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
    </Button>
  );
}
