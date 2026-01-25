import React from 'react';
import { Calendar, Heart, Gift, Clock } from 'lucide-react';

export interface Event {
  icon: React.ReactNode;
  title: string;
  date: string;
  time: string;
  location: string;
  details?: string;
  mapLink: string;
}

export const events: Event[] = [
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "État Civil",
    date: "18 Avril 2026",
    time: "11h30",
    location: "Mairie centre de Tours 1-3 rue des minimes 37000 Tours",
    mapLink: "https://maps.google.com/?q=1-3+rue+des+minimes+37000+Tours"
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Bénédiction Nuptiale",
    date: "18 Avril 2026",
    time: "13h40",
    location: "Domaine de Bissé 314 Bissé, 37340 Savigné-sur-Lathan",
    mapLink: "https://maps.google.com/?q=314+Bisse,+37340+Savigné-sur-Lathan"
  },
  {
    icon: <Gift className="w-8 h-8" />,
    title: "Vin d'Honneur",
    date: "18 Avril 2026",
    time: "14h25",
    location: "Domaine de Bissé 314 Bissé, 37340 Savigné-sur-Lathan",
    mapLink: "https://maps.google.com/?q=Domaine+de+Bisse,+37340+Savigné-sur-Lathan"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Dîner de Célébration",
    date: "18 Avril 2026",
    time: "18h30",
    location: "Domaine de Bissé 314 Bissé, 37340 Savigné-sur-Lathan",
    mapLink: "https://maps.google.com/?q=Domaine+de+Bisse,+37340+Savigné-sur-Lathan"
  }
];
