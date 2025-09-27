'use client';

import Image from "next/image";

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
 
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
      className="relative bg-josseypink1 overflow-hidden min-h-[85vh] flex items-center pt-12"
    >
      <div className="container mx-auto px-4 sm:px-6 py-8 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Content */}
          <div className="text-white md:w-1/2 mb-6 md:mb-0 order-2 md:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              I&apos;m JosseyCodes
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl opacity-90 mb-6">
              Fullstack Software Developer
            </p>

            <div className="mb-6">
              <p className="text-base sm:text-lg opacity-85 leading-relaxed max-w-lg">
                Welcome here! I build softwares, APIs, websites and MVPs that get
                funded. I&apos;m a valuable addition to your IT team. Let us discuss how I can help you
              </p>
            </div>

            {/* Buttons Section */}
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mb-8">
              <button
                onClick={() => handleScrollTo("portfolio")}
                className="bg-white text-josseypink1 px-5 py-3 rounded-lg font-medium hover:bg-gray-100 transform hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-lg text-sm sm:text-base"
              >
                View My Projects
              </button>
              <a
                href="https://docs.google.com/document/d/1pOxMRF6Hhl0nEqKUAAz_kdqbm3cgh34nq6cZ-pgepm4/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-5 py-3 rounded-lg font-medium hover:bg-white hover:text-josseypink1 transition-colors duration-300 text-sm sm:text-base flex items-center justify-center"
              >
                View My CV
              </a>
            </div>

            {/* Keep Scrolling Link */}
            <div className="mt-6">
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo("about");
                }}
                className="flex items-center text-white opacity-80 hover:opacity-100 transition-opacity text-sm sm:text-base"
              >
                <span className="mr-2">Keep Scrolling</span>
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce"
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
          <div className="md:w-1/2 flex justify-center items-center mb-8 md:mb-0 order-1 md:order-2">
            <Image
              src="/assets/img/bestpic2.png"
              alt="Josephine"
              width={450}
              height={450}
              className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-cover 
              border-4 border-white rounded-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
