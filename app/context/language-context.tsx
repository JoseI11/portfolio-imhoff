"use client";

import React, { createContext, useContext, useState } from "react";

type Language = "en" | "es";

type LanguageContextProviderProps = {
  children: React.ReactNode;
};

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
};

export const LanguageContext = createContext<LanguageContextType | null>(null);

export default function LanguageContextProvider({
  children,
}: LanguageContextProviderProps) {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage((prev)=>{
      const newLang = prev === "en" ? "es" : "en";
      localStorage.setItem("preferredLanguage", newLang);
      if (typeof document !== "undefined") {
        document.documentElement.lang = newLang;
      }
      return newLang
    })

  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (context === null) {
    throw new Error("useLanguage must be used within a LanguageContextProvider");
  }

  return context;
}