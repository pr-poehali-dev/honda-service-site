import Icon from "@/components/ui/icon";

const ContactsSection = () => {
  return (
    <>
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Контакты
            </h2>
            <p className="text-xl text-gray-300">г. Казань, ул. Космонавтов, 73</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={32} />
                </div>
                <h3 className="font-bold text-lg mb-2">Адрес</h3>
                <p className="text-gray-300">г. Казань, ул. Космонавтов, 73</p>
              </div>

              <div className="text-center">
                <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={32} />
                </div>
                <h3 className="font-bold text-lg mb-2">Телефон</h3>
                <a href="tel:+79393760505" className="text-gray-300 hover:text-white transition-colors">
                  +7 (939) 376-05-05
                </a>
              </div>

              <div className="text-center">
                <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" size={32} />
                </div>
                <h3 className="font-bold text-lg mb-2">Режим работы</h3>
                <p className="text-gray-300">Пн-Пт: 9:00 - 20:00<br />Сб-Вс: 10:00 - 18:00</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Автосервис на Космонавтов. Профессиональный ремонт автомобилей в Казани
          </p>
        </div>
      </footer>
    </>
  );
};

export default ContactsSection;
