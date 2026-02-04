import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const AdaptationSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Primeira visita e avaliação comportamental',
      description:
        'Conhecemos seu cão e avaliamos seu temperamento, necessidades e características individuais para garantir o melhor cuidado.',
    },
    {
      number: '02',
      title: 'Teste de socialização supervisionado',
      description:
        'Seu pet participa de uma sessão controlada com outros cães para verificarmos como ele se comporta em grupo.',
    },
    {
      number: '03',
      title: 'Acompanhamento inicial e adaptação gradual',
      description:
        'Começamos com períodos curtos e aumentamos gradualmente, respeitando o ritmo do seu cão até ele se sentir completamente confortável.',
    },
  ];

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="adaptacao" className="py-20 lg:py-28 bg-gradient-to-br from-moss-green to-moss-green/90">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-baloo text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Processo de Adaptação
            </h2>
            <p className="font-poppins text-lg text-white/90 mb-10">
              Garantimos uma transição suave e confortável para o seu pet através de um processo cuidadoso e individualizado.
            </p>

            <motion.div
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-mustard rounded-full flex items-center justify-center">
                      <span className="font-baloo text-2xl font-bold text-white">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start gap-2 mb-2">
                      <CheckCircle className="w-6 h-6 text-mustard flex-shrink-0 mt-1" />
                      <h3 className="font-baloo text-xl md:text-2xl font-bold text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="font-poppins text-white/80 leading-relaxed ml-8">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://res.cloudinary.com/dy36sfdb3/image/upload/v1761405132/WhatsApp_Image_2025-10-23_at_12.07.50_3_h51gpm.jpg"
                alt="Cão feliz durante adaptação"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-moss-green/50 to-transparent"></div>
            </div>
            {/* Align badge within viewport on mobile to prevent overflow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 right-0 lg:-right-6 bg-white rounded-2xl p-6 shadow-xl max-w-xs"
            >
              <p className="font-baloo text-2xl font-bold text-moss-green mb-2">
                100% de aprovação
              </p>
              <p className="font-poppins text-gray-600">
                Todos os cães se adaptam com sucesso ao nosso método
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdaptationSection;
