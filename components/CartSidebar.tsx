import React from 'react';
import { useCart } from '../context/CartContext';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';

const CartSidebar = () => {
  const { isCartOpen, toggleCart, cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/40 z-50 transition-opacity duration-300 ${isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={toggleCart}
      />

      {/* Sidebar */}
      <div 
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header */}
        <div className="p-6 bg-chocolate text-cream flex justify-between items-center">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            <h2 className="font-serif text-xl font-bold">Your Cart</h2>
          </div>
          <button onClick={toggleCart} className="hover:text-soft-pink transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-chocolate/50">
              <ShoppingBag className="w-16 h-16 mb-4 opacity-20" />
              <p className="font-sans text-lg">Your cart is empty.</p>
              <button onClick={toggleCart} className="mt-4 text-chocolate font-bold underline decoration-soft-pink hover:text-soft-pink">
                Start Shopping
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 items-center">
                <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-chocolate font-bold text-sm">{item.title}</h3>
                  <p className="text-soft-pink font-bold text-sm">${item.price.toFixed(2)}</p>
                  
                  <div className="flex items-center gap-3 mt-2">
                    <button 
                      onClick={() => updateQuantity(item.id, -1)}
                      className="w-6 h-6 rounded-full border border-chocolate/20 flex items-center justify-center hover:bg-chocolate hover:text-white transition-colors text-xs"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="font-sans text-sm font-bold w-4 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-6 h-6 rounded-full border border-chocolate/20 flex items-center justify-center hover:bg-chocolate hover:text-white transition-colors text-xs"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-6 bg-warm-white border-t border-chocolate/10">
            <div className="flex justify-between items-center mb-4">
              <span className="font-sans text-chocolate/70">Subtotal</span>
              <span className="font-serif text-2xl font-bold text-chocolate">${cartTotal.toFixed(2)}</span>
            </div>
            <button 
              onClick={() => alert("Proceeding to checkout...")}
              className="w-full bg-soft-pink text-chocolate font-bold py-4 rounded-lg hover:bg-chocolate hover:text-soft-pink transition-colors shadow-md"
            >
              Checkout Now
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;