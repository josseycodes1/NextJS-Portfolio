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
              (header as HTMLElement).style.opacity = '0';
              (header as HTMLElement).style.transform = 'translateY(30px)';
              
              setTimeout(() => {
                (header as HTMLElement).style.transition = 'all 0.8s ease-out';
                (header as HTMLElement).style.opacity = '1';
                (header as HTMLElement).style.transform = 'translateY(0)';
              }, 200);
            }

            // Animate skill categories with staggered delay
            const categories = entry.target.querySelectorAll('.skill-category');
            categories.forEach((category, categoryIndex) => {
              (category as HTMLElement).style.opacity = '0';
              (category as HTMLElement).style.transform = 'translateY(20px)';
              
              setTimeout(() => {
                (category as HTMLElement).style.transition = `all 0.6s ease-out ${0.3 + categoryIndex * 0.2}s`;
                (category as HTMLElement).style.opacity = '1';
                (category as HTMLElement).style.transform = 'translateY(0)';
              }, 300 + categoryIndex * 200);

              // Animate individual skills within each category
              const skills = category.querySelectorAll('.skill-item');
              skills.forEach((skill, skillIndex) => {
                (skill as HTMLElement).style.opacity = '0';
                (skill as HTMLElement).style.transform = 'scale(0.8) translateY(10px)';
                
                setTimeout(() => {
                  (skill as HTMLElement).style.transition = `all 0.5s ease-out ${0.5 + categoryIndex * 0.2 + skillIndex * 0.1}s`;
                  (skill as HTMLElement).style.opacity = '1';
                  (skill as HTMLElement).style.transform = 'scale(1) translateY(0)';
                }, 500 + categoryIndex * 200 + skillIndex * 100);
              });
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
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <div className="section-header text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Skills</h2>
          <div className="w-20 h-1 bg-josseypink1 mx-auto rounded-full mb-3"></div>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Technologies and Skills I bring to every project
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
      </div>
    </section>
  );
};

export default SkillsSection;