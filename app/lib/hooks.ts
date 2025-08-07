import { useEffect } from "react";
import { useActiveSectionContext } from "../context/active-section-context";
import { useInView } from "react-intersection-observer";
import { SectionName } from "./types";



export function useSectionInView(
  sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  useEffect(() => {
    if (inView && (timeOfLastClick === 0 || Date.now() - timeOfLastClick > 500)) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);
  return {
    ref,
  }

}