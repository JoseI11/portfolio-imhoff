import React from "react";

import { FaReact } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";

import { LuGraduationCap } from "react-icons/lu";
import cobrakaiImg from "../../public/Karate-kid-page.webp";
import mascocuidadoImg from "../../public/mascocuidado.webp";
import computersuppliesImg from "../../public/Computer-supplies-page.webp";
import electrorafaelaImg from "../../public/electrorafaela.webp"


// export const links = [
//   {
//     name: "Home",
//     hash: "#home",
//   },
//   {
//     name: "About",
//     hash: "#about",
//   },
//   {
//     name: "Projects",
//     hash: "#projects",
//   },
//   {
//     name: "Skills",
//     hash: "#skills",
//   },
//   {
//     name: "Services",
//     hash: "#services",
//   },
//   {
//     name: "Experience",
//     hash: "#experience",
//   },
//   {
//     name: "Contact",
//     hash: "#contact",
//   },
// ] as const;
export const links = [
  {
    name: {
      en: "Home",
      es: "Inicio"
    },
    hash: "#home",
  },
  {
    name: {
      en: "About",
      es: "Sobre mí"
    },
    hash: "#about",
  },
  {
    name: {
      en: "Projects",
      es: "Proyectos"
    },
    hash: "#projects",
  },
  {
    name: {
      en: "Skills",
      es: "Habilidades"
    },
    hash: "#skills",
  },
  {
    name: {
      en: "Services",
      es: "Servicios"
    },
    hash: "#services",
  },
  {
    name: {
      en: "Experience",
      es: "Experiencia"
    },
    hash: "#experience",
  },
  {
    name: {
      en: "Contact",
      es: "Contacto"
    },
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

// export const servicesData = [
//   {
//     title: "Web Design",
//     description: "Modern and responsive websites that adapt to all devices.",
//     icon: "🌐",
//   },
//   {
//     title: "Frontend Development",
//     description: "Creation of interactive user interfaces with HTML, CSS, and JavaScript.",
//     icon: "💻",
//   },

// ] as const;

export const servicesData = [
  {
    title: {
      en: "Web Design",
      es: "Diseño Web"
    },
    description: {
      en: "Modern and responsive websites that adapt to all devices.",
      es: "Sitios web modernos y responsivos que se adaptan a todos los dispositivos."
    },
    icon: "🌐",
  },
  {
    title: {
      en: "Frontend Development",
      es: "Desarrollo Frontend"
    },
    description: {
      en: "Creation of interactive user interfaces with HTML, CSS, and JavaScript.",
      es: "Creación de interfaces de usuario interactivas con HTML, CSS y JavaScript."
    },
    icon: "💻",
  },
] as const;

export const experiencesData = [
  {
    title: {
      en: "PHP Full Stack Developer | MyWORK (Remote)",
      es: "Desarrollador Full Stack PHP | MyWORK (Remoto)"
    },
    location: {
      en: "Rafaela, Santa Fe, Argentina",
      es: "Rafaela, Santa Fe, Argentina"
    },
    description: {
      en: "As a PHP Full-Stack Developer, I was responsible for implementing new functionalities and maintaining websites. I used PHP for the backend, along with HTML, CSS, and Bootstrap for the frontend. I also optimized system stability and performance by refactoring code and improving the MySQL database structure. The entire team collaborated effectively using Git for version control.",
      es: "Como Desarrollador Full-Stack PHP, fui responsable de implementar nuevas funcionalidades y mantener sitios web. Utilicé PHP para el backend, junto con HTML, CSS y Bootstrap para el frontend. También optimicé la estabilidad y el rendimiento del sistema mediante la refactorización de código y la mejora de la estructura de la base de datos MySQL. Todo el equipo colaboró efectivamente usando Git para el control de versiones."
    },
    icon: React.createElement(FaPhp),
    date: "2022 - 2023",
  },
  {
    title: {
      en: "Administrative Assistant | AGT Automatizaciones (On-site)",
      es: "Asistente Administrativo | AGT Automatizaciones (Presencial)"
    },
    location: {
      en: "Rafaela, Santa Fe, Argentina",
      es: "Rafaela, Santa Fe, Argentina"
    },
    description: {
      en: "I worked as a administrative assistant for a company, one of my tasks were: take register of the materials and hours of the different jobs of the employees",
      es: "Trabajé como asistente administrativo para una empresa, una de mis tareas era: llevar el registro de los materiales y horas de los diferentes trabajos de los empleados"
    },
    icon: React.createElement(FaDesktop),
    date: "2023 - 2024",
  },
  {
    title: {
      en: "Next.js Full Stack Developer | Electro Rafaela (On-site)",
      es: "Desarrollador Full Stack Next.js | Electro Rafaela (Presencial)"
    },
    location: {
      en: "Rafaela, Santa Fe, Argentina",
      es: "Rafaela, Santa Fe, Argentina"
    },
    description: {
      en: "I designed and developed a corporate website for a client using Next.js, Tailwind CSS, and Firebase to showcase over 500 products. I independently led the technical decisions and successfully delivered the project on time.",
      es: "Diseñé y desarrollé un sitio web corporativo para un cliente usando Next.js, Tailwind CSS y Firebase para mostrar más de 500 productos. Lideré independientemente las decisiones técnicas y entregué el proyecto exitosamente a tiempo."
    },
    icon: React.createElement(FaReact),
    date: "2025 - 2025",
  }
] as const;

export const projectsData = [
  {
    title: {
      en: "Cobra Kai web page",
      es: "Página web de Cobra Kai"
    },
    description: {
      en: "I worked as a front-end developer on this project for 1 year. This was a final project for a bootcamp. It precisely was a quiz game about this Netflix show.",
      es: "Trabajé como desarrollador front-end en este proyecto durante 1 año. Este fue un proyecto final para un bootcamp. Precisamente era un juego de preguntas sobre esta serie de Netflix."
    },
    tags: ["JavaScript", "CSS", "HTML", "SASS"],
    imageUrl: cobrakaiImg,
    url: "https://cobra-kai-page.netlify.app/"
  },
  {
    title: {
      en: "MascoCuidado",
      es: "MascoCuidado"
    },
    description: {
      en: "Job board for remote developer simulation jobs. I was the front-end developer in the team. It has features like filtering, sorting and pagination.",
      es: "Tablero de trabajos para simulación de trabajos remotos para desarrolladores. Fui el desarrollador front-end en el equipo. Tiene características como filtrado, ordenamiento y paginación."
    },
    tags: ["React", "TypeScript", "Tailwind", "Node", "Express"],
    imageUrl: mascocuidadoImg,
    url: "https://mascocuidado.netlify.app/"
  },
  {
    title: {
      en: "Computer Supplies",
      es: "Suministros Informáticos"
    },
    description: {
      en: "An ecommerce site of computer supplies for a bootcamp as a final project. I used ReactJs for the first time in this project. It shows features like filtering, sorting, products count. In this project the CSS was poor because we focused on learning React.",
      es: "Un sitio de comercio electrónico de suministros informáticos para un bootcamp como proyecto final. Usé ReactJs por primera vez en este proyecto. Muestra características como filtrado, ordenamiento, conteo de productos. En este proyecto el CSS fue pobre porque nos enfocamos en aprender React."
    },
    tags: ["ReactJs", "Firebase", "Boostrap", "CSS"],
    imageUrl: computersuppliesImg,
    url: "https://proyecto-ecommerce-final-imhoff-jose.vercel.app/"
  },
  {
    title: {
      en: "Electro Rafaela",
      es: "Electro Rafaela"
    },
    description: {
      en: "An ecommerce site without a cart for a local company to show the products that they sell. It shows features like filtering,paginate, products count.",
      es: "Un sitio de comercio electrónico sin carrito para una empresa local para mostrar los productos que venden. Muestra características como filtrado, paginación, conteo de productos."
    },
    tags: ["ReactJs", "Firebase", "TailwindCSS", "NodeJs"],
    imageUrl: electrorafaelaImg,
    url: "https://electro-rafaela.vercel.app/"
  }
] as const;

///////////////////////////////////////////////////////////////

export const showcaseServices = [
  {
    title: {
      en: "Marketing Pro",
      es: "Marketing Pro"
    },
    description: {
      en: "Web page of the marketing company Marketing Pro",
      es: "Página web de la empresa de marketing Marketing Pro"
    },
    imageUrl: "https://i.postimg.cc/N0b6gSV2/Captura-de-pantalla-2025-09-19-154022.png",
    demoUrl: "https://marketing-plantilla.vercel.app/"
  },
  {
    title: {
      en: "Ethos Apparel",
      es: "Ethos Apparel"
    },
    description: {
      en: "Web page for a clothing company",
      es: "Página web para una empresa de ropa"
    },
    imageUrl: "https://i.postimg.cc/R0v1x4Pz/Captura-de-pantalla-2025-09-19-154125.png",
    demoUrl: "https://ethos-apparel.vercel.app/"
  },
  {
    title: {
      en: "Ice cream shop Delicias",
      es: "Heladería Delicias"
    },
    description: {
      en: "Web page for the ice cream shop Delicias",
      es: "Página web para la heladería Delicias"
    },
    imageUrl: "https://i.postimg.cc/qRR8gQVb/Captura-de-pantalla-2025-09-19-153940.png",
    demoUrl: "https://app.netlify.com/projects/tienda-delicias/"
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

export const formSectionData = [
  {
    titleSection: {
      en: "Contact Me",
      es: "Contactame"
    },
  },
  {
    descriptionSection: {
      en: "I'm interested in freelance opportunities. However, if you have other requests or questions, don't hesitate to contact me.",
      es: "Estoy interesado en oportunidades de trabajo freelance. Sin embargo, si tienes otras preguntas o solicitudes, no dudes en contactarme."
    },
  }, 
  {
    emailTitle: {
      en: "Email",
      es: "Correo"
    },
  }, 
  {
    emailMessage: {
      en: "Send me an email",
      es: "Envíame un correo"
    }
  }, 
  {
    submitButton: {
      en: "Send",
      es: "Enviar"
    }
  },

]

// export const links = [
//   {
//     name: {
//       en: "Home",
//       es: "Inicio"
//     },
//     hash: "#home",
//   },
//   {
//     name: {
//       en: "About",
//       es: "Sobre mí"
//     },
//     hash: "#about",
//   },
//   {
//     name: {
//       en: "Projects",
//       es: "Proyectos"
//     },
//     hash: "#projects",
//   },
//   {
//     name: {
//       en: "Skills",
//       es: "Habilidades"
//     },
//     hash: "#skills",
//   },
//   {
//     name: {
//       en: "Services",
//       es: "Servicios"
//     },
//     hash: "#services",
//   },
//   {
//     name: {
//       en: "Experience",
//       es: "Experiencia"
//     },
//     hash: "#experience",
//   },
//   {
//     name: {
//       en: "Contact",
//       es: "Contacto"
//     },
//     hash: "#contact",
//   },
// ] as const;

// export const educationData = [
//   {
//     title: {
//       en: "Graduated from the National Technological University of Rafaela, Argentina",
//       es: "Graduado de la Universidad Tecnológica Nacional de Rafaela, Argentina"
//     },
//     location: {
//       en: "Rafaela, Argentina",
//       es: "Rafaela, Argentina"
//     },
//     description: {
//       en: "I graduated after 5 years of studying the carrer of Advanced Programming Technician. Since then I was looking for a job as a front-end developer because i was passionate about it.",
//       es: "Me gradué después de 5 años de estudiar la carrera de Técnico Superior en Programación. Desde entonces estuve buscando trabajo como desarrollador front-end porque me apasionaba."
//     },
//     icon: React.createElement(LuGraduationCap),
//     date: "2015-2020",
//   },
// ];

// export const servicesData = [
//   {
//     title: {
//       en: "Web Design",
//       es: "Diseño Web"
//     },
//     description: {
//       en: "Modern and responsive websites that adapt to all devices.",
//       es: "Sitios web modernos y responsivos que se adaptan a todos los dispositivos."
//     },
//     icon: "🌐",
//   },
//   {
//     title: {
//       en: "Frontend Development",
//       es: "Desarrollo Frontend"
//     },
//     description: {
//       en: "Creation of interactive user interfaces with HTML, CSS, and JavaScript.",
//       es: "Creación de interfaces de usuario interactivas con HTML, CSS y JavaScript."
//     },
//     icon: "💻",
//   },
// ] as const;

// export const experiencesData = [
//   {
//     title: {
//       en: "PHP Full Stack Developer | MyWORK (Remote)",
//       es: "Desarrollador Full Stack PHP | MyWORK (Remoto)"
//     },
//     location: {
//       en: "Rafaela, Santa Fe, Argentina",
//       es: "Rafaela, Santa Fe, Argentina"
//     },
//     description: {
//       en: "As a PHP Full-Stack Developer, I was responsible for implementing new functionalities and maintaining websites. I used PHP for the backend, along with HTML, CSS, and Bootstrap for the frontend. I also optimized system stability and performance by refactoring code and improving the MySQL database structure. The entire team collaborated effectively using Git for version control.",
//       es: "Como Desarrollador Full-Stack PHP, fui responsable de implementar nuevas funcionalidades y mantener sitios web. Utilicé PHP para el backend, junto con HTML, CSS y Bootstrap para el frontend. También optimicé la estabilidad y el rendimiento del sistema mediante la refactorización de código y la mejora de la estructura de la base de datos MySQL. Todo el equipo colaboró efectivamente usando Git para el control de versiones."
//     },
//     icon: React.createElement(FaPhp),
//     date: "2022 - 2023",
//   },
//   {
//     title: {
//       en: "Administrative Assistant | AGT Automatizaciones (On-site)",
//       es: "Asistente Administrativo | AGT Automatizaciones (Presencial)"
//     },
//     location: {
//       en: "Rafaela, Santa Fe, Argentina",
//       es: "Rafaela, Santa Fe, Argentina"
//     },
//     description: {
//       en: "I worked as a administrative assistant for a company, one of my tasks were: take register of the materials and hours of the different jobs of the employees",
//       es: "Trabajé como asistente administrativo para una empresa, una de mis tareas era: llevar el registro de los materiales y horas de los diferentes trabajos de los empleados"
//     },
//     icon: React.createElement(FaDesktop),
//     date: "2023 - 2024",
//   },
//   {
//     title: {
//       en: "Next.js Full Stack Developer | Electro Rafaela (On-site)",
//       es: "Desarrollador Full Stack Next.js | Electro Rafaela (Presencial)"
//     },
//     location: {
//       en: "Rafaela, Santa Fe, Argentina",
//       es: "Rafaela, Santa Fe, Argentina"
//     },
//     description: {
//       en: "I designed and developed a corporate website for a client using Next.js, Tailwind CSS, and Firebase to showcase over 500 products. I independently led the technical decisions and successfully delivered the project on time.",
//       es: "Diseñé y desarrollé un sitio web corporativo para un cliente usando Next.js, Tailwind CSS y Firebase para mostrar más de 500 productos. Lideré independientemente las decisiones técnicas y entregué el proyecto exitosamente a tiempo."
//     },
//     icon: React.createElement(FaReact),
//     date: "2025 - 2025",
//   }
// ] as const;

// export const projectsData = [
//   {
//     title: {
//       en: "Cobra Kai web page",
//       es: "Página web de Cobra Kai"
//     },
//     description: {
//       en: "I worked as a front-end developer on this project for 1 year. This was a final project for a bootcamp. It precisely was a quiz game about this Netflix show.",
//       es: "Trabajé como desarrollador front-end en este proyecto durante 1 año. Este fue un proyecto final para un bootcamp. Precisamente era un juego de preguntas sobre esta serie de Netflix."
//     },
//     tags: ["JavaScript", "CSS", "HTML", "SASS"],
//     imageUrl: cobrakaiImg,
//     url: "https://cobra-kai-page.netlify.app/"
//   },
//   {
//     title: {
//       en: "MascoCuidado",
//       es: "MascoCuidado"
//     },
//     description: {
//       en: "Job board for remote developer simulation jobs. I was the front-end developer in the team. It has features like filtering, sorting and pagination.",
//       es: "Tablero de trabajos para simulación de trabajos remotos para desarrolladores. Fui el desarrollador front-end en el equipo. Tiene características como filtrado, ordenamiento y paginación."
//     },
//     tags: ["React", "TypeScript", "Tailwind", "Node", "Express"],
//     imageUrl: mascocuidadoImg,
//     url: "https://mascocuidado.netlify.app/"
//   },
//   {
//     title: {
//       en: "Computer Supplies",
//       es: "Suministros Informáticos"
//     },
//     description: {
//       en: "An ecommerce site of computer supplies for a bootcamp as a final project. I used ReactJs for the first time in this project. It shows features like filtering, sorting, products count. In this project the CSS was poor because we focused on learning React.",
//       es: "Un sitio de comercio electrónico de suministros informáticos para un bootcamp como proyecto final. Usé ReactJs por primera vez en este proyecto. Muestra características como filtrado, ordenamiento, conteo de productos. En este proyecto el CSS fue pobre porque nos enfocamos en aprender React."
//     },
//     tags: ["ReactJs", "Firebase", "Boostrap", "CSS"],
//     imageUrl: computersuppliesImg,
//     url: "https://proyecto-ecommerce-final-imhoff-jose.vercel.app/"
//   },
//   {
//     title: {
//       en: "Electro Rafaela",
//       es: "Electro Rafaela"
//     },
//     description: {
//       en: "An ecommerce site without a cart for a local company to show the products that they sell. It shows features like filtering,paginate, products count.",
//       es: "Un sitio de comercio electrónico sin carrito para una empresa local para mostrar los productos que venden. Muestra características como filtrado, paginación, conteo de productos."
//     },
//     tags: ["ReactJs", "Firebase", "TailwindCSS", "NodeJs"],
//     imageUrl: electrorafaelaImg,
//     url: "https://electro-rafaela.vercel.app/"
//   }
// ] as const;

// export const showcaseServices = [
//   {
//     title: {
//       en: "Marketing Pro",
//       es: "Marketing Pro"
//     },
//     description: {
//       en: "Web page of the marketing company Marketing Pro",
//       es: "Página web de la empresa de marketing Marketing Pro"
//     },
//     imageUrl: "https://i.postimg.cc/N0b6gSV2/Captura-de-pantalla-2025-09-19-154022.png",
//     demoUrl: "https://marketing-plantilla.vercel.app/"
//   },
//   {
//     title: {
//       en: "Ethos Apparel",
//       es: "Ethos Apparel"
//     },
//     description: {
//       en: "Web page for a clothing company",
//       es: "Página web para una empresa de ropa"
//     },
//     imageUrl: "https://i.postimg.cc/R0v1x4Pz/Captura-de-pantalla-2025-09-19-154125.png",
//     demoUrl: "https://ethos-apparel.vercel.app/"
//   },
//   {
//     title: {
//       en: "Ice cream shop Delicias",
//       es: "Heladería Delicias"
//     },
//     description: {
//       en: "Web page for the ice cream shop Delicias",
//       es: "Página web para la heladería Delicias"
//     },
//     imageUrl: "https://i.postimg.cc/qRR8gQVb/Captura-de-pantalla-2025-09-19-153940.png",
//     demoUrl: "https://app.netlify.com/projects/tienda-delicias/"
//   }
// ] as const;

// // skillsData no necesita traducción ya que son términos técnicos
// export const skillsData = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "TypeScript",
//   "React",
//   "Next.js",
//   "Node.js",
//   "Github",
//   "Tailwind",
//   "MongoDB",
//   "MYSQL",
//   "Express",
//   "Firebase",
//   "Framer Motion",
// ] as const;