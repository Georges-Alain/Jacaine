'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Heart, CheckCircle, XCircle, RotateCcw } from 'lucide-react';
import { findGuest, getGuestSuggestions } from '@/data/guests';

const RSVP: React.FC = () => {
  const [step, setStep] = useState<'name' | 'confirm' | 'result'>('name');
  const [guestName, setGuestName] = useState('');
  const [suggestions, setSuggestions] = useState<ReturnType<typeof getGuestSuggestions>>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [foundGuest, setFoundGuest] = useState<ReturnType<typeof findGuest> | null>(null);
  const [response, setResponse] = useState<'Oui' | 'Non' | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (guestName.trim()) {
      const sug = getGuestSuggestions(guestName);
      setSuggestions(sug);
      setShowSuggestions(sug.length > 0);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [guestName]);

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
  };

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (guestName.trim()) {
      const guest = findGuest(guestName.trim());
      setFoundGuest(guest || null);
      setStep('confirm');
      setShowSuggestions(false);
    }
  };

  const handleConfirmation = async (confirmed: 'Oui' | 'Non') => {
    setResponse(confirmed);
    setStep('result');

    try {
      console.log('Envoi de la confirmation...');
      const apiResponse = await fetch('/api/rsvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: guestName.trim(),
          response: confirmed,
          tableNumber: foundGuest?.tableNumber || 'N/A',
          tableName: foundGuest?.tableName || 'N/A',
        }),
      });
      const result = await apiResponse.json();
      console.log('Réponse API:', result);
      if (result.success) {
        console.log('✅ Confirmation enregistrée avec succès');
      }
    } catch (error) {
      console.error('❌ Erreur lors de l\'envoi:', error);
    }
  };

  const handleReset = () => {
    setStep('name');
    setGuestName('');
    setFoundGuest(null);
    setResponse(null);
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
            {/* Étape 1: Entrer le nom */}
            {step === 'name' && (
              <form onSubmit={handleNameSubmit} className="space-y-4 animate-fade-up">
                <div className="text-center space-y-3 sm:space-y-4">
                  <div className="timeline-description-container max-h-20 sm:max-h-24 overflow-y-auto">
                    <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed px-2">
                      Afin de mieux préparer notre événement et de garantir sa réussite, nous serions heureux de vous compter parmi nos invités.
                    </p>
                  </div>
                  <div className="timeline-description-container max-h-16 sm:max-h-20 overflow-y-auto">
                    <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed font-semibold px-2">
                      Merci de bien vouloir nous confirmer votre présence
                    </p>
                  </div>
                  <p className="text-base sm:text-lg text-gray-700 font-semibold pt-2">
                    Veuillez entrer votre nom :
                  </p>
                </div>
                <div className="relative">
                  <input
                    ref={inputRef}
                    type="text"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    onFocus={() => {
                      if (suggestions.length > 0) {
                        setShowSuggestions(true);
                      }
                    }}
                    placeholder="Votre nom complet"
                    className="w-full px-4 py-3 rounded-lg border-2 border-amber-200 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200 transition-all text-gray-800 text-center"
                    required
                  />

                  {showSuggestions && suggestions.length > 0 && (
                    <div
                      ref={suggestionsRef}
                      className="absolute z-50 w-full mt-2 bg-white border-2 border-amber-200 rounded-lg shadow-xl max-h-60 overflow-y-auto"
                    >
                      {suggestions.map((guest, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleSuggestionClick(guest.name)}
                          className="w-full text-left px-4 py-3 hover:bg-amber-50 transition-colors border-b border-amber-100 last:border-b-0"
                        >
                          <span className="text-gray-800 font-medium">{guest.name}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-all font-semibold shadow-lg text-lg"
                >
                  Continuer
                </button>
              </form>
            )}

            {/* Étape 2: Confirmer présence */}
            {step === 'confirm' && (
              <div className="space-y-6 animate-fade-up">
                <div className="text-center space-y-3">
                  <p className="text-xl sm:text-2xl font-bold text-gray-800">
                    Bonjour {guestName} !
                  </p>
                  <p className="text-base sm:text-lg text-gray-700">
                    Confirmez-vous votre présence à notre mariage ?
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button
                    onClick={() => handleConfirmation('Oui')}
                    className="px-8 py-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all font-semibold shadow-lg text-lg"
                  >
                    Oui, je serai présent(e)
                  </button>
                  <button
                    onClick={() => handleConfirmation('Non')}
                    className="px-8 py-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all font-semibold shadow-lg text-lg"
                  >
                    Non, je ne pourrai pas
                  </button>
                </div>
              </div>
            )}

            {/* Étape 3: Résultat */}
            {step === 'result' && (
              <div className="space-y-6 animate-fade-up">
                {response === 'Oui' ? (
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 sm:p-6 rounded-xl border-2 border-green-300 shadow-lg">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 flex-shrink-0 mt-1" />
                      <div className="flex-1 min-w-0">
                        <p className="text-base sm:text-lg font-semibold text-green-800 mb-2 break-words">
                          Nous sommes heureux de vous compter parmi nos invités !
                        </p>
                        {foundGuest ? (
                          <div className="bg-white/80 p-3 sm:p-4 rounded-lg border border-green-200">
                            <div className="timeline-description-container max-h-32 sm:max-h-40 overflow-y-auto">
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
                        ) : (
                          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                            <div className="timeline-description-container max-h-24 sm:max-h-32 overflow-y-auto">
                              <p className="text-sm text-gray-600">
                                Votre nom n'a pas été trouvé dans notre liste. Nous vous attribuerons une table prochainement.
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-gradient-to-br from-red-50 to-pink-50 p-4 sm:p-6 rounded-xl border-2 border-red-300 shadow-lg">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <XCircle className="w-6 h-6 sm:w-8 sm:h-8 text-red-600 flex-shrink-0 mt-1" />
                      <div className="flex-1 min-w-0">
                        <p className="text-base sm:text-lg font-semibold text-red-800 mb-2 break-words">
                          Nous sommes désolés de ne pas vous compter parmi nous
                        </p>
                        <div className="timeline-description-container max-h-20 sm:max-h-24 overflow-y-auto">
                          <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words">
                            Votre réponse a été enregistrée. Nous respectons votre décision et vous remercions de nous avoir informés.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <button
                  onClick={handleReset}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-all text-xs sm:text-sm font-semibold shadow-md"
                >
                  <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Nouvelle confirmation</span>
                </button>
              </div>
            )}

            <div className="pt-4 sm:pt-6 text-center">
              <p className="text-xl sm:text-2xl font-bold text-amber-600 font-majestic">
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
