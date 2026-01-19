'use client';

import React from 'react';
import { Heart, ChevronDown } from 'lucide-react';

interface HeroProps {
  onScrollDown: () => void;
}

const Hero: React.FC<HeroProps> = ({ onScrollDown }) => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-white to-amber-100">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmJmMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzAtNC40MTggMy41ODItOCA4LThzOCAzLjU4MiA4IDgtMy41ODIgOC04IDgtOC0zLjU4Mi04LTh6TTAgMTRjMC00LjQxOCAzLjU4Mi04IDgtOHM4IDMuNTgyIDggOC0zLjU4MiA4LTggOC04LTMuNTgyLTgtOHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      
      <div className="text-center z-10 px-4">
        <div className="mb-8">
          <Heart className="w-16 h-16 text-amber-500 mx-auto mb-4 animate-pulse" />
        </div>
        <h1 className="text-6xl md:text-8xl font-bold mb-4">
          <span className="text-gray-800">Willy</span>
          <span className="text-amber-600"> & </span>
          <span className="text-gray-800">Princilia</span>
        </h1>
        <div className="h-1 w-32 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6"></div>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 italic">Nous célébrons notre union</p>
        <p className="text-lg text-amber-600 font-semibold">29 Mars 2025</p>
        <button 
          onClick={onScrollDown}
          className="mt-8 inline-flex items-center text-amber-600 hover:text-amber-700 transition-colors animate-bounce"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
