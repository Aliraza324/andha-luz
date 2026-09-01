import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../../../animations/animation.js';

import bgImage from '../../../assets/images/bg.png';
import starLogo from '../../../assets/icons/star-logo.png';

const OurPromise = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const steps = [
    {
      number: "01",
      title: "Express your desires",
      description: "Fill out our online form and let your travel dreams run free: inspirations, budget, ideal time of year..."
    },
    {
      number: "02",
      title: "Co-create your itinerary",
      description: "Talk with an expert advisor to create a trip in your image, adapted to your desires and your pace."
    },
    {
      number: "03",
      title: "Book with confidence",
      description: "Accommodations, transport, activities... we take care of everything. All you have to do is go!"
    },
    {
      number: "04",
      title: "Travel with peace of mind",
      description: "Your personalized travel booklet contains all essential information. On site, our concierge service is available 24/7."
    }
  ];

  // Auto-loop on mobile/tablet screens every 3.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused, steps.length]);

  return (
    <section 
      className="relative w-full bg-cover bg-center bg-no-repeat py-14 sm:py-20 px-4 sm:px-6 lg:px-8 font-sora overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Subtle overlay to ensure text contrast while letting the background shine */}
      <div className="absolute inset-0 bg-black/35 backdrop-blur-[1px]" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2.5 mb-3"
          >
            {/* Exact 4-petal clover/flower icon */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="7.5" r="3.5" />
              <circle cx="12" cy="16.5" r="3.5" />
              <circle cx="7.5" cy="12" r="3.5" />
              <circle cx="16.5" cy="12" r="3.5" />
              <circle cx="12" cy="12" r="1.5" fill="white" />
            </svg>
            <span className="text-white text-xs sm:text-[13px] font-bold uppercase tracking-[0.25em]">
              OUR PROMISE
            </span>
          </motion.div>

          {/* Heading (Lighter Weight Serif) */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-[32px] sm:text-[44px] lg:text-[50px] text-white tracking-tight mb-3"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
          >
            Your tailor-made trip in 4 steps
          </motion.h2>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-200 text-xs sm:text-[13.5px] font-normal max-w-xl leading-relaxed"
          >
            We guide you at every step to create the trip that suits you, with simplicity and peace of mind.
          </motion.p>
        </div>

        {/* --- MOBILE / TABLET AUTO-LOOP SLIDER (< lg) --- */}
        <div 
          className="block lg:hidden relative mb-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Card Window */}
          <div className="relative min-h-[220px] flex items-center justify-center px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.95 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="relative w-full max-w-md bg-white rounded-[24px] p-6 sm:p-7 shadow-2xl flex flex-col text-center items-center justify-start border border-white/40 overflow-hidden group"
              >
                {/* Number */}
                <span 
                  className="text-[#CC5B3B] text-2xl font-bold mb-2 tracking-tight"
                  style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
                >
                  {steps[activeStep].number}
                </span>

                {/* Title */}
                <h3 className="text-[#182A3A] font-bold text-base sm:text-lg leading-snug mb-2 flex items-center justify-center">
                  {steps[activeStep].title}
                </h3>

                {/* Description */}
                <p className="text-[#6B7A88] text-xs sm:text-sm leading-relaxed font-normal">
                  {steps[activeStep].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls on Mobile/Tablet */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button 
              onClick={() => setActiveStep((prev) => (prev - 1 + steps.length) % steps.length)}
              aria-label="Previous step"
              className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Pagination Indicators / Dots */}
            <div className="flex items-center gap-2">
              {steps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  aria-label={`Go to step ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeStep === i 
                      ? 'w-7 bg-[#CC5B3B]' 
                      : 'w-2 bg-white/40 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>

            <button 
              onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
              aria-label="Next step"
              className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* --- DESKTOP 4-CARDS GRID (>= lg) --- */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="hidden lg:grid grid-cols-4 gap-5 items-stretch relative"
        >
          {steps.map((step, index) => (
            <div key={index} className="relative flex items-center">
              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full bg-white rounded-[24px] p-6 shadow-xl flex flex-col text-center items-center justify-start border border-white/40 overflow-hidden group cursor-pointer"
              >
                {/* Smooth Fill-in Background Overlay on Hover */}
                <div className="absolute inset-0 bg-[#CC5B3B] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />

                {/* Card Content Container */}
                <div className="relative z-10 flex flex-col items-center text-center w-full h-full">
                  {/* Number */}
                  <span 
                    className="text-[#CC5B3B] group-hover:text-white transition-colors duration-400 text-2xl font-bold mb-2 tracking-tight"
                    style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
                  >
                    {step.number}
                  </span>

                  {/* Title */}
                  <h3 className="text-[#182A3A] group-hover:text-white transition-colors duration-400 font-bold text-[15px] leading-snug mb-2 min-h-[38px] flex items-center justify-center">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#6B7A88] group-hover:text-white/95 transition-colors duration-400 text-xs leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default OurPromise;
