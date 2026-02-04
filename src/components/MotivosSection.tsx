import { motion } from 'framer-motion';
import { Shield, Trees, Heart, GraduationCap, Users } from 'lucide-react';

const MotivosSection = () => {
  const motivos = [
    {
      icon: Shield,
      title: 'Experiência e Confiança',
      description: 'Mais de 10 anos cuidando e adestrando cães com amor e profissionalismo',
    },
    {
      icon: Trees,
      title: 'Ambiente Controlado e Seguro',
      description: 'Ambiente amplo e organizado para seu cão se exercitar com segurança.Espaço amplo e arborizado para seu cão brincar em contato com a natureza',
    },
    {
      icon: Users,
      title: 'Atividades e Socialização',
      description: 'Oferecemos brincadeiras em grupo e atividades diárias supervisionadas.',
    },
    {
      icon: GraduationCap,
      title: 'Adestramento e Daytraining',
      description: 'Treinamento profissional para desenvolver comportamentos positivos',
    },
    {
      icon: Heart,
      title: 'Equipe Apaixonada por Cães',
      description: 'Profissionais dedicados que tratam cada pet como parte da família',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="motivos" className="py-20 lg:py-28 bg-off-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-baloo text-4xl md:text-5xl lg:text-6xl font-bold text-moss-green mb-4">
            Por que escolher o Acampamento?
          </h2>
          <p className="font-poppins text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Oferecemos o melhor cuidado e diversão para o seu melhor amigo
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {motivos.map((motivo, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="bg-gradient-to-br from-moss-green to-mustard w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <motivo.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-baloo text-2xl font-bold text-moss-green mb-3">
                {motivo.title}
              </h3>
              <p className="font-poppins text-gray-600 leading-relaxed">
                {motivo.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MotivosSection;
