'use client';

import Image from "next/image";
import { useEffect, useRef } from "react";

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
   
    const textElement = textRef.current;
    const imageElement = imageRef.current;
    const scrollElement = scrollIndicatorRef.current;

    if (textElement) {
      textElement.style.opacity = '0';
      textElement.style.transform = 'translateY(30px) scale(0.95)';
      
      setTimeout(() => {
        textElement.style.transition = 'all 0.8s ease-out';
        textElement.style.opacity = '1';
        textElement.style.transform = 'translateY(0) scale(1)';
      }, 100);
    }

    if (imageElement) {
      imageElement.style.opacity = '0';
      imageElement.style.transform = 'scale(1.1) rotate(-2deg)';
      
      setTimeout(() => {
        imageElement.style.transition = 'all 0.8s ease-out 0.2s';
        imageElement.style.opacity = '1';
        imageElement.style.transform = 'scale(1) rotate(0deg)';
      }, 300);
    }

    if (scrollElement) {
      scrollElement.style.opacity = '0';
      
      setTimeout(() => {
        scrollElement.style.transition = 'opacity 0.6s ease-out 1s';
        scrollElement.style.opacity = '1';
      }, 1200);
    }
  }, []);

  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleScrollTo = (sectionId: string) => {
    try {
      scrollToSection(sectionId);
    } catch {
      smoothScrollTo(sectionId);
    }
  };

  return (
    <section
      id="home"
      className="relative bg-white overflow-hidden min-h-[85vh] flex items-center pt-12"
    >
      {/* Optional: Add subtle background pattern or gradient animation */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-josseypink1/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-8 max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Content */}
          <div 
            ref={textRef}
            className="text-gray-800 md:w-1/2 mb-6 md:mb-0 order-2 md:order-1"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center md:text-left">
              I&apos;m JosseyCodes
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-josseypink1 mb-6 text-center md:text-left">
              Fullstack Software Developer
            </p>

            <div className="mb-6">
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg text-center md:text-left">
                Welcome here! I build softwares, APIs, websites and MVPs that get
                funded. I&apos;m a valuable addition to your IT team. Let us discuss how I can help you
              </p>
            </div>

            {/* Buttons Section */}
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mb-8 justify-center md:justify-start">
              <button
                onClick={() => handleScrollTo("portfolio")}
                className="bg-josseypink1 text-white px-5 py-3 rounded-lg font-medium hover:bg-josseypink2 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base hover:-translate-y-1"
              >
                View My Projects
              </button>
              <a
                href="https://docs.google.com/document/d/1pOxMRF6Hhl0nEqKUAAz_kdqbm3cgh34nq6cZ-pgepm4/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-josseypink1 text-josseypink1 px-5 py-3 rounded-lg font-medium hover:bg-josseypink1 hover:text-white transition-all duration-300 text-sm sm:text-base flex items-center justify-center hover:-translate-y-1 hover:shadow-lg"
              >
                Download My CV
              </a>
            </div>

            {/* Keep Scrolling Link */}
            <div className="mt-6 flex justify-center md:justify-start">
              <a
                ref={scrollIndicatorRef}
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo("about");
                }}
                className="flex items-center text-josseypink1 opacity-80 hover:opacity-100 transition-all duration-300 text-sm sm:text-base group"
              >
                <span className="mr-2 group-hover:translate-y-1 transition-transform duration-300">
                  Keep Scrolling
                </span>
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce group-hover:scale-110 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div 
            ref={imageRef}
            className="md:w-1/2 flex justify-center items-center mb-8 md:mb-0 order-1 md:order-2"
          >
            <div className="relative group">
              <Image
                src="/assets/img/bestpic-removebg-preview.png"
                alt="Josephine"
                width={450}
                height={450}
                className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-cover 
                border-4 border-josseypink1 rounded-full shadow-xl group-hover:shadow-2xl 
                transition-all duration-500 group-hover:scale-105"
                priority
              />
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-josseypink1/20 to-josseypink1/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 group-hover:scale-110"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}