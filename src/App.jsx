import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Banner from './components/Banner.jsx';
import SearchBar, { filterProducts } from './components/SearchBar.jsx';
import CategoryFilter from './components/CategoryFilter.jsx';
import ProductCard from './components/ProductCard.jsx';
import CartDrawer from './components/CartDrawer.jsx';
import Footer from './components/Footer.jsx';
import { INITIAL_PRODUCTS } from './data/products.js';
import { Sparkles, ShoppingBag } from 'lucide-react';

export default function App() {
  const [products] = useState(INITIAL_PRODUCTS);
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [recentlyAddedId, setRecentlyAddedId] = useState(null);

  // Filter products using the search helper
  const filteredProducts = filterProducts(products, searchQuery, activeCategory);

  // Cart operations
  const handleAddToCart = (product) => {
    if (!product.inStock) return;

    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });

    // Provide temporary visual feedback on product card
    setRecentlyAddedId(product.id);
    setTimeout(() => {
      setRecentlyAddedId((curr) => (curr === product.id ? null : curr));
    }, 1200);
  };

  const handleUpdateQuantity = (productId, delta) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  const handleRemoveItem = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      {/* Header */}
      <Navbar
        cart={cart}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-8">
        {/* Hero Banner */}
        <Banner />

        {/* Filter Controls Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs">
          <SearchBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
          <CategoryFilter
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />
        </div>

        {/* Section Heading & Result Count */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-bold text-slate-900">Featured Catalog</h2>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'item' : 'items'}
            </span>
          </div>

          {(searchQuery || activeCategory !== 'All') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All');
              }}
              className="text-xs text-indigo-600 hover:text-indigo-800 font-semibold"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
            <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-3 text-slate-400">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <h3 className="text-base font-semibold text-slate-900 mb-1">
              No products found
            </h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto mb-4">
              We couldn't find anything matching "{searchQuery}". Try searching for something else or reset your filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All');
              }}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold transition-colors"
            >
              Show All Products
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
                isAdded={recentlyAddedId === product.id}
              />
            ))}
          </div>
        )}
      </main>

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
