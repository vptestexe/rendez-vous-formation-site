
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Globe, Users, Briefcase, Gavel, Check, MapPin, Calendar, FileText } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import ImmigrationServices from '@/components/home/ImmigrationServices';
import AppointmentButton from '@/components/home/AppointmentButton';
import NotificationHelper from '@/components/home/NotificationHelper';

const Immigration = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Services d'Immigration</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            EB MALAK INTERNATIONAL vous accompagne dans votre projet d'immigration vers le Canada, la France ou la Belgique avec une approche personnalisée et professionnelle.
          </p>
          <AppointmentButton 
            serviceType="immigration" 
            className="bg-formation-red hover:bg-red-700 text-white"
            size="lg"
          />
          <NotificationHelper />
        </div>

        <Tabs defaultValue="process" className="mb-12">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="process">Processus d'Immigration</TabsTrigger>
            <TabsTrigger value="services">Nos Services</TabsTrigger>
            <TabsTrigger value="requirements">Critères d'Admissibilité</TabsTrigger>
          </TabsList>
          
          <TabsContent value="process">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="mr-2 text-formation-red" />
                    Étapes du Processus
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-4">
                    <li className="flex">
                      <span className="bg-formation-red text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">1</span>
                      <div>
                        <h3 className="font-semibold">Consultation initiale</h3>
                        <p className="text-gray-600">Évaluation de votre admissibilité et discussion de vos objectifs d'immigration.</p>
                      </div>
                    </li>
                    <li className="flex">
                      <span className="bg-formation-red text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">2</span>
                      <div>
                        <h3 className="font-semibold">Préparation du dossier</h3>
                        <p className="text-gray-600">Collecte et vérification des documents nécessaires pour votre demande.</p>
                      </div>
                    </li>
                    <li className="flex">
                      <span className="bg-formation-red text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">3</span>
                      <div>
                        <h3 className="font-semibold">Soumission de la demande</h3>
                        <p className="text-gray-600">Dépôt officiel de votre demande auprès des autorités d'immigration.</p>
                      </div>
                    </li>
                    <li className="flex">
                      <span className="bg-formation-red text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">4</span>
                      <div>
                        <h3 className="font-semibold">Suivi et accompagnement</h3>
                        <p className="text-gray-600">Assistance continue jusqu'à l'obtention de votre visa ou permis.</p>
                      </div>
                    </li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="mr-2 text-formation-red" />
                    Documents Requis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 mr-2 text-formation-red flex-shrink-0" />
                      <span>Passeport valide (validité minimale de 6 mois)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 mr-2 text-formation-red flex-shrink-0" />
                      <span>Diplômes et relevés de notes</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 mr-2 text-formation-red flex-shrink-0" />
                      <span>Certificats de travail et lettres de recommandation</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 mr-2 text-formation-red flex-shrink-0" />
                      <span>Certificats de langue (IELTS, TEF, etc.)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 mr-2 text-formation-red flex-shrink-0" />
                      <span>Acte de naissance et de mariage (si applicable)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 mr-2 text-formation-red flex-shrink-0" />
                      <span>Justificatifs financiers</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 mr-2 text-formation-red flex-shrink-0" />
                      <span>Photos d'identité conformes aux exigences</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="services">
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center bg-formation-red rounded-full text-white">
                    <Globe size={32} />
                  </div>
                  <CardTitle className="text-center">Évaluation d'Admissibilité</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Analyse complète de votre profil pour déterminer les programmes d'immigration adaptés à votre situation.</p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <Gavel className="w-4 h-4 mr-2 text-formation-red" />
                      Évaluation professionnelle
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Gavel className="w-4 h-4 mr-2 text-formation-red" />
                      Options d'immigration personnalisées
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center bg-formation-red rounded-full text-white">
                    <FileText size={32} />
                  </div>
                  <CardTitle className="text-center">Préparation de Dossier</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Assistance complète dans la préparation de votre dossier d'immigration, de la collecte à la vérification des documents.</p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <Gavel className="w-4 h-4 mr-2 text-formation-red" />
                      Vérification de conformité
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Gavel className="w-4 h-4 mr-2 text-formation-red" />
                      Traduction certifiée
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center bg-formation-red rounded-full text-white">
                    <Users size={32} />
                  </div>
                  <CardTitle className="text-center">Suivi de Dossier</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Gestion et suivi de votre dossier auprès des autorités d'immigration jusqu'à l'obtention de votre visa.</p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <Gavel className="w-4 h-4 mr-2 text-formation-red" />
                      Communication avec les autorités
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Gavel className="w-4 h-4 mr-2 text-formation-red" />
                      Préparation aux entrevues
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="requirements">
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-center">
                    <Globe className="mr-2 text-formation-red" />
                    Canada
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold mb-3">Programme Express Entry</h3>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <Check className="w-4 h-4 mr-2 text-formation-red flex-shrink-0 mt-0.5" />
                      <span>Diplôme d'études post-secondaires</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 mr-2 text-formation-red flex-shrink-0 mt-0.5" />
                      <span>Minimum 1 an d'expérience professionnelle</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 mr-2 text-formation-red flex-shrink-0 mt-0.5" />
                      <span>Niveau de langue (IELTS ou TEF)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 mr-2 text-formation-red flex-shrink-0 mt-0.5" />
                      <span>Fonds suffisants pour l'établissement</span>
                    </li>
                  </ul>
                  
                  <Separator className="my-4" />
                  
                  <h3 className="font-semibold mb-3">Programme des Provinces</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="w-4 h-4 mr-2 text-formation-red flex-shrink-0 mt-0.5" />
                      <span>Critères variables selon la province</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 mr-2 text-formation-red flex-shrink-0 mt-0.5" />
                      <span>Intention d'habiter dans la province sélectionnée</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-center">
                    <MapPin className="mr-2 text-formation-red" />
                    France
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold mb-3">Visa Long Séjour</h3>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <Check className="w-4 h-4 mr-2 text-formation-red flex-shrink-0 mt-0.5" />
                      <span>Passeport valide</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 mr-2 text-formation-red flex-shrink-0 mt-0.5" />
                      <span>Justificatif du motif de séjour</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 mr-2 text-formation-red flex-shrink-0 mt-0.5" />
                      <span>Ressources financières suffisantes</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 mr-2 text-formation-red flex-shrink-0 mt-0.5" />
                      <span>Assurance médicale</span>
                    </li>
                  </ul>
                  
                  <Separator className="my-4" />
                  
                  <h3 className="font-semibold mb-3">Carte de Séjour Talent</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="w-4 h-4 mr-2 text-formation-red flex-shrink-0 mt-0.5" />
                      <span>Diplôme équivalent au Master ou plus</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 mr-2 text-formation-red flex-shrink-0 mt-0.5" />
                      <span>Contrat de travail qualifié</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-center">
                    <Briefcase className="mr-2 text-formation-red" />
                    Belgique
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold mb-3">Permis Unique</h3>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <Check className="w-4 h-4 mr-2 text-formation-red flex-shrink-0 mt-0.5" />
                      <span>Contrat de travail belge</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 mr-2 text-formation-red flex-shrink-0 mt-0.5" />
                      <span>Qualifications professionnelles</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 mr-2 text-formation-red flex-shrink-0 mt-0.5" />
                      <span>Certificat médical</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 mr-2 text-formation-red flex-shrink-0 mt-0.5" />
                      <span>Extrait de casier judiciaire</span>
                    </li>
                  </ul>
                  
                  <Separator className="my-4" />
                  
                  <h3 className="font-semibold mb-3">Carte Bleue Européenne</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="w-4 h-4 mr-2 text-formation-red flex-shrink-0 mt-0.5" />
                      <span>Diplôme d'études supérieures</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 mr-2 text-formation-red flex-shrink-0 mt-0.5" />
                      <span>Salaire minimum 1,5 fois le salaire moyen</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Pourquoi Choisir EB MALAK INTERNATIONAL ?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Notre équipe d'experts en immigration vous offre un service sur mesure et un accompagnement complet dans toutes les étapes de votre projet.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-formation-red rounded-full p-2 mr-4">
                  <Users className="text-white" />
                </div>
                <h3 className="font-bold text-lg">Expertise Reconnue</h3>
              </div>
              <p className="text-gray-600">Notre équipe possède une solide expérience dans la gestion des dossiers d'immigration complexes.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-formation-red rounded-full p-2 mr-4">
                  <Globe className="text-white" />
                </div>
                <h3 className="font-bold text-lg">Réseau International</h3>
              </div>
              <p className="text-gray-600">Nous collaborons avec un réseau de partenaires dans plusieurs pays pour faciliter votre intégration.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-formation-red rounded-full p-2 mr-4">
                  <Check className="text-white" />
                </div>
                <h3 className="font-bold text-lg">Taux de Réussite Élevé</h3>
              </div>
              <p className="text-gray-600">Notre méthodologie éprouvée nous permet d'obtenir d'excellents résultats pour nos clients.</p>
            </div>
          </div>
        </div>
        
        <ImmigrationServices />
      </div>
    </div>
  );
};

export default Immigration;
