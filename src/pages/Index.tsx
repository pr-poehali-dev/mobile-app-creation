import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  model: string[];
  image: string;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'MagSafe Charger',
    category: 'magsafe',
    price: 120,
    model: ['iPhone 12', 'iPhone 13', 'iPhone 14', 'iPhone 15'],
    image: 'https://v3.fal.media/files/kangaroo/2eCi0F7UoYQQocGVOugDE_output.png',
    description: 'Беспроводная зарядка MagSafe'
  },
  {
    id: 2,
    name: 'Силиконовый чехол',
    category: 'case',
    price: 89,
    model: ['iPhone 13', 'iPhone 14', 'iPhone 15'],
    image: 'https://v3.fal.media/files/kangaroo/2eCi0F7UoYQQocGVOugDE_output.png',
    description: 'Премиальный силиконовый чехол'
  },
  {
    id: 3,
    name: 'AirPods Pro 2',
    category: 'airpods',
    price: 349,
    model: ['iPhone 11', 'iPhone 12', 'iPhone 13', 'iPhone 14', 'iPhone 15'],
    image: 'https://v3.fal.media/files/kangaroo/2eCi0F7UoYQQocGVOugDE_output.png',
    description: 'Наушники с активным шумоподавлением'
  },
  {
    id: 4,
    name: 'Кожаный чехол',
    category: 'case',
    price: 149,
    model: ['iPhone 14', 'iPhone 15'],
    image: 'https://v3.fal.media/files/kangaroo/2eCi0F7UoYQQocGVOugDE_output.png',
    description: 'Чехол из натуральной кожи'
  },
  {
    id: 5,
    name: 'MagSafe Battery Pack',
    category: 'magsafe',
    price: 189,
    model: ['iPhone 12', 'iPhone 13', 'iPhone 14', 'iPhone 15'],
    image: 'https://v3.fal.media/files/kangaroo/2eCi0F7UoYQQocGVOugDE_output.png',
    description: 'Портативный аккумулятор с MagSafe'
  },
  {
    id: 6,
    name: 'AirPods Max',
    category: 'airpods',
    price: 799,
    model: ['iPhone 11', 'iPhone 12', 'iPhone 13', 'iPhone 14', 'iPhone 15'],
    image: 'https://v3.fal.media/files/kangaroo/2eCi0F7UoYQQocGVOugDE_output.png',
    description: 'Полноразмерные наушники премиум-класса'
  }
];

