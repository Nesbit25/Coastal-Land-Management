import React, { useState } from 'react';
import { Menu, X, Trees, Phone } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="bg-emerald-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer group" onClick={scrollToTop}>
              <Trees className="h-8 w-8 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
              <span className="font-bold text-xl tracking-wider group-hover:text-emerald-100 transition-colors">COASTAL LAND</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#services" className="hover:bg-emerald-800 px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer">Services</a>
                <a href="#quote" className="hover:bg-emerald-800 px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer">AI Estimate</a>
                <a href="#testimonials" className="hover:bg-emerald-800 px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer">Testimonials</a>
                <a href="#contact" className="hover:bg-emerald-800 px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer">Contact</a>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
             <div className="flex items-center gap-2 text-emerald-300">
                <Phone size={18} />
                <span className="font-semibold">(555) 123-4567</span>
             </div>
             <a href="#contact" className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md font-bold transition-colors shadow-sm hover:shadow-md cursor-pointer">
                Book Now
             </a>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-emerald-800 inline-flex items-center justify-center p-2 rounded-md text-emerald-200 hover:text-white hover:bg-emerald-700 focus:outline-none cursor-pointer"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isOpen && (
        <div className="md:hidden bg-emerald-800 shadow-inner">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#services" onClick={() => setIsOpen(false)} className="hover:bg-emerald-700 block px-3 py-2 rounded-md text-base font-medium cursor-pointer">Services</a>
            <a href="#quote" onClick={() => setIsOpen(false)} className="hover:bg-emerald-700 block px-3 py-2 rounded-md text-base font-medium cursor-pointer">AI Estimate</a>
            <a href="#testimonials" onClick={() => setIsOpen(false)} className="hover:bg-emerald-700 block px-3 py-2 rounded-md text-base font-medium cursor-pointer">Testimonials</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="hover:bg-emerald-700 block px-3 py-2 rounded-md text-base font-medium cursor-pointer">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};