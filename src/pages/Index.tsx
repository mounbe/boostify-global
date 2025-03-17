
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhyUs from '@/components/WhyUs';
import Solutions from '@/components/Solutions';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WhyUs />
      <Solutions />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
