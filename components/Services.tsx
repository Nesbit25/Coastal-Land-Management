import React from 'react';
import { Trees, Scissors, Shovel, Sprout, Droplets, Sun } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: 'tree-removal',
    title: 'Tree Removal & Care',
    description: 'Expert removal of hazardous Live Oaks and Pines, stump grinding, and palm pruning.',
    iconName: 'Trees',
  },
  {
    id: 'lawn-care',
    title: 'Lawn Maintenance',
    description: 'Weekly mowing and edging for St. Augustine, Zoysia, and Bermuda grasses.',
    iconName: 'Scissors',
  },
  {
    id: 'landscaping',
    title: 'Landscape Design',
    description: 'Custom hardscaping and design that complements our coastal environment.',
    iconName: 'Shovel',
  },
  {
    id: 'planting',
    title: 'Native Planting',
    description: 'Curated selection of salt-tolerant and heat-resistant plants for the Southern coast.',
    iconName: 'Sprout',
  },
  {
    id: 'irrigation',
    title: 'Irrigation Systems',
    description: 'Water-efficient systems designed for sandy soils to keep your landscape thriving.',
    iconName: 'Droplets',
  },
  {
    id: 'cleanup',
    title: 'Storm Cleanup',
    description: 'Rapid response for hurricane and tropical storm debris removal and property restoration.',
    iconName: 'Sun',
  },
];

const IconMap: Record<string, React.FC<any>> = {
  Trees, Scissors, Shovel, Sprout, Droplets, Sun
};

export const Services: React.FC = () => {
  return (
    <div id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-emerald-600 font-semibold tracking-wide uppercase">Our Expertise</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive Coastal Land Management
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            From Savannah to Jacksonville, we understand the unique needs of coastal landscapes.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = IconMap[service.iconName];
              return (
                <div key={service.id} className="pt-6">
                  <div className="flow-root bg-emerald-50 rounded-lg px-6 pb-8 h-full hover:shadow-lg transition-shadow duration-300">
                    <div className="-mt-6">
                      <div className="inline-flex items-center justify-center p-3 bg-emerald-600 rounded-md shadow-lg">
                        <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{service.title}</h3>
                      <p className="mt-5 text-base text-gray-500">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};