"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { servicesData, showcaseServices } from "../lib/data";
import { useSectionInView } from "../lib/hooks";
import ServiceShowcase from "./ServiceShowcase";

export default function Services() {
    const { ref } = useSectionInView("Services", 0.5);

    return (
        <section ref={ref} id="services" className="scroll-mt-28 mb-28">
            <SectionHeading>My services</SectionHeading>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 sm:px-6 lg:px-8">
                {servicesData.map((service, index) => (
                    <motion.div
                        key={index}
                        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow dark:bg-white/10 dark:hover:bg-white/20 mx-auto w-full max-w-md"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className="text-4xl mb-4 text-blue-500">{service.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                    </motion.div>
                ))}
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-center mt-12 mb-6 sm:mb-8 text-gray-800 dark:text-white">
                Some of my pages
            </h3>
            <ServiceShowcase services={showcaseServices} />
        </section>
    );
}