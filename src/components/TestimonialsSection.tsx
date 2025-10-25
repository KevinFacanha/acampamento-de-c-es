import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/pagination';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Mariana Silva',
      dogName: 'Thor',
      image: 'https://images.pexels.com/photos/1562983/pexels-photo-1562983.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'O Thor adora o acampamento! A mudança no comportamento dele foi incrível. Voltou mais calmo, obediente e feliz. O Tio Fabão e sua equipe são maravilhosos!',
      rating: 5,
    },
    {
      name: 'Carlos Mendes',
      dogName: 'Luna',
      image: 'https://images.pexels.com/photos/1458925/pexels-photo-1458925.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'Deixo minha Luna no hotel sempre que viajo. Fico tranquilo sabendo que ela está em boas mãos, brincando e sendo cuidada com carinho. Recomendo de olhos fechados!',
      rating: 5,
    },
    {
      name: 'Ana Paula Costa',
      dogName: 'Rex',
      image: 'https://images.pexels.com/photos/2664417/pexels-photo-2664417.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'O daytraining foi a melhor decisão! O Rex aprendeu comandos básicos e até alguns truques. O ambiente natural faz toda a diferença no aprendizado.',
      rating: 5,
    },
  ];

  return (
    <section id="depoimentos" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-baloo text-4xl md:text-5xl lg:text-6xl font-bold text-moss-green mb-4">
            O que dizem nossos clientes
          </h2>
          <p className="font-poppins text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Histórias reais de tutores satisfeitos e cães felizes
          </p>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="testimonials-swiper pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-gradient-to-br from-off-white to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all h-full relative"
              >
                <Quote className="absolute top-6 right-6 w-12 h-12 text-mustard opacity-20" />

                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.dogName}
                    className="w-16 h-16 rounded-full object-cover border-4 border-mustard"
                  />
                  <div>
                    <h4 className="font-baloo text-xl font-bold text-moss-green">
                      {testimonial.name}
                    </h4>
                    <p className="font-poppins text-sm text-gray-600">
                      Tutor(a) de {testimonial.dogName}
                    </p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-mustard text-mustard"
                    />
                  ))}
                </div>

                <p className="font-poppins text-gray-700 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSection;
