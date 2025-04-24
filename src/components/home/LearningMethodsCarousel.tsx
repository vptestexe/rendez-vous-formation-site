
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
                src="https://images.unsplash.com/photo-1535982330050-f1c2fb79ff78"  // Online learning
                alt="Formation en ligne"
                className="w-full h-[400px] object-cover rounded-lg"
              />
              <p className="text-center mt-4 text-lg font-medium">Formation en ligne interactive</p>
            </CarouselItem>
            <CarouselItem>
              <img 
                src="https://images.unsplash.com/photo-1516321497487-e288fb19713f"  // One-on-one tutoring
                alt="Cours particuliers"
                className="w-full h-[400px] object-cover rounded-lg"
              />
              <p className="text-center mt-4 text-lg font-medium">Cours particuliers personnalisés</p>
            </CarouselItem>
            <CarouselItem>
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0"  // Group learning
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
