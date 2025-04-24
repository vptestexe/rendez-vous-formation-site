
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <div className="font-bold text-2xl">
              <span className="text-formation-red">FORMATION</span>{" "}
              <span className="text-formation-blue">EN ANGLAIS</span>
            </div>
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleMenu}
              className="text-gray-700"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium hover:text-formation-red transition-colors">
              Accueil
            </Link>
            <Link to="/formations" className="font-medium hover:text-formation-red transition-colors">
              Formations
            </Link>
            <Link to="/certifications" className="font-medium hover:text-formation-red transition-colors">
              Certifications
            </Link>
            <Link to="/contact" className="font-medium hover:text-formation-red transition-colors">
              Contact
            </Link>
            <Link to="/rendez-vous">
              <Button className="bg-formation-red hover:bg-red-700 text-white">
                Prendre rendez-vous
              </Button>
            </Link>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="font-medium hover:text-formation-red transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link 
              to="/formations" 
              className="font-medium hover:text-formation-red transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Formations
            </Link>
            <Link 
              to="/certifications" 
              className="font-medium hover:text-formation-red transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Certifications
            </Link>
            <Link 
              to="/contact" 
              className="font-medium hover:text-formation-red transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link to="/rendez-vous" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full bg-formation-red hover:bg-red-700 text-white">
                Prendre rendez-vous
              </Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
