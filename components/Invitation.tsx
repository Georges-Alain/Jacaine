'use client';

import React from 'react';
import { Calendar, MapPin, Clock, ExternalLink } from 'lucide-react';
import { events } from '@/data/events';

const Invitation: React.FC = () => {
  return (
    <section id="invitation" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <Calendar className="w-10 h-10 sm:w-12 sm:h-12 text-amber-500 mx-auto mb-3 sm:mb-4 animate-heartbeat" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3 sm:mb-4 font-majestic">
            Programme des Festivités
          </h2>
          <div className="h-1 w-20 sm:w-24 bg-amber-500 mx-auto"></div>
            <p className="text-sm sm:text-base text-gray-600 font-bold italic">Dress code : Blanc Or </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 justify-items-center">
          {events.map((event, idx) => (
            <div 
              key={idx} 
              className="bg-gradient-to-br from-amber-50 to-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-amber-200 hover:scale-[1.02] active:scale-[0.98] duration-300 animate-fade-up w-full max-w-md md:max-w-none"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="text-amber-600 mb-3 sm:mb-4">{event.icon}</div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 break-words">
                {event.title}
              </h3>
              <div className="space-y-2.5 sm:space-y-3 text-gray-600 text-sm sm:text-base">
                <div className="flex items-start gap-2 sm:gap-3">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 mt-0.5 sm:mt-1 flex-shrink-0" />
                  <span className="font-semibold break-words">{event.date}</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 mt-0.5 sm:mt-1 flex-shrink-0" />
                  <span className="break-words">{event.time}</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 mt-0.5 sm:mt-1 flex-shrink-0" />
                  <div className="timeline-description-container max-h-20 sm:max-h-24 overflow-y-auto flex-1">
                    <span className="break-words leading-relaxed">{event.location}</span>
                  </div>
                </div>
                {event.details && (
                  <div className="timeline-description-container max-h-16 sm:max-h-20 overflow-y-auto pl-6 sm:pl-8">
                    <p className="text-xs sm:text-sm italic text-gray-500 break-words leading-relaxed">
                      {event.details}
                    </p>
                  </div>
                )}
                <a 
                  href={event.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-3 sm:mt-4 px-4 sm:px-6 py-2 sm:py-2.5 bg-amber-500 text-white rounded-full hover:bg-amber-600 active:scale-95 transition-all text-xs sm:text-sm sm:text-base font-semibold shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  <span>Voir sur la carte</span>
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Invitation;
