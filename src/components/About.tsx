import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-700">About Me</h2>
          <div className="w-16 sm:w-20 h-1 bg-pink-500 mx-auto rounded-full mt-2"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-10">
          <div className="md:w-1/3 w-full flex justify-center">
            <Image
              src="/assets/img/bestpic-removebg-preview.png"
              alt="Josephine"
              width={500}
              height={500}
              className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover border-4 border-josseypink1 rounded-full shadow-md"
            />
          </div>

          <div className="md:w-2/3 w-full">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-josseypink1">
              I am Josephine
            </h3>
            <span className="text-base sm:text-lg text-gray-600 mb-4 block">
              Website designer
            </span>
            <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              I am a Fullstack Software Developer who builds websites and
              applications that perform well and scale with business needs. I
              develop secure backends with Python and Django, then pair them with
              fast and interactive frontends using React and Next.js. To complete
              each project, I design responsive and modern interfaces with
              Tailwind CSS and Bootstrap, making sure every detail enhances the
              user experience.
            </p>
            <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              My work centers on writing clean code and delivering solutions that
              solve real problems. I collaborate with teams to move ideas from
              concept to launch, and I stay focused on both functionality and
              design. This approach shows recruiters my ability to combine strong
              technical expertise with teamwork and consistency.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
              For clients, it means I deliver products that achieve business
              goals and delight users. I guide projects with clear communication,
              keep deadlines on track, and ensure the final result supports
              long-term growth. When businesses work with me, they gain a
              developer who turns vision into dependable results.
            </p>

            <div className="flex space-x-4">
              <a
                href="#"
                className="text-xl sm:text-2xl text-josseypink1 hover:text-[#624F82] transition-colors"
              >
                <i className="bx bxl-linkedin"></i>
              </a>
              <a
                href="#"
                className="text-xl sm:text-2xl text-josseypink1 hover:text-[#624F82] transition-colors"
              >
                <i className="bx bxl-github"></i>
              </a>
              <a
                href="#"
                className="text-xl sm:text-2xl text-josseypink1 hover:text-[#624F82] transition-colors"
              >
                <i className="bx bxl-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;