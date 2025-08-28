'use client';

interface HeaderProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

export default function Header({ activeSection, scrollToSection, menuOpen, setMenuOpen }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-josseypink1 shadow-md">
      <nav className="h-16 flex justify-between items-center px-6 md:px-12 max-w-6xl mx-auto">
        <div>
          <a href="#" className="text-white font-bold text-xl">Adewumi Josephine</a>
        </div>

        <div className={`${menuOpen ? 'right-0' : '-right-full'} fixed top-16 w-3/5 
        h-full bg-josseypink2 backdrop-blur-md transition-all duration-500 md:static md:w-auto 
        md:h-auto md:bg-transparent md:backdrop-blur-0`}>
          
          <ul className="flex flex-col mt-12 ml-8 md:flex-row md:mt-0 md:ml-0 md:space-x-8">
            {['home', 'about', 'portfolio', 'skills', 'contact'].map((item) => (
              <li key={item} className="mb-8 md:mb-0">
                <a 
                  href={`#${item}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item);
                    setMenuOpen(false);
                  }}
                  className={`text-lg ${activeSection === item ? 'text-white font-bold border-b-2 border-white' : 'text-white'} hover:text-gray-500 transition-colors capitalize`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div 
          className="text-white text-3xl cursor-pointer md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </div>
      </nav>
    </header>
  );
}