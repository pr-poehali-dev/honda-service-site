import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const TestimonialsSection = () => {
  return (
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
  );
};

export default TestimonialsSection;
