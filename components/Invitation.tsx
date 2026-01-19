'use client';

import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { events } from '@/data/events';

const Invitation: React.FC = () => {
  return (
    <section id="invitation" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <Calendar className="w-12 h-12 text-amber-500 mx-auto mb-4" />
          <h2 className="text-5xl font-bold text-gray-800 mb-4">Programme des Festivités</h2>
          <div className="h-1 w-24 bg-amber-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, idx) => (
            <div key={idx} className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-amber-200 hover:scale-105 duration-300">
              <div className="text-amber-600 mb-4">{event.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{event.title}</h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-start">
                  <Calendar className="w-5 h-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="font-semibold">{event.date}</span>
                </div>
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                  <span>{event.location}</span>
                </div>
                {event.details && (
                  <p className="text-sm italic pl-8">{event.details}</p>
                )}
                <a 
                  href={event.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-6 py-2 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors"
                >
                  Voir sur la carte
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
