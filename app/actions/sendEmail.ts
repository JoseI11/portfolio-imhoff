"use server";
// re_5vopEox1_9DmXo1i8nYKRonEW6DAc3Bnp
import { Resend } from "resend";
import { validateString, getErrorMessage } from "../lib/utils";
import ContactFormEmail from "../email/contact-form-email";
import React from "react";
const resend = new Resend(process.env.RESEND_API_KEY);

export const senderEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  // simple server-side validation
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact form <onboarding@resend.dev>",
      to: "jose-imhoff@hotmail.com",
      subject: "Message from contact form",
      replyTo: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
