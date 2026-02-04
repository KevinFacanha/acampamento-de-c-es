import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Award } from 'lucide-react';

const HeroSection = () => {
  const heroVideo = 'https://res.cloudinary.com/dy36sfdb3/video/upload/v1770195110/socializa%C3%A7%C3%A3o_tnedgv.mp4';

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-moss-green via-moss-green to-mustard opacity-90 z-10"></div>

      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-20 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full mb-6"
          >
            <Award className="w-5 h-5 text-mustard" />
            <span className="font-poppins text-sm md:text-base font-medium">
              +10 anos de experiência em adestramento
            </span>
          </motion.div>

          <h1 className="font-baloo text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Bem-vindo ao Acampamento de Cães Tio Fabão 
          </h1>

          <p className="font-poppins text-lg md:text-xl lg:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Onde seu cão aprende, brinca e relaxa em meio à natureza!
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="contato"
              smooth={true}
              duration={500}
              offset={-80}
              className="bg-mustard text-white px-8 py-4 rounded-full font-poppins font-semibold text-lg hover:bg-opacity-90 transition-all hover:scale-105 cursor-pointer shadow-xl"
            >
              Agende uma Visita
            </Link>
            <Link
              to="servicos"
              smooth={true}
              duration={500}
              offset={-80}
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-poppins font-semibold text-lg hover:bg-white/30 transition-all hover:scale-105 cursor-pointer border-2 border-white/50"
            >
              Conheça os Serviços
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
