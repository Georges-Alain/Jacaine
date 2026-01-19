'use client';

import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Story from '@/components/Story';
import Vision from '@/components/Vision';
import Invitation from '@/components/Invitation';
import Gallery from '@/components/Gallery';
import RSVP from '@/components/RSVP';
import Gifts from '@/components/Gifts';
import Footer from '@/components/Footer';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-serif">
      <Navigation activeSection={activeSection} onNavigate={scrollToSection} />
      <Hero onScrollDown={() => scrollToSection('story')} />
      <Story />
      <Vision />
      <Invitation />
      <Gallery />
      <RSVP />
      <Gifts />
      <Footer />
    </div>
  );
}
