import React from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import CartSidebar from './components/CartSidebar';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen font-sans bg-warm-white">
        <Navbar />
        <CartSidebar />
        <main>
          <Hero />
          <ProductList />
          <Reviews />
          <Contact />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;