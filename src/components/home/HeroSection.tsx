
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-formation-blue to-formation-red text-white py-20">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1524995997955-2a34c2d186b2"  // Language classroom with students
          alt="Étudiants apprenant l'anglais"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          FORMATION EN ANGLAIS
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Maîtrisez l'anglais pour booster votre carrière et vos opportunités
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/rendez-vous">
            <Button size="lg" className="bg-white text-formation-red hover:bg-gray-100">
              Prendre rendez-vous
            </Button>
          </Link>
          <Link to="/formations">
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              Découvrir nos formations
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
