import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';
import { CartItem } from '@/types/product';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  cart: CartItem[];
  cartItemsCount: number;
  cartTotal: number;
  updateQuantity: (productId: number, quantity: number) => void;
  removeFromCart: (productId: number) => void;
}

const Navigation = ({
  activeSection,
  setActiveSection,
  cart,
  cartItemsCount,
  cartTotal,
  updateQuantity,
  removeFromCart,
}: NavigationProps) => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <img 
              src="https://cdn.poehali.dev/files/6230c702-e04e-4d48-902d-663e4ca078f4.jpeg" 
              alt="Logo" 
              className="h-8 w-8 object-contain"
            />
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
  );
};

export default Navigation;