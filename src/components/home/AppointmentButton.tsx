
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

interface AppointmentButtonProps {
  serviceType?: string;
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

const AppointmentButton: React.FC<AppointmentButtonProps> = ({ 
  serviceType, 
  className,
  variant = "default",
  size = "default" 
}) => {
  // If serviceType is provided, pass it as state to pre-select it in the form
  return (
    <Button 
      variant={variant} 
      size={size} 
      className={className}
      asChild
    >
      <Link 
        to="/rendez-vous" 
        state={serviceType ? { fromImmigration: true } : undefined}
      >
        <Calendar className="mr-2 h-4 w-4" />
        Prendre rendez-vous
      </Link>
    </Button>
  );
};

export default AppointmentButton;
