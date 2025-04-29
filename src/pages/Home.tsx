
import React, { useEffect } from 'react';
import HeroSection from '@/components/home/HeroSection';
import LearningMethodsCarousel from '@/components/home/LearningMethodsCarousel';
import TrainingPrograms from '@/components/home/TrainingPrograms';
import VideoSection from '@/components/home/VideoSection';
import CertificationsSection from '@/components/home/CertificationsSection';
import ContactSection from '@/components/home/ContactSection';
import ImmigrationServices from '@/components/home/ImmigrationServices';

const Home = () => {
  useEffect(() => {
    document.title = "AGENCE VOYAGES SANS FRONTIERES SARL - COTE D'IVOIRE";
  }, []);

  return (
    <div>
      <HeroSection />
      <ImmigrationServices />
      <LearningMethodsCarousel />
      <TrainingPrograms />
      <VideoSection />
      <CertificationsSection />
      <ContactSection />
    </div>
  );
};

export default Home;
