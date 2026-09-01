import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';
import { fadeInLeft, fadeInRight, fadeInUp, buttonClick } from '../../../animations/animation.js';

import letImg from '../../../assets/images/let.png';

const TravelInspirationCTA = () => {
  const features = [
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#CC5B3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
      title: "Personalized",
      subtitle: "advice"
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#CC5B3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      ),
      title: "Itineraries",
      subtitle: "100% tailor-made"
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#CC5B3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="6" />
          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
        </svg>
      ),
      title: "Guaranteed",
      subtitle: "local expertise"
    }
  ];

  return (
    <section className="w-full bg-[#FAF4EE] py-8 sm:py-12 px-3 sm:px-6 lg:px-8 font-sora overflow-hidden border-t border-[#F0EBE1]">
      <div className="max-w-[1360px] mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="bg-[#F6EFE6] rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-sm border border-[#EDE7DC] grid grid-cols-1 lg:grid-cols-12 items-stretch"
        >
          {/* Left Content Column */}
          <motion.div 
            variants={fadeInLeft}
            className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between"
          >
            <div>
              {/* Badge */}
              <span className="text-[#CC5B3B] text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] block mb-2">
                TRAVEL INSPIRATION
              </span>

              {/* Heading */}
              <h2 
                className="text-[26px] sm:text-[34px] lg:text-[38px] text-[#182A3A] font-normal leading-[1.15] mb-2.5 tracking-tight"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
              >
                Let us create the trip that suits you
              </h2>

              {/* Paragraph */}
              <p className="text-[#6B7A88] text-xs sm:text-[13px] leading-relaxed mb-4 max-w-lg font-normal">
                Our expert advisors design your tailor-made itinerary, based on your desires, your budget and your dreams of escape.
              </p>

              {/* 3 Feature Items */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-2 py-3 border-y border-[#E5DACB] mb-5">
                {features.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-white shadow-xs flex items-center justify-center p-1.5 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[#182A3A] font-bold text-[11.5px] sm:text-xs leading-tight">
                        {item.title}
                      </span>
                      <span className="text-[#8C98A4] text-[10px] sm:text-[10.5px] leading-tight mt-0.5">
                        {item.subtitle}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <motion.button 
                variants={buttonClick}
                whileHover="hover"
                whileTap="tap"
                className="bg-[#B85D3D] hover:bg-[#a34f33] text-white font-sora font-semibold text-xs sm:text-[13px] px-6 py-3 rounded-full flex items-center gap-2 shadow-sm transition-colors cursor-pointer"
              >
                <Phone size={13} className="fill-white" />
                <span>Talk to an advisor</span>
                <ArrowRight size={13} />
              </motion.button>

              <div className="text-xs sm:text-[13px] text-[#6B7A88] flex items-center gap-1.5">
                <span>or</span>
                <a 
                  href="#quote" 
                  className="text-[#182A3A] font-bold underline underline-offset-2 hover:text-[#CC5B3B] transition-colors"
                >
                  Request a quote
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Image Column */}
          <motion.div 
            variants={fadeInRight}
            className="lg:col-span-6 relative min-h-[220px] sm:min-h-[280px] lg:min-h-full"
          >
            <img 
              src={letImg} 
              alt="Alhambra Granada Spain sunset" 
              className="w-full h-full object-cover absolute inset-0"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TravelInspirationCTA;
