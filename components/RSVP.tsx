'use client';

import React from 'react';
import { Heart } from 'lucide-react';

const RSVP: React.FC = () => {
  return (
    <section id="rsvp" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <Heart className="w-12 h-12 text-amber-500 mx-auto mb-4" />
          <h2 className="text-5xl font-bold text-gray-800 mb-4">Serez-vous des nôtres ?</h2>
          <div className="h-1 w-24 bg-amber-500 mx-auto"></div>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-white p-10 rounded-2xl shadow-2xl border-2 border-amber-200">
          <div className="text-center space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Chers invités, nous avons le plaisir de vous informer que les inscriptions sont désormais clôturées. Nous sommes ravis de compter sur votre présence le <span className="font-bold text-amber-600">29 mars 2025</span> et avons hâte de partager ce moment privilégié avec vous.
            </p>
            
            <div className="bg-amber-100 p-6 rounded-lg border-l-4 border-amber-500">
              <p className="text-gray-700">
              <strong>Important :</strong> Un QR Code d&apos;accès à la soirée sera transmis le 20 mars 2025 aux invités confirmés.
              </p>
            </div>

            <p className="text-gray-600">
            Pour toute question ou information complémentaire, n&apos;hésitez pas à nous contacter.
            </p>

            <div className="pt-6">
              <p className="text-2xl font-bold text-amber-600">Willcilia ❤️</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RSVP;
