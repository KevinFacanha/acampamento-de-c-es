import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram, Send, PawPrint } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const name = formData.name.trim();
    const userPhone = formData.phone.trim();
    const message = formData.message.trim();

    if (!name || !userPhone) {
      // Prevent sending empty submissions; inform the user to fill required fields.
      alert('Por favor, preencha nome e telefone antes de enviar.');
      return;
    }

    const msg = `Olá, sou ${name}. Meu telefone: ${userPhone}.\nQuero agendar uma visita para meu cão.\nMensagem: ${message}`;
    const phone = '5511945993793';
    const text = encodeURIComponent(msg);

    window.open(`https://wa.me/${phone}?text=${text}`, '_blank', 'noopener');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contato" className="py-20 lg:py-28 bg-gradient-to-br from-moss-green via-moss-green to-mustard relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32">
          <PawPrint className="w-full h-full text-white" />
        </div>
        <div className="absolute bottom-20 right-10 w-40 h-40">
          <PawPrint className="w-full h-full text-white" />
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-baloo text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Gostou? Agende uma visita!
          </h2>
          <p className="font-poppins text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Venha conhecer nosso espaço e ver como cuidamos do seu melhor amigo
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="mb-6">
                <label className="block font-poppins font-semibold text-moss-green mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-mustard outline-none transition-colors font-poppins"
                  placeholder="Seu nome completo"
                />
              </div>

              <div className="mb-6">
                <label className="block font-poppins font-semibold text-moss-green mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-mustard outline-none transition-colors font-poppins"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div className="mb-6">
                <label className="block font-poppins font-semibold text-moss-green mb-2">
                  Mensagem
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-mustard outline-none transition-colors font-poppins resize-none"
                  placeholder="Conte-nos sobre seu cão e o que você procura..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-mustard text-white py-4 rounded-lg font-poppins font-semibold text-lg hover:bg-opacity-90 transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
              >
                <Send className="w-5 h-5" />
                Chamar no WhatsApp
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white space-y-8"
          >
            <div>
              <h3 className="font-baloo text-3xl font-bold mb-6">
                Informações de Contato
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-poppins text-lg">
                      Rua Guapiaçu - Vila Clementino, SP
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 flex-shrink-0" />
                  <a
                    href="https://wa.me/5511945993793?text=Ol%C3%A1%20tenho%20interesse%20nos%20servi%C3%A7os%20do%20Acampamento%20de%20C%C3%A3es%20Tio%20Fab%C3%A3o!" target="_blank" rel="noopener noreferrer"
                    className="font-poppins text-lg hover:text-mustard transition-colors"
                  >
                    (11) 94599-3793
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 flex-shrink-0" />
                  <a
                    href="mailto:contato@tiofabao.com.br"
                    className="font-poppins text-lg hover:text-mustard transition-colors"
                  >
                    contato@tiofabao.com.br
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <Instagram className="w-6 h-6 flex-shrink-0" />
                  <a
                    href="https://www.instagram.com/acampamento_de_caes/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-poppins text-lg hover:text-mustard transition-colors"
                  >
                    @acampamento_de_caes
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h4 className="font-baloo text-2xl font-bold mb-3">
                Horário de funcionamento
              </h4>
              <div className="font-poppins space-y-2">
                <p>Segunda a sexta: 7h30 às 18h30</p>
                <p>Sábado, domingo e feriados: apenas hotéis</p>
                <p>Hotel 24h</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden h-64 shadow-2xl">
              <iframe
                src="https://www.google.com/maps?q=Rua%20Guapia%C3%A7u%2C%20Vila%20Clementino%2C%20S%C3%A3o%20Paulo%20-%20SP&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
