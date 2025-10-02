import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface InfoSectionsProps {
  activeSection: string;
}

const InfoSections = ({ activeSection }: InfoSectionsProps) => {
  return (
    <>
      {activeSection === 'about' && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 fade-in">
          <h2 className="text-4xl font-bold mb-8">О магазине</h2>
          <div className="prose prose-lg">
            <p className="text-gray-600 mb-4">
              Мы специализируемся на продаже оригинальных аксессуаров Apple. Наша цель — предоставить 
              вам лучший опыт покупки премиальных товаров для ваших устройств.
            </p>
            <p className="text-gray-600">
              Все товары сертифицированы и имеют официальную гарантию производителя.
            </p>
          </div>
        </section>
      )}

      {activeSection === 'delivery' && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 fade-in">
          <h2 className="text-4xl font-bold mb-8">Доставка и оплата</h2>
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-3">Доставка</h3>
              <p className="text-gray-600">
                Доставка по России — 3-5 рабочих дней. Бесплатная доставка при заказе от 5000 ₽.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-3">Оплата</h3>
              <p className="text-gray-600">
                Принимаем оплату картами Visa, MasterCard, Мир. Также доступна оплата при получении.
              </p>
            </Card>
          </div>
        </section>
      )}

      {activeSection === 'contacts' && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 fade-in">
          <h2 className="text-4xl font-bold mb-8">Контакты</h2>
          <div className="space-y-4">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="Phone" size={20} />
                <span className="font-semibold">Телефон:</span>
              </div>
              <p className="text-gray-600">+7 (999) 123-45-67</p>
            </Card>
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="Mail" size={20} />
                <span className="font-semibold">Email:</span>
              </div>
              <p className="text-gray-600">info@appleaccessories.ru</p>
            </Card>
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="MapPin" size={20} />
                <span className="font-semibold">Адрес:</span>
              </div>
              <p className="text-gray-600">г. Москва, ул. Примерная, д. 1</p>
            </Card>
          </div>
        </section>
      )}
    </>
  );
};

export default InfoSections;
