import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    location: 'Pooler, GA',
    content: "The team at Coastal Land Management transformed our backyard jungle into a paradise. The AI estimate was surprisingly accurate too!",
    stars: 5,
    image: 'https://picsum.photos/seed/sarah/100/100'
  },
  {
    id: 2,
    name: 'Mike Ross',
    location: 'Jacksonville, FL',
    content: "Professional, punctual, and clean. Removed a dangerous pine tree without a scratch to the fence. Highly recommended.",
    stars: 5,
    image: 'https://picsum.photos/seed/mike/100/100'
  },
  {
    id: 3,
    name: 'Emily Chen',
    location: 'Richmond Hill, GA',
    content: "Their regular lawn maintenance has saved me so much time. My St. Augustine grass has never looked greener.",
    stars: 4,
    image: 'https://picsum.photos/seed/emily/100/100'
  }
];

export const Testimonials: React.FC = () => {
  return (
    <div id="testimonials" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl mb-16">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {reviews.map((review) => (
            <div key={review.id} className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < review.stars ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{review.content}"</p>
              <div className="flex items-center">
                <img className="h-10 w-10 rounded-full object-cover" src={review.image} alt={review.name} />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">{review.name}</p>
                  <p className="text-xs text-gray-500">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};