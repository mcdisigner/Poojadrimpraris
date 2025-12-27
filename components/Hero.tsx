import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?auto=format&fit=crop&q=80&w=1920")' }}
      >
        <div className="absolute inset-0 bg-chocolate/30 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-warm-white via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center pt-20">
        <span className="inline-block py-1 px-3 border border-cream/50 rounded-full text-cream text-sm tracking-[0.2em] mb-6 animate-fade-in-up backdrop-blur-sm">
          EST. 2012
        </span>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-warm-white font-bold mb-6 drop-shadow-md">
          Taste the <span className="text-soft-pink italic">Elegance</span>
        </h1>
        <p className="font-sans text-lg md:text-xl text-cream/90 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Handcrafted with passion, baked with the finest ingredients. Experience the luxury of premium artisanal cakes for your special moments.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#menu" 
            className="group bg-soft-pink text-chocolate px-8 py-4 rounded-full font-bold tracking-wide hover:bg-cream transition-all duration-300 transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2"
          >
            Order Now
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#contact" 
            className="bg-transparent border-2 border-cream text-cream px-8 py-4 rounded-full font-bold tracking-wide hover:bg-cream hover:text-chocolate transition-all duration-300"
          >
            Custom Cakes
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;