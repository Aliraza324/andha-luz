import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  UserCheck, 
  Sliders, 
  MapPin, 
  ShieldCheck, 
  Lock, 
  ArrowRight, 
  Send
} from 'lucide-react';
import { fadeInUp, staggerContainer, buttonClick, fadeIn } from '../animations/animation.js';
import logoImg from '../assets/images/logo.png';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert('Thank you for subscribing!');
      setEmail('');
    }
  };

  const reassuranceItems = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C48A48" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="7" r="4" />
          <path d="M5.5 21a8.38 8.38 0 0 1 13 0" />
          <path d="m19 11 2 2 4-4" />
        </svg>
      ),
      title: "Specialist advisors",
      subtext: "at your service"
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C48A48" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <line x1="4" y1="21" x2="4" y2="14" />
          <line x1="4" y1="10" x2="4" y2="3" />
          <line x1="12" y1="21" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12" y2="3" />
          <line x1="20" y1="21" x2="20" y2="16" />
          <line x1="20" y1="12" x2="20" y2="3" />
          <line x1="1" y1="14" x2="7" y2="14" />
          <line x1="9" y1="8" x2="15" y2="8" />
          <line x1="17" y1="16" x2="23" y2="16" />
        </svg>
      ),
      title: "100% customizable trips",
      subtext: "tailored to your desires"
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C48A48" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      title: "On-destination presence",
      subtext: "7 days a week"
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C48A48" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
      title: "Secure payments",
      subtext: "and protected"
    }
  ];

  return (
    <footer className="w-full font-sora">
      
      {/* 1. Main Dark Emerald Footer Body */}
      <div className="bg-[#071914] text-white border-t border-[#162D26] w-full py-8 sm:py-10 lg:py-11 px-4 sm:px-8 lg:px-12">
        <div className="w-full max-w-[1380px] mx-auto">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8 items-stretch"
          >
            
            {/* Col 1: Brand Info (3 cols) */}
            <motion.div variants={fadeInUp} className="lg:col-span-3 flex flex-col justify-between">
              <div>
                <motion.img 
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  src={logoImg} 
                  alt="Andha Luz Voyages" 
                  className="h-10 sm:h-11 w-auto object-contain mb-4 cursor-pointer" 
                />
                
                <p className="text-[#9EAEA8] text-xs sm:text-[12.5px] leading-[1.65] max-w-[270px] font-normal mb-5">
                  Specialist in tailor-made trips to Andalusia and Spain. Authentic experiences, created with passion and local expertise.
                </p>

                <div className="flex items-center gap-1.5 text-[#C48A48] text-xs italic mb-5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C48A48" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <span style={{ fontFamily: "'Playfair Display', serif" }}>
                    Andalusia, our land, your story.
                  </span>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-2.5 pt-2">
                <motion.a whileHover={{ scale: 1.15, y: -2 }} whileTap={{ scale: 0.95 }} href="#fb" className="w-7 h-7 rounded-full border border-[#203D34] flex items-center justify-center text-[#9EAEA8] hover:text-white hover:border-[#C48A48] hover:bg-[#C48A48]/10 transition-colors">
                  <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.004 3.98h2.004v8.01Z" />
                  </svg>
                </motion.a>
                <motion.a whileHover={{ scale: 1.15, y: -2 }} whileTap={{ scale: 0.95 }} href="#ig" className="w-7 h-7 rounded-full border border-[#203D34] flex items-center justify-center text-[#9EAEA8] hover:text-white hover:border-[#C48A48] hover:bg-[#C48A48]/10 transition-colors">
                  <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </motion.a>
                <motion.a whileHover={{ scale: 1.15, y: -2 }} whileTap={{ scale: 0.95 }} href="#x" className="w-7 h-7 rounded-full border border-[#203D34] flex items-center justify-center text-[#9EAEA8] hover:text-white hover:border-[#C48A48] hover:bg-[#C48A48]/10 transition-colors font-bold text-[11px]">
                  𝕏
                </motion.a>
                <motion.a whileHover={{ scale: 1.15, y: -2 }} whileTap={{ scale: 0.95 }} href="#yt" className="w-7 h-7 rounded-full border border-[#203D34] flex items-center justify-center text-[#9EAEA8] hover:text-white hover:border-[#C48A48] hover:bg-[#C48A48]/10 transition-colors">
                  <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </motion.a>
              </div>
            </motion.div>

            {/* Col 2: DESTINATIONS (2 cols) */}
            <motion.div variants={fadeInUp} className="lg:col-span-2 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 mb-3.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C48A48" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <span className="text-white text-[11.5px] sm:text-xs font-bold uppercase tracking-[0.14em]">DESTINATIONS</span>
                </div>
                <ul className="space-y-2 text-xs text-[#9EAEA8]">
                  {['Andalusia', 'Granada', 'Seville', 'Córdoba', 'Málaga & la Costa del Sol', 'Cádiz & Costa de la Luz', 'Ronda & Serrania', 'Espagne'].map((dest, i) => (
                    <li key={i}>
                      <a href={`#${dest}`} className="hover:text-white transition-all duration-200 hover:translate-x-1 inline-block leading-tight">
                        {dest}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <motion.a 
                whileHover={{ x: 3 }}
                href="#all-destinations" 
                className="text-[#C48A48] hover:text-[#d69f5e] font-semibold text-xs mt-4 inline-flex items-center gap-1 pt-2 transition-colors"
              >
                <span>See all our destinations</span>
                <span>→</span>
              </motion.a>
            </motion.div>

            {/* Col 3: OUR TRIPS (2 cols) */}
            <motion.div variants={fadeInUp} className="lg:col-span-2 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 mb-3.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C48A48" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <span className="text-white text-[11.5px] sm:text-xs font-bold uppercase tracking-[0.14em]">OUR TRIPS</span>
                </div>
                <ul className="space-y-2 text-xs text-[#9EAEA8]">
                  {['Guided tours', 'Stays & weekends', 'Tailor-made trips', 'Self-drive tours', 'Family trips', 'Luxury trips', 'Northern lights', 'Road trips'].map((trip, i) => (
                    <li key={i}>
                      <a href={`#${trip}`} className="hover:text-white transition-all duration-200 hover:translate-x-1 inline-block leading-tight">
                        {trip}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <motion.a 
                whileHover={{ x: 3 }}
                href="#all-trips" 
                className="text-[#C48A48] hover:text-[#d69f5e] font-semibold text-xs mt-4 inline-flex items-center gap-1 pt-2 transition-colors"
              >
                <span>See all our trips</span>
                <span>→</span>
              </motion.a>
            </motion.div>

            {/* Col 4: THE AGENCY (2 cols) */}
            <motion.div variants={fadeInUp} className="lg:col-span-2 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 mb-3.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C48A48" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <span className="text-white text-[11.5px] sm:text-xs font-bold uppercase tracking-[0.14em]">THE AGENCY</span>
                </div>
                <ul className="space-y-2 text-xs text-[#9EAEA8]">
                  {['About us', 'Our team', 'Our values', 'Customer reviews', 'Blog', 'Terms of sale', 'FAQ', 'Contact'].map((agency, i) => (
                    <li key={i}>
                      <a href={`#${agency}`} className="hover:text-white transition-all duration-200 hover:translate-x-1 inline-block leading-tight">
                        {agency}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <motion.a 
                whileHover={{ x: 3 }}
                href="#agency" 
                className="text-[#C48A48] hover:text-[#d69f5e] font-semibold text-xs mt-4 inline-flex items-center gap-1 pt-2 transition-colors"
              >
                <span>Learn more about us</span>
                <span>→</span>
              </motion.a>
            </motion.div>

            {/* Col 5: STAY INSPIRED (3 cols) */}
            <motion.div variants={fadeInUp} className="lg:col-span-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 mb-3.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C48A48" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <span className="text-white text-[11.5px] sm:text-xs font-bold uppercase tracking-[0.14em]">STAY INSPIRED</span>
                </div>
                <p className="text-[#9EAEA8] text-xs leading-relaxed mb-4">
                  Receive our travel ideas, tips and exclusive offers.
                </p>

                {/* Email Form with attached Submit Button */}
                <form onSubmit={handleSubscribe} className="border border-[#1E3730] rounded-[10px] bg-[#051410] flex items-stretch overflow-hidden mb-4 h-11 w-full focus-within:border-[#C48A48] transition-colors">
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full bg-transparent px-3.5 text-xs text-white placeholder:text-[#5E756E] focus:outline-none"
                    required
                  />
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    aria-label="Subscribe"
                    className="bg-[#C48A48] hover:bg-[#b07839] px-4 flex items-center justify-center text-white transition-colors cursor-pointer flex-shrink-0"
                  >
                    <Send size={16} className="text-white transform rotate-45 -translate-y-0.5" />
                  </motion.button>
                </form>
              </div>

              {/* Secure Payment & Badges at Bottom */}
              <div className="pt-2">
                <div className="flex items-center gap-1.5 text-[#9EAEA8] text-xs mb-2.5">
                  <Lock size={13} className="text-[#7D938C]" />
                  <span>100% secure payment</span>
                </div>

                {/* Rounded Box Payment Cards */}
                <motion.div 
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-[12px] sm:rounded-[14px] py-2 px-3 sm:px-3.5 flex items-center justify-between shadow-sm w-full cursor-default"
                >
                  {/* Gold & Dark Card Mockup Stack */}
                  <div className="relative w-6 h-4.5 flex-shrink-0">
                    <div className="absolute top-0 left-0 w-4.5 h-3.5 bg-[#D4AF37] rounded-[2px]" />
                    <div className="absolute bottom-0 right-0 w-5 h-3.5 bg-[#1F1F24] rounded-[2px] flex items-center justify-between px-0.5 shadow-xs">
                      <div className="w-1.5 h-1 bg-[#E5C158] rounded-[1px]" />
                      <div className="flex -space-x-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#EB001B]" />
                        <div className="w-1.5 h-1.5 rounded-full bg-[#F79E1B]/90" />
                      </div>
                    </div>
                  </div>

                  {/* CB */}
                  <div className="w-5 h-3.5 bg-[#0055A5] rounded-[2px] flex flex-col justify-center items-center text-[7px] text-white font-bold tracking-tighter leading-none border-b border-[#009A44]">
                    CB
                  </div>

                  {/* VISA */}
                  <span className="text-[#1A1F71] font-black italic text-[11px] tracking-tight leading-none">
                    VISA
                  </span>

                  {/* MasterCard */}
                  <div className="flex -space-x-1.5 items-center">
                    <div className="w-4 h-4 rounded-full bg-[#EB001B]" />
                    <div className="w-4 h-4 rounded-full bg-[#F79E1B]/90" />
                  </div>

                  {/* AMEX */}
                  <div className="w-6 h-3.5 bg-[#006FCF] rounded-[2px] flex items-center justify-center text-[6.5px] text-white font-extrabold tracking-tighter leading-none">
                    AMEX
                  </div>

                  {/* ancv */}
                  <div className="flex items-center gap-0.5">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="#E2001A">
                      <path d="M12 2C8 6 4 9 2 11c3 1 7 1 10-1 3 2 7 2 10 1-2-2-6-5-10-9z"/>
                    </svg>
                    <span className="text-[#002B49] text-[7.5px] font-bold tracking-tighter leading-none">ancv</span>
                  </div>

                  {/* ancv CONNECT */}
                  <div className="flex items-center gap-0.5 bg-[#F4F4F4] px-1 py-0.5 rounded-[2px]">
                    <span className="text-[#002B49] text-[6px] font-bold leading-none">ancv</span>
                    <span className="bg-[#E2001A] text-white text-[5px] font-bold px-0.5 py-0.2 rounded-[1px] leading-none">CONNECT</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>

      {/* 2. Reassurance Middle Cream Strip */}
      <div className="bg-[#FAF4EE] py-6 sm:py-7 border-y border-[#EDE7DC] px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1380px] mx-auto">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-[#E5DACB] border-x border-[#E5DACB]"
          >
            {reassuranceItems.map((item, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-3.5 px-4 lg:px-6 cursor-default"
              >
                <div className="flex-shrink-0">
                  {item.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-[#182A3A] font-bold text-xs sm:text-[13px] leading-tight">
                    {item.title}
                  </span>
                  <span className="text-[#8C98A4] text-[10.5px] sm:text-[11px] leading-tight mt-0.5">
                    {item.subtext}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* 3. Bottom Copyright Bar */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-[#051410] text-[#7A8B85] text-[11px] sm:text-xs py-3.5 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-[1380px] mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3">
            <span>© 2024 Andha Luz Voyages - All rights reserved</span>
            <span>|</span>
            <a href="#legal" className="hover:text-white transition-colors">Legal notice</a>
            <span>|</span>
            <a href="#privacy" className="hover:text-white transition-colors">Privacy policy</a>
            <span>|</span>
            <a href="#sitemap" className="hover:text-white transition-colors">Site map</a>
            <span>|</span>
            <a href="#terms" className="hover:text-white transition-colors">Terms of sale</a>
          </div>

          <div>
            <span>Designed with ❤️ in Andalusia</span>
          </div>
        </div>
      </motion.div>

    </footer>
  );
};

export default Footer;
