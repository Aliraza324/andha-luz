import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, ChevronLeft, ChevronRight, Users } from 'lucide-react';
import { 
  fadeInUp, 
  staggerContainer, 
  buttonClick 
} from '../../../animations/animation.js';

// Icons & Card Images
import starLogo from '../../../assets/icons/star-logo.png';
import compassIcon from '../../../assets/icons/Vector (3).png';
import userIcon from '../../../assets/icons/user.png';
import messageIcon from '../../../assets/icons/message-square.png';
import mapFolderIcon from '../../../assets/icons/feature-icon.png';
import shieldIcon from '../../../assets/icons/shield.png';

import cardImg1 from '../../../assets/images/our (1).png';
import cardImg2 from '../../../assets/images/our (2).png';
import cardImg3 from '../../../assets/images/our (3).png';
import cardImg4 from '../../../assets/images/our (4).png';

const TailorMadeIdeas = () => {
  const [activeFilter, setActiveFilter] = useState('Family');

  const filters = [
    { label: 'Family', hasIcon: true },
    { label: 'Stay' },
    { label: 'Luxury travel' },
    { label: 'Northern lights' },
    { label: 'Road trip' }
  ];

  const travelCards = [
    {
      id: 1,
      image: cardImg4,
      tag: "SELF-DRIVE TOUR",
      title: "In the heart of Réunion's Cirques with your tribe",
      duration: "10 days / 7 nights",
      price: "From €1,950 / person"
    },
    {
      id: 2,
      image: cardImg2,
      tag: "PRIVATE TOUR",
      title: "Eco-friendly discovery of Kenya with my tribe",
      duration: "10 days / 7 nights",
      price: "From €4,720 / person"
    },
    {
      id: 3,
      image: cardImg3,
      tag: "PRIVATE TOUR",
      title: "Eco-friendly discovery of Kenya with my tribe",
      duration: "10 days / 7 nights",
      price: "From €4,720 / person"
    },
    {
      id: 4,
      image: cardImg1,
      tag: "STAY",
      title: "Andalusia, between culture and the sweetness of life",
      duration: "8 days / 7 nights",
      price: "From €1,290 / person"
    }
  ];

  const bottomFeatures = [
    {
      icon: userIcon,
      title: "Specialist",
      subtitle: "advisors"
    },
    {
      icon: messageIcon,
      title: "Listening and",
      subtitle: "personalized advice"
    },
    {
      icon: mapFolderIcon,
      title: "Itineraries",
      subtitle: "100% tailor-made"
    },
    {
      icon: shieldIcon,
      title: "Support before, during",
      subtitle: "and after your trip"
    }
  ];

  return (
    <section className="w-full bg-[#FAF4EE] py-14 sm:py-20 px-4 sm:px-6 lg:px-8 font-sora overflow-hidden border-t border-[#F0EBE1]">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-10">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-3 bg-[#FAF3EE] px-3 py-1 rounded-full"
          >
            <img src={starLogo} alt="star" className="w-4 h-4 object-contain" />
            <span className="text-[#CC5B3B] text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em]">
              OUR TAILOR-MADE TRAVEL IDEAS
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-[34px] sm:text-[44px] lg:text-[50px] text-[#182A3A] font-bold tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
          >
            Our tailor-made travel ideas
          </motion.h2>
        </div>

        {/* Filters and Navigation Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 sm:mb-10">
          {/* Filter Pills */}
          <div className="flex items-center gap-2.5 flex-wrap justify-center sm:justify-start">
            {filters.map((filter) => {
              const isActive = activeFilter === filter.label;
              return (
                <button
                  key={filter.label}
                  onClick={() => setActiveFilter(filter.label)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-[13px] font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-[#B85D3D] text-white shadow-sm'
                      : 'bg-white text-[#182A3A] hover:bg-gray-50 border border-gray-100 shadow-sm'
                  }`}
                >
                  {filter.hasIcon && <Users size={14} className={isActive ? 'text-white' : 'text-[#182A3A]'} />}
                  <span>{filter.label}</span>
                </button>
              );
            })}
          </div>

          {/* Carousel Next / Prev Arrows */}
          <div className="flex items-center gap-2">
            <button 
              aria-label="Previous"
              className="w-9 h-9 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-[#182A3A] hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <ChevronLeft size={18} />
            </button>
            <button 
              aria-label="Next"
              className="w-9 h-9 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-[#182A3A] hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12 sm:mb-16"
        >
          {travelCards.map((card) => (
            <motion.div
              key={card.id}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col border border-[#F0EBE1] group"
            >
              {/* Image Container with Badge */}
              <div className="relative h-[210px] w-full overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3.5 right-3.5 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold tracking-wider text-[#182A3A] uppercase shadow-sm">
                  {card.tag}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-[#182A3A] font-bold text-[15px] leading-snug mb-3 line-clamp-2 min-h-[42px]">
                    {card.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-[#6B7A88] mb-1">
                    <Calendar size={13} className="text-[#182A3A]" />
                    <span>{card.duration}</span>
                  </div>

                  <p className="text-xs text-[#6B7A88] mb-5">
                    {card.price}
                  </p>
                </div>

                <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[#CC5B3B] font-bold text-xs group-hover:underline flex items-center gap-1.5">
                    Discover the trip
                  </span>
                  <ArrowRight size={14} className="text-[#CC5B3B] transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom "Have a project in mind?" Banner (No background box) */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeInUp}
          className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 pt-4 sm:pt-6"
        >
          {/* Left Heading Block */}
          <div className="flex items-center gap-4 w-full lg:w-auto">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white shadow-sm flex items-center justify-center p-3.5 flex-shrink-0">
              <img src={compassIcon} alt="compass" className="w-8 h-8 object-contain" />
            </div>
            <div>
              <h3 className="text-[#182A3A] font-bold text-base sm:text-lg leading-tight mb-1">
                Have a project in mind?
              </h3>
              <p className="text-[#7A8A99] text-xs sm:text-[13px] leading-tight font-normal">
                Let's talk about it and create the trip that suits you.
              </p>
            </div>
          </div>

          {/* Middle 4 Feature Items */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full lg:w-auto pt-2 lg:pt-0">
            {bottomFeatures.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FAF3EE] flex items-center justify-center p-2 mb-2">
                  <img src={item.icon} alt={item.title} className="h-4 sm:h-5 object-contain" />
                </div>
                <span className="text-[#182A3A] font-bold text-[11px] sm:text-xs leading-tight">
                  {item.title}
                </span>
                <span className="text-[#8C98A4] text-[10px] sm:text-[11px] leading-tight mt-0.5">
                  {item.subtitle}
                </span>
              </div>
            ))}
          </div>

          {/* Right CTA Button */}
          <div className="w-full lg:w-auto flex justify-center lg:justify-end">
            <motion.button 
              variants={buttonClick}
              whileHover="hover"
              whileTap="tap"
              className="bg-[#B85D3D] hover:bg-[#a35034] text-white font-sora font-semibold text-xs sm:text-sm px-6 sm:px-7 py-3 sm:py-3.5 rounded-full flex items-center gap-2 shadow-sm transition-colors cursor-pointer w-full sm:w-auto justify-center whitespace-nowrap"
            >
              <span>Request a quote</span>
              <ArrowRight size={16} />
            </motion.button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default TailorMadeIdeas;
