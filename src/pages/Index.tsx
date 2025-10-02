import { useState } from 'react';
import { products } from '@/data/products';
import { Product, CartItem } from '@/types/product';
import Navigation from '@/components/Navigation';
import HomeSection from '@/components/HomeSection';
import CatalogSection from '@/components/CatalogSection';
import InfoSections from '@/components/InfoSections';
import Footer from '@/components/Footer';

const Index = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedModel, setSelectedModel] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<number[]>([0, 2000]);
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
      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        cart={cart}
        cartItemsCount={cartItemsCount}
        cartTotal={cartTotal}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
      />

      <main className="pt-16">
        {activeSection === 'home' && (
          <HomeSection
            setActiveSection={setActiveSection}
            setSelectedCategory={setSelectedCategory}
          />
        )}

        {activeSection === 'catalog' && (
          <CatalogSection
            filteredProducts={filteredProducts}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedModel={selectedModel}
            setSelectedModel={setSelectedModel}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            allModels={allModels}
            addToCart={addToCart}
          />
        )}

        <InfoSections activeSection={activeSection} />
      </main>

      <Footer />
    </div>
  );
};

export default Index;