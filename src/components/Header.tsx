'use client';

interface HeaderProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

export default function Header({ activeSection, scrollToSection, menuOpen, setMenuOpen }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <nav className="h-16 flex justify-between items-center px-6 md:px-12 max-w-6xl mx-auto">
        <div>
          <a href="#" className="text-josseypink1 font-bold text-xl">Adewumi Josephine</a>
        </div>

        {/* Mobile menu button */}
        <div 
          className="text-josseypink1 text-3xl cursor-pointer md:hidden z-60"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </div>

        {/* Mobile menu overlay */}
        {menuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setMenuOpen(false)}
          ></div>
        )}

        {/* Navigation menu */}
        <div className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-josseypink1 shadow-lg transform transition-transform duration-300 ease-in-out z-50 md:relative md:transform-none md:w-auto md:h-auto md:bg-transparent md:shadow-none ${menuOpen ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0`}>
          
          <ul className="flex flex-col mt-20 ml-8 space-y-8 md:flex-row md:mt-0 md:ml-0 md:space-y-0 md:space-x-8">
            {['home', 'about', 'portfolio', 'skills', 'contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item);
                    setMenuOpen(false);
                  }}
                  className={`text-lg ${activeSection === item ? 'text-white font-bold border-b-2 border-white' : 'text-white'} hover:text-gray-300 transition-colors capitalize block py-2`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}