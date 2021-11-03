import React from 'react';
import Footer from '../components/Global/Footer';
import Header from '../components/Global/Header';
import BaseSection from '../components/Sections/BaseSection';
import ContactSection from '../components/Sections/ContactSection';
import HeroSection from '../components/Sections/HeroSection';
import PercheScegliereNoiSection from '../components/Sections/PercheScegliereNoiSection';
import ProductsSection from '../components/Sections/Products/ProductsSection';

function LandingView() {
  return (
    <>
      <Header />
      <HeroSection />
      <BaseSection />
      <PercheScegliereNoiSection />
      <ProductsSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default LandingView;