const Index = () => {
  const [cart, setCart] = useState<{product: Product; quantity: number}[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedModel, setSelectedModel] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<number[]>([0, 1000]);
  const [activeSection, setActiveSection] = useState<string>('home');

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? {...item, quantity: item.quantity + 1}
            : item
        );
      }
      return [...prev, {product, quantity: 1}];
    });
  };

  const removeFromCart = (productId: number) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prev =>
      prev.map(item =>
        item.product.id === productId ? {...item, quantity} : item
      )
    );
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const cartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const filteredProducts = products.filter(product => {
    if (selectedCategory !== 'all' && product.category !== selectedCategory) return false;
    if (selectedModel !== 'all' && !product.model.includes(selectedModel)) return false;
    if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
    return true;
  });

  const allModels = Array.from(new Set(products.flatMap(p => p.model)));

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Apple" size={24} className="text-black" />
              <span className="text-xl font-semibold">Accessories</span>
            </div>

            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => setActiveSection('home')}
                className={`text-sm hover:text-gray-600 transition-colors ${
                  activeSection === 'home' ? 'text-black' : 'text-gray-500'
                }`}
              >
                Главная
              </button>
              <button
                onClick={() => setActiveSection('catalog')}
                className={`text-sm hover:text-gray-600 transition-colors ${
                  activeSection === 'catalog' ? 'text-black' : 'text-gray-500'
                }`}
              >
                Каталог
              </button>
              <button
                onClick={() => setActiveSection('about')}
                className={`text-sm hover:text-gray-600 transition-colors ${
                  activeSection === 'about' ? 'text-black' : 'text-gray-500'
                }`}
              >
                О магазине
              </button>
              <button
                onClick={() => setActiveSection('delivery')}
                className={`text-sm hover:text-gray-600 transition-colors ${
                  activeSection === 'delivery' ? 'text-black' : 'text-gray-500'
                }`}
              >
                Доставка
              </button>
              <button
                onClick={() => setActiveSection('contacts')}
                className={`text-sm hover:text-gray-600 transition-colors ${
                  activeSection === 'contacts' ? 'text-black' : 'text-gray-500'
                }`}
              >
                Контакты
              </button>
            </div>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Icon name="ShoppingBag" size={20} />
                  {cartItemsCount > 0 && (
                    <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-black text-white text-xs">
                      {cartItemsCount}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-lg">
                <SheetHeader>
                  <SheetTitle>Корзина</SheetTitle>
                </SheetHeader>
                <div className="mt-8 space-y-4">
                  {cart.length === 0 ? (
                    <p className="text-center text-gray-500 py-8">Корзина пуста</p>
                  ) : (
                    <>
                      {cart.map(item => (
                        <div key={item.product.id} className="flex items-center gap-4 border-b pb-4">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-20 h-20 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h3 className="font-medium">{item.product.name}</h3>
                            <p className="text-sm text-gray-500">{item.product.price} €</p>
                            <div className="flex items-center gap-2 mt-2">
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              >
                                <Icon name="Minus" size={14} />
                              </Button>
                              <span className="w-8 text-center">{item.quantity}</span>
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              >
                                <Icon name="Plus" size={14} />
                              </Button>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeFromCart(item.product.id)}
                          >
                            <Icon name="X" size={20} />
                          </Button>
                        </div>
                      ))}
                      <div className="pt-4 border-t">
                        <div className="flex justify-between text-lg font-semibold mb-4">
                          <span>Итого:</span>
                          <span>{cartTotal} €</span>
                        </div>
                        <Button className="w-full bg-black hover:bg-gray-800 text-white">
                          Оформить заказ
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {activeSection === 'home' && (
          <section className="relative h-[600px] bg-gradient-to-b from-gray-50 to-white flex items-center justify-center fade-in">
            <div className="text-center px-4">
              <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
                Аксессуары Apple
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Премиальные аксессуары для вашего iPhone. Качество и стиль в каждой детали.
              </p>
              <Button
                onClick={() => setActiveSection('catalog')}
                size="lg"
                className="bg-black hover:bg-gray-800 text-white px-8 py-6 text-lg rounded-full"
              >
                Смотреть каталог
              </Button>
            </div>
          </section>
        )}

        {activeSection === 'catalog' && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 fade-in">
            <h2 className="text-4xl font-bold mb-8">Каталог товаров</h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              <Card className="p-6">
                <h3 className="font-semibold mb-4">Фильтры</h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="text-sm text-gray-600 mb-2 block">Категория</label>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Все категории</SelectItem>
                        <SelectItem value="case">Чехлы</SelectItem>
                        <SelectItem value="airpods">AirPods</SelectItem>
                        <SelectItem value="magsafe">MagSafe</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm text-gray-600 mb-2 block">Модель устройства</label>
                    <Select value={selectedModel} onValueChange={setSelectedModel}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Все модели</SelectItem>
                        {allModels.map(model => (
                          <SelectItem key={model} value={model}>
                            {model}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm text-gray-600 mb-2 block">
                      Цена: {priceRange[0]} € - {priceRange[1]} €
                    </label>
                    <Slider
                      min={0}
                      max={1000}
                      step={10}
                      value={priceRange}
                      onValueChange={setPriceRange}
                      className="mt-2"
                    />
                  </div>

                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      setSelectedCategory('all');
                      setSelectedModel('all');
                      setPriceRange([0, 1000]);
                    }}
                  >
                    Сбросить фильтры
                  </Button>
                </div>
              </Card>

              <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <Card key={product.id} className="overflow-hidden hover-scale cursor-pointer group">
                    <div className="aspect-square bg-gray-50 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                      <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold">{product.price} €</span>
                        <Button
                          onClick={() => addToCart(product)}
                          size="sm"
                          className="bg-black hover:bg-gray-800 text-white rounded-full"
                        >
                          В корзину
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

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
      </main>

      <footer className="bg-gray-50 border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center text-gray-600">
            <p>© 2024 Apple Accessories. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
