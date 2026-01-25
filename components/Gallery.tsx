'use client';

import React, { useState } from 'react';
import { Heart, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

  // Liste des images à utiliser (excluant Jacaine10, Jacaine13, Jacaine7, Jacaine5)
  const images = [
    { src: '/hero/Jacaine1.jpg', alt: 'Souvenir 1' },
    { src: '/hero/Jacaine2.jpg', alt: 'Souvenir 2' },
    { src: '/hero/Jacaine3.jpg', alt: 'Souvenir 3' },
    { src: '/hero/Jacaine4.jpg', alt: 'Souvenir 4' },
    { src: '/hero/Jacaine6.jpg', alt: 'Souvenir 6' },
    { src: '/hero/Jacaine8.jpg', alt: 'Souvenir 8' },
    { src: '/hero/Jacaine9.jpg', alt: 'Souvenir 9' },
    { src: '/hero/Jacaine11.png', alt: 'Souvenir 11' },
    { src: '/hero/Jacaine12.png', alt: 'Souvenir 12' },
    { src: '/hero/Jacaine14.png', alt: 'Souvenir 14' },
    { src: '/hero/Jacaine15.png', alt: 'Souvenir 15' },
    { src: '/hero/Jacaine16.png', alt: 'Souvenir 16' },
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
    }
  };

  const handleImageError = (idx: number) => {
    setImageErrors(prev => new Set(prev).add(idx));
  };

  return (
    <>
      <section id="gallery" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-amber-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-amber-500 mx-auto mb-3 sm:mb-4 animate-heartbeat" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3 sm:mb-4 font-majestic">
              Nos Souvenirs
            </h2>
            <div className="h-1 w-20 sm:w-24 bg-amber-500 mx-auto mb-3 sm:mb-4"></div>
            <p className="text-sm sm:text-base text-gray-600 italic">Les moments précieux de notre histoire</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 justify-items-center">
            {images.map((image, idx) => (
              <div
                key={idx}
                onClick={() => !imageErrors.has(idx) && openLightbox(idx)}
                className="group aspect-square w-full max-w-full rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:scale-105 active:scale-95 duration-300 cursor-pointer relative animate-fade-up"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                {imageErrors.has(idx) ? (
                  <div className="relative w-full h-full bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                    <Heart className="w-12 h-12 text-amber-300 opacity-50" />
                  </div>
                ) : (
                  <>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={() => handleImageError(idx)}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center pointer-events-none">
                      <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && !imageErrors.has(selectedImage) && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-up"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white hover:text-amber-400 transition-colors z-10"
            aria-label="Fermer"
          >
            <X className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('prev');
            }}
            className="absolute left-4 sm:left-6 text-white hover:text-amber-400 transition-colors z-10"
            aria-label="Image précédente"
          >
            <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('next');
            }}
            className="absolute right-4 sm:right-6 text-white hover:text-amber-400 transition-colors z-10"
            aria-label="Image suivante"
          >
            <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>

          <div
            className="relative max-w-7xl max-h-[90vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm sm:text-base">
            {selectedImage + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
