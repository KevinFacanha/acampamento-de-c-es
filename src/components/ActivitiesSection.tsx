import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Waves, Zap, Users, Trophy } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';

const ActivitiesSection = () => {
  const activities = [
    {
      icon: Users,
      title: 'Brincadeiras e Socialização',
      description:
        'Interação diária com outros cães em grupos compatíveis, promovendo habilidades sociais e diversão.',
      image: 'https://res.cloudinary.com/dy36sfdb3/image/upload/v1770195960/brincadeira_dxkjkb.jpg',
    },
    {
      icon: Waves,
      title: 'Intensivo',
      description:
        'Período de hospedagem com treinos diários focados em problemas graves e mudanças reais!',
      image: 'https://res.cloudinary.com/dy36sfdb3/image/upload/v1770196058/intensivo_xiyf0a.jpg',
    },
    {
      icon: Zap,
      title: 'Agility e Enriquecimento',
      description:
        'Circuitos e obstáculos que estimulam corpo e mente, desenvolvendo agilidade e inteligência.',
      image: 'https://images.pexels.com/photos/7210754/pexels-photo-7210754.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Trophy,
      title: 'Treinamento em Grupo',
      description:
        'Sessões de adestramento coletivas que reforçam comandos e comportamentos positivos.',
      image: 'https://res.cloudinary.com/dy36sfdb3/image/upload/v1770194950/treinamento_em_grupo_u75b7t.jpg',
    },
    {
      icon: Users,
      title: 'Passeios',
      description:
        ' Passeios tende a ideia passeios individuais e em grupos para trabalhar a socialização em conjunto.',
      image: 'https://res.cloudinary.com/dy36sfdb3/image/upload/v1761233257/WhatsApp_Image_2025-10-23_at_12.07.49_1_htnqhs.jpg',
    }
  ];

  return (
    <section id="atividades" className="py-20 lg:py-28 bg-off-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-baloo text-4xl md:text-5xl lg:text-6xl font-bold text-moss-green mb-4">
            Atividades da Rotina
          </h2>
          <p className="font-poppins text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Cada dia é repleto de diversão, aprendizado e exercícios
          </p>
        </motion.div>

        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="activities-swiper"
        >
          {activities.map((activity, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all h-full"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-moss-green/70 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-mustard w-12 h-12 rounded-full flex items-center justify-center">
                    <activity.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-baloo text-2xl font-bold text-moss-green mb-3">
                    {activity.title}
                  </h3>
                  <p className="font-poppins text-gray-600 leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ActivitiesSection;
