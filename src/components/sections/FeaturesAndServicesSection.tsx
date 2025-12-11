import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const FeaturesAndServicesSection = () => {
  return (
    <>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Почему выбирают Honda-сервис
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
                  Официальный дилер
                </h3>
                <p className="text-gray-600">
                  Сертифицированный партнер Honda
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
                  Диагностика Honda
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

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-2xl transition-all duration-300 border-2 border-primary/30 hover:border-primary relative overflow-hidden group">
              <div className="absolute top-0 right-0 bg-primary text-white px-4 py-2 text-sm font-bold transform rotate-12 translate-x-8 translate-y-4 group-hover:scale-110 transition-transform">
                ХИТ
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Техническое обслуживание
                </h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <Icon name="CheckCircle2" size={20} className="text-primary" />
                    <span>Замена масла и фильтров</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="CheckCircle2" size={20} className="text-primary" />
                    <span>Диагностика 50 узлов</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="CheckCircle2" size={20} className="text-primary" />
                    <span>Проверка тормозов</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="CheckCircle2" size={20} className="text-primary" />
                    <span>Работа бесплатно</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="CheckCircle2" size={20} className="text-primary" />
                    <span>Гарантия качества</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-300 border-2 border-primary/30 hover:border-primary relative overflow-hidden group">
              <div className="absolute top-0 right-0 bg-green-600 text-white px-4 py-2 text-sm font-bold transform rotate-12 translate-x-8 translate-y-4 group-hover:scale-110 transition-transform">
                -20%
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Диагностика ходовой
                </h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <Icon name="CheckCircle2" size={20} className="text-primary" />
                    <span>Компьютерная диагностика</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="CheckCircle2" size={20} className="text-primary" />
                    <span>Проверка на подъёмнике</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="CheckCircle2" size={20} className="text-primary" />
                    <span>Отчёт о состоянии</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="CheckCircle2" size={20} className="text-primary" />
                    <span>Работа бесплатно</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="CheckCircle2" size={20} className="text-primary" />
                    <span>Гарантия качества</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-300 border-2 border-primary/30 hover:border-primary relative overflow-hidden group">
              <div className="absolute top-0 right-0 bg-orange-600 text-white px-4 py-2 text-sm font-bold transform rotate-12 translate-x-8 translate-y-4 group-hover:scale-110 transition-transform">
                NEW
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Подготовка к сезону
                </h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <Icon name="CheckCircle2" size={20} className="text-primary" />
                    <span>Смена резины</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="CheckCircle2" size={20} className="text-primary" />
                    <span>Проверка антифриза</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="CheckCircle2" size={20} className="text-primary" />
                    <span>Проверка аккумулятора</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="CheckCircle2" size={20} className="text-primary" />
                    <span>Работа бесплатно</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="CheckCircle2" size={20} className="text-primary" />
                    <span>Гарантия качества</span>
                  </li>
                </ul>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            <Card className="hover:shadow-xl transition-all duration-300 group border-2 hover:border-primary">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
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
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 group border-2 hover:border-primary">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
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
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 group border-2 hover:border-primary">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
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
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 group border-2 hover:border-primary">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-gradient-to-br from-primary to-red-600 text-white rounded-xl w-14 h-14 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg flex-shrink-0">
                    <Icon name="Settings" size={28} />
                  </div>
                  <div className="text-left flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Диагностика двигателя
                    </h3>
                    <p className="text-2xl font-bold text-primary">от 500 ₽</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 group border-2 hover:border-primary">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-gradient-to-br from-primary to-red-600 text-white rounded-xl w-14 h-14 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg flex-shrink-0">
                    <Icon name="Zap" size={28} />
                  </div>
                  <div className="text-left flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Ремонт электрики
                    </h3>
                    <p className="text-2xl font-bold text-primary">от 1 500 ₽</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 group border-2 hover:border-primary">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-gradient-to-br from-primary to-red-600 text-white rounded-xl w-14 h-14 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg flex-shrink-0">
                    <Icon name="Wind" size={28} />
                  </div>
                  <div className="text-left flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Ремонт кондиционера
                    </h3>
                    <p className="text-2xl font-bold text-primary">от 2 000 ₽</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesAndServicesSection;
