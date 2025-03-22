
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhyUs from '@/components/WhyUs';
import Solutions from '@/components/Solutions';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollAnimation from '@/components/ScrollAnimation';
import ExporterCTA from '@/components/ExporterCTA';
import HowItWorks from '@/components/HowItWorks';
import ChatWidget from '@/components/ChatWidget';

const Index = () => {
  return (
    <div className="min-h-screen">
      <ScrollAnimation />
      <Header />
      <Hero />
      <HowItWorks />
      <WhyUs />
      <ExporterCTA />
      <Solutions />
      <Pricing />
      <Contact />
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;
