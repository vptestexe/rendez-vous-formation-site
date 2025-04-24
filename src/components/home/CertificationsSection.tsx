
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CertificationsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Préparation aux certifications</h2>
        
        <div className="flex flex-wrap justify-center items-center gap-8 mb-10">
          <div className="text-center">
            <img src="/lovable-uploads/add4bc62-0247-4d80-bd1f-88b9281754fc.png" alt="Logos des certifications" className="mx-auto max-w-full h-auto" />
          </div>
        </div>
        
        <div className="text-center mb-8">
          <p className="text-xl mb-6">
            Préparez-vous efficacement aux examens internationalement reconnus
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-gray-100 rounded-full font-medium">TOEFL</span>
            <span className="px-4 py-2 bg-gray-100 rounded-full font-medium">IELTS</span>
            <span className="px-4 py-2 bg-gray-100 rounded-full font-medium">TOEIC</span>
            <span className="px-4 py-2 bg-gray-100 rounded-full font-medium">GRE</span>
            <span className="px-4 py-2 bg-gray-100 rounded-full font-medium">GMAT</span>
            <span className="px-4 py-2 bg-gray-100 rounded-full font-medium">TEF</span>
          </div>
        </div>
        
        <div className="text-center">
          <Link to="/certifications">
            <Button className="bg-formation-red hover:bg-red-700 text-white">
              Voir toutes nos certifications
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
