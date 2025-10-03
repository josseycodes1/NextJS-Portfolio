'use client';

import { useEffect, useRef } from "react";

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const codingSkills = ['REST API', 'TailwindCSS', 'ReactJS', 'NextJS', 'Bootstrap', 'Python-Django'];
  const nonCodingSkills = ['Copywriting', 'Content Writing', 'Technical Writing', 'Script Writing', 'API Documentation', 'Training and Mentoring'];
  const designSkills = ['Figma', 'Adobe XD', 'Photoshop'];
  const technicalSkills = ['Communication', 'Adaptability', 'Team Work', 'Team Leadership', 'API Documentation', 'Training and Mentoring'];

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
              (category as HTMLElement).style.transform = 'translateX(-20px)';
              
              setTimeout(() => {
                (category as HTMLElement).style.transition = `all 0.6s ease-out ${0.3 + categoryIndex * 0.2}s`;
                (category as HTMLElement).style.opacity = '1';
                (category as HTMLElement).style.transform = 'translateX(0)';
              }, 300 + categoryIndex * 200);

              // Animate individual skills within each category
              const skills = category.querySelectorAll('.skill-item');
              skills.forEach((skill, skillIndex) => {
                (skill as HTMLElement).style.opacity = '0';
                (skill as HTMLElement).style.transform = 'scale(0.8) translateY(20px)';
                
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

  const SkillItem = ({ skill, index }: { skill: string; index: number }) => (
    <div 
      className="skill-item bg-pink-50 px-4 py-3 rounded-lg text-gray-700 hover:text-white hover:bg-josseypink1 transform hover:scale-105 transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg"
    >
      {skill}
    </div>
  );

  return (
    <section ref={sectionRef} id="skills" className="py-16 sm:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Section Header */}
        <div className="section-header text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Skills</h2>
          <div className="w-20 h-1 bg-josseypink1 mx-auto rounded-full mb-3"></div>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Technologies and Skills I bring to every project
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="lg:w-1/2 space-y-8 lg:space-y-12">
            {/* Coding Development */}
            <div className="skill-category">
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-800 border-l-4 border-josseypink1 pl-4">
                Coding Development
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {codingSkills.map((skill, index) => (
                  <SkillItem key={skill} skill={skill} index={index} />
                ))}
              </div>
            </div>

            {/* Non-coding Development */}
            <div className="skill-category">
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-800 border-l-4 border-josseypink1 pl-4">
                Non-coding Development
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {nonCodingSkills.map((skill, index) => (
                  <SkillItem key={skill} skill={skill} index={index} />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:w-1/2 space-y-8 lg:space-y-12">
            {/* Design */}
            <div className="skill-category">
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-800 border-l-4 border-josseypink1 pl-4">
                Design
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {designSkills.map((skill, index) => (
                  <SkillItem key={skill} skill={skill} index={index} />
                ))}
              </div>
            </div>

            {/* Technical */}
            <div className="skill-category">
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-800 border-l-4 border-josseypink1 pl-4">
                Technical
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {technicalSkills.map((skill, index) => (
                  <SkillItem key={skill} skill={skill} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default SkillsSection;