
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

const Index = () => {
  return (
    <div className="min-h-screen">
      <ScrollAnimation />
      <Header />
      <Hero />
      <WhyUs />
      <ExporterCTA />
      <Solutions />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
