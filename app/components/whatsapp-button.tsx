// app/components/whatsapp-button.tsx
import React from 'react';
import Image from 'next/image';
import whatsapplogo from '../../public/Social Networks/whatsapplogo.png';

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/3492516734/"
      target="_blank"
      rel="noopener noreferrer"
      className="block w-12 h-12 hover:scale-110 transition-transform bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg"
      aria-label="Contactar por WhatsApp"
    >
      <Image
        src={whatsapplogo}
        alt="WhatsApp"
        width={32}
        height={32}
        className="w-full h-full object-contain"
      />
    </a>
  );
};

export default WhatsappButton;