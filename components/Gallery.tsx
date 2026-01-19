'use client';

import React from 'react';
import { Heart } from 'lucide-react';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-amber-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">Nos Souvenirs</h2>
          <div className="h-1 w-24 bg-amber-500 mx-auto mb-4"></div>
          <p className="text-gray-600 italic">Les moments précieux de notre histoire</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[...Array(12)].map((_, idx) => (
            <div key={idx} className="aspect-square bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:scale-105 duration-300 flex items-center justify-center">
              <Heart className="w-12 h-12 text-white opacity-50" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
