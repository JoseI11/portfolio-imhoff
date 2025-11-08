"use client";

import { useRef } from "react";
import { projectsData } from "../lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "../context/language-context";
type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  url,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
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
      <section className="bg-gray-100 max-w-[52rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] dark:text-white hover:bg-gray-200 transition sm:group-even:pl-8 dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-2xl font-semibold">{language === 'en' ? title.en : title.es}</h3>
            <Link 
              href={url}
              className="inline-block mt-2 sm:hidden px-4 py-2 bg-gray-900 text-white rounded-full 
                text-sm font-medium hover:bg-gray-950 transition-colors
                dark:bg-white dark:bg-opacity-10 text-center"
            >
              {language === 'en' ? 'View Project' : 'Ver Proyecto'}
            </Link>
          </div>
          <p className="mt-4 leading-relaxed text-gray-700 dark:text-white/70">
            {language === 'en' ? description.en : description.es}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div className="absolute top-8 -right-36 w-[28.25rem] transition-all group-even:right-[initial] group-even:-left-36 hidden sm:block">
          <Link href={url}>
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
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
