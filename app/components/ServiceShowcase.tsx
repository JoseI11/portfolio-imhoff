"use client";

import React from 'react';
import { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { useLanguage } from "../context/language-context";
import Image from 'next/image';
import {showcaseServices} from '../lib/data';


export default function ServiceShowcase() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const { language } = useLanguage();
    

    useEffect(() => {
        if (emblaApi) {
            emblaApi.on('select', () => {
                setSelectedIndex(emblaApi.selectedScrollSnap());
            });
        }
    }, [emblaApi]);

    return (

        <div className="w-full max-w-6xl mx-auto px-2 sm:px-4">
   

            <div className="relative w-full overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {showcaseServices.map((service, index) => (
                        <div
                            key={index}
                            className="flex-[0_0_100%] sm:flex-[0_0_80%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 px-2 sm:px-4"
                        >
                            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg h-full mx-auto max-w-sm">
                                <div className="relative h-48 sm:h-56 md:h-64">
                                    <Image
                                        src={service.imageUrl}
                                        alt={language === 'en' ? service.title.en : service.title.es}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                </div>
                                <div className="p-4 sm:p-6">
                                    <h4 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                                        {language === 'en' ? service.title.en : service.title.es}
                                    </h4>
                                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">
                                        {language === 'en' ? service.description.en : service.description.es}
                                    </p>
                                    <a
                                        href={service.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block w-full sm:w-auto text-center bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm sm:text-base"
                                    >
                                        View Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Botones de navegación mejorados para móviles */}
                <button
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-lg flex items-center justify-center text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors z-10 backdrop-blur-sm"
                    onClick={() => emblaApi?.scrollPrev()}
                    aria-label="Previous slide"
                >
                    &larr;
                </button>
                <button
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-lg flex items-center justify-center text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors z-10 backdrop-blur-sm"
                    onClick={() => emblaApi?.scrollNext()}
                    aria-label="Next slide"
                >
                    &rarr;
                </button>
            </div>

            {/* Indicadores de página */}
            <div className="flex justify-center mt-4 sm:mt-6 gap-2">
                {showcaseServices.map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${index === selectedIndex
                                ? 'bg-blue-500 w-6 sm:w-8'
                                : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                            }`}
                        onClick={() => emblaApi?.scrollTo(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}