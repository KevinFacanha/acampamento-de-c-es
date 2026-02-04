import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import scrollToId from '../utils/scrollToId';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: 'hero', label: 'Início' },
    { to: 'motivos', label: 'Por que Escolher' },
    { to: 'servicos', label: 'Serviços' },
    { to: 'atividades', label: 'Atividades' },
    { to: 'sobre', label: 'Sobre' },
    { to: 'contato', label: 'Contato' },
  ];

  const handleNavClick = (targetId: string, closeMenu = false) => {
    scrollToId(targetId);
    if (closeMenu) setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between md:justify-start">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden transition-colors order-first ${
              isScrolled ? 'text-moss-green' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <button
            type="button"
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-2 cursor-pointer absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none bg-transparent border-0"
            aria-label="Ir para o topo"
          >
            <img
              src="https://res.cloudinary.com/dy36sfdb3/image/upload/v1761244755/Adobe_Express_-_file_rzr0k1.png"
              alt="Tio Fabão Logo"
              className="h-32 w-auto sm:h-14 object-contain"
            />
            <span
              className={`hidden md:block font-baloo text-xl md:text-2xl font-bold transition-colors ${
                isScrolled ? 'text-moss-green' : 'text-white'
              }`}
            >
              Tio Fabão
            </span>
          </button>

          <div className="hidden md:flex items-center gap-8 ml-auto">
            {navLinks.map((link) => (
              <button
                key={link.to}
                type="button"
                onClick={() => handleNavClick(link.to)}
                className={`font-poppins font-medium cursor-pointer transition-colors hover:text-mustard bg-transparent border-0 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => handleNavClick('contato')}
              className="bg-mustard text-white px-6 py-2.5 rounded-full font-poppins font-semibold hover:bg-opacity-90 transition-all hover:scale-105 cursor-pointer"
            >
              Agende uma Visita
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 bg-white rounded-lg shadow-lg px-4 py-5">
            {navLinks.map((link) => (
              <button
                key={link.to}
                type="button"
                onClick={() => handleNavClick(link.to, true)}
                className="block w-full text-left font-poppins font-medium text-gray-700 hover:text-mustard cursor-pointer py-2 bg-transparent border-0"
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => handleNavClick('contato', true)}
              className="block w-full bg-mustard text-white px-6 py-2.5 rounded-full font-poppins font-semibold text-center cursor-pointer"
            >
              Agende uma Visita
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
