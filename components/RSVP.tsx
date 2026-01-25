'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Heart, CheckCircle, XCircle, ArrowLeft, RotateCcw } from 'lucide-react';
import { findGuest, getGuestSuggestions } from '@/data/guests';

const RSVP: React.FC = () => {
  const [hasConfirmed, setHasConfirmed] = useState<boolean | null>(null);
  const [guestName, setGuestName] = useState('');
  const [suggestions, setSuggestions] = useState<ReturnType<typeof getGuestSuggestions>>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [foundGuest, setFoundGuest] = useState<ReturnType<typeof findGuest> | null>(null);
  const [hasSearched, setHasSearched] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  // Gérer les suggestions d'autocomplétion
  useEffect(() => {
    if (guestName.trim() && hasConfirmed === true) {
      const sug = getGuestSuggestions(guestName);
      setSuggestions(sug);
      setShowSuggestions(sug.length > 0);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [guestName, hasConfirmed]);

  // Fermer les suggestions en cliquant à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSuggestionClick = (name: string) => {
    setGuestName(name);
    setShowSuggestions(false);
    setHasSearched(false);
    setFoundGuest(null);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (guestName.trim()) {
      const guest = findGuest(guestName.trim());
      setFoundGuest(guest || null);
      setHasSearched(true);
      setShowSuggestions(false);
    }
  };

  const handleConfirmation = (confirmed: boolean) => {
    setHasConfirmed(confirmed);
    if (!confirmed) {
      setGuestName('');
      setHasSearched(false);
      setFoundGuest(null);
    }
  };

  const handleReset = () => {
    setHasConfirmed(null);
    setGuestName('');
    setHasSearched(false);
    setFoundGuest(null);
    setSuggestions([]);
    setShowSuggestions(false);
  };

  return (
    <section id="rsvp" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-amber-500 mx-auto mb-3 sm:mb-4 animate-heartbeat" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3 sm:mb-4 font-majestic">
            Serez-vous des nôtres ?
          </h2>
          <div className="h-1 w-20 sm:w-24 bg-amber-500 mx-auto"></div>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-white p-5 sm:p-6 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl shadow-2xl border-2 border-amber-200">
          <div className="space-y-4 sm:space-y-6">
            {/* Message d'invitation */}
            <div className="text-center space-y-3 sm:space-y-4">
              <div className="mobile-text-container">
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed px-2">
                  Afin de mieux préparer notre événement et de garantir sa réussite, nous serions heureux de vous compter parmi nos invités.
                </p>
              </div>
              <div className="mobile-text-container">
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed font-semibold px-2">
                  Merci de bien vouloir nous confirmer votre présence
                </p>
              </div>
            </div>

            {/* Question de confirmation */}
            {hasConfirmed === null && (
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
                <button
                  onClick={() => handleConfirmation(true)}
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-green-500 text-white rounded-lg hover:bg-green-600 active:scale-95 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 text-base sm:text-lg animate-fade-up"
                >
                  Oui
                </button>
                <button
                  onClick={() => handleConfirmation(false)}
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-red-500 text-white rounded-lg hover:bg-red-600 active:scale-95 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 text-base sm:text-lg animate-fade-up-delayed"
                >
                  Non
                </button>
              </div>
            )}

            {/* Message si réponse est Non */}
            {hasConfirmed === false && (
              <div className="bg-gradient-to-br from-red-50 to-pink-50 p-4 sm:p-6 rounded-xl border-2 border-red-300 shadow-lg mt-4 sm:mt-6 animate-fade-up">
                <div className="flex items-start gap-3 sm:gap-4">
                  <XCircle className="w-6 h-6 sm:w-8 sm:h-8 text-red-600 flex-shrink-0 mt-1" />
                  <div className="flex-1 min-w-0">
                    <p className="text-base sm:text-lg font-semibold text-red-800 mb-2 break-words">
                      Nous sommes désolés de ne pas vous compter parmi nous
                    </p>
                    <div className="mobile-text-container">
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words">
                        Votre réponse a été enregistrée. Nous respectons votre décision et vous remercions de nous avoir informés.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <button
                    onClick={() => setHasConfirmed(null)}
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 active:scale-95 transition-all text-xs sm:text-sm font-semibold shadow-md w-full sm:w-auto"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Revenir en arrière</span>
                  </button>
                </div>
              </div>
            )}

            {/* Formulaire de recherche (seulement si Oui) */}
            {hasConfirmed === true && (
              <form onSubmit={handleSearch} className="space-y-3 sm:space-y-4 animate-fade-up">
                <div className="relative">
                  <label htmlFor="guestName" className="block text-gray-700 font-medium mb-2 text-center text-sm sm:text-base">
                    Veuillez entrer votre nom :
                  </label>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 relative">
                    <div className="flex-1 relative">
                      <input
                        ref={inputRef}
                        type="text"
                        id="guestName"
                        value={guestName}
                        onChange={(e) => {
                          setGuestName(e.target.value);
                          setHasSearched(false);
                          setFoundGuest(null);
                        }}
                        onFocus={() => {
                          if (suggestions.length > 0) {
                            setShowSuggestions(true);
                          }
                        }}
                        placeholder="Votre nom complet"
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border-2 border-amber-200 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200 transition-all text-gray-800 text-sm sm:text-base"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 active:scale-95 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base whitespace-nowrap"
                    >
                      Confirmer
                    </button>
                  </div>

                  {/* Suggestions d'autocomplétion */}
                  {showSuggestions && suggestions.length > 0 && (
                    <div
                      ref={suggestionsRef}
                      className="absolute z-50 w-full mt-2 bg-white border-2 border-amber-200 rounded-lg shadow-xl max-h-48 sm:max-h-60 overflow-y-auto animate-fade-up"
                    >
                      {suggestions.map((guest, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleSuggestionClick(guest.name)}
                          className="w-full text-left px-3 sm:px-4 py-2.5 sm:py-3 hover:bg-amber-50 active:bg-amber-100 transition-colors border-b border-amber-100 last:border-b-0 text-sm sm:text-base"
                        >
                          <span className="text-gray-800 font-medium break-words">{guest.name}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </form>
            )}

            {/* Résultat de la recherche */}
            {hasSearched && hasConfirmed === true && (
              <div className="mt-4 sm:mt-6 animate-fade-up">
                {foundGuest ? (
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 sm:p-6 rounded-xl border-2 border-green-300 shadow-lg">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 flex-shrink-0 mt-1" />
                      <div className="flex-1 min-w-0">
                        <p className="text-base sm:text-lg font-semibold text-green-800 mb-2 break-words">
                          Nous sommes heureux de vous compter parmi nos invités !
                        </p>
                        <div className="bg-white/80 p-3 sm:p-4 rounded-lg border border-green-200">
                          <div className="mobile-text-container">
                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words">
                              <span className="font-bold text-green-700">Avec tout l&apos;amour et la considération que nous avons pour vous,</span> nous vous avons attribué la table :{' '}
                              <span className="text-xl sm:text-2xl font-bold text-amber-600 block sm:inline mt-1 sm:mt-0">
                                Table {foundGuest.tableNumber}
                              </span>
                              {foundGuest.tableName && (
                                <span className="text-gray-600 italic block sm:inline mt-1 sm:mt-0 sm:ml-1">
                                  {' '}- {foundGuest.tableName}
                                </span>
                              )}
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={handleReset}
                          className="mt-4 flex items-center justify-center gap-2 px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 active:scale-95 transition-all text-xs sm:text-sm font-semibold shadow-md w-full sm:w-auto"
                        >
                          <RotateCcw className="w-4 h-4" />
                          <span>Réinitialiser</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-4 sm:p-6 rounded-xl border-2 border-amber-300 shadow-lg">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <XCircle className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600 flex-shrink-0 mt-1" />
                      <div className="flex-1 min-w-0">
                        <p className="text-base sm:text-lg font-semibold text-amber-800 mb-2 break-words">
                          Nom non trouvé dans la liste
                        </p>
                        <div className="mobile-text-container">
                          <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words">
                            Le nom &quot;<span className="font-semibold">{guestName}</span>&quot; n&apos;a pas été trouvé dans notre liste d&apos;invités. 
                            Veuillez vérifier l&apos;orthographe ou nous contacter si vous pensez qu&apos;il s&apos;agit d&apos;une erreur.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            <div className="pt-4 sm:pt-6 text-center">
              <p className="text-xl sm:text-2xl font-bold text-amber-600 font-majestic animate-fade-up-delayed-4">
                Jacaine ❤️
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RSVP;
