import React from 'react';
import { motion } from 'framer-motion';
import Header from '../../../layout/Header';
import Footer from '../../../layout/Footer';
import Hero from '../../../components/landing/home/Hero';
import TravelAndalusia from '../../../components/landing/home/TravelAndalusia';
import TailorMadeIdeas from '../../../components/landing/home/TailorMadeIdeas';
import ExperiencesSection from '../../../components/landing/home/ExperiencesSection';
import OurPromise from '../../../components/landing/home/OurPromise';
import UniqueHeritage from '../../../components/landing/home/UniqueHeritage';
import TestimonialsGuarantees from '../../../components/landing/home/TestimonialsGuarantees';
import TravelInspirationCTA from '../../../components/landing/home/TravelInspirationCTA';
import LatestBlogArticles from '../../../components/landing/home/LatestBlogArticles';
import OfficialPartners from '../../../components/landing/home/OfficialPartners';
import ContactSupportBar from '../../../components/landing/home/ContactSupportBar';
import ScrollMask from '../../../components/ui/ScrollMask';
import { fadeIn } from '../../../animations/animation.js';

const Home = () => {
  return (
    <motion.div 
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className="relative w-full min-h-screen"
    >
      <ScrollMask 
        title="Andalusia" 
        subtitle="Scroll to explore" 
      >
        {/* The entire website content that will be revealed */}
        <div className="relative w-full h-full">
          <Header />
          <Hero />
          <TravelAndalusia />
          <TailorMadeIdeas />
          <OurPromise />
          <UniqueHeritage />
          <TestimonialsGuarantees />
          <ExperiencesSection />
          <TravelInspirationCTA />
          <LatestBlogArticles />
          <OfficialPartners />
          <ContactSupportBar />
          <Footer />
        </div>
      </ScrollMask>
    </motion.div>
  );
};

export default Home;
