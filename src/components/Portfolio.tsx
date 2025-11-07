'use client';

import Image from "next/image";
import { useEffect, useRef } from "react";

const PortfolioSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const portfolioItems = [
    {
      id: 1,
      image: "/assets/img/ecomm1.png",
      title: "Fullstack Fragrance E-commerce Website",
      description:
        "A single seller fragrance ecommerce website with cart, seller dashboard and buyer functionality.",
      link: "https://scent-shop.vercel.app/",
    },
    {
      id: 2,
      image: "/assets/img/schoolweb.png",
      title: "Fullstack Multiple user role School Website",
      description:
        "A comprehensive school management system with multiple user roles including admin, teachers, and students.",
      link: "https://school-website-mauve-zeta.vercel.app/",
    },
    {
      id: 3,
      image: "/assets/img/ecomm2.png",
      title: "REST API for a Fragrance E-commerce Website",
      description:
        "Backend REST API built with Django for a single seller fragrance ecommerce website with cart, seller dashboard and buyer functionality.",
      link: "https://josseycart-backend.onrender.com/api/products/",
    },
    {
      id: 4,
      image: "/assets/img/meportfolio2.png",
      title: "Portfolio Design",
      description:
        "A modern and responsive portfolio website showcasing my projects and skills as a developer.",
      link: "https://portfoliosite-sage-psi.vercel.app/",
    },
    {
      id: 5,
      image: "/assets/img/crownex.png",
      title: "Blogsite Application",
      description:
        "A blog platform featuring articles on various topics with content management capabilities.",
      link: "https://crownexempire.blogspot.com/",
    },
    {
      id: 6,
      image: "/assets/img/meportfolio1.png",
      title: "Portfolio Design",
      description:
        "Another portfolio design showcasing different styling approaches and layout techniques.",
      link: "https://josseycodes.pythonanywhere.com/",
    },
    {
      id: 7,
      image: "/assets/img/companyweb.png",
      title: "Company website",
      description:
        "A professional company website with services, about section, and contact information.",
      link: "https://cool-axolotl-18dcfd.netlify.app/",
    },
    {
      id: 8,
      image: "/assets/img/schoolapi.png",
      title: "REST API for a school website",
      description:
        "Backend REST API built with Django for a school management system with authentication and data management.",
      link: "https://josseycodes-academy.onrender.com/",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate section header
            const header = entry.target.querySelector('.section-header');
            if (header) {
              (header as HTMLElement).style.opacity = '0';
              (header as HTMLElement).style.transform = 'translateY(30px)';
              
              setTimeout(() => {
                (header as HTMLElement).style.transition = 'all 0.8s ease-out';
                (header as HTMLElement).style.opacity = '1';
                (header as HTMLElement).style.transform = 'translateY(0)';
              }, 200);
            }

            // Animate portfolio items with staggered delay
            const items = entry.target.querySelectorAll('.portfolio-item');
            items.forEach((item, index) => {
              (item as HTMLElement).style.opacity = '0';
              (item as HTMLElement).style.transform = 'translateY(50px) scale(0.95)';
              
              setTimeout(() => {
                (item as HTMLElement).style.transition = `all 0.6s ease-out ${0.3 + index * 0.1}s`;
                (item as HTMLElement).style.opacity = '1';
                (item as HTMLElement).style.transform = 'translateY(0) scale(1)';
              }, 300 + index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="portfolio" className="py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Section Header */}
        <div className="section-header text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            My Portfolio
          </h2>
          <div className="w-20 h-1.5 bg-josseypink1 mx-auto rounded-full mb-3"></div>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            A collection of my recent projects and creative work
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="portfolio-item bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group"
            >
              {/* Image Container */}
              <div className="h-48 sm:h-56 overflow-hidden relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-josseypink1/0 group-hover:bg-josseypink1/10 transition-all duration-500"></div>
              </div>
              
              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3 leading-tight group-hover:text-josseypink1 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                  {item.description}
                </p>
                <div className="pt-2">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-josseypink1 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-[#624F82] transform hover:scale-105 transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
                  >
                    View Website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {/* <div className="text-center mt-12 sm:mt-16">
          <button className="border-2 border-josseypink1 text-josseypink1 px-8 py-3 rounded-lg hover:bg-josseypink1 hover:text-white transform hover:scale-105 transition-all duration-300 font-medium">
            View More Projects
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default PortfolioSection;