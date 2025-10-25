import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const handleClick = () => {
    const message = "Ol\u00E1 tenho interesse nos servi\u00E7os do Acampamento de C\u00E3es Tio Fab\u00E3o!";
    const whatsappUrl = `https://wa.me/5511945993793?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener');
  };

  return (
    <motion.button
      onClick={handleClick}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white w-16 h-16 rounded-full shadow-2xl hover:shadow-3xl transition-all flex items-center justify-center group"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform" />
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 bg-green-500 rounded-full opacity-30"
      />
    </motion.button>
  );
};

export default WhatsAppButton;


