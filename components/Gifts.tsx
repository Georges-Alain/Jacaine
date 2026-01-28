'use client';

import React from 'react';
import { Clock, Phone, Baby } from 'lucide-react';

const Gifts: React.FC = () => {
  return (
    <section id="gifts" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-amber-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 w-full">
        <div className="text-center mb-8 sm:mb-12">
          <Clock className="w-10 h-10 sm:w-12 sm:h-12 text-amber-500 mx-auto mb-3 sm:mb-4" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3 sm:mb-4 font-majestic">Informations Pratiques</h2>
          <div className="h-1 w-20 sm:w-24 bg-amber-500 mx-auto"></div>
        </div>

        <div className="bg-white p-5 sm:p-6 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl shadow-2xl border-2 border-amber-200 w-full">
          <div className="space-y-6">
            {/* Message de remerciement */}
            <div className="text-center">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic mb-4 sm:mb-6">
                Chers invités,
              </p>
              <div className="timeline-description-container max-h-32 sm:max-h-40 overflow-y-auto">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Nous vous remercions de votre présence à notre événement. Pour garantir la réussite de cette journée, nous vous demandons de bien vouloir respecter les heures indiquées, spécialement l&apos;heure de la soirée qui débute à <span className="font-bold text-amber-600">18h</span> car nous avons un traiteur qui fera du service au plat et partira à <span className="font-bold text-amber-600">21h</span> et je tiens à repréciser que la fin de la soirée est à <span className="font-bold text-amber-600">1h</span>.
                </p>
              </div>
            </div>

            {/* Message en rouge sur la ponctualité */}
            <div className="bg-red-50 border-l-4 border-red-500 p-4 sm:p-6 rounded-lg">
              <div className="timeline-description-container max-h-20 sm:max-h-24 overflow-y-auto">
                <p className="text-red-700 font-semibold text-center text-base md:text-lg leading-relaxed">
                  Votre ponctualité est essentielle pour nous permettre de commencer l&apos;événement à l&apos;heure prévue.
                </p>
              </div>
              <div className="timeline-description-container max-h-16 sm:max-h-20 overflow-y-auto mt-3">
                <p className="text-red-600 text-center text-sm md:text-base">
                  Merci pour votre compréhension et votre coopération
                </p>
              </div>
            </div>

            {/* Note sur le service de garde */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-4 sm:p-6 rounded-xl border-2 border-amber-200 mt-8">
              <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                <Baby className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600 flex-shrink-0 mt-1 mx-auto sm:mx-0" />
                <div className="flex-1 w-full">
                  <p className="text-sm md:text-base font-semibold text-gray-800 mb-2 text-center sm:text-left">
                    <span className="block sm:inline">NB :</span> Service de garde d&apos;enfant disponible à la soirée
                  </p>
                  <div className="space-y-2 text-gray-700 text-sm sm:text-base">
                    <p className="flex flex-col sm:flex-row items-center sm:items-start gap-2 text-center sm:text-left">
                      <Phone className="w-5 h-5 text-amber-600 flex-shrink-0" />
                      <span className="break-words">Bien vouloir contacter <strong>MAREISE</strong> au{' '}
                        <a 
                          href="tel:+33611935464" 
                          className="text-amber-600 hover:text-amber-700 font-semibold underline whitespace-nowrap"
                        >
                          06 11 93 54 64
                        </a>
                      </span>
                    </p>
                    <p className="text-amber-700 font-bold text-base sm:text-lg mt-3 text-center sm:text-left">
                      10€/enfant pour toute la soirée
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gifts;
