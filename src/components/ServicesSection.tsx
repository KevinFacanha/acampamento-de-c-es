import { motion } from 'framer-motion';
import { Home, Baby, Target } from 'lucide-react';
import { Link } from 'react-scroll';

const ServicesSection = () => {
  const services = [
    {
      icon: Baby,
      title: 'Escola Canina',
      description:
        'Seu cão passa o dia aprendendo, socializando e se divertindo em um ambiente supervisionado, com atividades recreativas e descanso programado.',
      image:
        'https://res.cloudinary.com/dy36sfdb3/image/upload/v1761233660/WhatsApp_Image_2025-10-23_at_12.07.49_t7qrxo.jpg',
    },
    {
      icon: Home,
      title: 'Hotel Canino',
      description:
        'Hospedagem confortável e segura para seu pet. Áreas privativas, alimentação personalizada, passeios e muito carinho durante toda a estadia.',
      image:
        'https://res.cloudinary.com/dy36sfdb3/image/upload/v1761233680/WhatsApp_Image_2025-10-23_at_12.07.50_jaqkrj.jpg',
    },
    {
      icon: Target,
      title: 'Daytraining',
      description:
        'Adestramento profissional durante o dia. Seu cão aprende comandos, melhora o comportamento e volta para casa mais educado e equilibrado.',
      image:
        'https://res.cloudinary.com/dy36sfdb3/image/upload/v1761233700/WhatsApp_Image_2025-10-23_at_12.07.55_eob8ng.jpg',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="servicos" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-baloo text-4xl md:text-5xl lg:text-6xl font-bold text-moss-green mb-4">
            Nossos Serviços
          </h2>
          <p className="font-poppins text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Cuidado completo para todas as necessidades do seu cão
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -12, scale: 1.02 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-moss-green/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-white w-14 h-14 rounded-full flex items-center justify-center">
                  <service.icon className="w-7 h-7 text-moss-green" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-baloo text-2xl font-bold text-moss-green mb-3">
                  {service.title}
                </h3>
                <p className="font-poppins text-gray-600 mb-5 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  to="contato"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="inline-block bg-mustard text-white px-6 py-2.5 rounded-full font-poppins font-semibold hover:bg-opacity-90 transition-all cursor-pointer"
                >
                  Saiba Mais
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
