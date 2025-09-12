import React from "react";

import { FaDesktop, FaPhp, FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import cobrakaiImg from "../../public/Karate-kid-page.jpg";
import mascocuidadoImg from "../../public/mascocuidado.png";
import computersuppliesImg from "../../public/Computer-supplies-page.jpg";
import electrorafaelaImg from "../../public/electrorafaela.png"



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
    title: "PHP Full Stack Developer | MyWORK (Remote)",
    location: "Rafaela, Santa Fe, Argentina",
    description: "As a PHP Full-Stack Developer, I was responsible for implementing new functionalities and maintaining websites. I used PHP for the backend, along with HTML, CSS, and Bootstrap for the frontend. I also optimized system stability and performance by refactoring code and improving the MySQL database structure. The entire team collaborated effectively using Git for version control.",
    icon: React.createElement(FaPhp),
    date: "2022 - 2023",
  },
  {
    title: "Administrative Assistant | AGT Automatizaciones (On-site)",
    location: "Rafaela, Santa Fe, Argentina",
    description:
      "I worked as a administrative assistant for a company, one of my tasks were: take register of the materials and hours of the different jobs of the employees",
    icon: React.createElement(FaDesktop),
    date: "2023 - 2024",
  },
  {
    title: "Next.js Full Stack Developer | Electro Rafaela (On-site)",
    location: "Rafaela, Santa Fe, Argentina",
    description: "I designed and developed a corporate website for a client using **Next.js, Tailwind CSS, and Firebase** to showcase over 500 products. I independently led the technical decisions and successfully delivered the project on time.",
    icon: React.createElement(FaReact),
    date: "2025 - 2025",
  }
] as const;

export const projectsData = [
  {
    title: "Cobra Kai web page",
    description:
      "I worked as a front-end developer on this project for 1 year. This was a final project for a bootcamp. It precisely was a quiz game about this Netflix show.",
    tags: ["JavaScript", "CSS", "HTML", "SASS"],
    imageUrl: cobrakaiImg,
    url:"https://cobra-kai-fan.netlify.app"
  },
  {
    title: "MascoCuidado",
    description:
      "Job board for remote developer simulation jobs. I was the front-end developer in the team. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Tailwind", "Node", "Express"],
    imageUrl: mascocuidadoImg,
    url:"https://mascocuidado.netlify.app/"
  },
  {
    title: "Computer Supplies",
    description:
      "An ecommerce site of computer supplies for a bootcamp as a final project. I used ReactJs for the first time in this project. It shows features like filtering, sorting, products count. In this project the CSS was poor because we focused on learning React.",
    tags: ["ReactJs", "Firebase", "Boostrap", "CSS"],
    imageUrl: computersuppliesImg,
    url:"https://proyecto-ecommerce-final-imhoff-jose.vercel.app/"
  },
  {
    title: "Electro Rafaela",
    description:
      "An ecommerce site without a cart for a local company to show the products that they sell. It shows features like filtering,paginate, products count.",
    tags: ["ReactJs", "Firebase", "TailwindCSS", "NodeJs"],
    imageUrl: electrorafaelaImg,
    url:"https://electro-rafaela.vercel.app/"
  }
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
  "Firebase",
  "Framer Motion",
] as const;
