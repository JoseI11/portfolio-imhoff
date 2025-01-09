import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import cobrakaiImg from "../../public/Karate-kid-page.jpg";
import mascocuidadoImg from "../../public/mascocuidado.png";
import computersuppliesImg from "../../public/Computer-supplies-page.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const educationData = [
    {
        title: "Graduated from the National Technological University of Rafaela,Argentina",
        location: "Rafaela, Argentina",
        description:
          "I graduated after 5 years of studying the carrer of Advanced Programming Technician. Since then I was looking for a job as a front-end developer because i was passionate about it.",
        icon: React.createElement(LuGraduationCap),
        date: "2015-2020",
      },
]

export const experiencesData = [

  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description: "Delivered website updates and new features for 3+ local businesses,Built and maintained full-stack solutions using HTML5, CSS3, JavaScript, PHP,  and MySQL as a database. Collaborated with a senior developer to implement advanced features, reducing client project timelines by 20%",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Cobra Kai web page",
    description:
      "I worked as a front-end developer on this project for 1 year. This was a final project for a bootcamp. It precisely was a quiz game about this Netflix show.",
    tags: ["JavaScript", "CSS","HTML","SASS"],
    imageUrl: cobrakaiImg,
  },
  {
    title: "MascoCuidado",
    description:
      "Job board for remote developer simulation jobs. I was the front-end developer in the team. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Tailwind","Node","Express"],
    imageUrl: mascocuidadoImg,
  },
  {
    title: "Computer Supplies",
    description:
      "An ecommerce site of computer supplies for a bootcamp as a final project. I used ReactJs for the first time in this project. It shows features like filtering, sorting, products count. In this project the CSS was poor because we focused on learning React.",
    tags: ["ReactJs", "Firebase", "Boostrap", "CSS"],
    imageUrl: computersuppliesImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Github",
  "Tailwind",
  "MongoDB",
  "MYSQL",
  "Express",
  "Framer Motion",
] as const;
