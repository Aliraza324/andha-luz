import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Menu } from 'lucide-react';
import { fadeInUp, staggerContainer, buttonClick } from '../../../animations/animation.js';

import for1 from '../../../assets/images/FOR (1).png';
import for2 from '../../../assets/images/FOR (2).png';
import for3 from '../../../assets/images/FOR (3).png';
import for4 from '../../../assets/images/FOR (4).png';
import for5 from '../../../assets/images/FOR (5).png';
import starIcon from '../../../assets/icons/Vector.png';

const ExperiencesSection = () => {
  const experiences = [
    {
      img: for4, // Moved from 4th card
      badgeBg: "bg-[#B87A44]",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="m15 9-6 6" />
          <path d="m9 9 6 6" />
        </svg>
      ),
      title: "Culture & Heritage",
      description: "Explore the fascinating history of Andalusia: palaces, historic cities, UNESCO-listed monuments and centuries-old traditions."
    },
    {
      img: for3, // Moved from 3rd card
      badgeBg: "bg-[#668B75]",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 19L9 8l4.5 6 3-4 4.5 9H3z" />
        </svg>
      ),
      title: "Nature & Great Outdoors",
      description: "Natural parks, mountains, wild beaches and white villages in the heart of breathtaking landscapes."
    },
    {
      img: for5, // Moved from 5th (last) card
      badgeBg: "bg-[#C45E3D]",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="7.5" r="3.5" />
          <circle cx="12" cy="16.5" r="3.5" />
          <circle cx="7.5" cy="12" r="3.5" />
          <circle cx="16.5" cy="12" r="3.5" />
          <circle cx="12" cy="12" r="1.5" fill="white" />
        </svg>
      ),
      title: "Art of Living & Traditions",
      description: "Flamenco, gastronomy, local crafts and traditional festivals."
    },
    {
      img: for2, // Moved from 2nd card
      badgeBg: "bg-[#5B8880]",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="7.5" r="3.5" />
          <circle cx="12" cy="16.5" r="3.5" />
          <circle cx="7.5" cy="12" r="3.5" />
          <circle cx="16.5" cy="12" r="3.5" />
          <circle cx="12" cy="12" r="1.5" fill="white" />
        </svg>
      ),
      title: "Wellness & Relaxation",
      description: "Relaxing stays, spas, yoga, wellness retreats and exceptional accommodations for a timeless escape."
    },
    {
      img: for1, // Moved from 1st card
      badgeBg: "bg-[#B87A44]",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="white" />
        </svg>
      ),
      title: "Adventure & Activities",
      description: "Hiking, cycling, kayaking, horseback riding and unique experiences for thrill-seeking travelers."
    }
  ];

  return (
    <section className="w-full bg-[#FAF4EE] pt-8 sm:pt-12 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 font-sora overflow-hidden border-t border-[#F0EBE1]">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-3.5"
          >
            <img src={starIcon} alt="star" className="w-4 h-4 object-contain" />
            <span className="text-[#CC5B3B] text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em]">
              ANDALUSIA YOUR WAY
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-[34px] sm:text-[46px] lg:text-[52px] text-[#182A3A] font-normal tracking-tight mb-3"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
          >
            Experiences for every desire
          </motion.h2>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#6B7A88] text-xs sm:text-[13.5px] max-w-2xl leading-relaxed font-normal"
          >
            Culture, nature, wellness or authentic adventures... Choose the theme that inspires you and create your ideal trip.
          </motion.p>
        </div>

        {/* 5 Cards Grid with 2nd Card Featured Height (444px) */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 mb-10 sm:mb-14 items-start"
        >
          {experiences.map((card, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              whileHover={{ y: -7 }}
              transition={{ duration: 0.3 }}
              className={`bg-white rounded-[20px] shadow-sm border border-[#EDE7DC] flex flex-col justify-between group cursor-pointer relative ${
                idx === 1 ? 'h-[444px]' : 'h-[390px]'
              }`}
            >
              {/* Image Container with rounded top 20px */}
              <div className={`relative w-full rounded-t-[20px] overflow-hidden ${
                idx === 1 ? 'h-48 sm:h-52' : 'h-40 sm:h-44'
              }`}>
                <img 
                  src={card.img} 
                  alt={card.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
              </div>

              {/* Floating Icon Badge on Seam (Full round, never cut off) */}
              <div className="relative z-20 flex justify-center -mt-6">
                <div className={`w-12 h-12 rounded-full ${card.badgeBg} border-[3.5px] border-white shadow-md flex items-center justify-center transition-transform group-hover:scale-110`}>
                  {card.icon}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-5 pt-3 sm:pt-4 text-center flex flex-col items-center flex-grow justify-between">
                <div>
                  {/* Title */}
                  <h3 
                    className="text-[#182A3A] font-bold text-[15px] sm:text-base leading-tight mb-2 min-h-[40px] flex items-center justify-center"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#6B7A88] text-[11px] sm:text-xs leading-relaxed font-normal mb-5">
                    {card.description}
                  </p>
                </div>

                {/* Link */}
                <div className="pt-2">
                  <span className="text-[#CC5B3B] text-xs font-semibold flex items-center gap-1.5 group-hover:gap-2 transition-all">
                    <span>Discover</span>
                    <ArrowRight size={13} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Centered "See all our themes" Button */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.button 
            variants={buttonClick}
            whileHover="hover"
            whileTap="tap"
            className="border border-[#CC5B3B] text-[#182A3A] hover:bg-[#CC5B3B] hover:text-white px-7 py-3 rounded-full font-sora font-semibold text-xs sm:text-[13px] transition-all flex items-center gap-2.5 cursor-pointer shadow-xs group"
          >
            <Menu size={15} className="text-[#CC5B3B] group-hover:text-white transition-colors" />
            <span>See all our themes</span>
            <ArrowRight size={14} className="text-[#CC5B3B] group-hover:text-white transition-colors" />
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default ExperiencesSection;
