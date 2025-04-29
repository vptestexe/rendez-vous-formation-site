
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [animateLogo, setAnimateLogo] = useState(false);
  const location = useLocation();

  // Animation effect for the logo
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateLogo(true);
      setTimeout(() => setAnimateLogo(false), 2000);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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
          <Link to="/" className="flex flex-col items-center">
            <div className={`relative transition-transform duration-1000 ${animateLogo ? 'transform translate-y-[-5px]' : ''}`}>
              <img 
                src="/lovable-uploads/6961b549-9c1e-4b8a-993b-8ffb58527566.png" 
                alt="Agence Voyages Sans Frontières Logo" 
                className="h-16 w-auto"
              />
            </div>
            <div className="text-center">
              <h1 className="font-bold text-sm text-formation-blue">AGENCE VOYAGES SANS FRONTIERES SARL</h1>
              <p className="text-xs text-orange-500">COTE D'IVOIRE</p>
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
            <div className="flex items-center">
              <span className="font-medium text-formation-blue mr-4">INFOLINE: 07 78 19 17 52</span>
              <Link to="/rendez-vous">
                <Button className="bg-formation-red hover:bg-red-700 text-white transition-all duration-300 transform hover:scale-105">
                  Prendre rendez-vous
                </Button>
              </Link>
            </div>
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
            <div className="font-medium text-formation-blue py-2">INFOLINE: 07 78 19 17 52</div>
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
