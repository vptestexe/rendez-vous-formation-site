
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Formation en Anglais</h3>
            <p className="mb-4">
              Des formations d'anglais adaptées à vos besoins professionnels et personnels.
            </p>
            <div className="flex space-x-4">
              <span className="font-semibold">Suivez-nous:</span>
              <a href="#" className="hover:text-formation-red">Facebook</a>
              <a href="#" className="hover:text-formation-red">Twitter</a>
              <a href="#" className="hover:text-formation-red">LinkedIn</a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Nos formations</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/formations#general" className="hover:text-formation-red">
                  Anglais général
                </Link>
              </li>
              <li>
                <Link to="/formations#affaires" className="hover:text-formation-red">
                  Anglais des affaires
                </Link>
              </li>
              <li>
                <Link to="/formations#traduction" className="hover:text-formation-red">
                  Traduction/Interprétariat
                </Link>
              </li>
              <li>
                <Link to="/certifications" className="hover:text-formation-red">
                  Préparation aux certifications
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>INFOLINE:</li>
              <li>
                <a href="tel:0778191752" className="hover:text-formation-red">
                  07 78 19 17 52
                </a>
              </li>
              <li>
                <a href="tel:0707579728" className="hover:text-formation-red">
                  07 07 57 97 28
                </a>
              </li>
              <li>
                <a href="tel:0172955323" className="hover:text-formation-red">
                  01 72 95 53 23
                </a>
              </li>
              <li>
                <a href="tel:0544818807" className="hover:text-formation-red">
                  05 44 81 88 07
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Formation en Anglais. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
