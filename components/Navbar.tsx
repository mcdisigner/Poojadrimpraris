import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Cake } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { toggleCart, cartCount } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-warm-white/95 backdrop-blur-sm shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-chocolate p-2 rounded-full">
            <Cake className="w-6 h-6 text-cream" />
          </div>
          <span className={`font-serif text-2xl font-bold tracking-wide ${isScrolled ? 'text-chocolate' : 'text-chocolate'}`}>
            Sweet Delights
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="font-sans text-chocolate hover:text-soft-pink font-semibold transition-colors uppercase text-sm tracking-wider"
            >
              {link.name}
            </a>
          ))}
          
          <button 
            onClick={toggleCart} 
            className="relative p-2 hover:bg-soft-pink/20 rounded-full transition-colors"
          >
            <ShoppingBag className="w-6 h-6 text-chocolate" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-soft-pink text-chocolate text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full animate-bounce">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleCart} className="relative p-1">
            <ShoppingBag className="w-6 h-6 text-chocolate" />
            {cartCount > 0 && (
               <span className="absolute -top-1 -right-1 bg-soft-pink text-chocolate text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full">
               {cartCount}
             </span>
            )}
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6 text-chocolate" /> : <Menu className="w-6 h-6 text-chocolate" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-warm-white shadow-lg py-4 px-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-chocolate font-sans font-semibold py-2 border-b border-chocolate/10 hover:text-soft-pink"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;