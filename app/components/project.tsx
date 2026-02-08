"use client";

import { useRef, useState } from "react";
import { projectsData } from "../lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

import { useLanguage } from "../context/language-context";

type ProjectProps = (typeof projectsData)[number] & {
  intro?: { en: string; es: string };
  details?: { en: string; es: string };
  highlights?: { en: readonly string[]; es: readonly string[] };
  metrics?: {     en: readonly { label: string; value: string }[];
    es: readonly { label: string; value: string }[];};
  caseStudy?: {
    en: {
      situation: string;
      task: string;
      actions: readonly string[];
      challenges: readonly string[];
      results: readonly string[];
      learnings: readonly string[];
    };
    es: {
      situation: string;
      task: string;
      actions: readonly string[];
      challenges: readonly string[];
      results: readonly string[];
      learnings: readonly string[];
    };
  };
};



export default function Project({
  title,
  description,
  intro,
  tags,
  imageUrl,
  url,
  details,
  highlights,
  metrics,
  caseStudy,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showHighlights, setShowHighlights] = useState(false);
  const [showCaseStudy, setShowCaseStudy] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
const { language } = useLanguage();
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[52rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:min-h-[20rem] dark:text-white hover:bg-gray-200 transition sm:group-even:pl-8 dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-2xl font-semibold">{language === 'en' ? title.en : title.es}</h3>
            <a 
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 sm:hidden px-4 py-2 bg-gray-900 text-white rounded-full 
                text-sm font-medium hover:bg-gray-950 transition-colors
                dark:bg-white dark:bg-opacity-10 text-center"
            >
              {language === 'en' ? 'View Project' : 'Ver Proyecto'}
            </a>
          </div>
          {intro && (
            <p className="mt-2 text-sm italic text-gray-600 dark:text-white/60 border-l-2 border-gray-400 dark:border-white/40 pl-3">
              {language === 'en' ? intro.en : intro.es}
            </p>
          )}
          <p className="mt-4 leading-relaxed text-gray-700 dark:text-white/70">
            {language === 'en' ? description.en : description.es}
          </p>
          <div className="flex flex-wrap items-center mt-6 gap-2 sm:mt-auto pt-2">
            <ul className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <li
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 ml-auto px-4 py-1.5 bg-gray-900 text-white rounded-full
                text-sm font-medium hover:bg-gray-800 hover:scale-105 transition-all
                dark:bg-white/20 dark:hover:bg-white/30"
            >
              <span>{language === 'en' ? 'Live Demo' : 'Ver Demo'}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        <div className="absolute top-8 -right-36 w-[28.25rem] transition-all group-even:right-[initial] group-even:-left-36 hidden sm:block">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <Image
              src={imageUrl}
              alt="Project I worked on"
              quality={95}
              width={452}
              height={300}
              className="w-auto h-auto rounded-t-lg shadow-2xl
                transition group-hover:scale-[1.04] group-hover:-translate-x-3
                group-hover:translate-y-3 group-hover:-rotate-2
                group-even:group-hover:translate-x-3
                group-even:group-hover:translate-y-3
                group-even:group-hover:rotate-2"
            />
          </a>
        </div>
      </section>

      {details && (
        <div className="mt-4 max-w-[52rem]">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
          >
            {isExpanded ? (language === 'en' ? 'Hide details' : 'Ocultar detalles') : (language === 'en' ? 'View details' : 'Ver detalles')}
          </button>

          {isExpanded && (
            <div className="mt-3 p-6 bg-gray-100 dark:bg-white/10 rounded-lg text-sm text-gray-700 dark:text-white/80 whitespace-pre-wrap leading-relaxed border border-gray-200 dark:border-white/10">
              {language === 'en' ? details.en : details.es}
            </div>
          )}
        </div>
      )}

      {highlights && (
        <div className="mt-4 max-w-[52rem]">
          <button
            onClick={() => setShowHighlights(!showHighlights)}
            className="px-4 py-2 text-sm font-medium text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300 transition-colors"
          >
            {showHighlights ? (language === 'en' ? 'Hide highlights & metrics' : 'Ocultar destacados') : (language === 'en' ? 'View highlights & metrics' : 'Ver destacados')}
          </button>

          {showHighlights && (
            <div className="mt-3 space-y-4 max-w-[52rem]">
              {/* Highlights */}
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <h4 className="font-semibold text-green-900 dark:text-green-200 mb-3">
                  {language === 'en' ? 'Highlights' : 'Destacados'}
                </h4>
                <ul className="space-y-2">
                  {(language === 'en' ? highlights.en : highlights.es).map((highlight: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-200">
                      <span className="text-green-600 dark:text-green-400 font-bold mt-0.5">✓</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Metrics */}
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-3">
                  {language === 'en' ? 'Metrics' : 'Métricas'}
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {metrics && (language === 'en' ? metrics.en : metrics.es).map((metric: { label: string; value: string }, idx: number) => (
                    <div key={idx} className="text-center">
                      <div className="text-xs font-medium text-blue-600 dark:text-blue-400 mb-1">
                        {metric.label}
                      </div>
                      <div className="text-sm font-bold text-blue-900 dark:text-blue-200">
                        {metric.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {caseStudy && (
        <div className="mt-4 max-w-[52rem]">
          <button
            onClick={() => setShowCaseStudy(!showCaseStudy)}
            className="px-4 py-2 text-sm font-medium text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300 transition-colors"
          >
            {showCaseStudy ? (language === 'en' ? 'Hide case study' : 'Ocultar caso de estudio') : (language === 'en' ? 'View case study' : 'Ver caso de estudio')}
          </button>

          {showCaseStudy && (
            <div className="mt-3 space-y-4 max-w-[52rem]">
              {/* Situation */}
              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                <h5 className="font-semibold text-purple-900 dark:text-purple-200 mb-2">
                  {language === 'en' ? 'Situation' : 'Situación'}
                </h5>
                <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed">
                  {language === 'en' ? caseStudy.en.situation : caseStudy.es.situation}
                </p>
              </div>

              {/* Task */}
              <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-200 dark:border-indigo-800">
                <h5 className="font-semibold text-indigo-900 dark:text-indigo-200 mb-2">
                  {language === 'en' ? 'Task' : 'Tarea'}
                </h5>
                <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed">
                  {language === 'en' ? caseStudy.en.task : caseStudy.es.task}
                </p>
              </div>

              {/* Actions */}
              <div className="p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg border border-cyan-200 dark:border-cyan-800">
                <h5 className="font-semibold text-cyan-900 dark:text-cyan-200 mb-2">
                  {language === 'en' ? 'Actions' : 'Acciones'}
                </h5>
                <ul className="space-y-2">
                  {(language === 'en' ? caseStudy.en.actions : caseStudy.es.actions).map((action: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-200">
                      <span className="text-cyan-600 dark:text-cyan-400 font-bold mt-0.5">→</span>
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges */}
              <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
                <h5 className="font-semibold text-orange-900 dark:text-orange-200 mb-2">
                  {language === 'en' ? 'Challenges' : 'Desafíos'}
                </h5>
                <ul className="space-y-2">
                  {(language === 'en' ? caseStudy.en.challenges : caseStudy.es.challenges).map((challenge: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-200">
                      <span className="text-orange-600 dark:text-orange-400 font-bold mt-0.5">⚡</span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Results */}
              <div className="p-4 bg-rose-50 dark:bg-rose-900/20 rounded-lg border border-rose-200 dark:border-rose-800">
                <h5 className="font-semibold text-rose-900 dark:text-rose-200 mb-2">
                  {language === 'en' ? 'Results' : 'Resultados'}
                </h5>
                <ul className="space-y-2">
                  {(language === 'en' ? caseStudy.en.results : caseStudy.es.results).map((result: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-200">
                      <span className="text-rose-600 dark:text-rose-400 font-bold mt-0.5">🎯</span>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Learnings */}
              <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <h5 className="font-semibold text-yellow-900 dark:text-yellow-200 mb-2">
                  {language === 'en' ? 'Learnings' : 'Aprendizajes'}
                </h5>
                <ul className="space-y-2">
                  {(language === 'en' ? caseStudy.en.learnings : caseStudy.es.learnings).map((learning: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-200">
                      <span className="text-yellow-600 dark:text-yellow-400 font-bold mt-0.5">💡</span>
                      <span>{learning}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
}
