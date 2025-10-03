'use client';

import { useEffect, useRef } from "react";

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const skills = {
    'Coding Development': ['REST API', 'TailwindCSS', 'ReactJS', 'NextJS', 'Bootstrap', 'Python-Django'],
    'Non-coding Development': ['Copywriting', 'Content Writing', 'Technical Writing', 'Script Writing', 'API Documentation', 'Training'],
    'Design Tools': ['Figma', 'Adobe XD', 'Photoshop'],
    'Technical Skills': ['Communication', 'Adaptability', 'Team Work', 'Leadership', 'Problem Solving', 'Project Management']
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate section header
            const header = entry.target.querySelector('.section-header');
            if (header) {
              setTimeout(() => {
                (header as HTMLElement).classList.add('animate-in');
              }, 200);
            }

            // Animate skill categories with staggered delay
            const categories = entry.target.querySelectorAll('.skill-category');
            categories.forEach((category, categoryIndex) => {
              setTimeout(() => {
                (category as HTMLElement).classList.add('animate-in');
                
                // Animate individual skills within each category
                const skills = category.querySelectorAll('.skill-item');
                skills.forEach((skill, skillIndex) => {
                  setTimeout(() => {
                    (skill as HTMLElement).classList.add('animate-in');
                  }, skillIndex * 100);
                });
              }, 300 + categoryIndex * 200);
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
    <section ref={sectionRef} id="skills" className="py-16 sm:py-20 bg-white overflow-hidden">
      <style jsx>{`
        .section-header {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }
        
        .section-header.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .skill-category {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease-out;
        }
        
        .skill-category.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .skill-item {
          opacity: 0;
          transform: scale(0.8) translateY(10px);
          transition: all 0.5s ease-out;
        }
        
        .skill-item.animate-in {
          opacity: 1;
          transform: scale(1) translateY(0);
        }
      `}</style>

      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <div className="section-header text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Skills</h2>
          <div className="w-20 h-1 bg-josseypink1 mx-auto rounded-full mb-3"></div>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Technologies and abilities I bring to every project
          </p>
        </div>

        <div className="space-y-8">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <div key={category} className="skill-category">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800 text-center sm:text-left border-l-4 border-josseypink1 pl-4">
                {category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {items.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className="skill-item bg-pink-50 px-3 py-2 rounded-lg text-gray-700 hover:text-white hover:bg-josseypink1 transform hover:scale-105 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md text-center text-sm"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Always Learning Section */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-pink-50 rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
              Always Learning & Growing
            </h3>
            <p className="text-gray-600 text-base sm:text-lg mb-4">
              I continuously update my skills and explore new technologies to deliver cutting-edge solutions.
            </p>
            <div className="flex justify-center space-x-2">
              <div className="w-2 h-2 bg-josseypink1 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-josseypink1 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-josseypink1 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;