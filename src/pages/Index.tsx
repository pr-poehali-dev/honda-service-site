import HeroSection from "@/components/sections/HeroSection";
import FeaturesAndServicesSection from "@/components/sections/FeaturesAndServicesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import BookingSection from "@/components/sections/BookingSection";
import ContactsSection from "@/components/sections/ContactsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesAndServicesSection />
      <TestimonialsSection />
      <BookingSection />
      <ContactsSection />
    </div>
  );
};

export default Index;
