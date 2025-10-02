import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface HomeSectionProps {
  setActiveSection: (section: string) => void;
  setSelectedCategory: (category: string) => void;
}

const HomeSection = ({ setActiveSection, setSelectedCategory }: HomeSectionProps) => {
  return (
    <>
      <section className="relative h-[600px] bg-gradient-to-b from-gray-50 to-white flex items-center justify-center fade-in">
        <div className="text-center px-4">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <img 
              src="https://cdn.poehali.dev/files/18687444-4a73-489e-a294-6a9b112dbf1a.png" 
              alt="Apple Like Logo" 
              className="h-20 w-20 object-contain bg-white rounded-2xl p-2 animate-fade-in hover:scale-110 hover:rotate-12 transition-transform duration-300 cursor-pointer"
            />
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight animate-fade-in">
              Apple Like
            </h1>
          </div>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            iPhone и премиальные аксессуары Apple. Качество и стиль в каждой детали.
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

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold mb-12 text-center">Категории товаров</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card
            className="group cursor-pointer overflow-hidden hover-scale border-2 hover:border-black transition-all duration-300"
            onClick={() => {
              setSelectedCategory('iphone');
              setActiveSection('catalog');
            }}
          >
            <div className="aspect-square bg-white overflow-hidden">
              <img 
                src="/img/21d8523f-2324-456c-9596-d7939a78e621.jpg" 
                alt="iPhone" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <CardContent className="p-6 text-center">
              <h3 className="text-2xl font-bold mb-2">iPhone</h3>
              <p className="text-gray-600">Новейшие модели iPhone с передовыми технологиями</p>
            </CardContent>
          </Card>

          <Card
            className="group cursor-pointer overflow-hidden hover-scale border-2 hover:border-black transition-all duration-300"
            onClick={() => {
              setSelectedCategory('case');
              setActiveSection('catalog');
            }}
          >
            <div className="aspect-square bg-white overflow-hidden">
              <img 
                src="/img/3516bdb8-6b75-4898-8e39-3d558c447c4d.jpg" 
                alt="iPhone Cases" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <CardContent className="p-6 text-center">
              <h3 className="text-2xl font-bold mb-2">Чехлы</h3>
              <p className="text-gray-600">Силиконовые и кожаные чехлы для вашего iPhone</p>
            </CardContent>
          </Card>

          <Card
            className="group cursor-pointer overflow-hidden hover-scale border-2 hover:border-black transition-all duration-300"
            onClick={() => {
              setSelectedCategory('airpods');
              setActiveSection('catalog');
            }}
          >
            <div className="aspect-square bg-white overflow-hidden">
              <img 
                src="/img/5adda829-ea3e-4eea-bd01-e7cc694bf6ef.jpg" 
                alt="AirPods" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <CardContent className="p-6 text-center">
              <h3 className="text-2xl font-bold mb-2">AirPods</h3>
              <p className="text-gray-600">Беспроводные наушники Apple с премиальным звуком</p>
            </CardContent>
          </Card>

          <Card
            className="group cursor-pointer overflow-hidden hover-scale border-2 hover:border-black transition-all duration-300"
            onClick={() => {
              setSelectedCategory('magsafe');
              setActiveSection('catalog');
            }}
          >
            <div className="aspect-square bg-white overflow-hidden">
              <img 
                src="/img/880f5b35-7a7a-4a31-af97-22cd1a805ff6.jpg" 
                alt="MagSafe" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <CardContent className="p-6 text-center">
              <h3 className="text-2xl font-bold mb-2">MagSafe</h3>
              <p className="text-gray-600">Магнитные зарядки и аккумуляторы для iPhone</p>
            </CardContent>
          </Card>

          <Card
            className="group cursor-pointer overflow-hidden hover-scale border-2 hover:border-black transition-all duration-300"
            onClick={() => {
              setSelectedCategory('glass');
              setActiveSection('catalog');
            }}
          >
            <div className="aspect-square bg-white overflow-hidden">
              <img 
                src="/img/e962a9be-5650-47e8-9c6b-a8c8f6c3a8ed.jpg" 
                alt="Защитные стёкла" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <CardContent className="p-6 text-center">
              <h3 className="text-2xl font-bold mb-2">Защитные стёкла</h3>
              <p className="text-gray-600">Надёжная защита экрана и камеры iPhone</p>
            </CardContent>
          </Card>

          <Card
            className="group cursor-pointer overflow-hidden hover-scale border-2 hover:border-black transition-all duration-300"
            onClick={() => {
              setSelectedCategory('battery');
              setActiveSection('catalog');
            }}
          >
            <div className="aspect-square bg-white overflow-hidden">
              <img 
                src="/img/2304f2a3-f66c-46a2-8abd-6f183686d887.jpg" 
                alt="Батареи" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <CardContent className="p-6 text-center">
              <h3 className="text-2xl font-bold mb-2">Батареи</h3>
              <p className="text-gray-600">Портативные аккумуляторы для подзарядки в пути</p>
            </CardContent>
          </Card>

          <Card
            className="group cursor-pointer overflow-hidden hover-scale border-2 hover:border-black transition-all duration-300"
            onClick={() => {
              setSelectedCategory('charger');
              setActiveSection('catalog');
            }}
          >
            <div className="aspect-square bg-white overflow-hidden">
              <img 
                src="/img/31486adb-6d10-456a-aca3-d26877f0fac7.jpg" 
                alt="Блоки питания" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <CardContent className="p-6 text-center">
              <h3 className="text-2xl font-bold mb-2">Блоки питания</h3>
              <p className="text-gray-600">Быстрые зарядные устройства USB-C</p>
            </CardContent>
          </Card>

          <Card
            className="group cursor-pointer overflow-hidden hover-scale border-2 hover:border-black transition-all duration-300"
            onClick={() => {
              setSelectedCategory('cable');
              setActiveSection('catalog');
            }}
          >
            <div className="aspect-square bg-white overflow-hidden">
              <img 
                src="/img/bf24009c-9d13-4629-88be-2bf88f11a751.jpg" 
                alt="Провода" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <CardContent className="p-6 text-center">
              <h3 className="text-2xl font-bold mb-2">Провода</h3>
              <p className="text-gray-600">Оригинальные кабели Lightning и USB-C</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};

export default HomeSection;