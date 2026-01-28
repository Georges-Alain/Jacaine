'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { Heart, ChevronDown } from 'lucide-react';

interface HeroProps {
  onScrollDown: () => void;
}

const Hero: React.FC<HeroProps> = ({ onScrollDown }) => {
  const slides = useMemo(() => {
    // Tu peux remplacer ces 3 fichiers par tes vraies photos, en gardant les mêmes chemins
    // (ou change les chemins vers /public/images/...).
    return ['/hero/Jacaine12.png', '/hero/Jacaine14.png', '/hero/Jacaine17.jpg'];
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeName, setActiveName] = useState<'first' | 'second'>('first');

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => window.clearInterval(id);
  }, [slides.length]);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveName((prev) => (prev === 'first' ? 'second' : 'first'));
    }, 3800);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      id="home"
      className="relative h-[100svh] overflow-hidden flex items-center justify-center bg-gray-950"
    >
      {/* Background slideshow */}
      <div className="absolute inset-0">
        {slides.map((src, idx) => (
          <div
            key={src}
            className={[
              'absolute inset-0 bg-center bg-cover transition-opacity duration-1000',
              idx === activeIndex ? 'opacity-100' : 'opacity-0',
            ].join(' ')}
            style={{ backgroundImage: `url(${src})` }}
            aria-hidden="true"
          />
        ))}

        {/* Overlay for readability */}
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(1200px 600px at 50% 35%, rgba(255,255,255,0.14) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.80) 100%)',
          }}
        />

        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmJmMDAiIGZpbGwtb3BhY2l0eT0iMC4wNyI+PHBhdGggZD0iTTM2IDE0YzAtNC40MTggMy41ODItOCA4LThzOCAzLjU4MiA4IDgtMy41ODIgOC04IDgtOC0zLjU4Mi04LTh6TTAgMTRjMC00LjQxOCAzLjU4Mi04IDgtOHM4IDMuNTgyIDggOC0zLjU4MiA4LTggOC04LTMuNTgyLTgtOHoiLz48L2c+PC9nPjwvc3ZnPg==')]" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 text-center max-w-5xl mx-auto">
        <div className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-5 py-2 text-white/80 backdrop-blur-sm shadow-[0_20px_80px_rgba(0,0,0,0.35)] animate-fade-up">
          <Heart className="w-5 h-5 text-amber-400 animate-heartbeat" />
          <span className="tracking-wide text-sm md:text-base">Nous célébrons notre union</span>
        </div>

        <h1 className="mt-7 md:mt-8 font-bold text-white drop-shadow-[0_10px_40px_rgba(0,0,0,0.55)]">
          <div className="space-y-3 md:space-y-4 flex flex-col items-center">
            {/* Jacques : centré sur mobile */}
            <div className="flex justify-center w-full">
              <span
                className={[
                  'block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-majestic name-glow text-center',
                  'transition-all duration-700 ease-out will-change-transform will-change-opacity',
                  activeName === 'first'
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 -translate-y-4 pointer-events-none',
                ].join(' ')}
              >
                Jacques
              </span>
            </div>

            {/* Symbole & centré */}
            <div className="flex justify-center w-full">
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-majestic bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 text-transparent bg-clip-text tracking-[0.35em] text-center">
                &amp;
              </span>
            </div>

            {/* Germaine : centré sur mobile */}
            <div className="flex justify-center w-full">
              <span
                className={[
                  'block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-majestic name-glow text-center',
                  'transition-all duration-700 ease-out will-change-transform will-change-opacity',
                  activeName === 'second'
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4 pointer-events-none',
                ].join(' ')}
              >
                Germaine
              </span>
            </div>
          </div>
        </h1>

        <div className="mt-7 md:mt-9 h-[2px] w-40 md:w-56 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto animate-fade-up-delayed-3" />

        <p className="mt-6 text-white/85 text-base md:text-lg italic animate-fade-up-delayed-4">
          18 Avril 2026
        </p>

        <button
          onClick={onScrollDown}
          className="mt-10 inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-4 py-4 text-amber-200 hover:text-amber-100 hover:bg-white/10 transition-colors animate-float"
          aria-label="Aller à la section suivante"
        >
          <ChevronDown className="w-7 h-7" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
