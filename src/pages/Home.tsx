
import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import LearningMethodsCarousel from '@/components/home/LearningMethodsCarousel';
import TrainingPrograms from '@/components/home/TrainingPrograms';
import VideoSection from '@/components/home/VideoSection';
import CertificationsSection from '@/components/home/CertificationsSection';
import ContactSection from '@/components/home/ContactSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <LearningMethodsCarousel />
      <TrainingPrograms />
      <VideoSection />
      <CertificationsSection />
      <ContactSection />
    </div>
  );
};

export default Home;
