'use client';

import React from 'react';

const Vision: React.FC = () => {
  return (
    <section id="vision" className="py-20 bg-gradient-to-b from-amber-50 via-white to-amber-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="uppercase tracking-[0.35em] text-xs md:text-sm text-amber-600/80 mb-3">
            Notre cœur
          </p>
          <h2 className="text-5xl font-bold text-gray-800 mb-3 font-majestic">Notre Vision</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Une alliance enracinée dans la foi, portée par la grâce de Dieu, et tournée vers le service et la transmission.
          </p>
          <div className="h-1 w-24 bg-amber-500 mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-10 items-start">
          <div className="bg-white/90 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-2xl border border-amber-100">
            <p className="text-lg text-gray-700 leading-relaxed mb-6 italic text-center">
              Aujourd&apos;hui, nous célébrons non seulement notre union, mais aussi le parcours que Dieu a tracé pour nous.
            </p>
            
            <div className="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
              <p>
                Notre histoire est marquée par des épreuves et des bénédictions, des moments de joie et de défis. À travers tout cela, le Seigneur a été notre guide et notre force.
              </p>
              
              <div className="bg-amber-50 p-6 rounded-xl border border-amber-100 shadow-sm">
                <p className="italic text-gray-800">
                  L&apos;amour est patient, il est plein de bonté ; l&apos;amour n&apos;est point envieux, il ne se vante point, il ne s&apos;enfle point d&apos;orgueil...
                </p>
                <p className="text-right text-xs md:text-sm mt-3 text-amber-700 font-semibold">
                  — 1 Corinthiens 13:4-7
                </p>
              </div>

              <p>
                En tant que couple uni, nous nous engageons à bâtir notre foyer sur ces principes divins. Nous aspirons à être des témoins de l&apos;amour de Christ dans notre vie quotidienne, à servir ensemble dans Son Royaume, et à élever nos enfants dans la crainte de Dieu.
              </p>

              <div className="bg-amber-50 p-6 rounded-xl border border-amber-100 shadow-sm">
                <p className="italic text-gray-800">
                  Voici, je me tiens à la porte et je frappe. Si quelqu&apos;un entend ma voix et ouvre la porte, j&apos;entrerai chez lui, je souperai avec lui, et lui avec moi.
                </p>
                <p className="text-right text-xs md:text-sm mt-3 text-amber-700 font-semibold">
                  — Apocalypse 3:20
                </p>
              </div>

              <p className="text-center font-semibold text-gray-800">
                Que le Seigneur bénisse chacun de vous, et que Sa paix repose sur nos maisons et nos générations.
              </p>
            </div>
          </div>

          <div className="space-y-5">
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-amber-100">
              <p className="text-xs uppercase tracking-[0.25em] text-amber-500 mb-2">Pilier 1</p>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Foi</h3>
              <p className="text-sm text-gray-600">
                Placer Christ au centre de notre union, de nos décisions et de nos projets, en recherchant Sa volonté dans la prière.
              </p>
            </div>

            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-amber-100">
              <p className="text-xs uppercase tracking-[0.25em] text-amber-500 mb-2">Pilier 2</p>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Famille</h3>
              <p className="text-sm text-gray-600">
                Construire un foyer de paix, d&apos;écoute et de respect, où chaque membre trouve sa place et se sait aimé.
              </p>
            </div>

            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-amber-100">
              <p className="text-xs uppercase tracking-[0.25em] text-amber-500 mb-2">Pilier 3</p>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Service</h3>
              <p className="text-sm text-gray-600">
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
