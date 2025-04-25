
# Configuration des notifications pour les rendez-vous

Ce document explique comment configurer les notifications par email et WhatsApp pour les demandes de rendez-vous.

## Prérequis

1. **Intégration Supabase:**
   - Connectez votre projet Lovable à Supabase en cliquant sur le bouton Supabase vert en haut à droite
   - Créez une table `appointments` dans votre base de données Supabase

2. **Services requis:**
   - Un service d'email (comme Resend.com ou SendGrid)
   - Un compte WhatsApp Business API ou un service tiers qui l'utilise

## Configuration Supabase

### 1. Structure de la table `appointments`

```sql
CREATE TABLE appointments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  service_type TEXT NOT NULL,
  appointment_date DATE NOT NULL,
  appointment_time TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status TEXT DEFAULT 'pending'
);
```

### 2. Edge Function pour les notifications

Créez une Edge Function Supabase qui sera déclenchée lorsqu'un nouvel enregistrement est ajouté à la table `appointments`:

```typescript
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.38.4'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }
  
  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      { global: { headers: { Authorization: req.headers.get('Authorization')! } } }
    )
    
    const { appointment } = await req.json()
    
    // Envoyer email via API Resend
    if (Deno.env.get('RESEND_API_KEY')) {
      const emailResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Deno.env.get('RESEND_API_KEY')}`,
        },
        body: JSON.stringify({
          from: 'no-reply@votredomaine.com',
          to: 'responsable@votreentreprise.com',
          subject: `Nouveau RDV: ${appointment.service_type}`,
          html: `<p>Nouveau rendez-vous demandé:</p>
                 <p><strong>Nom:</strong> ${appointment.first_name} ${appointment.last_name}<br>
                 <strong>Email:</strong> ${appointment.email}<br>
                 <strong>Téléphone:</strong> ${appointment.phone}<br>
                 <strong>Service:</strong> ${appointment.service_type}<br>
                 <strong>Date:</strong> ${appointment.appointment_date}<br>
                 <strong>Heure:</strong> ${appointment.appointment_time}</p>`,
        }),
      })
      console.log('Email notification status:', emailResponse.status)
    }
    
    // Envoyer WhatsApp via API (exemple avec Twilio)
    if (Deno.env.get('TWILIO_ACCOUNT_SID') && Deno.env.get('TWILIO_AUTH_TOKEN')) {
      const twilioResponse = await fetch(
        `https://api.twilio.com/2010-04-01/Accounts/${Deno.env.get('TWILIO_ACCOUNT_SID')}/Messages.json`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(`${Deno.env.get('TWILIO_ACCOUNT_SID')}:${Deno.env.get('TWILIO_AUTH_TOKEN')}`),
          },
          body: new URLSearchParams({
            To: `whatsapp:+${Deno.env.get('ADMIN_PHONE_NUMBER')}`,
            From: `whatsapp:+${Deno.env.get('TWILIO_PHONE_NUMBER')}`,
            Body: `Nouveau RDV: ${appointment.service_type} - ${appointment.first_name} ${appointment.last_name} - ${appointment.appointment_date} à ${appointment.appointment_time}`,
          }),
        }
      )
      console.log('WhatsApp notification status:', twilioResponse.status)
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    })
  }
})
```

### 3. Secrets à configurer dans Supabase:

- `RESEND_API_KEY`: Votre clé API Resend pour les notifications par email
- `TWILIO_ACCOUNT_SID`: Votre SID de compte Twilio pour WhatsApp
- `TWILIO_AUTH_TOKEN`: Votre token d'authentification Twilio
- `TWILIO_PHONE_NUMBER`: Numéro Twilio WhatsApp (sans le '+')
- `ADMIN_PHONE_NUMBER`: Numéro du responsable à notifier (sans le '+')

## Intégration dans l'application

Une fois Supabase configuré, vous devrez mettre à jour la fonction `handleSubmit` dans le composant `RendezVous.tsx`:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setSubmitting(true);
  
  try {
    // Format appointment data
    const appointmentData = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      service_type: formationTypes.find(f => f.id === formationTypeId)?.name || '',
      appointment_date: date ? format(date, 'yyyy-MM-dd') : '',
      appointment_time: timeSlot,
      message: formData.message,
    };

    // Insert appointment into Supabase
    const { data, error } = await supabase
      .from('appointments')
      .insert(appointmentData)
      .select();

    if (error) throw error;
    
    // Call the notification edge function
    const { error: fnError } = await supabase
      .functions
      .invoke('send-appointment-notifications', {
        body: { appointment: appointmentData }
      });

    if (fnError) console.error('Notification error:', fnError);
    
    toast.success('Rendez-vous demandé avec succès!', {
      description: 'Nous vous contacterons pour confirmer votre rendez-vous.'
    });
    
    // Reset form
    // ...
  } catch (error) {
    console.error('Error submitting appointment:', error);
    toast.error('Une erreur est survenue');
  } finally {
    setSubmitting(false);
  }
};
```

## Services alternatifs

Si vous préférez ne pas utiliser Twilio, voici d'autres services qui proposent des API WhatsApp:

1. **WhatsApp Business API** directement (nécessite une validation)
2. **MessageBird**
3. **Vonage (Nexmo)**
4. **Infobip**

Pour les emails, vous pouvez aussi utiliser:

1. **SendGrid**
2. **Mailgun**
3. **Postmark**
4. **Amazon SES**
