import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mountain, Sun, UtensilsCrossed, Users, Heart, Compass } from 'lucide-react';
import { fadeInLeft, fadeInRight, fadeInUp, staggerContainer, buttonClick } from '../../../animations/animation.js';

import uniqueImg from '../../../assets/images/uniqe.png';
import starLogo from '../../../assets/icons/star-logo.png';
import compassIcon from '../../../assets/icons/Vector (3).png';
import heartIcon from '../../../assets/icons/Vector (2).png';
import userIcon from '../../../assets/icons/user.png';

const UniqueHeritage = () => {
  const highlights = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C55938" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="m15 9-6 6" />
          <path d="m9 9 6 6" />
        </svg>
      ),
      title: "Exceptional historical heritage"
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C55938" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="7.5" r="3.5" />
          <path d="M3 19v-1a5 5 0 0 1 10 0v1" />
          <path d="M15 6a3 3 0 0 1 0 5" />
          <path d="M18 19v-1a4 4 0 0 0-3.5-3.8" />
        </svg>
      ),
      title: "Living culture & traditions"
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C55938" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 19L9 8l4.5 6 3-4 4.5 9H3z" />
        </svg>
      ),
      title: "Varied and preserved natural landscapes"
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C55938" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3.5" />
          <path d="M12 2v2.5M12 19.5V22M4.93 4.93l1.77 1.77M17.3 17.3l1.77 1.77M2 12h2.5M19.5 12H22M6.7 17.3l-1.77 1.77M19.07 4.93l-1.77 1.77" />
        </svg>
      ),
      title: "Mild climate all year round"
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C55938" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2v20M18 7a2.5 2.5 0 0 0 2.5-2.5V2H18v5z" />
          <path d="M6 2v20M6 7V2M3.5 2v4a2.5 2.5 0 0 0 5 0V2" />
        </svg>
      ),
      title: "Rich and flavorful gastronomy"
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C55938" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      ),
      title: "Andalusian art of living"
    }
  ];

  return (
    <section className="w-full bg-[#FAF4EE] pt-14 sm:pt-20 pb-10 sm:pb-14 px-4 sm:px-6 lg:px-8 font-sora overflow-hidden border-t border-[#F0EBE1] relative">
      
      {/* Decorative subtle background circle pattern on bottom right */}
      <div className="absolute right-0 bottom-0 w-96 h-96 pointer-events-none opacity-30 select-none">
        <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#CC5B3B]/40">
          <circle cx="300" cy="300" r="180" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="300" cy="300" r="120" stroke="currentColor" strokeWidth="1" />
          <circle cx="300" cy="300" r="60" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Image with Overlaid Floating Card */}
          <motion.div 
            className="lg:col-span-6 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeInLeft}
          >
            {/* Main Scenic Image */}
            <div className="rounded-[32px] sm:rounded-[36px] overflow-hidden shadow-lg border border-white/60 relative aspect-[4/3] w-full">
              <img 
                src={uniqueImg} 
                alt="Alhambra Granada Spain" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Overlaid Floating Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="sm:absolute sm:-bottom-8 sm:left-4 bg-white rounded-[24px] sm:rounded-[28px] p-6 sm:p-7 border border-[#EDE7DC] max-w-sm mt-4 sm:mt-0"
            >
              <div className="flex items-center gap-2.5 mb-2.5">
                {/* Exact Terracotta 4-Petal Clover Vector Icon */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#CC5B3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                  <circle cx="12" cy="7.5" r="3.5" />
                  <circle cx="12" cy="16.5" r="3.5" />
                  <circle cx="7.5" cy="12" r="3.5" />
                  <circle cx="16.5" cy="12" r="3.5" />
                  <circle cx="12" cy="12" r="1.5" fill="#CC5B3B" />
                </svg>
                <h3 
                  className="text-[#182A3A] font-bold text-base sm:text-[17px] leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Andalusia, a land of exception
                </h3>
              </div>

              <p className="text-[#6B7A88] text-[11px] sm:text-xs leading-relaxed font-normal mb-5">
                Between living traditions, historical heritage and breathtaking landscapes, Andalusia invites you to experience unforgettable moments.
              </p>

              <motion.button 
                variants={buttonClick}
                whileHover="hover"
                whileTap="tap"
                className="border border-[#CC5B3B] text-[#CC5B3B] hover:bg-[#CC5B3B] hover:text-white px-5 py-2 rounded-full font-sora font-semibold text-xs transition-all flex items-center gap-2 cursor-pointer shadow-2xs"
              >
                <span>Learn more</span>
                <ArrowRight size={14} />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column: Title, Description, and 6 Features Grid */}
          <motion.div 
            className="lg:col-span-6 flex flex-col justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeInRight}
          >
            {/* Top Badge */}
            <div className="mb-2 sm:mb-3">
              <span className="text-[#CC5B3B] text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em]">
                ANDALUSIA
              </span>
            </div>

            {/* Heading */}
            <h2 
              className="text-[32px] sm:text-[44px] lg:text-[48px] text-[#182A3A] font-normal leading-[1.14] mb-4 tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
            >
              A unique heritage, infinite emotions
            </h2>

            {/* Description Paragraph */}
            <p className="text-[#5D6D7E] text-xs sm:text-[13.5px] leading-relaxed mb-8 sm:mb-10 max-w-xl font-normal">
              From the majestic palaces of Granada to the perched white villages, from the wild beaches of the Mediterranean coast to olive grove landscapes stretching as far as the eye can see, each region reveals an authentic and enchanting facet.
            </p>

            {/* 6 Features (2x3 Grid matching reference design) */}
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 sm:gap-y-6 gap-x-6 sm:gap-x-8"
            >
              {highlights.map((item, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  className="flex items-center gap-3.5 group cursor-default"
                >
                  {/* Soft Peach Rounded Container Box */}
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-[14px] sm:rounded-[16px] bg-[#F7ECE1] flex items-center justify-center p-2.5 flex-shrink-0 transition-transform group-hover:scale-105">
                    {item.icon}
                  </div>

                  {/* Title */}
                  <span className="text-[#182A3A] font-bold text-xs sm:text-[13.5px] leading-snug">
                    {item.title}
                  </span>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default UniqueHeritage;
