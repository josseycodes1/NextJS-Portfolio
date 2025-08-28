'use client';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  return (
    <section id="home" className="relative bg-josseypink1 overflow-hidden min-h-[85vh] flex items-center pt-12">
      <div className="container mx-auto px-6 py-8 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-white md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">I'm JosseyCodes</h1>
            <p className="text-xl md:text-2xl opacity-90 mb-6">Fullstack Software Developer</p>
            
            <div className="mb-8">
              <p className="text-lg opacity-85 leading-relaxed max-w-lg">
                Welcome here! I build softwares, websites and MVPs that get funded. 
                I'm a valuable addition to your IT team with expertise across the stack.
              </p>
            </div>
            
            <div className="flex space-x-4 mb-12">
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="bg-white text-josseypink1 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transform hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-lg"
              >
                View My Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-josseypink1 transition-colors duration-300"
              >
                Contact Me
              </button>
            </div>
            
            <div className="mt-8">
              <a 
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('about');
                }}
                className="flex items-center text-white opacity-80 hover:opacity-100 transition-opacity"
              >
                <span className="mr-2">Keep Scrolling</span>
                <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-end items-end h-full">
        <img 
          src="/assets/img/bestpic-removebg-preview.png" 
          alt="Josephine" 
          className="w-[28rem] h-[28rem] md:w-[32rem] md:h-[32rem] object-contain self-end"
        />
      </div>

        </div>
      </div>
    </section>
  );
}