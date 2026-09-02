import React from 'react';
import { motion } from 'framer-motion';
import { Headphones, Mail, MessageCircle, MapPin } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../../../animations/animation.js';

const ContactSupportBar = () => {
  const contactItems = [
    {
      icon: <Headphones size={18} className="text-[#CC5B3B]" />,
      title: "Talk to an advisor",
      value: "04 40 15 15 11",
      link: "tel:0440151511",
      subtext: "Mon - Fri: 9am - 6pm"
    },
    {
      icon: <Mail size={18} className="text-[#CC5B3B]" />,
      title: "Write to us",
      value: "info@andhaluz-voyages.com",
      link: "mailto:info@andhaluz-voyages.com",
      subtext: "Response within 24h"
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#CC5B3B">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.79 14.11c-.24.68-1.39 1.3-1.92 1.38-.5.08-1.14.12-3.32-.78-2.62-1.09-4.31-3.76-4.44-3.93-.13-.18-1.06-1.41-1.06-2.69 0-1.28.67-1.91.91-2.17.24-.26.53-.33.7-.33.18 0 .36 0 .52.01.17.01.4-.06.62.48.24.57.81 1.98.88 2.13.07.14.12.31.02.5-.09.18-.14.3-.29.46-.14.17-.3.38-.43.51-.14.15-.29.31-.13.59.17.28.75 1.23 1.6 1.99 1.1.98 2.03 1.29 2.31 1.43.29.14.46.12.63-.08.17-.19.72-.84.91-1.13.19-.29.38-.24.64-.14.26.09 1.66.78 1.95.93.29.14.48.22.55.34.07.13.07.74-.17 1.42z" />
        </svg>
      ),
      title: "WhatsApp",
      value: "+33 6 85 42 37 81",
      link: "https://wa.me/33685423781",
      subtext: "Quick response"
    },
    {
      icon: <MapPin size={18} className="text-[#CC5B3B]" />,
      title: "Our offices",
      value: "Granada, Andalusia",
      link: "#",
      subtext: "Spain"
    }
  ];

  return (
    <section className="w-full bg-[#FAF4EE] py-14 sm:py-20 px-4 sm:px-6 lg:px-8 font-sora overflow-hidden border-t border-[#F0EBE1]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          {/* Top Star Icon */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-[#CC5B3B] mb-2.5"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#CC5B3B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </motion.div>

          {/* Main Heading */}
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[30px] sm:text-[40px] lg:text-[46px] text-[#182A3A] font-normal tracking-tight mb-3"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
          >
            Have a question? We're here for you.
          </motion.h2>

          {/* Subtle line with center star */}
          <div className="flex items-center gap-3">
            <div className="w-16 sm:w-24 h-[1px] bg-[#E2D8CC]" />
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#CC5B3B" strokeWidth="1.8">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <div className="w-16 sm:w-24 h-[1px] bg-[#E2D8CC]" />
          </div>
        </div>

        {/* 4 Contact Items Grid with vertical separators */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-[#E5DACB]"
        >
          {contactItems.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              whileHover={{ y: -3 }}
              className="flex items-center gap-3.5 px-2 lg:px-6 py-1 group"
            >
              {/* Round Icon Badge */}
              <div className="w-12 h-12 rounded-full bg-white shadow-xs border border-[#EDE7DC] flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-108 group-hover:shadow-sm">
                {item.icon}
              </div>

              {/* Text Information */}
              <div className="flex flex-col">
                <span className="text-[#182A3A] font-semibold text-xs leading-tight">
                  {item.title}
                </span>

                <a 
                  href={item.link}
                  className="text-[#B85D3D] hover:text-[#9c4528] font-bold text-xs sm:text-[13px] leading-tight my-0.5 transition-colors"
                >
                  {item.value}
                </a>

                <span className="text-[#8C98A4] text-[10.5px] leading-tight">
                  {item.subtext}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default ContactSupportBar;
