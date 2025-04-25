
import React from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertTriangleIcon } from 'lucide-react'; // Using Lucide React icon instead

export const NotificationHelper = () => {
  return (
    <Alert variant="destructive" className="mb-4">
      <AlertTriangleIcon className="h-4 w-4 mt-1" />
      <AlertTitle>Configuration requise</AlertTitle>
      <AlertDescription className="text-sm">
        Pour activer les notifications par email et WhatsApp, vous devez d'abord:
        <ol className="list-decimal list-inside mt-2 pl-4 space-y-1">
          <li>Connecter votre projet Lovable à Supabase</li>
          <li>Créer une table "appointments" dans Supabase</li>
          <li>Configurer une Edge Function pour envoyer les notifications</li>
          <li>Ajouter les clés API pour les services de notification</li>
        </ol>
        <p className="mt-2">
          Cliquez sur le bouton Supabase vert en haut à droite pour commencer l'intégration.
        </p>
      </AlertDescription>
    </Alert>
  );
};

export default NotificationHelper;
