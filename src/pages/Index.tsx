import HeroSection from "@/components/sections/HeroSection";
import FeaturesAndServicesSection from "@/components/sections/FeaturesAndServicesSection";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import BookingSection from "@/components/sections/BookingSection";
import ContactsSection from "@/components/sections/ContactsSection";
import FloatingMessengers from "@/components/FloatingMessengers";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesAndServicesSection />
      <StatsSection />
      <TestimonialsSection />
      <BookingSection />
      <ContactsSection />
      <FloatingMessengers />
    </div>
  );
};

export default Index;