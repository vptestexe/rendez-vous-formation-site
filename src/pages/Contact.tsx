
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Check, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Message envoyé avec succès!', {
        description: 'Nous vous répondrons dans les plus brefs délais.',
        icon: <Check className="h-4 w-4" />
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setSubmitting(false);
    }, 1500);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-formation-red text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contactez-nous</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Notre équipe est à votre disposition pour répondre à toutes vos questions concernant nos formations
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="lg:flex gap-12">
            {/* Contact Form */}
            <div className="lg:w-2/3 mb-10 lg:mb-0">
              <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="font-medium">
                      Nom complet
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Votre nom"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="font-medium">
                      Téléphone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Votre numéro de téléphone"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="font-medium">
                      Sujet
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Objet de votre message"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Détaillez votre demande..."
                    rows={5}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full sm:w-auto bg-formation-red hover:bg-red-700 text-white"
                  disabled={submitting}
                >
                  {submitting ? 'Envoi en cours...' : 'Envoyer le message'}
                </Button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="lg:w-1/3">
              <h2 className="text-2xl font-bold mb-6">Coordonnées</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-formation-red p-3 rounded-full text-white mr-4">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">INFOLINE</h3>
                    <p className="mb-1">
                      <a href="tel:0778191752" className="hover:text-formation-red">07 78 19 17 52</a>
                    </p>
                    <p className="mb-1">
                      <a href="tel:0707579728" className="hover:text-formation-red">07 07 57 97 28</a>
                    </p>
                    <p className="mb-1">
                      <a href="tel:0172955323" className="hover:text-formation-red">01 72 95 53 23</a>
                    </p>
                    <p>
                      <a href="tel:0544818807" className="hover:text-formation-red">05 44 81 88 07</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-formation-red p-3 rounded-full text-white mr-4">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Email</h3>
                    <p>
                      <a href="mailto:contact@formation-anglais.fr" className="hover:text-formation-red">
                        contact@formation-anglais.fr
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-formation-red p-3 rounded-full text-white mr-4">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Centre de formation</h3>
                    <p className="mb-1">123 Avenue de la Formation</p>
                    <p className="mb-1">75001 Paris, France</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold mb-4">Heures d'ouverture</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Lundi - Vendredi:</span>
                    <span>9h00 - 19h00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Samedi:</span>
                    <span>9h00 - 12h00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Dimanche:</span>
                    <span>Fermé</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto">
          <div className="bg-gray-300 h-80 rounded-lg flex items-center justify-center">
            <p className="text-gray-600">Carte interactive ici</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Questions fréquentes</h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-3">Quels sont les horaires des formations ?</h3>
              <p className="text-gray-700">
                Nous proposons des horaires flexibles en journée, en soirée et le samedi matin pour 
                s'adapter à votre emploi du temps professionnel.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-3">Combien coûtent vos formations ?</h3>
              <p className="text-gray-700">
                Les tarifs varient selon le type de formation et sa durée. Contactez-nous pour 
                obtenir un devis personnalisé selon vos besoins.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-3">Proposez-vous des formations à distance ?</h3>
              <p className="text-gray-700">
                Oui, toutes nos formations peuvent être suivies en présentiel ou à distance via 
                notre plateforme d'apprentissage en ligne.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-3">Vos formations sont-elles certifiantes ?</h3>
              <p className="text-gray-700">
                Oui, nos formations préparent aux certifications reconnues (TOEFL, IELTS, TOEIC, etc.) 
                et peuvent être financées par les dispositifs de formation professionnelle.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
