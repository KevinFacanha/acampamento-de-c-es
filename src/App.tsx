import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MotivosSection from './components/MotivosSection';
import ServicesSection from './components/ServicesSection';
import AdaptationSection from './components/AdaptationSection';
import ActivitiesSection from './components/ActivitiesSection';
import AboutSection from './components/AboutSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <MotivosSection />
      <ServicesSection />
      <AdaptationSection />
      <ActivitiesSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
