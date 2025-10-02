import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Product } from '@/types/product';

interface CatalogSectionProps {
  filteredProducts: Product[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedModel: string;
  setSelectedModel: (model: string) => void;
  priceRange: number[];
  setPriceRange: (range: number[]) => void;
  allModels: string[];
  addToCart: (product: Product) => void;
}

const CatalogSection = ({
  filteredProducts,
  selectedCategory,
  setSelectedCategory,
  selectedModel,
  setSelectedModel,
  priceRange,
  setPriceRange,
  allModels,
  addToCart,
}: CatalogSectionProps) => {
  return (
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
  );
};

export default CatalogSection;
