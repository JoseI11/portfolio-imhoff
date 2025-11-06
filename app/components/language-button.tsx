"use client";

import { useLanguage } from "../context/language-context";

export default function LanguageSwitch() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      className="flock w-12 h-12 hover:scale-110 transition-transform bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg"
      onClick={toggleLanguage}
    >
      <span className="text-gray-950 dark:text-gray-50 font-semibold">
        {language.toUpperCase()}
      </span>
    </button>
  );
}