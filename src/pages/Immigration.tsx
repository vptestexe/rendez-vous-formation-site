
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Globe, Users, Briefcase, Gavel, Check, MapPin, Calendar, FileText } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import ImmigrationServices from '@/components/home/ImmigrationServices';
import AppointmentButton from '@/components/home/AppointmentButton';
import NotificationHelper from '@/components/home/NotificationHelper';

const Immigration = () => {
  const [activeTab, setActiveTab] = useState('process');
  const [isVisible, setIsVisible] = useState(false);
  
  // Controls the animation visibility
  useEffect(() => {
    // Set the page title
    document.title = "Immigration - AGENCE VOYAGES SANS FRONTIERES SARL";
    
    // Trigger animation when component mounts
    setIsVisible(true);
    
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);
  
  // Handle tab change with animation
  const handleTabChange = (value: string) => {
    setIsVisible(false);
    
    // Small delay to allow fade-out animation before changing tab
    setTimeout(() => {
      setActiveTab(value);
      setIsVisible(true);
    }, 300);
  };

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div 
          className={`text-center mb-12 transition-all duration-700 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-formation-blue via-formation-red to-orange-500 animate-pulse">Services d'Immigration</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            EB MALAK INTERNATIONAL vous accompagne dans votre projet d'immigration vers le Canada, 
            la France ou la Belgique avec une approche personnalisée et professionnelle.
          </p>
          <div className="text-formation-blue font-medium text-lg mb-6 animate-bounce">INFOLINE: 07 78 19 17 52</div>
          <AppointmentButton 
            serviceType="immigration" 
            className="bg-formation-red hover:bg-red-700 text-white animate-pulse transform hover:scale-105 transition-transform duration-300"
            size="lg"
          />
          <NotificationHelper />
        </div>

        <Tabs 
          value={activeTab} 
          onValueChange={handleTabChange}
          className="mb-12"
        >
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger 
              value="process" 
              className="transition-all duration-300 hover:bg-gray-100"
            >
              Processus d'Immigration
            </TabsTrigger>
            <TabsTrigger 
              value="services"
              className="transition-all duration-300 hover:bg-gray-100"
            >
              Nos Services
            </TabsTrigger>
            <TabsTrigger 
              value="requirements"
              className="transition-all duration-300 hover:bg-gray-100"
            >
              Critères d'Admissibilité
            </TabsTrigger>
          </TabsList>
          
          <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <TabsContent value="process">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="mr-2 text-formation-red animate-pulse" />
                      Étapes du Processus
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="space-y-4">
                      <li className="flex hover:translate-x-1 transition-transform duration-300">
                        <span className="bg-formation-red text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">1</span>
                        <div>
                          <h3 className="font-semibold">Consultation initiale</h3>
                          <p className="text-gray-600">Évaluation de votre admissibilité et discussion de vos objectifs d'immigration.</p>
                        </div>
                      </li>
                      <li className="flex hover:translate-x-1 transition-transform duration-300">
                        <span className="bg-formation-red text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">2</span>
                        <div>
                          <h3 className="font-semibold">Préparation du dossier</h3>
                          <p className="text-gray-600">Collecte et vérification des documents nécessaires pour votre demande.</p>
                        </div>
                      </li>
                      <li className="flex hover:translate-x-1 transition-transform duration-300">
                        <span className="bg-formation-red text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">3</span>
                        <div>
                          <h3 className="font-semibold">Soumission de la demande</h3>
                          <p className="text-gray-600">Dépôt officiel de votre demande auprès des autorités d'immigration.</p>
                        </div>
                      </li>
                      <li className="flex hover:translate-x-1 transition-transform duration-300">
                        <span className="bg-formation-red text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">4</span>
                        <div>
                          <h3 className="font-semibold">Suivi et accompagnement</h3>
                          <p className="text-gray-600">Assistance continue jusqu'à l'obtention de votre visa ou permis.</p>
                        </div>
                      </li>
                    </ol>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="mr-2 text-formation-red animate-pulse" />
                      Documents Requis
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {[
                        "Passeport valide (validité minimale de 6 mois)",
                        "Diplômes et relevés de notes",
                        "Certificats de travail et lettres de recommandation",
                        "Certificats de langue (IELTS, TEF, etc.)",
                        "Acte de naissance et de mariage (si applicable)",
                        "Justificatifs financiers",
                        "Photos d'identité conformes aux exigences"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start hover:translate-x-1 transition-transform duration-300">
                          <Check className="w-5 h-5 mr-2 text-formation-red flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="services">
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Évaluation d'Admissibilité",
                    description: "Analyse complète de votre profil pour déterminer les programmes d'immigration adaptés à votre situation.",
                    icon: Globe,
                    benefits: ["Évaluation professionnelle", "Options d'immigration personnalisées"]
                  },
                  {
                    title: "Préparation de Dossier",
                    description: "Assistance complète dans la préparation de votre dossier d'immigration, de la collecte à la vérification des documents.",
                    icon: FileText,
                    benefits: ["Vérification de conformité", "Traduction certifiée"]
                  },
                  {
                    title: "Suivi de Dossier",
                    description: "Gestion et suivi de votre dossier auprès des autorités d'immigration jusqu'à l'obtention de votre visa.",
                    icon: Users,
                    benefits: ["Communication avec les autorités", "Préparation aux entrevues"]
                  }
                ].map((service, index) => (
                  <Card key={index} className="transition-all duration-300 hover:shadow-lg transform hover:-translate-y-2">
                    <CardHeader>
                      <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center bg-formation-red rounded-full text-white animate-pulse">
                        <service.icon size={32} />
                      </div>
                      <CardTitle className="text-center">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-gray-700 hover:translate-x-1 transition-transform duration-300">
                            <Gavel className="w-4 h-4 mr-2 text-formation-red" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="requirements">
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    country: "Canada",
                    icon: Globe,
                    programs: [
                      {
                        name: "Programme Express Entry",
                        requirements: [
                          "Diplôme d'études post-secondaires",
                          "Minimum 1 an d'expérience professionnelle",
                          "Niveau de langue (IELTS ou TEF)",
                          "Fonds suffisants pour l'établissement"
                        ]
                      },
                      {
                        name: "Programme des Provinces",
                        requirements: [
                          "Critères variables selon la province",
                          "Intention d'habiter dans la province sélectionnée"
                        ]
                      }
                    ]
                  },
                  {
                    country: "France",
                    icon: MapPin,
                    programs: [
                      {
                        name: "Visa Long Séjour",
                        requirements: [
                          "Passeport valide",
                          "Justificatif du motif de séjour",
                          "Ressources financières suffisantes",
                          "Assurance médicale"
                        ]
                      },
                      {
                        name: "Carte de Séjour Talent",
                        requirements: [
                          "Diplôme équivalent au Master ou plus",
                          "Contrat de travail qualifié"
                        ]
                      }
                    ]
                  },
                  {
                    country: "Belgique",
                    icon: Briefcase,
                    programs: [
                      {
                        name: "Permis Unique",
                        requirements: [
                          "Contrat de travail belge",
                          "Qualifications professionnelles",
                          "Certificat médical",
                          "Extrait de casier judiciaire"
                        ]
                      },
                      {
                        name: "Carte Bleue Européenne",
                        requirements: [
                          "Diplôme d'études supérieures",
                          "Salaire minimum 1,5 fois le salaire moyen"
                        ]
                      }
                    ]
                  }
                ].map((country, index) => (
                  <Card key={index} className="transition-all duration-300 hover:shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-center">
                        <country.icon className="mr-2 text-formation-red" />
                        {country.country}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {country.programs.map((program, idx) => (
                        <React.Fragment key={idx}>
                          <h3 className="font-semibold mb-3">{program.name}</h3>
                          <ul className="space-y-2 mb-4">
                            {program.requirements.map((req, reqIdx) => (
                              <li key={reqIdx} className="flex items-start hover:translate-x-1 transition-transform duration-300">
                                <Check className="w-4 h-4 mr-2 text-formation-red flex-shrink-0 mt-0.5" />
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                          {idx < country.programs.length - 1 && <Separator className="my-4" />}
                        </React.Fragment>
                      ))}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </div>
        </Tabs>
        
        <div className="bg-gray-50 rounded-lg p-8 mb-12 transform transition-all duration-500 hover:shadow-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Pourquoi Choisir EB MALAK INTERNATIONAL ?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Notre équipe d'experts en immigration vous offre un service sur mesure et un accompagnement complet dans toutes les étapes de votre projet.
              <span className="block mt-2 text-formation-blue font-medium">INFOLINE: 07 78 19 17 52</span>
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Expertise Reconnue",
                description: "Notre équipe possède une solide expérience dans la gestion des dossiers d'immigration complexes.",
                icon: Users
              },
              {
                title: "Réseau International",
                description: "Nous collaborons avec un réseau de partenaires dans plusieurs pays pour faciliter votre intégration.",
                icon: Globe
              },
              {
                title: "Taux de Réussite Élevé",
                description: "Notre méthodologie éprouvée nous permet d'obtenir d'excellents résultats pour nos clients.",
                icon: Check
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-sm transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-formation-red rounded-full p-2 mr-4">
                    <feature.icon className="text-white" />
                  </div>
                  <h3 className="font-bold text-lg">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <ImmigrationServices />
      </div>
    </div>
  );
};

export default Immigration;
