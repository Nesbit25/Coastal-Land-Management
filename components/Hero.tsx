import React from 'react';
import { ArrowRight, Trees } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-emerald-900 overflow-hidden">
      {/* Background Gradient & Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800">
        {/* Abstract pattern overlay using CSS */}
        <div className="absolute inset-0 opacity-10" 
             style={{ 
               backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', 
               backgroundSize: '40px 40px' 
             }}>
        </div>
      </div>

      {/* Decorative Watermark Icon - Large Tree Logo */}
      <div className="absolute -right-20 -bottom-40 opacity-5 pointer-events-none select-none hidden lg:block">
        <Trees size={600} className="text-white transform -rotate-12" />
      </div>
      
      {/* Mobile Watermark */}
      <div className="absolute -right-10 -bottom-20 opacity-5 pointer-events-none select-none lg:hidden">
        <Trees size={300} className="text-white transform -rotate-12" />
      </div>

      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="lg:w-2/3">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Expert Care for Your <span className="text-emerald-400">Coastal Landscape</span>
          </h1>
          <p className="mt-6 text-xl text-emerald-100 max-w-3xl">
            Serving South Eastern Georgia and North Florida. From the historic oaks of Savannah to the palms of Jacksonville, 
            Coastal Land Management provides premier tree removal, lawn care, and landscape design.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#quote"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-emerald-900 bg-white hover:bg-emerald-50 md:py-4 md:text-lg md:px-10 transition-all shadow-lg hover:shadow-xl"
            >
              Get Instant Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-3 border border-emerald-500 text-base font-medium rounded-md text-emerald-50 bg-emerald-800/50 hover:bg-emerald-800 md:py-4 md:text-lg md:px-10 transition-all backdrop-blur-sm"
            >
              View Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};