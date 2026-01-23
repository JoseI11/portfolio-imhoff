// app/components/whatsapp-button.tsx
import React from "react";
import Image from "next/image";
import whatsapplogo from "../../public/Social Networks/whatsapplogo.webp";
import FloatingButton from "./floatingbutton";
const WhatsappButton = () => {
  return (
    <FloatingButton
      href="https://wa.me/3492516734/"
      target="_blank"
      rel="noopener noreferrer"
      ariaLabel="Contactar por WhatsApp"
      icon={
        <Image
          src={whatsapplogo}
          alt="WhatsApp"
          width={32}
          height={32}
          className="w-full h-full object-contain"
        />
      }
    />
  );
};

export default WhatsappButton;
