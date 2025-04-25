
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Custom rainbow animation class for active links
  const activeClassNames = "relative font-medium text-formation-red after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-0.5 after:bg-gradient-to-r after:from-purple-500 after:via-red-500 after:to-yellow-500 after:animate-pulse";

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/c223b934-43c3-4e2c-924d-4f5190a2f220.png" 
              alt="Formation en Anglais Logo" 
              className="h-16 w-auto mr-4"
            />
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
            <Link to="/" className={isActive("/") ? activeClassNames : "font-medium hover:text-formation-red transition-colors"}>
              Accueil
            </Link>
            <Link to="/formations" className={isActive("/formations") ? activeClassNames : "font-medium hover:text-formation-red transition-colors"}>
              Formations
            </Link>
            <Link to="/certifications" className={isActive("/certifications") ? activeClassNames : "font-medium hover:text-formation-red transition-colors"}>
              Certifications
            </Link>
            <Link to="/immigration" className={isActive("/immigration") ? activeClassNames : "font-medium hover:text-formation-red transition-colors"}>
              Immigration
            </Link>
            <Link to="/contact" className={isActive("/contact") ? activeClassNames : "font-medium hover:text-formation-red transition-colors"}>
              Contact
            </Link>
            <Link to="/rendez-vous">
              <Button className="bg-formation-red hover:bg-red-700 text-white transition-all duration-300 transform hover:scale-105">
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
              className={isActive("/") ? "text-formation-red font-medium py-2" : "font-medium hover:text-formation-red transition-colors py-2"}
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link 
              to="/formations" 
              className={isActive("/formations") ? "text-formation-red font-medium py-2" : "font-medium hover:text-formation-red transition-colors py-2"}
              onClick={() => setIsMenuOpen(false)}
            >
              Formations
            </Link>
            <Link 
              to="/certifications" 
              className={isActive("/certifications") ? "text-formation-red font-medium py-2" : "font-medium hover:text-formation-red transition-colors py-2"}
              onClick={() => setIsMenuOpen(false)}
            >
              Certifications
            </Link>
            <Link 
              to="/immigration" 
              className={isActive("/immigration") ? "text-formation-red font-medium py-2" : "font-medium hover:text-formation-red transition-colors py-2"}
              onClick={() => setIsMenuOpen(false)}
            >
              Immigration
            </Link>
            <Link 
              to="/contact" 
              className={isActive("/contact") ? "text-formation-red font-medium py-2" : "font-medium hover:text-formation-red transition-colors py-2"}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link to="/rendez-vous" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full bg-formation-red hover:bg-red-700 text-white transition-all duration-300 transform hover:scale-105">
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
