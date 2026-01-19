'use client';

import React from 'react';
import { Gift, Heart } from 'lucide-react';

const Gifts: React.FC = () => {
  return (
    <section id="gifts" className="py-20 bg-gradient-to-br from-amber-50 to-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <Gift className="w-12 h-12 text-amber-500 mx-auto mb-4" />
          <h2 className="text-5xl font-bold text-gray-800 mb-4">Liste des Cadeaux</h2>
          <div className="h-1 w-24 bg-amber-500 mx-auto"></div>
        </div>

        <div className="bg-white p-10 rounded-2xl shadow-2xl border-2 border-amber-200">
          <p className="text-xl text-center text-gray-700 mb-8 italic">
            Votre présence à notre mariage est déjà un immense cadeau pour nous !
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="https://www.amazon.de/wedding/share/WillyetPrincy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-all hover:scale-105 shadow-lg text-lg font-semibold"
            >
              <Gift className="w-6 h-6" />
              Liste Amazon
            </a>
            <a
              href="http://paypal.me/WillyWandji"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-all hover:scale-105 shadow-lg text-lg font-semibold"
            >
              <Heart className="w-6 h-6" />
              PayPal
            </a>
          </div>

          <p className="text-center text-gray-600 mt-8 text-sm">
            NB : Tous les programmes se déroulent au même endroit (Efes Festsaal, Essen)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gifts;
