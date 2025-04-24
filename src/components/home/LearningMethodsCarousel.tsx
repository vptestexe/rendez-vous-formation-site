
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const LearningMethodsCarousel = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Nos méthodes d'apprentissage</h2>
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            <CarouselItem>
              <div className="overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                  alt="Formation en ligne"
                  className="w-full h-[400px] object-cover rounded-lg transition-transform hover:scale-105 duration-300"
                />
              </div>
              <p className="text-center mt-4 text-lg font-medium">Formation en ligne interactive</p>
            </CarouselItem>
            <CarouselItem>
              <div className="overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd"
                  alt="Cours particuliers"
                  className="w-full h-[400px] object-cover rounded-lg transition-transform hover:scale-105 duration-300"
                />
              </div>
              <p className="text-center mt-4 text-lg font-medium">Cours particuliers personnalisés</p>
            </CarouselItem>
            <CarouselItem>
              <div className="overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1501504905252-473c47e087f8"
                  alt="Formation en groupe"
                  className="w-full h-[400px] object-cover rounded-lg transition-transform hover:scale-105 duration-300"
                />
              </div>
              <p className="text-center mt-4 text-lg font-medium">Formation en groupe dynamique</p>
            </CarouselItem>
          </CarouselContent>
          <div className="flex justify-center mt-4">
            <CarouselPrevious className="relative static mx-2 translate-y-0" />
            <CarouselNext className="relative static mx-2 translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default LearningMethodsCarousel;
