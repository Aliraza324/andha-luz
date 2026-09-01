import { Play, MapPin, Calendar, Users, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn, fadeInUp, buttonClick } from '../../../animations/animation.js';
import Dropdown from '../../../common/Dropdown.jsx';

import handsIcon from '../../../assets/icons/hands.png';
import arrowIcon from '../../../assets/icons/arrow.png';
import checkIcon from '../../../assets/icons/check.png';
import lockIcon from '../../../assets/icons/lock.png';

const Hero = () => {
  return (
    <section 
      className="relative w-full min-h-[900px] bg-cover bg-center bg-no-repeat flex items-center py-24 sm:py-0"
      style={{ backgroundImage: `url('/src/assets/images/hero.jpg')` }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mt-16 sm:mt-0">
        
        {/* Left Content */}
        <motion.div 
          variants={fadeInUp} 
          initial="hidden" 
          animate="visible"
          className="text-white flex flex-col justify-center"
        >
          <p className="font-sora text-xs sm:text-sm font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4">
            Discover the real
          </p>
          <h1 className="text-[42px] leading-[1.1] sm:text-6xl lg:text-[80px] text-[#dc6941] mb-4 sm:mb-6" style={{ fontFamily: "'MuseoModerno', sans-serif", fontWeight: 500 }}>
            Authentic<br />
            Andalusia
          </h1>
          
          <h2 className="font-sora text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6 max-w-lg">
            Tailor-made trips to the heart of the real Spain
          </h2>

          <div className="flex items-center gap-4 mb-4 sm:mb-6">
            <div className="w-16 sm:w-24 h-[1px] bg-white/50"></div>
            <div className="w-16 sm:w-24 h-[1px] bg-white/50"></div>
          </div>

          <p className="font-sora text-gray-100 max-w-md text-sm sm:text-base leading-relaxed mb-8">
            From Seville to Granada, from Córdoba to Ronda, experience unique cultural and human adventures, designed around your desires.
          </p>

          <motion.button 
            variants={buttonClick}
            whileHover="hover"
            whileTap="tap"
            className="bg-white hover:bg-gray-100 text-[#1b3447] font-sora font-semibold px-5 sm:px-6 py-3 rounded-full flex items-center justify-center gap-3 transition-colors w-full sm:w-fit"
          >
            <div className="bg-[#1b3447] text-white rounded-full p-1.5 flex items-center justify-center">
              <Play size={14} fill="currentColor" />
            </div>
            Discover Andalusia
          </motion.button>
        </motion.div>

        {/* Right Content - Search Widget */}
        <motion.div 
          variants={fadeIn} 
          initial="hidden" 
          animate="visible"
          transition={{ delay: 0.2 }}
          className="w-full max-w-md mx-auto lg:ml-auto lg:mr-0 mt-8 lg:mt-0 flex items-center"
        >
          <div className="bg-white/20 backdrop-blur-[24px] border border-white/20 rounded-[2.5rem] p-6 sm:p-10 w-full shadow-2xl">
            
            {/* Form Fields */}
            <div className="space-y-3 sm:space-y-4 mb-8 w-full flex flex-col">
              <Dropdown 
                containerClassName="relative block w-full"
                items={[
                  { label: 'Seville' }, { label: 'Granada' }, { label: 'Córdoba' }, { label: 'Ronda' }
                ]}
                trigger={
                  <motion.div whileTap={{ scale: 0.98 }} className="bg-[#FDFBF7] rounded-2xl px-6 py-3.5 flex items-center justify-between text-[#1b3447] cursor-pointer shadow-sm w-full">
                    <div className="flex items-center gap-4 font-sora text-[15px] font-bold">
                      <MapPin size={20} className="text-[#1b3447]" />
                      <span>Destinations</span>
                    </div>
                    <ChevronDownIcon />
                  </motion.div>
                }
              />

              <Dropdown 
                containerClassName="relative block w-full"
                items={[
                  { label: 'Self-Drive' }, { label: 'Guided Tour' }, { label: 'Luxury Stay' }
                ]}
                trigger={
                  <motion.div whileTap={{ scale: 0.98 }} className="bg-[#FDFBF7] rounded-2xl px-6 py-3.5 flex items-center justify-between text-[#1b3447] cursor-pointer shadow-sm w-full">
                    <div className="flex items-center gap-4 font-sora text-[15px] font-bold">
                      <Calendar size={20} className="text-[#1b3447]" />
                      <span>Travel types</span>
                    </div>
                    <ChevronDownIcon />
                  </motion.div>
                }
              />

              <Dropdown 
                containerClassName="relative block w-full"
                items={[
                  { label: '3-5 Days' }, { label: '1 Week' }, { label: '2 Weeks' }, { label: 'More than 2 Weeks' }
                ]}
                trigger={
                  <motion.div whileTap={{ scale: 0.98 }} className="bg-[#FDFBF7] rounded-2xl px-6 py-3.5 flex items-center justify-between text-[#1b3447] cursor-pointer shadow-sm w-full">
                    <div className="flex items-center gap-4 font-sora text-[15px] font-bold">
                      <Users size={20} className="text-[#1b3447]" />
                      <span>Duration</span>
                    </div>
                    <ChevronDownIcon />
                  </motion.div>
                }
              />
            </div>

            {/* Search Button */}
            <motion.button 
              variants={buttonClick}
              whileHover="hover"
              whileTap="tap"
              className="w-full bg-[#CC5B3B] hover:bg-[#b05237] text-white font-sora font-bold py-3.5 rounded-2xl flex items-center justify-center gap-2 mb-8 transition-colors shadow-md text-[15px]"
            >
              Search <Search size={18} />
            </motion.button>

            {/* Bottom Features */}
            <div className="grid grid-cols-2 gap-y-4 gap-x-2 sm:grid-cols-4 sm:gap-2 border-t border-white/10 pt-6">
              <FeatureItem icon={handsIcon} title="Specialist" subtitle="advisors" />
              <FeatureItem icon={arrowIcon} title="100%" subtitle="customizable trips" />
              <FeatureItem icon={checkIcon} title="Support" subtitle="Presence onsite / 24/7 support" />
              <FeatureItem icon={lockIcon} title="Secure" subtitle="payments" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Helper for ChevronDown to match design
const ChevronDownIcon = () => (
  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Helper for bottom feature items
const FeatureItem = ({ icon, title, subtitle }) => (
  <motion.div 
    whileHover={{ y: -2 }}
    className="flex flex-col items-center text-center text-white"
  >
    <div className="h-6 sm:h-7 mb-2 flex items-center justify-center">
      <img src={icon} alt={title} className="max-h-full object-contain filter brightness-0" />
    </div>
    <span className="font-sora text-[11px] sm:text-[10px] md:text-xs font-bold leading-tight">{title}</span>
    <span className="font-sora text-[9px] sm:text-[8px] md:text-[10px] leading-tight mt-0.5 sm:mt-1 opacity-80">{subtitle}</span>
  </motion.div>
);

export default Hero;
