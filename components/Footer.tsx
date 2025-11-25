import React from 'react';
import { Trees, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-950 text-emerald-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Trees className="h-8 w-8 text-emerald-400" />
              <span className="font-bold text-xl tracking-wider text-white">COASTAL LAND</span>
            </div>
            <p className="text-sm text-emerald-300">
              Professional landscaping services dedicated to preserving the beauty of our coastal environment.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="hover:text-white transition-colors">Tree Removal</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Lawn Care</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Landscaping</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Storm Cleanup</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-emerald-500" />
                <a href="tel:5551234567" className="hover:text-white transition-colors">(555) 123-4567</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-emerald-500" />
                <a href="mailto:info@coastalland.com" className="hover:text-white transition-colors">info@coastalland.com</a>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-emerald-500" />
                <span>Savannah to Jacksonville</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between"><span>Mon - Fri:</span> <span>7:00 AM - 6:00 PM</span></li>
              <li className="flex justify-between"><span>Saturday:</span> <span>8:00 AM - 4:00 PM</span></li>
              <li className="flex justify-between"><span>Sunday:</span> <span>Closed</span></li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-emerald-400 hover:text-white"><Facebook className="h-6 w-6" /></a>
              <a href="#" className="text-emerald-400 hover:text-white"><Instagram className="h-6 w-6" /></a>
              <a href="#" className="text-emerald-400 hover:text-white"><Twitter className="h-6 w-6" /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-emerald-900 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Coastal Land Management. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};