import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check, Image } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Home = () => {
  return (
    <div>
      {/* Hero Section with Background Image */}
      <section className="relative bg-gradient-to-r from-formation-blue to-formation-red text-white py-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
            alt="People learning English"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto text-center relative z-10">
          {/* Hero Section Content */}
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

      {/* Image Carousel Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Nos méthodes d'apprentissage</h2>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              <CarouselItem>
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                  alt="Formation en ligne"
                  className="w-full h-[400px] object-cover rounded-lg"
                />
                <p className="text-center mt-4 text-lg font-medium">Formation en ligne interactive</p>
              </CarouselItem>
              <CarouselItem>
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                  alt="Cours particuliers"
                  className="w-full h-[400px] object-cover rounded-lg"
                />
                <p className="text-center mt-4 text-lg font-medium">Cours particuliers personnalisés</p>
              </CarouselItem>
              <CarouselItem>
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                  alt="Formation en groupe"
                  className="w-full h-[400px] object-cover rounded-lg"
                />
                <p className="text-center mt-4 text-lg font-medium">Formation en groupe dynamique</p>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Main Services/Programs Section with Images */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Nos programmes de formation</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Anglais général */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4 h-48 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                  alt="Anglais général"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-formation-red mb-4">Anglais général</h3>
              <p className="mb-4 text-gray-700">
                Améliorez votre niveau d'anglais général pour communiquer avec confiance dans toutes les situations.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center">
                  <Check className="text-formation-red mr-2 h-5 w-5" />
                  <span>Expression orale et écrite</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-formation-red mr-2 h-5 w-5" />
                  <span>Compréhension orale et écrite</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-formation-red mr-2 h-5 w-5" />
                  <span>Grammaire et vocabulaire</span>
                </li>
              </ul>
              <Link to="/formations#general">
                <Button variant="outline" className="w-full border-formation-red text-formation-red hover:bg-formation-red hover:text-white">
                  En savoir plus
                </Button>
              </Link>
            </div>
            
            {/* Anglais des affaires */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4 h-48 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1483058712412-4245e9b90334" 
                  alt="Anglais des affaires"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-formation-red mb-4">Anglais des affaires</h3>
              <p className="mb-4 text-gray-700">
                Développez vos compétences en anglais professionnel pour exceller dans le monde des affaires.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center">
                  <Check className="text-formation-red mr-2 h-5 w-5" />
                  <span>Négociations commerciales</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-formation-red mr-2 h-5 w-5" />
                  <span>Présentations et réunions</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-formation-red mr-2 h-5 w-5" />
                  <span>Correspondance professionnelle</span>
                </li>
              </ul>
              <Link to="/formations#affaires">
                <Button variant="outline" className="w-full border-formation-red text-formation-red hover:bg-formation-red hover:text-white">
                  En savoir plus
                </Button>
              </Link>
            </div>
            
            {/* Traduction/Interprétariat */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4 h-48 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                  alt="Traduction/Interprétariat"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-formation-red mb-4">Traduction/Interprétariat</h3>
              <p className="mb-4 text-gray-700">
                Formez-vous aux techniques professionnelles de traduction et d'interprétation.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center">
                  <Check className="text-formation-red mr-2 h-5 w-5" />
                  <span>Traduction technique et littéraire</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-formation-red mr-2 h-5 w-5" />
                  <span>Interprétation consécutive</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-formation-red mr-2 h-5 w-5" />
                  <span>Terminologie spécialisée</span>
                </li>
              </ul>
              <Link to="/formations#traduction">
                <Button variant="outline" className="w-full border-formation-red text-formation-red hover:bg-formation-red hover:text-white">
                  En savoir plus
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Découvrez notre méthode d'apprentissage</h2>
          <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl">
            <video 
              className="w-full aspect-video"
              controls
              poster="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
            >
              <source 
                src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" 
                type="video/mp4" 
              />
              Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
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

      {/* Call to Action */}
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
    </div>
  );
};

export default Home;
