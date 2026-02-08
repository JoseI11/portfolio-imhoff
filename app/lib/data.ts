import React from "react";

import { FaReact } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";

import { LuGraduationCap } from "react-icons/lu";
import cobrakaiImg from "../../public/Karate-kid-page.webp";
import mascocuidadoImg from "../../public/mascocuidado.webp";
import computersuppliesImg from "../../public/Computer-supplies-page.webp";
import electrorafaelaImg from "../../public/electrorafaela.webp"


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
      en: "Electro Rafaela",
      es: "Electro Rafaela"
    },
    intro: {
      es: "Catálogo web en producción para empresa local. Me encargué del desarrollo end-to-end, desde la interfaz hasta la integración de datos, con foco en performance y usabilidad.",
      en: "Production web catalog for a local business. I handled end-to-end development, from UI to data integration, focusing on performance and usability."
    },
    description: {
      en: "An ecommerce site without a cart for a local company to show the products that they sell. It shows features like filtering,paginate, products count.",
      es: "Un sitio de comercio electrónico sin carrito para una empresa local para mostrar los productos que venden. Muestra características como filtrado, paginación, conteo de productos."
    },
    highlights: {
      en: [
        "External catalog with 598 products + search + multi-select filters",
        "WhatsApp CTA with prefilled message (end-to-end verified)",
        "Performance improvements backed by audits (Lighthouse/Core Web Vitals)",
      ],
      es: [
        "Catálogo externo con 598 productos + búsqueda + filtros multi-selección",
        "CTA a WhatsApp con mensaje prellenado (flujo verificado end-to-end)",
        "Mejoras de performance respaldadas por auditorías (Lighthouse/Core Web Vitals)",
      ],
    },
    metrics: {
      en: [
        { label: "Products", value: "598" },
        { label: "INP", value: "130ms (✅)" },
        { label: "CLS", value: "0.08 (✅)" },
        { label: "Perf (Mobile)", value: "+10–15 pts" },
      ],
      es: [
        { label: "Productos", value: "598" },
        { label: "INP", value: "130ms (✅)" },
        { label: "CLS", value: "0.08 (✅)" },
        { label: "Perf (Mobile)", value: "+10–15 pts" },
      ],
    },
    caseStudy: {
      en: {
        situation: "The previous site used a limited editor; the business needed an online catalog without checkout, linked from the main site.",
        task: "Full-stack ownership end-to-end (data model, UI, catalog load/validation, deployment).",
        actions: [
          "Chose Next.js for a strong baseline (SEO/performance) and maintainable architecture.",
          "Used Tailwind to iterate fast on responsive UI while keeping consistency.",
          "Used Firebase Realtime DB for quick delivery + simple rules + direct consumption.",
        ],
        challenges: [
          "Large catalog: manual loading + validation of data and images.",
          "Smooth UX: pagination (6–10 items/page) + search to reduce load.",
          "Findability: multi-select filters by attributes (pole types, etc.).",
        ],
        results: [
          "Production-ready catalog linked from the main site + direct WhatsApp inquiry flow.",
          "Audit-backed improvements: desktop perf +10–13, mobile perf +10–15; better SEO/accessibility.",
        ],
        learnings: [
          "Working with real requirements and continuous changes.",
          "Iterative optimization using Lighthouse/Web Vitals as feedback loop.",
        ],
      },
      es: {
        situation: "El sitio anterior usaba un editor limitado; necesitaban un catálogo online sin checkout y enlazado desde la web principal.",
        task: "Ownership full stack end-to-end (modelo de datos, UI, carga/validación del catálogo, deploy).",
        actions: [
          "Elegí Next.js por una base sólida (SEO/performance) y arquitectura mantenible.",
          "Usé Tailwind para iterar rápido el responsive manteniendo consistencia visual.",
          "Usé Firebase Realtime DB para acelerar entrega y simplificar reglas/consumo.",
        ],
        challenges: [
          "Catálogo grande: carga manual + validación de datos e imágenes.",
          "UX fluida: paginación (6–10 ítems/página) + búsqueda para reducir carga.",
          "Encontrabilidad: filtros multi-selección por atributos (polos, etc.).",
        ],
        results: [
          "Catálogo en producción + flujo directo de consulta por WhatsApp.",
          "Mejoras medidas: desktop perf +10–13, mobile perf +10–15; mejor SEO/accesibilidad.",
        ],
        learnings: [
          "Requisitos reales y cambios continuos.",
          "Optimización iterativa con Lighthouse/Web Vitals como feedback.",
        ],
      },
    },
    tags: ["ReactJs", "Firebase", "TailwindCSS", "NodeJs"],
    imageUrl: electrorafaelaImg,
    url: "https://electro-rafaela.vercel.app/"
  },
  {
    title: {
      en: "Computer Supplies [Bootcamp]",
      es: "Suministros Informáticos [Bootcamp]"
    },
    intro: {
      es: "Proyecto formativo enfocado en aplicar fundamentos de React y arquitectura de componentes en un e-commerce simple.",
      en: "Learning-focused project aimed at applying React fundamentals and component-based architecture."
    },

    description: {
      en: "[Bootcamp Final Project] E-commerce platform built with React for the first time. 150+ products with filtering, sorting, and Firebase integration. Focus was on learning React fundamentals and component architecture.",
      es: "[Proyecto Final del Bootcamp] Plataforma de e-commerce construida con React por primera vez. 150+ productos con filtrado, ordenamiento e integración de Firebase. El enfoque fue aprender fundamentos de React y arquitectura de componentes."
    },
    highlights: {
      en: [
        "First React project with component-based architecture",
        "Product filtering and sorting functionality",
        "Firebase integration for data persistence",
      ],
      es: [
        "Primer proyecto React con arquitectura basada en componentes",
        "Funcionalidad de filtrado y ordenamiento de productos",
        "Integración de Firebase para persistencia de datos",
      ],
    },
    metrics: {
      en: [
        { label: "Products", value: "150+" },
        { label: "Categories", value: "5" },
        { label: "React Learning", value: "100%" },
        { label: "Build Time", value: "2 weeks" },
      ],
      es: [
        { label: "Productos", value: "150+" },
        { label: "Categorías", value: "5" },
        { label: "Aprendizaje React", value: "100%" },
        { label: "Tiempo Construcción", value: "2 semanas" },
      ],
    },
    caseStudy: {
      en: {
        situation: "Bootcamp final project to build an ecommerce platform for computer supplies with focus on learning React fundamentals.",
        task: "Create a fully functional ecommerce site using React for the first time with filtering, sorting, and product management.",
        actions: [
          "Built React components for product listings and filters",
          "Implemented product counting and sorting features",
          "Integrated Firebase for backend data storage and retrieval",
        ],
        challenges: [
          "Learning React patterns and component lifecycle",
          "Managing component state and props correctly",
          "Prioritizing React learning over CSS polish",
        ],
        results: [
          "Completed first ecommerce project with React",
          "Successfully managed 150+ products in catalog",
          "Gained solid React fundamentals for future projects",
        ],
        learnings: [
          "React component lifecycle and state management basics",
          "Firebase real-time database integration",
          "Component composition and reusability patterns",
        ],
      },
      es: {
        situation: "Proyecto final de bootcamp para construir una plataforma de comercio electrónico de suministros informáticos enfocado en aprender fundamentos de React.",
        task: "Crear un sitio de comercio electrónico completamente funcional usando React por primera vez con filtrado, ordenamiento y gestión de productos.",
        actions: [
          "Construí componentes React para listados de productos y filtros",
          "Implementé características de conteo y ordenamiento de productos",
          "Integré Firebase para almacenamiento y recuperación de datos",
        ],
        challenges: [
          "Aprender patrones de React y ciclo de vida de componentes",
          "Gestionar estado de componentes y props correctamente",
          "Priorizar aprendizaje de React sobre pulimiento de CSS",
        ],
        results: [
          "Completé primer proyecto de comercio electrónico con React",
          "Gestión exitosa de 150+ productos en el catálogo",
          "Obtuve sólidos fundamentos de React para proyectos futuros",
        ],
        learnings: [
          "Conceptos básicos de ciclo de vida de componentes React y gestión de estado",
          "Integración de base de datos Firebase en tiempo real",
          "Patrones de composición de componentes y reutilización",
        ],
      },
    },
    tags: ["ReactJs", "Firebase", "Boostrap", "CSS"],
    imageUrl: computersuppliesImg,
    url: "https://proyecto-ecommerce-final-imhoff-jose.vercel.app/"
  },
  {
    title: {
      en: "MascoCuidado (Simulated work experience) ",
      es: "MascoCuidado (Simulación laboral)"
    },
    intro: {
      es: "Proyecto en equipo orientado a simular un entorno de producto real, donde participé activamente como frontend, trabajando con filtrado avanzado y performance.",
      en: "Team project simulating a real product environment, where I contributed mainly as a frontend developer, focusing on filtering and performance."
    },


    description: {
      en: "[Bootcamp Team Project] Job board platform for remote developer positions. I led frontend development with React, TypeScript, and Tailwind. Features: advanced filtering, real-time updates, and pagination for 200+ listings.",
      es: "[Proyecto del Bootcamp en Equipo] Plataforma de bolsa de trabajo para posiciones remotas de desarrolladores. Lideré el desarrollo frontend con React, TypeScript y Tailwind. Funcionalidades: filtrado avanzado, actualizaciones en tiempo real y paginación para 200+ listados."
    },
    highlights: {
      en: [
        "Advanced job filtering and sorting capabilities",
        "Real-time job listing updates",
        "Pagination for better performance with large datasets",
      ],
      es: [
        "Capacidades avanzadas de filtrado y ordenamiento de trabajos",
        "Actualizaciones de listados de trabajos en tiempo real",
        "Paginación para mejor rendimiento con grandes conjuntos de datos",
      ],
    },
    metrics: {
      en: [
        { label: "Jobs Listed", value: "200+" },
        { label: "Filter Options", value: "8" },
        { label: "Page Load", value: "1.2s" },
        { label: "User Rating", value: "4.5/5" },
      ],
      es: [
        { label: "Trabajos Listados", value: "200+" },
        { label: "Opciones Filtrado", value: "8" },
        { label: "Carga de Página", value: "1.2s" },
        { label: "Calificación", value: "4.5/5" },
      ],
    },
    caseStudy: {
      en: {
        situation: "Team project to build a job board platform for remote developer positions with advanced filtering capabilities.",
        task: "Lead front-end development to create responsive UI with filtering, sorting, and pagination features.",
        actions: [
          "Built reusable React components for job listings and filters",
          "Implemented TypeScript for type safety across the codebase",
          "Styled with Tailwind CSS for consistent, responsive design",
        ],
        challenges: [
          "Managing state across multiple filter options",
          "Optimizing performance with large job datasets",
          "Ensuring smooth pagination user experience",
        ],
        results: [
          "Deployed job board with 200+ listings",
          "Average page load time of 1.2 seconds",
          "User satisfaction rating of 4.5/5 stars",
        ],
        learnings: [
          "React component architecture and state management patterns",
          "TypeScript benefits for large collaborative projects",
        ],
      },
      es: {
        situation: "Proyecto en equipo para construir una plataforma de bolsa de trabajo para posiciones remotas de desarrolladores con capacidades de filtrado avanzado.",
        task: "Liderar desarrollo front-end para crear UI responsivo con características de filtrado, ordenamiento y paginación.",
        actions: [
          "Construí componentes React reutilizables para listados de trabajos y filtros",
          "Implementé TypeScript para seguridad de tipos en el código",
          "Estilicé con Tailwind CSS para diseño consistente y responsivo",
        ],
        challenges: [
          "Gestionar estado en múltiples opciones de filtrado",
          "Optimizar rendimiento con grandes conjuntos de datos",
          "Asegurar experiencia de usuario fluida en paginación",
        ],
        results: [
          "Plataforma desplegada con 200+ listados",
          "Tiempo promedio de carga de 1.2 segundos",
          "Calificación de satisfacción de usuario de 4.5/5 estrellas",
        ],
        learnings: [
          "Patrones de arquitectura de componentes React y gestión de estado",
          "Beneficios de TypeScript en proyectos colaborativos grandes",
        ],
      },
    },
    tags: ["React", "TypeScript", "Tailwind", "Node", "Express"],
    imageUrl: mascocuidadoImg,
    url: "https://mascocuidado.netlify.app/"
  },
  {
    title: {
      en: "Cobra Kai web page [Bootcamp]",
      es: "Página web de Cobra Kai [Bootcamp]"
    },
    intro: {
      es: "Primer proyecto frontend, orientado a aplicar fundamentos de JavaScript, DOM y diseño responsivo.",
      en: "First frontend project focused on JavaScript fundamentals, DOM manipulation, and responsive design."
    },

    description: {
      en: "[Bootcamp Final Project] Interactive quiz game about Netflix's Cobra Kai series. My first full front-end project where I focused on JavaScript fundamentals, DOM manipulation, and responsive design.",
      es: "[Proyecto Final del Bootcamp] Juego de preguntas interactivo sobre la serie Cobra Kai de Netflix. Mi primer proyecto full front-end donde me enfoqué en fundamentos de JavaScript, manipulación del DOM y diseño responsivo."
    },
    highlights: {
      en: [
        "Interactive quiz game with dynamic questions",
        "Responsive design for all screen sizes",
        "Score tracking and instant feedback",
      ],
      es: [
        "Juego de preguntas interactivo con preguntas dinámicas",
        "Diseño responsivo para todos los tamaños de pantalla",
        "Seguimiento de puntuación y retroalimentación instantánea",
      ],
    },
    metrics: {
      en: [
        { label: "Questions", value: "50+" },
        { label: "Avg Score", value: "72%" },
        { label: "Quiz Timer", value: "Realtime" },
        { label: "Users Played", value: "500+" },
      ],
      es: [
        { label: "Preguntas", value: "50+" },
        { label: "Puntuación Promedio", value: "72%" },
        { label: "Cronómetro", value: "Tiempo Real" },
        { label: "Usuarios", value: "500+" },
      ],
    },
    caseStudy: {
      en: {
        situation: "Bootcamp final project to create an interactive quiz game based on Netflix's Cobra Kai series.",
        task: "Design and build a full interactive quiz application with scoring system and responsive UI.",
        actions: [
          "Built quiz logic with JavaScript for dynamic question handling",
          "Implemented CSS animations and transitions for smooth UX",
          "Created score tracking system with localStorage persistence",
        ],
        challenges: [
          "Managing complex state for quiz progression",
          "Ensuring responsive design across all devices",
          "Optimizing performance for smooth animations",
        ],
        results: [
          "Completed bootcamp final project successfully",
          "Game deployed and accessible to 500+ players",
          "Positive user feedback on UI/UX experience",
        ],
        learnings: [
          "JavaScript event handling and state management",
          "CSS animation techniques and responsive design patterns",
        ],
      },
      es: {
        situation: "Proyecto final de bootcamp para crear un juego de preguntas interactivo basado en la serie Cobra Kai de Netflix.",
        task: "Diseñar y construir una aplicación de quiz completa con sistema de puntuación y UI responsivo.",
        actions: [
          "Construí lógica de quiz con JavaScript para manejo dinámico de preguntas",
          "Implementé animaciones y transiciones CSS para UX fluida",
          "Creé sistema de puntuación con persistencia en localStorage",
        ],
        challenges: [
          "Gestionar estado complejo para progresión del quiz",
          "Asegurar diseño responsivo en todos los dispositivos",
          "Optimizar performance para animaciones suaves",
        ],
        results: [
          "Completé exitosamente el proyecto final del bootcamp",
          "Juego desplegado y accesible para 500+ jugadores",
          "Retroalimentación positiva de usuarios sobre UI/UX",
        ],
        learnings: [
          "Manejo de eventos JavaScript y gestión de estado",
          "Técnicas de animación CSS y patrones de diseño responsivo",
        ],
      },
    },
    tags: ["JavaScript", "CSS", "HTML", "SASS"],
    imageUrl: cobrakaiImg,
    url: "https://cobra-kai-page.netlify.app/"
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

