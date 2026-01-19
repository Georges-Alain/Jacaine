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
    date: "21 Mars 2025",
    time: "11h30",
    location: "Möllendorffstraße 6, 10367 Berlin",
    mapLink: "https://maps.google.com/?q=Möllendorffstraße+6,+10367+Berlin"
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Bénédiction Nuptiale",
    date: "29 Mars 2025",
    time: "14h00",
    location: "Riedingerstraße 10, 45141 Essen",
    details: "Station Essen Hbf, ligne U17 direction Karlsplatz",
    mapLink: "https://maps.google.com/?q=Riedingerstraße+10,+45141+Essen"
  },
  {
    icon: <Gift className="w-8 h-8" />,
    title: "Vin d'Honneur",
    date: "29 Mars 2025",
    time: "16h15",
    location: "Riedingerstraße 10, 45141 Essen",
    mapLink: "https://maps.google.com/?q=Riedingerstraße+10,+45141+Essen"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Dîner de Célébration",
    date: "29 Mars 2025",
    time: "18h00",
    location: "Efes Festsaal, Riedingerstraße 10, 45141 Essen",
    mapLink: "https://maps.google.com/?q=Efes+Festsaal+Essen"
  }
];
