import React from 'react';
import { Instagram, Facebook, Twitter, Cake } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-chocolate text-cream pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Cake className="w-8 h-8 text-soft-pink" />
              <span className="font-serif text-2xl font-bold">Sweet Delights</span>
            </div>
            <p className="text-cream/60 max-w-sm mb-6">
              Crafting memories, one slice at a time. We use only the finest ingredients to bring you the premium cake experience you deserve.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-soft-pink hover:text-chocolate transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-soft-pink hover:text-chocolate transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-soft-pink hover:text-chocolate transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-soft-pink">Quick Links</h4>
            <ul className="space-y-2 text-cream/70">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Our Menu</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Reviews</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-soft-pink">Legal</h4>
            <ul className="space-y-2 text-cream/70">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-cream/40 text-sm">
          <p>&copy; {new Date().getFullYear()} Sweet Delights Premium Cake Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;