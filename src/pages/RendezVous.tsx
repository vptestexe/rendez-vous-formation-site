
import React, { useState } from 'react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { toast } from 'sonner';
import { Check, CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLocation } from 'react-router-dom';

const RendezVous = () => {
  const location = useLocation();
  const [date, setDate] = useState<Date | undefined>();
  const [timeSlot, setTimeSlot] = useState<string>('');
  const [formationTypeId, setFormationTypeId] = useState<string>('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [formStep, setFormStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);

  // Initialize formationTypeId if coming from immigration page
  React.useEffect(() => {
    if (location.state?.fromImmigration) {
      setFormationTypeId('immigration');
    }
  }, [location.state]);

  const formationTypes = [
    { id: 'general', name: 'Anglais général' },
    { id: 'affaires', name: 'Anglais des affaires' },
    { id: 'traduction', name: 'Traduction/Interprétariat' },
    { id: 'toefl', name: 'Préparation TOEFL' },
    { id: 'ielts', name: 'Préparation IELTS' },
    { id: 'toeic', name: 'Préparation TOEIC' },
    { id: 'gre', name: 'Préparation GRE' },
    { id: 'gmat', name: 'Préparation GMAT' },
    { id: 'tef', name: 'Préparation TEF' },
    { id: 'immigration', name: 'Services d\'Immigration' }
  ];

  const timeSlots = [
    '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNextStep = () => {
    setFormStep(2);
  };

  const handlePreviousStep = () => {
    setFormStep(1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      // Prepare the appointment data
      const appointmentData = {
        date: date ? format(date, 'yyyy-MM-dd') : '',
        timeSlot,
        serviceType: formationTypes.find(f => f.id === formationTypeId)?.name || '',
        contact: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
        },
        message: formData.message,
        createdAt: new Date().toISOString()
      };

      console.log('Submitting appointment:', appointmentData);
      
      // Here we would normally call a Supabase function to store the appointment
      // and send notifications, but for now let's simulate it
      
      // Simulate API call/success
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success('Rendez-vous demandé avec succès!', {
        description: 'Nous vous contacterons pour confirmer votre rendez-vous.',
        icon: <Check className="h-4 w-4" />
      });
      
      // Reset form
      setDate(undefined);
      setTimeSlot('');
      setFormationTypeId('');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
      setFormStep(1);
    } catch (error) {
      console.error('Error submitting appointment:', error);
      toast.error('Une erreur est survenue', {
        description: 'Veuillez réessayer ou nous contacter directement.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  const isStepOneComplete = () => {
    return date && timeSlot && formationTypeId;
  };

  const isStepTwoComplete = () => {
    return formData.firstName && formData.lastName && formData.email;
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-formation-blue text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Prenez rendez-vous</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Réservez une session d'information ou d'inscription avec l'un de nos conseillers pédagogiques
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Steps Indicator */}
            <div className="bg-gray-50 p-4">
              <div className="flex items-center justify-center">
                <div className={`flex items-center ${formStep === 1 ? 'text-formation-blue font-bold' : 'text-gray-500'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${formStep === 1 ? 'bg-formation-blue text-white' : 'bg-gray-200'}`}>
                    1
                  </div>
                  <span>Choisir date et formation</span>
                </div>
                <div className="w-12 h-0.5 bg-gray-300 mx-3"></div>
                <div className={`flex items-center ${formStep === 2 ? 'text-formation-blue font-bold' : 'text-gray-500'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${formStep === 2 ? 'bg-formation-blue text-white' : 'bg-gray-200'}`}>
                    2
                  </div>
                  <span>Vos coordonnées</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6">
              {formStep === 1 ? (
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="formationType" className="mb-2 block font-medium">
                      Type de formation souhaitée
                    </Label>
                    <Select value={formationTypeId} onValueChange={setFormationTypeId}>
                      <SelectTrigger id="formationType" className="w-full">
                        <SelectValue placeholder="Sélectionnez une formation" />
                      </SelectTrigger>
                      <SelectContent>
                        {formationTypes.map((formation) => (
                          <SelectItem key={formation.id} value={formation.id}>
                            {formation.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label className="mb-2 block font-medium">Sélectionnez une date</Label>
                    <div className="grid gap-2">
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !date && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "EEEE d MMMM yyyy", { locale: fr }) : "Sélectionnez une date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            disabled={(date) => {
                              // Disable weekends and dates before today
                              const day = date.getDay();
                              return (
                                date < new Date(new Date().setHours(0, 0, 0, 0)) ||
                                day === 0 || 
                                day === 6
                              );
                            }}
                            initialFocus
                            className="pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                  
                  <div>
                    <Label className="mb-2 block font-medium">Sélectionnez un créneau horaire</Label>
                    <RadioGroup value={timeSlot} onValueChange={setTimeSlot} className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                      {timeSlots.map((time) => (
                        <div key={time} className="flex items-center justify-center">
                          <RadioGroupItem value={time} id={`time-${time}`} className="sr-only" />
                          <Label
                            htmlFor={`time-${time}`}
                            className={`
                              w-full py-2 text-center rounded-md cursor-pointer border
                              ${timeSlot === time 
                                ? 'bg-formation-blue text-white border-formation-blue' 
                                : 'bg-white hover:bg-gray-50 border-gray-200'
                              }
                            `}
                          >
                            {time}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                  
                  <div className="pt-4">
                    <Button
                      type="button"
                      className="w-full bg-formation-red hover:bg-red-700 text-white"
                      disabled={!isStepOneComplete()}
                      onClick={handleNextStep}
                    >
                      Continuer
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="mb-2 block font-medium">
                        Prénom
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="mb-2 block font-medium">
                        Nom
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email" className="mb-2 block font-medium">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="mb-2 block font-medium">
                        Téléphone
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Optionnel"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="mb-2 block font-medium">
                      Message (optionnel)
                    </Label>
                    <Input
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Questions ou informations complémentaires"
                    />
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Récapitulatif du rendez-vous</h3>
                    <p className="mb-1">
                      <span className="font-medium">Formation :</span>{' '}
                      {formationTypes.find(f => f.id === formationTypeId)?.name}
                    </p>
                    <p className="mb-1">
                      <span className="font-medium">Date :</span>{' '}
                      {date ? format(date, "EEEE d MMMM yyyy", { locale: fr }) : ''}
                    </p>
                    <p>
                      <span className="font-medium">Heure :</span> {timeSlot}
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      className="flex-1"
                      onClick={handlePreviousStep}
                    >
                      Retour
                    </Button>
                    <Button
                      type="submit"
                      className="flex-1 bg-formation-red hover:bg-red-700 text-white"
                      disabled={submitting || !isStepTwoComplete()}
                    >
                      {submitting ? 'Envoi en cours...' : 'Confirmer le rendez-vous'}
                    </Button>
                  </div>
                </div>
              )}
            </form>
          </div>
          
          <div className="mt-12 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Comment se déroule un rendez-vous ?</h2>
            <ol className="space-y-4 list-decimal list-inside">
              <li className="pl-2">
                <span className="font-medium">Évaluation de vos besoins :</span>{' '}
                Nous discuterons de vos objectifs d'apprentissage et de votre niveau actuel en anglais.
              </li>
              <li className="pl-2">
                <span className="font-medium">Présentation des formations :</span>{' '}
                Nous vous détaillerons les programmes adaptés à votre profil et répondrons à vos questions.
              </li>
              <li className="pl-2">
                <span className="font-medium">Test de niveau gratuit :</span>{' '}
                Nous évaluerons vos compétences pour vous proposer le parcours le plus adapté.
              </li>
              <li className="pl-2">
                <span className="font-medium">Proposition personnalisée :</span>{' '}
                Vous recevrez un devis détaillé avec le programme recommandé.
              </li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RendezVous;
