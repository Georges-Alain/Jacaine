'use client';

import React from 'react';

const Vision: React.FC = () => {
  return (
    <section id="vision" className="py-20 bg-gradient-to-br from-amber-50 to-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">Notre Vision</h2>
          <div className="h-1 w-24 bg-amber-500 mx-auto"></div>
        </div>

        <div className="bg-white p-10 rounded-2xl shadow-2xl border-2 border-amber-200">
          <p className="text-lg text-gray-700 leading-relaxed mb-6 italic text-center">
            "Aujourd'hui, nous célébrons non seulement notre union, mais aussi le parcours que Dieu a tracé pour nous."
          </p>
          
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              Notre histoire est marquée par des épreuves et des bénédictions, des moments de joie et de défis. À travers tout cela, le Seigneur a été notre guide et notre force.
            </p>
            
            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
              <p className="italic">
                "L'amour est patient, il est plein de bonté ; l'amour n'est point envieux, il ne se vante point, il ne s'enfle point d'orgueil..."
              </p>
              <p className="text-right text-sm mt-2 text-amber-700">— 1 Corinthiens 13:4-7</p>
            </div>

            <p>
              En tant que couple uni, nous nous engageons à bâtir notre foyer sur ces principes divins. Nous aspirons à être des témoins de l'amour de Christ dans notre vie quotidienne, à servir ensemble dans Son Royaume, et à élever nos enfants dans la crainte de Dieu.
            </p>

            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
              <p className="italic">
                "Voici, je me tiens à la porte et je frappe. Si quelqu'un entend ma voix et ouvre la porte, j'entrerai chez lui, je souperai avec lui, et lui avec moi."
              </p>
              <p className="text-right text-sm mt-2 text-amber-700">— Apocalypse 3:20</p>
            </div>

            <p className="text-center font-semibold text-gray-800">
              Que le Seigneur bénisse chacun de vous, et que Sa paix soit sur nous tous.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
