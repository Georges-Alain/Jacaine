import React, { useState, useEffect } from 'react';
import { Heart, Calendar, MapPin, Gift, Menu, X, ChevronDown, Clock, Phone } from 'lucide-react';

const WeddingSite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'story', 'vision', 'invitation', 'gallery', 'rsvp', 'gifts'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const timeline = [
    {
      year: "2018",
      title: "Première Rencontre",
      description: "Lors d'une retraite spirituelle, nos chemins se sont croisés pour la première fois, guidés par la providence divine."
    },
    {
      year: "2018-2021",
      title: "Chemins Séparés",
      description: "La vie nous a menés sur des routes différentes, façonnant nos cœurs et nos esprits pour ce qui allait venir."
    },
    {
      year: "2021",
      title: "Retrouvailles",
      description: "Une conversation innocente a ravivé une flamme oubliée, le destin tissant à nouveau nos chemins."
    },
    {
      year: "2022",
      title: "La Grâce Divine",
      description: "Sous la guidance du Saint-Esprit, nos cœurs se sont alignés dans la prière et la recherche de la face de Dieu."
    },
    {
      year: "2023",
      title: "Nouveau Départ",
      description: "Mai 2023 marque le commencement de notre voyage ensemble, dans l'amour et la foi."
    },
    {
      year: "2024",
      title: "La Grande Question",
      description: "Le 22 septembre à Berlin, sous un ciel complice, la question qui change une vie a été posée... et acceptée."
    }
  ];

  const events = [
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

  return (
    <div className="min-h-screen bg-white text-gray-800 font-serif">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold">
            <span className="text-amber-600">W</span>
            <Heart className="inline w-5 h-5 text-amber-500 mx-1" />
            <span className="text-amber-600">P</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['Accueil', 'Love Story', 'Vision', 'Invitation', 'Galerie', 'RSVP', 'Cadeaux'].map((item, idx) => (
              <button
                key={idx}
                onClick={() => scrollToSection(['home', 'story', 'vision', 'invitation', 'gallery', 'rsvp', 'gifts'][idx])}
                className={`hover:text-amber-600 transition-colors ${activeSection === ['home', 'story', 'vision', 'invitation', 'gallery', 'rsvp', 'gifts'][idx] ? 'text-amber-600' : ''}`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg mt-4">
            {['Accueil', 'Love Story', 'Vision', 'Invitation', 'Galerie', 'RSVP', 'Cadeaux'].map((item, idx) => (
              <button
                key={idx}
                onClick={() => scrollToSection(['home', 'story', 'vision', 'invitation', 'gallery', 'rsvp', 'gifts'][idx])}
                className="block w-full text-left px-6 py-3 hover:bg-amber-50 hover:text-amber-600 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
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
            onClick={() => scrollToSection('story')}
            className="mt-8 inline-flex items-center text-amber-600 hover:text-amber-700 transition-colors animate-bounce"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </section>

      {/* Love Story Section */}
      <section id="story" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <Heart className="w-12 h-12 text-amber-500 mx-auto mb-4" />
            <h2 className="text-5xl font-bold text-gray-800 mb-4">Notre Histoire</h2>
            <div className="h-1 w-24 bg-amber-500 mx-auto"></div>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-amber-300 via-amber-500 to-amber-300 hidden md:block"></div>

            {timeline.map((item, idx) => (
              <div key={idx} className={`mb-16 flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`w-full md:w-5/12 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow border border-amber-200">
                    <span className="text-3xl font-bold text-amber-600">{item.year}</span>
                    <h3 className="text-2xl font-bold text-gray-800 mt-2 mb-4">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center my-4 md:my-0 shadow-lg z-10">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div className="w-full md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-20 bg-gradient-to-br from-amber-50 to-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-gray-800 mb-4">Notre Vision</h2>
            <div className="h-1 w-24 bg-amber-500 mx-auto"></div>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-2xl border-2 border-amber-200">
            <p className="text-lg text-gray-700 leading-relaxed mb-6 italic text-center">
              "Aujourd'hui, nous célébrons non seulement notre union, mais aussi le parcours que Dieu a tracé pour nous."
            </p>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Notre histoire est marquée par des épreuves et des bénédictions, des moments de joie et de défis. À travers tout cela, le Seigneur a été notre guide et notre force.
              </p>
              
              <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
                <p className="italic">
                  "L'amour est patient, il est plein de bonté ; l'amour n'est point envieux, il ne se vante point, il ne s'enfle point d'orgueil..."
                </p>
                <p className="text-right text-sm mt-2 text-amber-700">— 1 Corinthiens 13:4-7</p>
              </div>

              <p>
                En tant que couple uni, nous nous engageons à bâtir notre foyer sur ces principes divins. Nous aspirons à être des témoins de l'amour de Christ dans notre vie quotidienne, à servir ensemble dans Son Royaume, et à élever nos enfants dans la crainte de Dieu.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
                <p className="italic">
                  "Voici, je me tiens à la porte et je frappe. Si quelqu'un entend ma voix et ouvre la porte, j'entrerai chez lui, je souperai avec lui, et lui avec moi."
                </p>
                <p className="text-right text-sm mt-2 text-amber-700">— Apocalypse 3:20</p>
              </div>

              <p className="text-center font-semibold text-gray-800">
                Que le Seigneur bénisse chacun de vous, et que Sa paix soit sur nous tous.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Invitation Section */}
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

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gradient-to-br from-amber-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-4">Nos Souvenirs</h2>
            <div className="h-1 w-24 bg-amber-500 mx-auto mb-4"></div>
            <p className="text-gray-600 italic">Les moments précieux de notre histoire</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(12)].map((_, idx) => (
              <div key={idx} className="aspect-square bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:scale-105 duration-300 flex items-center justify-center">
                <Heart className="w-12 h-12 text-white opacity-50" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section id="rsvp" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <Heart className="w-12 h-12 text-amber-500 mx-auto mb-4" />
            <h2 className="text-5xl font-bold text-gray-800 mb-4">Serez-vous des nôtres ?</h2>
            <div className="h-1 w-24 bg-amber-500 mx-auto"></div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-white p-10 rounded-2xl shadow-2xl border-2 border-amber-200">
            <div className="text-center space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Chers invités, nous avons le plaisir de vous informer que les inscriptions sont désormais clôturées. Nous sommes ravis de compter sur votre présence le <span className="font-bold text-amber-600">29 mars 2025</span> et avons hâte de partager ce moment privilégié avec vous.
              </p>
              
              <div className="bg-amber-100 p-6 rounded-lg border-l-4 border-amber-500">
                <p className="text-gray-700">
                  <strong>Important :</strong> Un QR Code d'accès à la soirée sera transmis le 20 mars 2025 aux invités confirmés.
                </p>
              </div>

              <p className="text-gray-600">
                Pour toute question ou information complémentaire, n'hésitez pas à nous contacter.
              </p>

              <div className="pt-6">
                <p className="text-2xl font-bold text-amber-600">Willcilia ❤️</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gifts Section */}
      <section id="gifts" className="py-20 bg-gradient-to-br from-amber-50 to-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <Gift className="w-12 h-12 text-amber-500 mx-auto mb-4" />
            <h2 className="text-5xl font-bold text-gray-800 mb-4">Liste des Cadeaux</h2>
            <div className="h-1 w-24 bg-amber-500 mx-auto"></div>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-2xl border-2 border-amber-200">
            <p className="text-xl text-center text-gray-700 mb-8 italic">
              Votre présence à notre mariage est déjà un immense cadeau pour nous !
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <a
                href="https://www.amazon.de/wedding/share/WillyetPrincy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-all hover:scale-105 shadow-lg text-lg font-semibold"
              >
                <Gift className="w-6 h-6" />
                Liste Amazon
              </a>
              <a
                href="http://paypal.me/WillyWandji"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-all hover:scale-105 shadow-lg text-lg font-semibold"
              >
                <Heart className="w-6 h-6" />
                PayPal
              </a>
            </div>

            <p className="text-center text-gray-600 mt-8 text-sm">
              NB : Tous les programmes se déroulent au même endroit (Efes Festsaal, Essen)
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
};

export default WeddingSite;