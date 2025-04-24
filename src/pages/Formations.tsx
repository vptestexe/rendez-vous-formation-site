
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const Formations = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-formation-red text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos Formations</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Des programmes d'apprentissage adaptés à tous les niveaux et à tous les besoins
          </p>
        </div>
      </section>

      {/* Anglais général */}
      <section id="general" className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="lg:flex items-center gap-12">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="text-3xl font-bold text-formation-red mb-6">Anglais général</h2>
              <p className="text-gray-700 mb-6">
                Notre programme d'anglais général est conçu pour améliorer vos compétences 
                linguistiques globales, quel que soit votre niveau actuel. Nous vous aidons 
                à progresser dans les quatre compétences fondamentales : expression orale, 
                compréhension orale, lecture et écriture.
              </p>
              <h3 className="font-bold text-xl mb-4">Ce que vous apprendrez :</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="text-formation-red mr-2 h-5 w-5 mt-0.5" />
                  <span>Vocabulaire courant et expressions idiomatiques</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-formation-red mr-2 h-5 w-5 mt-0.5" />
                  <span>Grammaire anglaise et structures de phrases</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-formation-red mr-2 h-5 w-5 mt-0.5" />
                  <span>Prononciation et fluidité verbale</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-formation-red mr-2 h-5 w-5 mt-0.5" />
                  <span>Compétences en communication quotidienne</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-formation-red mr-2 h-5 w-5 mt-0.5" />
                  <span>Anglais pratique pour les voyages et situations sociales</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-4">
                <Link to="/rendez-vous">
                  <Button className="bg-formation-red hover:bg-red-700 text-white">
                    S'inscrire
                  </Button>
                </Link>
                <Button variant="outline" className="border-formation-red text-formation-red hover:bg-formation-red hover:text-white">
                  <a href="tel:0707579728">Appeler pour plus d'infos</a>
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-gray-100 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Détails du programme</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold">Durée:</p>
                    <p>Modules de 20, 30 ou 50 heures</p>
                  </div>
                  <div>
                    <p className="font-semibold">Niveaux disponibles:</p>
                    <p>Débutant (A1) à Avancé (C1)</p>
                  </div>
                  <div>
                    <p className="font-semibold">Format:</p>
                    <p>Cours en présentiel ou en ligne</p>
                  </div>
                  <div>
                    <p className="font-semibold">Taille des groupes:</p>
                    <p>Cours particuliers ou petits groupes (max. 8 personnes)</p>
                  </div>
                  <div>
                    <p className="font-semibold">Évaluation:</p>
                    <p>Tests de niveau avant et après la formation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Anglais des affaires */}
      <section id="affaires" className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="lg:flex flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="text-3xl font-bold text-formation-red mb-6">Anglais des affaires</h2>
              <p className="text-gray-700 mb-6">
                Notre programme d'anglais des affaires est spécialement conçu pour les professionnels 
                qui souhaitent améliorer leur communication dans un contexte d'entreprise. Maîtrisez le 
                vocabulaire et les compétences nécessaires pour réussir dans un environnement professionnel international.
              </p>
              <h3 className="font-bold text-xl mb-4">Ce que vous apprendrez :</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="text-formation-red mr-2 h-5 w-5 mt-0.5" />
                  <span>Vocabulaire commercial et terminologie spécifique</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-formation-red mr-2 h-5 w-5 mt-0.5" />
                  <span>Communication lors de réunions et présentations</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-formation-red mr-2 h-5 w-5 mt-0.5" />
                  <span>Rédaction d'emails et correspondance professionnelle</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-formation-red mr-2 h-5 w-5 mt-0.5" />
                  <span>Négociations et techniques de persuasion</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-formation-red mr-2 h-5 w-5 mt-0.5" />
                  <span>Analyse de documents financiers et commerciaux</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-4">
                <Link to="/rendez-vous">
                  <Button className="bg-formation-red hover:bg-red-700 text-white">
                    S'inscrire
                  </Button>
                </Link>
                <Button variant="outline" className="border-formation-red text-formation-red hover:bg-formation-red hover:text-white">
                  <a href="tel:0707579728">Appeler pour plus d'infos</a>
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-gray-100 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Détails du programme</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold">Durée:</p>
                    <p>Modules de 30 ou 60 heures</p>
                  </div>
                  <div>
                    <p className="font-semibold">Prérequis:</p>
                    <p>Niveau intermédiaire (B1) minimum conseillé</p>
                  </div>
                  <div>
                    <p className="font-semibold">Format:</p>
                    <p>Cours en présentiel ou en ligne</p>
                  </div>
                  <div>
                    <p className="font-semibold">Adaptation:</p>
                    <p>Personnalisation selon votre secteur d'activité</p>
                  </div>
                  <div>
                    <p className="font-semibold">Certification:</p>
                    <p>Préparation optionnelle au TOEIC ou BEC</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Traduction/Interprétariat */}
      <section id="traduction" className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="lg:flex items-center gap-12">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="text-3xl font-bold text-formation-red mb-6">Traduction/Interprétariat</h2>
              <p className="text-gray-700 mb-6">
                Notre formation en traduction et interprétariat vous prépare aux exigences professionnelles 
                de ces métiers spécialisés. Développez des compétences avancées en traduction écrite et 
                orale entre l'anglais et le français, avec une attention particulière aux nuances culturelles et contextuelles.
              </p>
              <h3 className="font-bold text-xl mb-4">Ce que vous apprendrez :</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="text-formation-red mr-2 h-5 w-5 mt-0.5" />
                  <span>Techniques de traduction écrite</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-formation-red mr-2 h-5 w-5 mt-0.5" />
                  <span>Méthodes d'interprétation consécutive</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-formation-red mr-2 h-5 w-5 mt-0.5" />
                  <span>Traduction spécialisée (juridique, médicale, technique)</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-formation-red mr-2 h-5 w-5 mt-0.5" />
                  <span>Outils d'aide à la traduction</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-formation-red mr-2 h-5 w-5 mt-0.5" />
                  <span>Éthique professionnelle et normes du métier</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-4">
                <Link to="/rendez-vous">
                  <Button className="bg-formation-red hover:bg-red-700 text-white">
                    S'inscrire
                  </Button>
                </Link>
                <Button variant="outline" className="border-formation-red text-formation-red hover:bg-formation-red hover:text-white">
                  <a href="tel:0707579728">Appeler pour plus d'infos</a>
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-gray-100 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Détails du programme</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold">Durée:</p>
                    <p>Modules de 40 ou 80 heures</p>
                  </div>
                  <div>
                    <p className="font-semibold">Prérequis:</p>
                    <p>Niveau avancé (C1) recommandé</p>
                  </div>
                  <div>
                    <p className="font-semibold">Format:</p>
                    <p>Cours en présentiel ou en ligne</p>
                  </div>
                  <div>
                    <p className="font-semibold">Spécialisation:</p>
                    <p>Possibilité de se concentrer sur un domaine spécifique</p>
                  </div>
                  <div>
                    <p className="font-semibold">Certification:</p>
                    <p>Préparation aux certifications professionnelles</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-formation-blue text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Trouvez la formation qui vous convient</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Nos conseillers pédagogiques sont disponibles pour vous aider à choisir le programme 
            qui correspond le mieux à vos objectifs d'apprentissage.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/rendez-vous">
              <Button size="lg" className="bg-white text-formation-blue hover:bg-gray-100">
                Prendre rendez-vous
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Formations;
