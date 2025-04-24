
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const TrainingPrograms = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Nos programmes de formation</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProgramCard 
            title="Anglais général"
            image="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            description="Améliorez votre niveau d'anglais général pour communiquer avec confiance dans toutes les situations."
            features={[
              "Expression orale et écrite",
              "Compréhension orale et écrite",
              "Grammaire et vocabulaire"
            ]}
            link="/formations#general"
          />
          
          <ProgramCard 
            title="Anglais des affaires"
            image="https://images.unsplash.com/photo-1483058712412-4245e9b90334"
            description="Développez vos compétences en anglais professionnel pour exceller dans le monde des affaires."
            features={[
              "Négociations commerciales",
              "Présentations et réunions",
              "Correspondance professionnelle"
            ]}
            link="/formations#affaires"
          />
          
          <ProgramCard 
            title="Traduction/Interprétariat"
            image="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
            description="Formez-vous aux techniques professionnelles de traduction et d'interprétation."
            features={[
              "Traduction technique et littéraire",
              "Interprétation consécutive",
              "Terminologie spécialisée"
            ]}
            link="/formations#traduction"
          />
        </div>
      </div>
    </section>
  );
};

interface ProgramCardProps {
  title: string;
  image: string;
  description: string;
  features: string[];
  link: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ title, image, description, features, link }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="mb-4 h-48 overflow-hidden rounded-lg">
        <img 
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-bold text-formation-red mb-4">{title}</h3>
      <p className="mb-4 text-gray-700">{description}</p>
      <ul className="mb-6 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="text-formation-red mr-2 h-5 w-5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Link to={link}>
        <Button variant="outline" className="w-full border-formation-red text-formation-red hover:bg-formation-red hover:text-white">
          En savoir plus
        </Button>
      </Link>
    </div>
  );
};

export default TrainingPrograms;
