'use client';

import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="mb-6">
          <Heart className="w-10 h-10 text-amber-500 mx-auto mb-4" />
          <p className="text-2xl font-bold mb-2">Willy & Princilia</p>
          <p className="text-amber-400">29 Mars 2025</p>
        </div>
        <div className="h-px w-32 bg-amber-500 mx-auto mb-6"></div>
        <p className="text-gray-400 text-sm">
          Made with <Heart className="inline w-4 h-4 text-red-500" /> for our special day
        </p>
      </div>
    </footer>
  );
};

export default Footer;
