import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import CountdownTimer from "@/components/CountdownTimer";

const FeaturesAndServicesSection = () => {
  return (
    <>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Почему выбирают Автосервис на Космонавтов
            </h2>
            <p className="text-xl text-gray-600">Мы лучше, чем другие автосервисы</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <Card className="hover:shadow-xl transition-all duration-300 border-2 border-primary/20 hover:border-primary">
              <CardContent className="p-6 text-center">
                <div className="bg-gradient-to-br from-primary to-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Icon name="Award" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Опыт с 2008 года
                </h3>
                <p className="text-gray-600">
                  Работаем на рынке с 2008 года
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-2 border-primary/20 hover:border-primary">
              <CardContent className="p-6 text-center">
                <div className="bg-gradient-to-br from-primary to-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Icon name="PackageCheck" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Оригинальные запчасти
                </h3>
                <p className="text-gray-600">
                  100% оригинал от производителя
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-2 border-primary/20 hover:border-primary">
              <CardContent className="p-6 text-center">
                <div className="bg-gradient-to-br from-primary to-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Icon name="Users" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Опытные мастера
                </h3>
                <p className="text-gray-600">
                  Сертифицированные специалисты
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-2 border-primary/20 hover:border-primary">
              <CardContent className="p-6 text-center">
                <div className="bg-gradient-to-br from-primary to-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Icon name="ShieldCheck" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Гарантия качества
                </h3>
                <p className="text-gray-600">
                  На все работы и запчасти
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-2 border-primary/20 hover:border-primary">
              <CardContent className="p-6 text-center">
                <div className="bg-gradient-to-br from-primary to-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Icon name="Clock" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Быстрый сервис
                </h3>
                <p className="text-gray-600">
                  Работаем без задержек
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-2 border-primary/20 hover:border-primary">
              <CardContent className="p-6 text-center">
                <div className="bg-gradient-to-br from-primary to-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Icon name="Laptop" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Компьютерная диагностика
                </h3>
                <p className="text-gray-600">
                  Профессиональное оборудование
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-2 border-primary/20 hover:border-primary">
              <CardContent className="p-6 text-center">
                <div className="bg-gradient-to-br from-primary to-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Icon name="DollarSign" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Честные цены
                </h3>
                <p className="text-gray-600">
                  Без скрытых доплат
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-2 border-primary/20 hover:border-primary">
              <CardContent className="p-6 text-center">
                <div className="bg-gradient-to-br from-primary to-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Icon name="Headphones" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Поддержка 24/7
                </h3>
                <p className="text-gray-600">
                  Всегда на связи
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Специальные предложения
            </h2>
            <p className="text-xl text-gray-600">Выгодные условия для наших клиентов</p>
          </div>

          <div className="max-w-3xl mx-auto mb-12">
            <CountdownTimer />
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="hover:shadow-2xl transition-all duration-300 border-2 border-primary/40 hover:border-primary overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-red-600 px-8 py-5 flex items-center gap-4">
                <div className="bg-white/20 rounded-full w-14 h-14 flex items-center justify-center flex-shrink-0">
                  <Icon name="Droplet" size={30} className="text-white" />
                </div>
                <div>
                  <div className="text-white/80 text-sm font-medium uppercase tracking-widest mb-1">Специальное предложение</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                    Бесплатная замена масла и масляного фильтра
                  </h3>
                </div>
              </div>
              <CardContent className="p-8">
                <p className="text-gray-600 text-lg mb-6">
                  При покупке моторного масла у нас — замена масла <span className="font-bold text-gray-900">и масляного фильтра в подарок</span>. Платите только за расходники, работа мастера за наш счёт.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle2" size={22} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Широкий выбор масел для любых автомобилей — подберём под ваш двигатель</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle2" size={22} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Замена масляного фильтра включена — никаких доплат</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle2" size={22} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Утилизация отработанного масла — всё по-честному</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle2" size={22} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Занимает не более 30 минут — уедете без очереди</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle2" size={22} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Гарантия на выполненные работы</span>
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Button 
                    size="lg"
                    className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white text-lg px-10"
                    onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Записаться на замену
                  </Button>
                  <a 
                    href="tel:+79393760505"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 text-primary font-semibold hover:underline"
                  >
                    <Icon name="Phone" size={18} />
                    +7 (939) 376-05-05
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600">Профессиональное обслуживание вашего автомобиля</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <Card className="hover:shadow-xl transition-all duration-300 group border-2 hover:border-primary h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-start gap-4 mb-4 flex-grow">
                  <div className="bg-gradient-to-br from-primary to-red-600 text-white rounded-xl w-14 h-14 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg flex-shrink-0">
                    <Icon name="Wrench" size={28} />
                  </div>
                  <div className="text-left flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Ремонт ходовой части
                    </h3>
                    <p className="text-2xl font-bold text-primary">от 1 000 ₽</p>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Узнать подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 group border-2 hover:border-primary h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-start gap-4 mb-4 flex-grow">
                  <div className="bg-gradient-to-br from-primary to-red-600 text-white rounded-xl w-14 h-14 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg flex-shrink-0">
                    <Icon name="Disc" size={28} />
                  </div>
                  <div className="text-left flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Ремонт тормозной системы
                    </h3>
                    <p className="text-2xl font-bold text-primary">от 1 000 ₽</p>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Узнать подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 group border-2 hover:border-primary h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-start gap-4 mb-4 flex-grow">
                  <div className="bg-gradient-to-br from-primary to-red-600 text-white rounded-xl w-14 h-14 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg flex-shrink-0">
                    <Icon name="Droplet" size={28} />
                  </div>
                  <div className="text-left flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Замена масла в ДВС
                    </h3>
                    <p className="text-2xl font-bold text-primary">от 800 ₽</p>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Узнать подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 group border-2 hover:border-primary h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-start gap-4 mb-4 flex-grow">
                  <div className="bg-gradient-to-br from-primary to-red-600 text-white rounded-xl w-14 h-14 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg flex-shrink-0">
                    <Icon name="Cog" size={28} />
                  </div>
                  <div className="text-left flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Адаптация роботизированной КПП
                    </h3>
                    <p className="text-2xl font-bold text-primary">от 3 000 ₽</p>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Узнать подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 group border-2 hover:border-primary h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-start gap-4 mb-4 flex-grow">
                  <div className="bg-gradient-to-br from-primary to-red-600 text-white rounded-xl w-14 h-14 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg flex-shrink-0">
                    <Icon name="Gauge" size={28} />
                  </div>
                  <div className="text-left flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Адаптация круиз-контроля
                    </h3>
                    <p className="text-2xl font-bold text-primary">от 7 500 ₽</p>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Узнать подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 group border-2 hover:border-primary h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-start gap-4 mb-4 flex-grow">
                  <div className="bg-gradient-to-br from-primary to-red-600 text-white rounded-xl w-14 h-14 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg flex-shrink-0">
                    <Icon name="AlignHorizontalJustifyCenter" size={28} />
                  </div>
                  <div className="text-left flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Развал-схождение
                    </h3>
                    <p className="text-2xl font-bold text-primary">от 1 800 ₽</p>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Узнать подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 group border-2 hover:border-primary h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-start gap-4 mb-4 flex-grow">
                  <div className="bg-gradient-to-br from-primary to-red-600 text-white rounded-xl w-14 h-14 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg flex-shrink-0">
                    <Icon name="ShieldAlert" size={28} />
                  </div>
                  <div className="text-left flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Установка сигнализации
                    </h3>
                    <p className="text-2xl font-bold text-primary">от 10 000 ₽</p>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Узнать подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 group border-2 hover:border-primary h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-start gap-4 mb-4 flex-grow">
                  <div className="bg-gradient-to-br from-primary to-red-600 text-white rounded-xl w-14 h-14 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg flex-shrink-0">
                    <Icon name="Radio" size={28} />
                  </div>
                  <div className="text-left flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Установка парктроников
                    </h3>
                    <p className="text-2xl font-bold text-primary">от 8 000 ₽</p>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Узнать подробнее
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesAndServicesSection;