
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, Users, Briefcase, Gavel } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ImmigrationServiceDialog from './ImmigrationServiceDialog';

const ImmigrationServices = () => {
  const destinations = [
    {
      country: "Canada",
      description: "Un pays multiculturel offrant de nombreuses opportunités professionnelles et une excellente qualité de vie.",
      icon: Globe,
      benefits: ["Programme Express Entry", "Visa étudiant", "Permis de travail"]
    },
    {
      country: "France",
      description: "Une destination prisée pour son riche patrimoine culturel et son système éducatif renommé.",
      icon: Users,
      benefits: ["Visa long séjour", "Carte de séjour", "Regroupement familial"]
    },
    {
      country: "Belgique",
      description: "Au cœur de l'Europe, la Belgique offre un environnement international et dynamique.",
      icon: Briefcase,
      benefits: ["Permis unique", "Visa professionnel", "Carte bleue européenne"]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">EB MALAK INTERNATIONAL</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nous vous accompagnons dans votre projet d'immigration vers le Canada, la France ou la Belgique avec une approche personnalisée et professionnelle.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {destinations.map((destination) => (
            <Card key={destination.country} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center bg-formation-red rounded-full text-white">
                  <destination.icon size={32} />
                </div>
                <CardTitle className="text-2xl">{destination.country}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <ul className="space-y-2">
                  {destination.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center text-gray-700">
                      <Gavel className="w-4 h-4 mr-2 text-formation-red" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <ImmigrationServiceDialog 
            trigger={
              <Button size="lg" className="bg-formation-red hover:bg-red-700">
                Voudriez-vous immigrer vers ces pays ?
              </Button>
            } 
          />
        </div>
      </div>
    </section>
  );
};

export default ImmigrationServices;
