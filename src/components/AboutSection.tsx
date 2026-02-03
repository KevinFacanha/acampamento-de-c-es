import { motion } from 'framer-motion';
import { Award, Users, Home } from 'lucide-react';

const AboutSection = () => {
  const metrics = [
    {
      icon: Award,
      value: '10+',
      label: 'Anos de Experiência',
    },
    {
      icon: Users,
      value: '100+',
      label: 'Cães Adestrados',
    },
    {
      icon: Home,
      value: '500+',
      label: 'Hospedagens',
    },
  ];

  const counterVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
      },
    }),
  };

  return (
    <section id="sobre" className="py-12 sm:py-16 lg:py-28 bg-gradient-to-br from-light-brown/20 to-off-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-24 h-24 sm:w-32 sm:h-32 bg-mustard rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-28 h-28 sm:w-40 sm:h-40 bg-moss-green rounded-full opacity-20"></div>
              <img
                src="https://res.cloudinary.com/dy36sfdb3/image/upload/v1761233257/WhatsApp_Image_2025-10-23_at_12.07.49_1_htnqhs.jpg"
                alt="Tio Fabão com cão"
                className="relative rounded-2xl sm:rounded-3xl shadow-2xl w-full"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="font-baloo text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-moss-green mb-4 sm:mb-6">
              Sobre o Tio Fabão
            </h2>
            <p className="font-poppins text-base sm:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
              Adestrador há 5 anos e com mais de 10 anos de experiência em recreação canina, o Tio Fabão é
              apaixonado por animais desde a infância.
            </p>
            <p className="font-poppins text-base sm:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
              Foi dessa paixão que nasceu o Acampamento de Cães — um espaço criado para que os pets possam
              aprender, brincar e se desenvolver em um ambiente seguro, supervisionado e estruturado.
            </p>
            <p className="font-poppins text-base sm:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
              Sua metodologia une técnicas modernas de adestramento misto com carinho, respeito e atenção
              individual para cada cão.
            </p>
            <p className="font-poppins text-base sm:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
              Aqui, cada peludo é tratado como parte da família, com cuidados personalizados e foco no equilíbrio
              físico, mental e comportamental.
            </p>
            <p className="font-poppins text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-10">
              Mais do que cuidar, nós educamos e transformamos comportamentos. Seu propósito é espalhar
              conhecimento e ajudar o próximo. A mudança do seu cachorro começa através de você.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6"
            >
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={counterVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 shadow-lg text-center"
                >
                  <div className="bg-gradient-to-br from-moss-green to-mustard w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <metric.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="font-baloo text-2xl sm:text-3xl font-bold text-moss-green mb-1">
                    {metric.value}
                  </div>
                  <div className="font-poppins text-xs sm:text-sm text-gray-600 leading-tight">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
