'use client';

import Image from "next/image";
import { useEffect, useRef } from "react";

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
           
            if (imageRef.current) {
              imageRef.current.style.opacity = '0';
              imageRef.current.style.transform = 'translateX(-50px) scale(0.9)';
              
              setTimeout(() => {
                imageRef.current!.style.transition = 'all 0.8s ease-out';
                imageRef.current!.style.opacity = '1';
                imageRef.current!.style.transform = 'translateX(0) scale(1)';
              }, 200);
            }

            // Animate content
            if (contentRef.current) {
              contentRef.current.style.opacity = '0';
              contentRef.current.style.transform = 'translateX(50px)';
              
              setTimeout(() => {
                contentRef.current!.style.transition = 'all 0.8s ease-out 0.3s';
                contentRef.current!.style.opacity = '1';
                contentRef.current!.style.transform = 'translateX(0)';
              }, 400);
            }

            // Animate social icons
            if (socialRef.current) {
              const icons = socialRef.current.children;
              Array.from(icons).forEach((icon, index) => {
                (icon as HTMLElement).style.opacity = '0';
                (icon as HTMLElement).style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                  (icon as HTMLElement).style.transition = `all 0.5s ease-out ${0.6 + index * 0.1}s`;
                  (icon as HTMLElement).style.opacity = '1';
                  (icon as HTMLElement).style.transform = 'translateY(0)';
                }, 600 + index * 100);
              });
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-gray-800 mb-4">
            About Me
          </h2>
          <div className="w-16 h-1 bg-josseypink1 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
          {/* Image Section */}
          <div ref={imageRef} className="lg:w-2/5 flex justify-center">
            <div className="relative group">
              <Image
                src="/assets/img/bestpic-removebg-preview.png"
                alt="Josephine"
                width={400}
                height={400}
                className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 object-cover border-4 border-josseypink1 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-500"
              />
              {/* Floating elements around image */}
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-josseypink1 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-josseypink1 rounded-full opacity-15 group-hover:opacity-30 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Content Section */}
          <div ref={contentRef} className="lg:w-3/5">
            <div className="bg-white rounded-xl p-5 sm:p-6 lg:p-7 shadow-md border border-gray-100">
              <h3 className="text-xl sm:text-2xl lg:text-2xl font-bold text-gray-800 mb-2">
                Josephine Adewumi
              </h3>
              <span className="text-base sm:text-lg lg:text-lg text-josseypink1 font-semibold mb-4 block">
                Fullstack Software Engineer
              </span>

              <div className="space-y-3 lg:space-y-4">
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-base">
                  I am <span className="text-josseypink1 font-semibold">Fullstack Software Developer</span> who builds high-performance websites and applications that scale with business needs. I specialize in creating secure backends with Python and Django, paired with fast, interactive frontends using React and Next.js.
                </p>

                <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-base">
                  My work centers on writing <span className="text-josseypink1 font-semibold">clean, maintainable code</span> and delivering solutions that solve real problems. I collaborate effectively with teams to move ideas from concept to launch, focusing on both functionality and exceptional user experience.
                </p>

                <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-base">
                  For clients, I deliver products that <span className="text-josseypink1 font-semibold">achieve business goals</span> and delight users. With clear communication and deadline-driven development, I ensure the final result supports long-term growth and success.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6 lg:mt-6 pt-4 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-2xl font-bold text-josseypink1">3+</div>
                  <div className="text-xs text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-2xl font-bold text-josseypink1">50+</div>
                  <div className="text-xs text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center col-span-2 sm:col-span-1">
                  <div className="text-xl sm:text-2xl lg:text-2xl font-bold text-josseypink1">100%</div>
                  <div className="text-xs text-gray-600">Client Satisfaction</div>
                </div>
              </div>

              {/* Social Links */}
              <div ref={socialRef} className="flex justify-center space-x-4 mt-6 lg:mt-6 pt-4 border-t border-gray-200">
                <a
                  href="https://www.linkedin.com/in/josseycodes"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-josseypink1 text-white rounded-full flex items-center justify-center hover:bg-[#624F82] transform hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a
                  href="https://www.github.com/in/josseycodes1"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-josseypink1 text-white rounded-full flex items-center justify-center hover:bg-[#624F82] transform hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href="https://www.twitter.com/in/josseycodes"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-josseypink1 text-white rounded-full flex items-center justify-center hover:bg-[#624F82] transform hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;