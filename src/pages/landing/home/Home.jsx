import React from 'react';
import { motion } from 'framer-motion';
import Header from '../../../layout/Header';
import Hero from '../../../components/landing/home/Hero';
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
        </div>
      </ScrollMask>
    </motion.div>
  );
};

export default Home;
