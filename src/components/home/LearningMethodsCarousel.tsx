
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
  );
};

export default LearningMethodsCarousel;
