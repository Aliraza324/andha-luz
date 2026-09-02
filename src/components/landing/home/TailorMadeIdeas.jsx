import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ArrowRight, ChevronLeft, ChevronRight, Users, MapPin } from 'lucide-react';
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
import tourSahara from '../../../assets/images/tour-sahara.jpg';
import tourRonda from '../../../assets/images/tour-ronda.jpg';
import tourCosta from '../../../assets/images/tour-costa.jpg';
import tourCordoba from '../../../assets/images/tour-cordoba.jpg';
import mapCardImg from '../../../assets/images/our (2).png';

const TailorMadeIdeas = () => {
  const [activeFilter, setActiveFilter] = useState('Family');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [desktopIndex, setDesktopIndex] = useState(0);
  const [direction, setDirection] = useState(0);

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
      price: "From €1,950 / person",
      categories: ["Family", "Road trip"]
    },
    {
      id: 2,
      image: tourRonda,
      tag: "PRIVATE TOUR",
      title: "The White Villages of Ronda and Andalusia Heritage",
      duration: "7 days / 6 nights",
      price: "From €1,850 / person",
      categories: ["Stay", "Family", "Road trip"]
    },
    {
      id: 3,
      image: cardImg3,
      tag: "PRIVATE TOUR",
      title: "Eco-friendly discovery of Kenya with my tribe",
      duration: "10 days / 7 nights",
      price: "From €4,720 / person",
      categories: ["Family", "Luxury travel"]
    },
    {
      id: 4,
      image: cardImg1,
      tag: "STAY",
      title: "Andalusia, between culture and the sweetness of life",
      duration: "8 days / 7 nights",
      price: "From €1,290 / person",
      categories: ["Stay", "Family"]
    },
    {
      id: 5,
      image: tourSahara,
      tag: "LUXURY TRAVEL",
      title: "Sahara Golden Dunes & Luxury Desert Glamping",
      duration: "6 days / 5 nights",
      price: "From €2,390 / person",
      categories: ["Luxury travel", "Stay", "Road trip"]
    },
    {
      id: 6,
      image: tourCosta,
      tag: "ROAD TRIP",
      title: "Costa del Sol Luxury Seaside & Sun-drenched Escapes",
      duration: "8 days / 7 nights",
      price: "From €1,640 / person",
      categories: ["Road trip", "Stay", "Luxury travel"]
    },
    {
      id: 7,
      image: tourCordoba,
      tag: "CULTURE TOUR",
      title: "Secret Patios & Historic Wonders of Córdoba",
      duration: "5 days / 4 nights",
      price: "From €1,150 / person",
      categories: ["Stay", "Family", "Luxury travel"]
    },
    {
      id: 8,
      image: cardImg3,
      tag: "NORTHERN LIGHTS",
      title: "Lapland Wilderness & Aurora Borealis Expedition",
      duration: "7 days / 6 nights",
      price: "From €2,850 / person",
      categories: ["Northern lights", "Luxury travel", "Family"]
    }
  ];

  // Dynamically filter cards based on activeFilter
  const filteredCards = travelCards.filter((card) =>
    card.categories.includes(activeFilter)
  );

  const displayCards = filteredCards.length > 0 ? filteredCards : travelCards;
  const maxDesktopIndex = Math.max(0, displayCards.length - 4);

  const handleFilterSelect = (filterLabel) => {
    setActiveFilter(filterLabel);
    setCurrentIndex(0);
    setDesktopIndex(0);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % displayCards.length);
    setDesktopIndex((prev) => (prev >= maxDesktopIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + displayCards.length) % displayCards.length);
    setDesktopIndex((prev) => (prev <= 0 ? maxDesktopIndex : prev - 1));
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: 'easeOut' }
    },
    exit: (dir) => ({
      x: dir < 0 ? 60 : -60,
      opacity: 0,
      transition: { duration: 0.2, ease: 'easeIn' }
    })
  };

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
                  onClick={() => handleFilterSelect(filter.label)}
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
              onClick={handlePrev}
              className="w-9 h-9 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-[#182A3A] hover:bg-gray-50 active:scale-95 transition-transform cursor-pointer"
            >
              <ChevronLeft size={18} />
            </button>
            <button 
              aria-label="Next"
              onClick={handleNext}
              className="w-9 h-9 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-[#182A3A] hover:bg-gray-50 active:scale-95 transition-transform cursor-pointer"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Mobile View Slider (< sm) */}
        <div className="block sm:hidden mb-12">
          <div className="relative overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={`${activeFilter}-${currentIndex}`}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = Math.abs(offset.x) * velocity.x;
                  if (swipe < -100 || offset.x < -50) {
                    handleNext();
                  } else if (swipe > 100 || offset.x > 50) {
                    handlePrev();
                  }
                }}
                className="bg-white rounded-[24px] overflow-hidden shadow-sm flex flex-col border border-[#F0EBE1] cursor-grab active:cursor-grabbing select-none group"
              >
                {/* 3D Flip Image Container on Mobile (Tap/Hover to Flip) */}
                <div className="relative h-[220px] w-full [perspective:1000px] overflow-hidden group/flip">
                  <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover/flip:[transform:rotateY(180deg)]">
                    {/* Front: Destination Photo */}
                    <div className="absolute inset-0 w-full h-full [backface-visibility:hidden]">
                      <img 
                        src={displayCards[currentIndex]?.image} 
                        alt={displayCards[currentIndex]?.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3.5 right-3.5 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold tracking-wider text-[#182A3A] uppercase shadow-sm">
                        {displayCards[currentIndex]?.tag}
                      </div>
                    </div>

                    {/* Back: Itinerary Map */}
                    <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#FAF4EE]">
                      <img 
                        src={mapCardImg} 
                        alt="Itinerary Map" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3.5 right-3.5 bg-[#B85D3D] text-white px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase shadow-sm">
                        ITINERARY MAP
                      </div>
                      <div className="absolute bottom-2.5 left-3 right-3 bg-black/60 backdrop-blur-xs text-white text-[11px] py-1 px-2.5 rounded-lg text-center font-medium">
                        Route & Accommodations
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex flex-col justify-between">
                  <div>
                    <h3 className="text-[#182A3A] font-bold text-base leading-snug mb-3">
                      {displayCards[currentIndex]?.title}
                    </h3>

                    <div className="flex items-center gap-1.5 text-xs text-[#6B7A88] mb-1.5">
                      <Calendar size={14} className="text-[#182A3A]" />
                      <span>{displayCards[currentIndex]?.duration}</span>
                    </div>

                    <p className="text-xs font-semibold text-[#182A3A] mb-5">
                      {displayCards[currentIndex]?.price}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-[#CC5B3B] font-bold text-xs flex items-center gap-1.5">
                      Discover the trip
                    </span>
                    <ArrowRight size={14} className="text-[#CC5B3B]" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {displayCards.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                aria-label={`Go to travel idea ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex 
                    ? 'w-6 bg-[#B85D3D]' 
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop / Large Screen Slider (>= sm) */}
        <div className="hidden sm:block overflow-hidden mb-12 sm:mb-16 -mx-2 px-2 py-4">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeFilter}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="flex gap-5 sm:gap-6 transition-transform duration-500 ease-out"
              style={{ 
                transform: `translateX(calc(-${desktopIndex} * ((100% - 72px) / 4 + 24px)))` 
              }}
            >
              {displayCards.map((card) => (
                <div
                  key={card.id}
                  className="w-[calc((100%-20px)/2)] lg:w-[calc((100%-72px)/4)] flex-shrink-0"
                >
                  <div className="bg-white rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col border border-[#F0EBE1] group h-full">
                    
                    {/* 3D Flip Card Image Container */}
                    <div className="relative h-[215px] w-full [perspective:1000px] overflow-hidden group/flip">
                      <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover/flip:[transform:rotateY(180deg)]">
                        
                        {/* Front: Destination Photo */}
                        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden]">
                          <img 
                            src={card.image} 
                            alt={card.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute top-3.5 right-3.5 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold tracking-wider text-[#182A3A] uppercase shadow-sm">
                            {card.tag}
                          </div>
                        </div>

                        {/* Back: Itinerary Map (our (2).png) */}
                        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#FAF4EE]">
                          <img 
                            src={mapCardImg} 
                            alt="Itinerary Map" 
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-3.5 right-3.5 bg-[#B85D3D] text-white px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase shadow-sm">
                            ITINERARY MAP
                          </div>
                          <div className="absolute bottom-2.5 left-3 right-3 bg-black/60 backdrop-blur-xs text-white text-[11px] py-1 px-2.5 rounded-lg text-center font-medium">
                            Route & Accommodations
                          </div>
                        </div>

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

                        <p className="text-xs font-semibold text-[#182A3A] mb-5">
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

                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

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
