import Icon from "@/components/ui/icon";

const ContactsSection = () => {
  return (
    <>
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Мы на карте
            </h2>
            <p className="text-xl text-gray-300">г. Казань, ул. Космонавтов, 73</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl h-[500px]">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=49.122414%2C55.830431&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzEyMTUzMRJO0KDQvtGB0YHQuNGPLCDQoNC10YHQv9GD0LHQu9C40LrQsCDQotCw0YLQsNGA0YHRgtCw0L0sINCa0LDQt9Cw0L3RjCwg0YPQu9C40YbQsCDQmtC-0YHQvNC-0L3QsNCy0YLQvtCyLCA3MyIKDcWaLEIVoXdgQg%2C%2C&z=17"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
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
                <a href="tel:+78432760505" className="text-gray-300 hover:text-white transition-colors">
                  +7 (843) 276-05-05
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
            © 2024 Автосервис ХОНДА. Официальный дилер в Казани и Татарстане
          </p>
        </div>
      </footer>
    </>
  );
};

export default ContactsSection;
