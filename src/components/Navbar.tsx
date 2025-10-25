import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

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

          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="flex items-center gap-2 cursor-pointer absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none"
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
          </Link>

          <div className="hidden md:flex items-center gap-8 ml-auto">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                className={`font-poppins font-medium cursor-pointer transition-colors hover:text-mustard ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="contato"
              smooth={true}
              duration={500}
              offset={-80}
              className="bg-mustard text-white px-6 py-2.5 rounded-full font-poppins font-semibold hover:bg-opacity-90 transition-all hover:scale-105 cursor-pointer"
            >
              Agende uma Visita
            </Link>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 bg-white rounded-lg shadow-lg px-4 py-5">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block font-poppins font-medium text-gray-700 hover:text-mustard cursor-pointer py-2"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="contato"
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block bg-mustard text-white px-6 py-2.5 rounded-full font-poppins font-semibold text-center cursor-pointer"
            >
              Agende uma Visita
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
