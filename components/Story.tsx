'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Heart } from 'lucide-react';
import { timeline } from '@/data/timeline';

const Story: React.FC = () => {
  const [activeProfile, setActiveProfile] = useState<'groom' | 'bride'>('groom');

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProfile((prev) => (prev === 'groom' ? 'bride' : 'groom'));
    }, 4000); // Change toutes les 4 secondes

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="story" className="py-12 sm:py-16 md:py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Couple Introduction - Profils qui apparaissent successivement */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="flex justify-center items-center min-h-[400px] sm:min-h-[500px] md:min-h-[600px] relative w-full">
            {/* Groom - apparaît en premier */}
            <div 
              className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ${
                activeProfile === 'groom' 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-8 scale-95 pointer-events-none'
              }`}
            >
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto mb-6 sm:mb-8 rounded-full overflow-hidden shadow-2xl animate-float border-4 border-amber-400 bg-gradient-to-br from-amber-100 to-amber-200">
                <Image 
                  src="/hero/Jacaine13.png" 
                  alt="Jacques - Le Marié" 
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, 256px"
                />
              </div>
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-2 sm:mb-3 font-majestic text-center">Jacques</h3>
              <p className="text-amber-600 text-lg sm:text-xl md:text-2xl italic mb-4 sm:mb-6 text-center">✨ Le Marié ✨</p>
              <div className="max-w-md mx-auto px-4 sm:px-6 w-full">
                <p className="text-gray-600 leading-relaxed text-center text-sm sm:text-base md:text-lg">
                Homme Croyant toujours au service de la société grand blagueur qui aime rire.✨
                </p>
              </div>
            </div>

            {/* Bride - apparaît ensuite */}
            <div 
              className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ${
                activeProfile === 'bride' 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-8 scale-95 pointer-events-none'
              }`}
            >
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto mb-6 sm:mb-8 rounded-full overflow-hidden shadow-2xl animate-float-delayed border-4 border-amber-400 bg-gradient-to-br from-amber-100 to-amber-200">
                <Image 
                  src="/hero/Jacaine10.png" 
                  alt="Germaine - La Mariée" 
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, 256px"
                />
              </div>
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-2 sm:mb-3 font-majestic text-center">Germaine</h3>
              <p className="text-amber-600 text-lg sm:text-xl md:text-2xl italic mb-4 sm:mb-6 text-center">✨ La Mariée ✨</p>
              <div className="max-w-md mx-auto px-4 sm:px-6 w-full">
                <p className="text-gray-600 leading-relaxed text-center text-sm sm:text-base md:text-lg">
                Chrétienne engagée et très sociale qui œuvre pour le bien de son entourage et de sa famille 💫
                </p>
              </div>
            </div>
          </div>

          {/* Decorative separator */}
          <div className="flex items-center justify-center gap-4 mb-12 opacity-0 animate-fadeIn" style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-amber-400"></div>
            <Heart className="w-8 h-8 text-amber-500 animate-heartbeat" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-amber-400"></div>
          </div>
        </div>

        {/* Main Title */}
        <div className="text-center mb-12 sm:mb-16 opacity-0 animate-fadeInUp" style={{animationDelay: '1s', animationFillMode: 'forwards'}}>
          <div className="inline-block relative">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-3 sm:mb-4 font-majestic">Notre Histoire</h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
              <div className="w-3 h-3 bg-amber-400 rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-amber-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
              <div className="w-3 h-3 bg-amber-600 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
            </div>
          </div>
          <p className="text-amber-600 text-lg md:text-xl mt-6 italic">Un voyage guidé par l&apos;amour divin ✨</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-amber-300 via-amber-500 to-amber-300 hidden md:block"></div>

          {/* Timeline Events */}
          {timeline.map((item, idx) => (
            <div 
              key={idx} 
              className={`mb-12 sm:mb-16 flex flex-col md:flex-row items-center justify-center ${
                idx % 2 === 0 ? 'md:flex-row-reverse' : ''
              } opacity-0 animate-fadeInUp`} 
              style={{
                animationDelay: `${1.2 + idx * 0.2}s`, 
                animationFillMode: 'forwards'
              }}
            >
              <div className={`w-full max-w-md md:max-w-none md:w-5/12 text-center md:text-left ${idx % 2 === 0 ? 'md:text-right' : ''}`}>
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                  <div className="relative bg-gradient-to-br from-amber-50 to-white p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 border border-amber-200 transform hover:scale-105 max-h-64 sm:max-h-80 overflow-hidden">
                    <span className="text-2xl sm:text-3xl font-bold text-amber-600 block">{item.year}</span>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mt-2 mb-3 sm:mb-4 font-majestic">{item.title}</h3>
                    <div className="timeline-description-container overflow-y-auto max-h-32 sm:max-h-40">
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed pr-2">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center my-4 md:my-0 shadow-lg z-10 animate-heartbeat">
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
