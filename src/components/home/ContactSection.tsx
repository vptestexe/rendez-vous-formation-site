
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  return (
    <section className="py-16 bg-formation-blue text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Prêt à améliorer votre anglais?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Contactez-nous dès aujourd'hui pour discuter de vos besoins en formation et commencer votre parcours vers la maîtrise de l'anglais.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 max-w-md mx-auto">
          <div className="flex-1">
            <p className="font-bold mb-2">INFOLINE</p>
            <p className="mb-1">07 07 57 97 28</p>
            <p className="mb-1">01 72 95 53 23</p>
            <p>05 44 81 88 07</p>
          </div>
          <div className="flex-1 mt-6 md:mt-0">
            <Link to="/rendez-vous">
              <Button size="lg" className="w-full bg-white text-formation-blue hover:bg-gray-100">
                Prendre rendez-vous
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
