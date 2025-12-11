import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Спасибо! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/projects/66b65b68-a48e-4bdb-937d-cd8a977804a5/files/88739362-9ac2-4ddd-8113-0e0ecc866fde.jpg')`
          }}
        />
        <div className="relative z-10 text-center text-white px-4 max-w-5xl animate-fade-in">
          <div className="mb-10">
            <div className="text-8xl md:text-9xl font-black mb-6 tracking-wider" style={{ letterSpacing: '0.15em' }}>
              HONDA
            </div>
            <div className="h-2 w-48 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8"></div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Автосервис ХОНДА
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
                  <Icon name="Wrench" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Полный спектр услуг
                </h3>
                <p className="text-gray-600">
                  От диагностики до ремонта
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Специальные акции
            </h2>
            <p className="text-xl text-gray-600">Выгодные предложения для наших клиентов</p>
            <div className="inline-block mt-4 px-6 py-2 bg-primary text-white rounded-full font-semibold text-lg">
              До конца декабря
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="bg-primary text-white rounded-full w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name="Laptop" size={36} />
                  </div>
                  <span className="text-2xl font-bold text-primary bg-primary/10 px-4 py-2 rounded-full">Акция!</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Компьютерная диагностика
                </h3>
                <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                  Комплексная проверка всех систем автомобиля по 10 основным параметрам
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <Icon name="CheckCircle2" size={20} className="text-primary" />
                    <span>Проверка двигателя</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="CheckCircle2" size={20} className="text-primary" />
                    <span>Диагностика электроники</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="CheckCircle2" size={20} className="text-primary" />
                    <span>Анализ систем безопасности</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="bg-primary text-white rounded-full w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name="Droplet" size={36} />
                  </div>
                  <span className="text-2xl font-bold text-primary bg-primary/10 px-4 py-2 rounded-full">Акция!</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Бесплатная замена масла
                </h3>
                <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                  При покупке оригинального масла Honda — замена в подарок!
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <Icon name="CheckCircle2" size={20} className="text-primary" />
                    <span>100% оригинальное масло</span>
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
                      Адаптация роботизированной КПП
                    </h3>
                    <p className="text-2xl font-bold text-primary">от 3 000 ₽</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 group border-2 hover:border-primary">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
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
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 group border-2 hover:border-primary">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-gradient-to-br from-primary to-red-600 text-white rounded-xl w-14 h-14 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg flex-shrink-0">
                    <Icon name="MoveHorizontal" size={28} />
                  </div>
                  <div className="text-left flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Развал-схождение
                    </h3>
                    <p className="text-2xl font-bold text-primary">от 1 800 ₽</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 group border-2 hover:border-primary">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-gradient-to-br from-primary to-red-600 text-white rounded-xl w-14 h-14 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg flex-shrink-0">
                    <Icon name="ShieldCheck" size={28} />
                  </div>
                  <div className="text-left flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Установка сигнализации
                    </h3>
                    <p className="text-2xl font-bold text-primary">от 10 000 ₽</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Отзывы наших клиентов
            </h2>
            <p className="text-xl text-gray-600">Нам доверяют тысячи автовладельцев</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-2xl transition-all duration-300 border-2">
              <CardContent className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Icon name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                  <Icon name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                  <Icon name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                  <Icon name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                  <Icon name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "Отличный сервис! Делали диагностику Honda CR-V. Всё быстро, качественно, по адекватной цене. Мастера профессионалы своего дела. Обязательно вернусь сюда снова."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                    ФЗ
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Фарид Зайнулин</div>
                    <div className="text-sm text-gray-500">Honda CR-V, 2020</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-300 border-2">
              <CardContent className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Icon name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                  <Icon name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                  <Icon name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                  <Icon name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                  <Icon name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "Проходила ТО в этом сервисе. Очень довольна! Всё объяснили, показали, что меняли. Цены честные, без накруток. Приятная атмосфера и вежливый персонал."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                    ВХ
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Виктория Хакимова</div>
                    <div className="text-sm text-gray-500">Honda Accord, 2019</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-300 border-2">
              <CardContent className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Icon name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                  <Icon name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                  <Icon name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                  <Icon name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                  <Icon name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "Обслуживаю здесь свою Хонду уже 3 года. Надёжный сервис с опытными мастерами. Используют оригинальные запчасти, дают гарантию. Рекомендую всем!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                    ИФ
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Ильшат Фатхетдинов</div>
                    <div className="text-sm text-gray-500">Honda Civic, 2018</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Записаться на приём
              </h2>
              <p className="text-xl text-gray-600">Заполните форму, и мы свяжемся с вами</p>
            </div>

            <Card className="shadow-2xl border-2">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">
                      Ваше имя
                    </label>
                    <Input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Иван Иванов"
                      className="h-12 text-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">
                      Телефон
                    </label>
                    <Input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+7 (900) 123-45-67"
                      className="h-12 text-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">
                      Сообщение
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Опишите проблему или выберите услугу..."
                      className="min-h-32 text-lg"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-white text-lg py-6 rounded-lg shadow-lg transition-all hover:scale-105"
                  >
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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
                <p className="text-gray-300">+7 (843) 123-45-67</p>
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
    </div>
  );
};

export default Index;