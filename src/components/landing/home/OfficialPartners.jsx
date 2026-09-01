import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../../animations/animation.js';

import logoAtout from '../../../assets/images/logos (1).png';
import logoApst from '../../../assets/images/logos (2).png';
import logoAndalucia from '../../../assets/images/logos (1).jpg';
import logoLegado from '../../../assets/images/logos (3).png';

const OfficialPartners = () => {
  const partners = [
    {
      logo: logoAtout,
      name: "ATOUT FRANCE",
      description: "Opérateur de l'État — Registre IM094180002"
    },
    {
      logo: logoApst,
      name: "APST",
      description: "Garantie Financière Intégrale"
    },
    {
      logo: logoAndalucia,
      name: "ANDALUCÍA",
      description: "Partenaire Destination Officiel"
    },
    {
      logo: logoLegado,
      name: "CAMINOS DE SEFARAD",
      description: "Réseau des Juderías d'Espagne"
    }
  ];

  return (
    <section className="w-full bg-[#FAF4EE] pt-6 sm:pt-10 pb-14 sm:pb-18 px-4 sm:px-6 lg:px-8 font-sora overflow-hidden border-t border-[#F0EBE1] relative">
      
      {/* Decorative subtle background circle pattern on top/right */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none opacity-25 select-none">
        <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#CC5B3B]/40">
          <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="200" cy="200" r="120" stroke="currentColor" strokeWidth="1" />
          <circle cx="200" cy="200" r="60" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
        </svg>
      </div>

      <div className="max-w-[1360px] mx-auto relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-10">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2.5 mb-2.5"
          >
            {/* Terracotta 4-petal flower icon */}
            <div className="w-5 h-5 rounded-full bg-[#FAF0E6] flex items-center justify-center p-1 text-[#CC5B3B]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#CC5B3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="7.5" r="3.5" />
                <circle cx="12" cy="16.5" r="3.5" />
                <circle cx="7.5" cy="12" r="3.5" />
                <circle cx="16.5" cy="12" r="3.5" />
                <circle cx="12" cy="12" r="1.5" fill="#CC5B3B" />
              </svg>
            </div>
            <span className="text-[#CC5B3B] text-[10.5px] sm:text-xs font-bold uppercase tracking-[0.25em]">
              GARANTIES & LABELS
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-[30px] sm:text-[40px] lg:text-[46px] text-[#182A3A] font-normal tracking-tight mb-2.5"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
          >
            Nos Partenaires Officiels
          </motion.h2>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#6B7A88] text-xs sm:text-[13px] max-w-2xl leading-relaxed font-normal"
          >
            Pour vous garantir un voyage d'exception en toute sérénité, Andha Luz Voyages collabore étroitement avec les institutions du tourisme et les organismes de garantie les plus rigoureux.
          </motion.p>
        </div>

        {/* 4 Partner Cards Grid with wider proportion & reduced height */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
        >
          {partners.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-[20px] sm:rounded-[24px] p-4 sm:p-5 shadow-xs hover:shadow-md border border-[#EDE7DC] flex flex-col items-center justify-between text-center min-h-[160px] sm:min-h-[175px] group cursor-pointer transition-shadow"
            >
              {/* Logo Area */}
              <div className="h-14 sm:h-16 w-full flex items-center justify-center p-1">
                <img 
                  src={item.logo} 
                  alt={item.name} 
                  className="max-h-12 max-w-[150px] object-contain transition-transform duration-300 group-hover:scale-108"
                />
              </div>

              {/* Text Info */}
              <div className="flex flex-col items-center mt-2 pt-2.5 border-t border-gray-100 w-full">
                <h4 className="text-[#182A3A] font-bold text-[11.5px] sm:text-xs uppercase tracking-wider mb-0.5">
                  {item.name}
                </h4>
                <p className="text-[#8C98A4] text-[10px] sm:text-[10.5px] leading-tight font-normal">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default OfficialPartners;
