const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        
        <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-700">About Me</h2>
        <div className="w-20 h-1 bg-pink-500 mx-auto rounded-full"></div>
        </div>
        

        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/3">
            <img 
              src="/assets/img/bestpic-removebg-preview.png" 
              alt="Josephine" 
              className="w-[50rem] h-[50rem] md:w-[32rem] md:h-[32rem] sm:h-[20rem] mx-auto object-cover border-4 border-josseypink1 shadow-md" 
            />
          </div>

          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold mb-2 text-josseypink1">I am Josephine</h3>
            <span className="text-lg text-gray-600 mb-4 block">Website designer</span>
            <p className="text-gray-700 mb-6 leading-relaxed">
              I am a Fullstack Software Developer who builds websites and applications that perform well and scale with business needs. I develop secure backends with Python and Django, 
              then pair them with fast and interactive frontends using React and Next.js. To complete each project, I design responsive and modern 
              interfaces with Tailwind CSS and Bootstrap, making sure every detail enhances the user experience.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              My work centers on writing clean code and delivering solutions that solve real problems. I collaborate with teams to move ideas from concept to launch, 
              and I stay focused on both functionality and design. This approach shows recruiters my ability 
              to combine strong technical expertise with teamwork and consistency.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              For clients, it means I deliver products that achieve business goals and delight users. I guide projects with clear communication, keep deadlines on track, 
              and ensure the final result supports long-term growth. When businesses work with me, they gain a developer who turns vision into dependable results.
            </p>

            <div className="flex space-x-4">
              <a href="#" className="text-2xl text-josseypink1 hover:text-[#624F82] transition-colors">
                <i className='bx bxl-linkedin' ></i>
              </a>
              <a href="#" className="text-2xl text-josseypink1 hover:text-[#624F82] transition-colors">
                <i className='bx bxl-github' ></i>
              </a>
              <a href="#" className="text-2xl text-josseypink1 hover:text-[#624F82] transition-colors">
                <i className='bx bxl-twitter' ></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;