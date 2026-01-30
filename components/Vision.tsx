'use client';

import React from 'react';

const Vision: React.FC = () => {
  return (
    <section id="vision" className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/hero/Jacaine11.png)' }}
      >
        {/* Overlay pour la lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/75 to-white/85"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <p className="uppercase tracking-[0.35em] text-xs md:text-sm text-amber-600/80 mb-2 sm:mb-3">
            Notre cœur
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-2 sm:mb-3 font-majestic">Notre Vision</h2>
          <div className="timeline-description-container max-h-32 sm:max-h-40 overflow-y-auto max-w-2xl mx-auto">
            <p className="text-gray-600 text-sm md:text-base px-2">
            Que Dieu continue à nous faire grâce. Nous avons eu plusieurs enfants et, malgré les épreuves et les difficultés, nous avançons ensemble. Bâtir notre foyer dans l&apos;Esprit Saint, aider nos proches et notre entourage, et élever nos enfants dans le chemin du Christ.
            </p>
          </div>
          <div className="h-1 w-20 sm:w-24 bg-amber-500 mx-auto mt-4 sm:mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-6 sm:gap-8 lg:gap-10 items-start">
          <div className="bg-white/90 backdrop-blur-sm p-6 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl shadow-2xl border border-amber-100 w-full">
            <div className="timeline-description-container max-h-24 sm:max-h-28 overflow-y-auto mb-4 sm:mb-6">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed italic text-center">
                Aujourd&apos;hui, nous célébrons non seulement notre union, mais aussi le parcours que Dieu a tracé pour nous.
              </p>
            </div>
            
            <div className="space-y-4 sm:space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
              <div className="timeline-description-container max-h-24 sm:max-h-32 overflow-y-auto">
                <p>
                  Notre histoire est marquée par des épreuves et des bénédictions, des moments de joie et de défis. À travers tout cela, le Seigneur a été notre guide et notre force.
                </p>
              </div>
              
              <div className="bg-amber-50 p-4 sm:p-6 rounded-xl border border-amber-100 shadow-sm">
                <div className="timeline-description-container max-h-20 sm:max-h-28 overflow-y-auto">
                  <p className="italic text-gray-800">
                    L&apos;amour est patient, il est plein de bonté ; l&apos;amour n&apos;est point envieux, il ne se vante point, il ne s&apos;enfle point d&apos;orgueil...
                  </p>
                </div>
                <p className="text-right text-xs md:text-sm mt-3 text-amber-700 font-semibold">
                  — 1 Corinthiens 13:4-7
                </p>
              </div>

              <div className="timeline-description-container max-h-32 sm:max-h-40 overflow-y-auto">
                <p>
                  En tant que couple uni, nous nous engageons à bâtir notre foyer sur ces principes divins. Nous aspirons à être des témoins de l&apos;amour de Christ dans notre vie quotidienne, à servir ensemble dans Son Royaume, et à élever nos enfants dans la crainte de Dieu.
                </p>
              </div>

              <div className="bg-amber-50 p-4 sm:p-6 rounded-xl border border-amber-100 shadow-sm">
                <div className="timeline-description-container max-h-20 sm:max-h-28 overflow-y-auto">
                  <p className="italic text-gray-800">
                    Voici, je me tiens à la porte et je frappe. Si quelqu&apos;un entend ma voix et ouvre la porte, j&apos;entrerai chez lui, je souperai avec lui, et lui avec moi.
                  </p>
                </div>
                <p className="text-right text-xs md:text-sm mt-3 text-amber-700 font-semibold">
                  — Apocalypse 3:20
                </p>
              </div>

              <div className="timeline-description-container max-h-16 sm:max-h-20 overflow-y-auto">
                <p className="text-center font-semibold text-gray-800">
                  Pour toute question ou information complémentaire, n'hésitez pas à nous contacter.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-5 w-full">
            <div className="bg-white/95 backdrop-blur-sm p-5 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl border border-amber-100 w-full">
              <p className="text-xs uppercase tracking-[0.25em] text-amber-500 mb-2 text-center sm:text-left">Pilier 1</p>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 text-center sm:text-left">Foi</h3>
              <p className="text-sm text-gray-600 text-center sm:text-left">
                Placer Christ au centre de notre union, de nos décisions et de nos projets, en recherchant Sa volonté dans la prière.
              </p>
            </div>

            <div className="bg-white/95 backdrop-blur-sm p-5 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl border border-amber-100 w-full">
              <p className="text-xs uppercase tracking-[0.25em] text-amber-500 mb-2 text-center sm:text-left">Pilier 2</p>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 text-center sm:text-left">Famille</h3>
              <p className="text-sm text-gray-600 text-center sm:text-left">
                Construire un foyer de paix, d&apos;écoute et de respect, où chaque membre trouve sa place et se sent aimé.
              </p>
            </div>

            <div className="bg-white/95 backdrop-blur-sm p-5 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl border border-amber-100 w-full">
              <p className="text-xs uppercase tracking-[0.25em] text-amber-500 mb-2 text-center sm:text-left">Pilier 3</p>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 text-center sm:text-left">Service</h3>
              <p className="text-sm text-gray-600 text-center sm:text-left">
                Servir Dieu et notre prochain ensemble, avec nos dons et nos talents, comme un témoignage vivant de Sa bonté.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
