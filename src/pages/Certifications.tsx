
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const CertificationCard = ({ title, description, features, logoUrl }: {
  title: string;
  description: string;
  features: string[];
  logoUrl?: string;
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center justify-center h-16 mb-4">
        {logoUrl ? (
          <img src={logoUrl} alt={title} className="h-full" />
        ) : (
          <h3 className="text-xl font-bold text-formation-red">{title}</h3>
        )}
      </div>
      <p className="mb-4 text-gray-700">{description}</p>
      <ul className="mb-6 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="text-formation-red mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Link to="/rendez-vous">
        <Button className="w-full bg-formation-red hover:bg-red-700 text-white">
          Préparation {title}
        </Button>
      </Link>
    </div>
  );
};

const Certifications = () => {
  const certifications = [
    {
      title: "TOEFL",
      description: "Test standardisé mesurant la capacité à utiliser et comprendre l'anglais au niveau universitaire.",
      features: [
        "Reconnu par plus de 11,000 universités dans 150 pays",
        "Évalue la lecture, l'écoute, la parole et l'écriture",
        "Format informatisé (iBT) ou papier (PBT)",
        "Score valide pendant 2 ans"
      ]
    },
    {
      title: "IELTS",
      description: "Évaluation des compétences linguistiques pour les études ou l'immigration dans des pays anglophones.",
      features: [
        "Deux formats: Academic et General Training",
        "Évalue les 4 compétences linguistiques",
        "Test sur papier ou informatisé",
        "Score valide pendant 2 ans"
      ]
    },
    {
      title: "TOEIC",
      description: "Test évaluant les compétences en anglais professionnel, largement utilisé par les entreprises.",
      features: [
        "Axé sur l'anglais utilisé dans le milieu professionnel",
        "Test principal: Listening and Reading",
        "Tests complémentaires: Speaking and Writing",
        "Score valide pendant 2 ans"
      ]
    },
    {
      title: "GRE",
      description: "Test standardisé requis pour l'admission aux programmes d'études supérieures, particulièrement aux États-Unis.",
      features: [
        "Évalue le raisonnement verbal et quantitatif",
        "Section d'écriture analytique",
        "Requis pour de nombreux programmes de master et doctorat",
        "Score valide pendant 5 ans"
      ]
    },
    {
      title: "GMAT",
      description: "Examen d'entrée pour les programmes de MBA et autres formations en gestion des affaires.",
      features: [
        "Évalue les compétences analytiques, quantitatives et verbales",
        "Section de raisonnement intégré",
        "Spécifique aux écoles de commerce",
        "Score valide pendant 5 ans"
      ]
    },
    {
      title: "TEF",
      description: "Test d'évaluation du français, reconnu pour l'immigration et les études dans les pays francophones.",
      features: [
        "Évalue la compréhension et l'expression écrite et orale",
        "Reconnu par les autorités d'immigration",
        "Aligné sur le Cadre européen commun de référence",
        "Score valide pendant 2 ans"
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-formation-blue text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Préparation aux Certifications</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Des programmes ciblés pour vous aider à obtenir les meilleurs résultats aux examens d'anglais reconnus mondialement
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto">
          <p className="text-lg text-center max-w-3xl mx-auto mb-12">
            Nos programmes de préparation aux certifications sont conçus pour vous familiariser avec le format des tests, 
            développer des stratégies efficaces pour chaque section et renforcer vos compétences linguistiques nécessaires pour réussir.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {certifications.map((cert, index) => (
              <CertificationCard 
                key={index}
                title={cert.title}
                description={cert.description}
                features={cert.features}
              />
            ))}
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-center mb-6">Notre approche de préparation</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="p-4">
                <div className="bg-formation-red text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">1</div>
                <h3 className="font-bold mb-2">Évaluation initiale</h3>
                <p>Test de niveau pour identifier vos forces et faiblesses</p>
              </div>
              <div className="p-4">
                <div className="bg-formation-red text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">2</div>
                <h3 className="font-bold mb-2">Plan personnalisé</h3>
                <p>Stratégie d'étude adaptée à votre niveau et objectifs</p>
              </div>
              <div className="p-4">
                <div className="bg-formation-red text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">3</div>
                <h3 className="font-bold mb-2">Entraînement ciblé</h3>
                <p>Exercices et tests blancs dans les conditions d'examen</p>
              </div>
              <div className="p-4">
                <div className="bg-formation-red text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">4</div>
                <h3 className="font-bold mb-2">Suivi des progrès</h3>
                <p>Sessions de révision et ajustements selon vos progrès</p>
              </div>
            </div>
          </div>
          
          <div className="bg-formation-red text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Prêt à vous lancer dans la préparation d'une certification?</h2>
            <p className="text-lg mb-6">
              Nos formateurs spécialisés vous accompagnent pas à pas pour atteindre vos objectifs
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/rendez-vous">
                <Button size="lg" className="bg-white text-formation-red hover:bg-gray-100">
                  Prendre rendez-vous
                </Button>
              </Link>
              <a href="tel:0707579728">
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                  Appelez-nous
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Témoignages de réussite</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold">Marie L.</h3>
                  <p className="text-sm text-gray-600">TOEFL iBT - Score: 112/120</p>
                </div>
                <div className="bg-formation-blue text-white text-xs px-2 py-1 rounded">TOEFL</div>
              </div>
              <p className="text-gray-700">
                "La préparation était intensive mais très efficace. Les conseils personnalisés et les 
                stratégies enseignées m'ont permis de dépasser mon objectif initial de 100 points."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold">Thomas B.</h3>
                  <p className="text-sm text-gray-600">IELTS - Band Score: 8.0</p>
                </div>
                <div className="bg-formation-blue text-white text-xs px-2 py-1 rounded">IELTS</div>
              </div>
              <p className="text-gray-700">
                "J'ai particulièrement apprécié les séances d'expression orale qui m'ont aidé à gagner 
                en confiance. Les simulations d'examen m'ont parfaitement préparé au jour J."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold">Camille D.</h3>
                  <p className="text-sm text-gray-600">TOEIC - Score: 965/990</p>
                </div>
                <div className="bg-formation-blue text-white text-xs px-2 py-1 rounded">TOEIC</div>
              </div>
              <p className="text-gray-700">
                "Grâce à la formation, j'ai non seulement excellé au TOEIC mais j'ai aussi amélioré 
                mon anglais professionnel que j'utilise quotidiennement dans mon travail."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certifications;
