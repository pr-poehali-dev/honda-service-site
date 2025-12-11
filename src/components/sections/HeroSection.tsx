import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/projects/66b65b68-a48e-4bdb-937d-cd8a977804a5/files/9107a2ef-ab37-46b7-85be-ac282b516523.jpg')`
        }}
      />
      <div className="relative z-10 text-center text-white px-4 max-w-5xl animate-fade-in">
        <div className="mb-10 flex flex-col items-center">
          <img 
            src="https://cdn.poehali.dev/files/image.png" 
            alt="Honda Logo" 
            className="w-48 md:w-72 mb-6 drop-shadow-2xl"
          />
          <div className="h-2 w-48 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8"></div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Автосервис Honda
        </h1>
        <p className="text-xl md:text-2xl mb-2 text-gray-200">
          Официальный дилер в Татарстане
        </p>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          На рынке с 2008 года
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10">
          <a 
            href="tel:+78432760505"
            className="flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-xl hover:bg-gray-100 transition-all hover:scale-105 shadow-2xl"
          >
            <Icon name="Phone" size={24} className="text-primary" />
            +7 (843) 276-05-05
          </a>
          
          <a 
            href="https://t.me/+78432760505"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#0088cc] text-white px-8 py-4 rounded-full font-bold text-xl hover:bg-[#006699] transition-all hover:scale-105 shadow-2xl"
          >
            <Icon name="Send" size={24} />
            Telegram
          </a>
        </div>
        
        <Button 
          size="lg" 
          className="bg-primary hover:bg-primary/90 text-white text-lg px-10 py-6 rounded-full shadow-2xl transition-all hover:scale-105"
          onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Записаться на приём
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;