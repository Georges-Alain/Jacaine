'use client';

import React from 'react';
import { Heart } from 'lucide-react';
import { timeline } from '@/data/timeline';

const Story: React.FC = () => {
  return (
    <section id="story" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <Heart className="w-12 h-12 text-amber-500 mx-auto mb-4" />
          <h2 className="text-5xl font-bold text-gray-800 mb-4">Notre Histoire</h2>
          <div className="h-1 w-24 bg-amber-500 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-amber-300 via-amber-500 to-amber-300 hidden md:block"></div>

          {timeline.map((item, idx) => (
            <div key={idx} className={`mb-16 flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className={`w-full md:w-5/12 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow border border-amber-200">
                  <span className="text-3xl font-bold text-amber-600">{item.year}</span>
                  <h3 className="text-2xl font-bold text-gray-800 mt-2 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center my-4 md:my-0 shadow-lg z-10">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div className="w-full md:w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Story;
