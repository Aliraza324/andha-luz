import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { 
  fadeInUp, 
  fadeInLeft, 
  fadeInRight, 
  staggerContainer, 
  buttonClick 
} from '../../../animations/animation.js';
import Counter from '../../../common/Counter.jsx';

// Icons & Map Image
import starIcon from '../../../assets/icons/Vector.png';
import iconCompass from '../../../assets/icons/Icon_Container.png';
import iconBuilding from '../../../assets/icons/Icon_Container (1).png';
import iconShield from '../../../assets/icons/Icon_Container (2).png';
import iconPalm from '../../../assets/icons/Icon_Container (3).png';

import mapPinIcon from '../../../assets/icons/map-pin.png';
import sparklesIcon from '../../../assets/icons/sparkles.png';
import bookIcon from '../../../assets/icons/Vector (1).png';
import heartIcon from '../../../assets/icons/Vector (2).png';

import mapIllustration from '../../../assets/images/Travling.png';

const TravelAndalusia = () => {
  const features = [
    {
      icon: iconCompass,
      title: "Unique cultural and natural itineraries"
    },
    {
      icon: iconBuilding,
      title: "Authentic and local experiences"
    },
    {
      icon: iconShield,
      title: "Expert and passionate guidance"
    },
    {
      icon: iconPalm,
      title: "Responsible and tailor-made travel"
    }
  ];

  const stats = [
    {
      icon: mapPinIcon,
      value: 12,
      suffix: "+",
      color: "text-[#182A3A]",
      title: "Destinations",
      subtitle: "must-see"
    },
    {
      icon: sparklesIcon,
      value: 100,
      suffix: "+",
      color: "text-[#182A3A]",
      title: "Experiences",
      subtitle: "unique"
    },
    {
      icon: bookIcon,
      value: 15,
      suffix: " years+",
      color: "text-[#CC5B3B]",
      title: "Of local expertise",
      subtitle: "at your service"
    },
    {
      icon: heartIcon,
      value: 100,
      suffix: "%",
      color: "text-[#CC5B3B]",
      title: "Tailor-made trips",
      subtitle: "and personalized"
    }
  ];

  return (
    <section className="w-full bg-[#FAF4EE] py-12 sm:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden font-sora">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Grid: Left Content + Right Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Text & Features Column */}
          <motion.div 
            className="lg:col-span-5 flex flex-col justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeInLeft}
          >
            {/* Top Subtitle Badge */}
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <img src={starIcon} alt="star" className="w-3.5 h-3.5 object-contain" />
              <span className="text-[#CC5B3B] text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em]">
                AUTHENTIC SPAIN
              </span>
            </div>

            {/* Main Heading */}
            <motion.h2 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="text-[32px] sm:text-[42px] lg:text-[46px] text-[#182A3A] font-bold leading-[1.12] mb-4"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
            >
              Traveling in<br />
              Andalusia
            </motion.h2>

            {/* Description Paragraph */}
            <p className="text-[#5D6D7E] text-xs sm:text-[13.5px] leading-relaxed mb-5 sm:mb-6 max-w-md font-normal">
              Off the beaten tourist paths, cultural itineraries, hiking trails, on foot or by bike, will take you to discover the most beautiful landscapes of a region steeped in history and culture. From white villages to Nasrid palaces, through olive groves and the Mediterranean coast, Andalusia reveals its most hidden treasures.
            </p>

            {/* 4 Feature Items */}
            <motion.div 
              className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-7"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {features.map((item, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  className="flex items-center gap-3 sm:gap-3.5 group cursor-default"
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0 flex items-center justify-center transition-transform group-hover:scale-110">
                    <img src={item.icon} alt="icon" className="w-full h-full object-contain" />
                  </div>
                  <span className="text-[#182A3A] font-semibold text-xs sm:text-sm leading-snug">
                    {item.title}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Call To Action Button */}
            <div>
              <motion.button 
                variants={buttonClick}
                whileHover="hover"
                whileTap="tap"
                className="bg-[#CC5B3B] hover:bg-[#b84e30] text-white font-sora font-semibold text-xs sm:text-sm px-6 py-2.5 sm:py-3 rounded-full flex items-center gap-2.5 shadow-sm transition-colors w-full sm:w-fit justify-center"
              >
                <span>Learn more about Andalusia</span>
                <ArrowRight size={16} />
              </motion.button>
            </div>
          </motion.div>

          {/* Right Map Column (Enlarged) */}
          <motion.div 
            className="lg:col-span-7 flex justify-center lg:justify-end items-center relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeInRight}
          >
            <div className="w-full max-w-2xl lg:max-w-none relative select-none">
              <motion.img 
                src={mapIllustration} 
                alt="Map of Andalusia" 
                className="w-full h-auto object-contain drop-shadow-md scale-100 sm:scale-105 lg:scale-110 transform-gpu origin-center"
                whileHover={{ scale: 1.13 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              />
            </div>
          </motion.div>

        </div>

        {/* Bottom Floating Stats Card */}
        <motion.div 
          className="mt-10 sm:mt-14 bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-sm border border-[#F0EBE1]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className={`flex items-center gap-3.5 ${idx !== 0 ? 'pt-4 sm:pt-0 sm:pl-5 lg:pl-6' : ''}`}
              >
                {/* Icon Container */}
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FAF3EE] flex items-center justify-center flex-shrink-0">
                  <img src={stat.icon} alt={stat.title} className="w-5 h-5 object-contain" />
                </div>

                {/* Stat Text */}
                <div className="flex flex-col">
                  <div className={`text-[22px] sm:text-[25px] font-bold ${stat.color} font-sora leading-tight`}>
                    <Counter value={stat.value} suffix={stat.suffix} duration={1.8} />
                  </div>
                  <span className="text-[#182A3A] font-bold text-xs sm:text-[12.5px] leading-tight">
                    {stat.title}
                  </span>
                  <span className="text-[#8C98A4] text-[10px] sm:text-[11px] leading-tight">
                    {stat.subtitle}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default TravelAndalusia;
