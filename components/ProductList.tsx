import React from 'react';
import { CAKE_PRODUCTS } from '../constants';
import { useCart } from '../context/CartContext';
import { Plus } from 'lucide-react';

const ProductList = () => {
  const { addToCart } = useCart();

  return (
    <section id="menu" className="py-20 bg-warm-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-chocolate font-bold mb-4">Our Signature Menu</h2>
          <div className="w-24 h-1 bg-soft-pink mx-auto rounded-full"></div>
          <p className="font-sans text-chocolate/70 mt-4 max-w-xl mx-auto">
            Explore our curated selection of divine confections, baked fresh daily.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {CAKE_PRODUCTS.map((product) => (
            <div 
              key={product.id} 
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-chocolate/5 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-chocolate uppercase tracking-wider">
                  {product.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-2xl text-chocolate font-bold group-hover:text-soft-pink transition-colors">
                    {product.title}
                  </h3>
                  <span className="font-sans font-bold text-lg text-chocolate">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
                
                <p className="font-sans text-chocolate/60 text-sm leading-relaxed mb-6 flex-grow">
                  {product.description}
                </p>

                <button 
                  onClick={() => addToCart(product)}
                  className="w-full bg-chocolate text-cream py-3 rounded-lg font-bold tracking-wide hover:bg-soft-pink hover:text-chocolate transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <Plus className="w-5 h-5" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;