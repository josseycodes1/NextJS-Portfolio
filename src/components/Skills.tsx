const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">

        <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-700">Skills</h2>
        <div className="w-20 h-1 bg-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Coding Development</h3>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {['REST API', 'TailwindCSS', 'ReactJS', 'NextJS', 'Bootstrap', 'Python-Django'].map((skill) => (
                <div key={skill} className="bg-pink-50 px-2 py-2 rounded-md text-gray-700 hover:text-white hover:bg-josseypink1">
                  {skill}
                </div>
              ))}
            </div>

            <h3 className="text-xl font-semibold mb-4 text-gray-700">Non-coding Development</h3>
            <div className="grid grid-cols-2 gap-4">
              {['Copywriting', 'Content Writing', 'Technical Writing', 'Script Writing', 'API Documentation', 'Training and Mentoring'].map((skill) => (
                <div key={skill} className="bg-pink-50 px-4 py-2 rounded-md text-gray-700 hover:text-white hover:bg-josseypink1">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Design</h3>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {['Figma', 'Adobe XD', 'Photoshop'].map((skill) => (
                <div key={skill} className="bg-pink-50 px-4 py-2 rounded-md text-gray-700 hover:text-white hover:bg-josseypink1">
                  {skill}
                </div>
              ))}
            </div>
            
            {/* <div className="flex justify-center">
              <img 
                src="/assets/img/bestpic-removebg-preview.png" 
                alt="Skills" 
                className="w-64 h-64 object-contain" 
              />
            </div> */}

            <h3 className="text-xl font-semibold mb-4 text-gray-700 ">Technical</h3>
            <div className="grid grid-cols-2 gap-4">
              {['Communication', 'Adaptability', 'Team Work', 'Team Leadership', 'API Documentation', 'Training and Mentoring'].map((skill) => (
                <div key={skill} className="bg-pink-50 px-4 py-2 rounded-md text-gray-700 hover:bg-josseypink1 hover:text-white">
                  {skill}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;