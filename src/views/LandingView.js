import React from 'react';
import Footer from '../components/Global/Footer';
import Header from '../components/Global/Header';
import BaseSection from '../components/Sections/BaseSection';
import ContactSection from '../components/Sections/ContactSection';
import GaranzieBakkano from '../components/Sections/GaranzieBakkano';
import HeroSection from '../components/Sections/HeroSection';
import PercheScegliereNoiSection from '../components/Sections/PercheScegliereNoiSection';
import ProductsSection from '../components/Sections/Products/ProductsSection';
import RecapitiSection from '../components/Sections/RecapitiSection';

function LandingView() {
  return (
    <>
      <Header />
      <HeroSection />
      <RecapitiSection />
      <BaseSection />
      <GaranzieBakkano />
      <PercheScegliereNoiSection />
      <ProductsSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default LandingView;
