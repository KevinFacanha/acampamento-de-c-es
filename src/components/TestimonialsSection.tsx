import { motion } from 'framer-motion';

import GoogleReviewsWidget from './GoogleReviewsWidget';

const TestimonialsSection = () => {
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

        {/* Allow widget arrows to stay visible/clickable without layout overflow. */}
        <div className="w-full max-w-6xl mx-auto overflow-visible px-6 sm:px-8 lg:px-10">
          <GoogleReviewsWidget />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
