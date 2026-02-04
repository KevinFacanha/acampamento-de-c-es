import { Instagram, Phone, Mail, ExternalLink } from 'lucide-react';
import scrollToId from '../utils/scrollToId';

const Footer = () => {
  return (
    <footer className="bg-moss-green text-white py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://res.cloudinary.com/dy36sfdb3/image/upload/v1761244831/Adobe_Express_-_file_1_qxcvbl.png"
                alt="Tio Fabão Logo"
                className="h-24 w-auto object-contain"
              />
              <span className="font-baloo text-3xl font-bold">Tio Fabão</span>
            </div>
            <p className="font-poppins text-white/80 leading-relaxed">
              Acampamento de Cães com mais de 10 anos de experiência oferecendo os melhores cuidados para o seu pet.
            </p>
          </div>

          <div>
            <h3 className="font-baloo text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 font-poppins">
              <li>
                <button
                  type="button"
                  onClick={() => scrollToId('hero')}
                  className="text-white/80 hover:text-mustard transition-colors cursor-pointer bg-transparent border-0 p-0"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToId('servicos')}
                  className="text-white/80 hover:text-mustard transition-colors cursor-pointer bg-transparent border-0 p-0"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToId('sobre')}
                  className="text-white/80 hover:text-mustard transition-colors cursor-pointer bg-transparent border-0 p-0"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToId('contato')}
                  className="text-white/80 hover:text-mustard transition-colors cursor-pointer bg-transparent border-0 p-0"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-baloo text-xl font-bold mb-4">Contato</h3>
            <div className="space-y-3 font-poppins text-white/80">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="https://wa.me/5511945993793?text=Ol%C3%A1%20tenho%20interesse%20nos%20servi%C3%A7os%20do%20Acampamento%20de%20C%C3%A3es%20Tio%20Fab%C3%A3o!" target="_blank" rel="noopener noreferrer" className="hover:text-mustard transition-colors">
                  (11) 94599-3793
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:contato@tiofabao.com.br" className="hover:text-mustard transition-colors">
                  contato@tiofabao.com.br
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="w-5 h-5 flex-shrink-0" />
                <a
                  href="https://www.instagram.com/acampamento_de_caes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-mustard transition-colors"
                >
                  @acampamento_de_caes
                </a>
              </div>
              <div className="flex items-center gap-2">
                <ExternalLink className="w-5 h-5 flex-shrink-0" />
                <a
                  href="https://www.fastdognaturalpet.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-mustard transition-colors"
                >
                  FastDog
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6">
          <p className="text-center font-poppins text-white/60 text-sm">
            © {new Date().getFullYear()} Acampamento de Cães Tio Fabão. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
