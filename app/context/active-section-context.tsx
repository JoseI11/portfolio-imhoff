"use client";

import type { SectionName } from "../lib/types";
import React, { useState, createContext, useContext } from "react";

type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

/**
 * This class definition defines the shape of the context object for the 
ActiveSectionContext
. It has four properties:
* activeSection: This is a SectionName type and represents the currently active section.
* setActiveSection: This is a function that allows updating the activeSection property.
* timeOfLastClick: This is a number representing the time of the last click.
* setTimeOfLastClick: This is a function that allows updating the timeOfLastClick property.
 */
type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

/**
 * Provides a context for the currently active section on the page.
 * The active section is automatically updated when the user scrolls to a new section.
 * The time of the last click is also tracked to disable the observer temporarily when the user clicks on a link.
 * This is necessary because the observer is triggered on every scroll event, even when the user is not actively scrolling.
 * If the user clicks on a link and the observer is triggered immediately after, the active section will be updated
 * before the link click event is handled, which can cause the link to not be handled correctly.
 * By tracking the time of the last click, we can disable the observer temporarily and prevent this issue.
 * @param {React.ReactNode} children - The children elements that will be wrapped with the context provider.
 * @returns {JSX.Element} - The context provider element that wraps the given children elements.
 */
export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0); // we need to keep track of this to disable the observer temporarily when user clicks on a link
    
  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
}