
import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

interface ImmigrationServiceDialogProps {
  trigger: React.ReactNode;
}

const ImmigrationServiceDialog: React.FC<ImmigrationServiceDialogProps> = ({ trigger }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">EB MALAK INTERNATIONAL</DialogTitle>
          <DialogDescription className="text-center pt-2">
            Services d'accompagnement à l'immigration
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4">
          <h3 className="font-semibold text-lg mb-2">Voudriez-vous immigrer vers ces pays?</h3>
          <p className="text-gray-600 mb-4">
            Notre équipe d'experts vous offre un accompagnement personnalisé pour concrétiser votre projet d'immigration vers:
          </p>
          
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <Check className="w-5 h-5 mr-2 text-formation-red flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-medium">Canada</span>
                <p className="text-sm text-gray-600">Programmes Express Entry, Visa étudiant, Permis de travail</p>
              </div>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 mr-2 text-formation-red flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-medium">France</span>
                <p className="text-sm text-gray-600">Visa long séjour, Carte de séjour, Regroupement familial</p>
              </div>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 mr-2 text-formation-red flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-medium">Belgique</span>
                <p className="text-sm text-gray-600">Permis unique, Visa professionnel, Carte bleue européenne</p>
              </div>
            </li>
          </ul>
          
          <p className="text-sm text-gray-600 mb-6">
            EB MALAK INTERNATIONAL vous accompagne dans toutes les étapes, de l'évaluation initiale jusqu'à l'obtention de votre visa et votre installation.
          </p>
          
          <div className="flex justify-center">
            <Button className="bg-formation-red hover:bg-red-700" asChild>
              <a href="/immigration">Découvrir nos services en détail</a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImmigrationServiceDialog;
