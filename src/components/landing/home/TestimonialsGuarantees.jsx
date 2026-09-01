import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  ShieldCheck, 
  Award, 
  MessageSquare, 
  Heart, 
  SlidersHorizontal, 
  Lock, 
  ThumbsUp, 
  PhoneCall,
  Shield
} from 'lucide-react';
import { fadeInUp, staggerContainer } from '../../../animations/animation.js';
import Counter from '../../../common/Counter.jsx';

const TestimonialsGuarantees = () => {
  const reviews = [
    {
      stars: 5,
      type: "google",
      quote: `"Andalusia took our breath away! Andha Luz Voyages planned every detail perfectly. From Seville to Granada, everything was unforgettable."`,
      name: "Sophia M.",
      trip: "Seville & Granada Tour",
      date: "May 2024"
    },
    {
      stars: 5,
      type: "user",
      quote: `"A truly authentic experience. We loved the local guides, the hidden gems, and the warm hospitality throughout our journey."`,
      name: "James L.",
      trip: "Andalusia Discovery Tour",
      date: "April 2024"
    },
    {
      stars: 5,
      type: "google",
      quote: `"Best travel agency in Spain! Professional, attentive and passionate about what they do. Highly recommend Andha Luz Voyages."`,
      name: "Elena R.",
      trip: "Cordoba & Granada Tour",
      date: "June 2024"
    },
    {
      stars: 5,
      type: "user",
      quote: `"From start to finish, our trip was seamless. Andha Luz Voyages exceeded all our expectations."`,
      name: "Michael T.",
      trip: "Family Adventure in Andalusia",
      date: "March 2024"
    }
  ];

  const stats = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#CC5B3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
      value: "500+",
      label: "Happy travelers"
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#CC5B3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="6" />
          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
        </svg>
      ),
      value: "4.9/5",
      label: "Average rating on Google"
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#CC5B3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
      value: "100% Verified",
      label: "Authentic reviews"
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#CC5B3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      ),
      value: "98%",
      label: "Would travel with us again"
    }
  ];

  const guarantees = [
    {
      icon: <Shield size={20} className="text-[#CC5B3B]" />,
      title: "On-the-ground presence"
    },
    {
      icon: <SlidersHorizontal size={20} className="text-[#CC5B3B]" />,
      title: "Flexibility & tailor-made"
    },
    {
      icon: <Lock size={20} className="text-[#CC5B3B]" />,
      title: "Secure payment"
    },
    {
      icon: <ThumbsUp size={20} className="text-[#CC5B3B]" />,
      title: "Value for money"
    },
    {
      icon: <PhoneCall size={20} className="text-[#CC5B3B]" />,
      title: "24/7 Support"
    }
  ];

  return (
    <section className="w-full bg-[#FAF4EE] pt-8 sm:pt-12 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 font-sora overflow-hidden border-t border-[#F0EBE1]">
      <div className="max-w-7xl mx-auto">

        {/* Top Header */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-10">
          {/* Badge: Centered Moorish 8-Point Star Icon above text */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center gap-2 mb-3.5"
          >
            {/* Exact Moorish 8-pointed star (Rub el Hizb / Khatim) */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#8B3A22" className="flex-shrink-0">
              <rect x="4" y="4" width="16" height="16" rx="0.5" />
              <rect x="4" y="4" width="16" height="16" rx="0.5" transform="rotate(45 12 12)" />
            </svg>

            <span className="text-[#C48A48] text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em]">
              TRUSTED BY TRAVELERS
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[34px] sm:text-[46px] lg:text-[50px] text-[#182A3A] font-normal tracking-tight mb-3"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
          >
            What Our Travelers Say
          </motion.h2>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#6B7A88] text-xs sm:text-sm max-w-xl leading-relaxed font-normal"
          >
            Real experiences from travelers who explored Andalusia with Andha Luz Voyages. Their stories inspire our journeys.
          </motion.p>
        </div>

        {/* Google Reviews Summary Card (Exact Match) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-10 sm:mb-12"
        >
          <div className="bg-white rounded-2xl sm:rounded-[22px] px-5 sm:px-8 py-3.5 sm:py-4 shadow-sm border border-[#EDE7DC] flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 w-full max-w-2xl">
            
            {/* Left Part: Icon + Google Reviews + 4.9 Stars */}
            <div className="flex items-center gap-3 sm:gap-3.5 w-full md:w-auto justify-center md:justify-start">
              {/* Circle X Icon in Soft Cream Round Container */}
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#F5EFEB] flex items-center justify-center p-2 flex-shrink-0 text-[#C55938]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C55938" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="m15 9-6 6" />
                  <path d="m9 9 6 6" />
                </svg>
              </div>

              {/* Title & Ratings */}
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="text-[#182A3A] font-bold text-sm sm:text-base whitespace-nowrap">
                  Google Reviews
                </span>

                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="text-[#182A3A] font-bold text-lg sm:text-2xl leading-none">
                      4.9
                    </span>
                    <div className="flex items-center text-[#FBBC04] gap-0.5 flex-nowrap">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill="#FBBC04" stroke="#FBBC04" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <span className="text-[#8C98A4] text-[10.5px] sm:text-xs leading-tight mt-1 font-normal whitespace-nowrap">
                    Based on 326 reviews
                  </span>
                </div>
              </div>
            </div>

            {/* Vertical Divider Line */}
            <div className="hidden md:block w-[1px] h-8 bg-gray-200" />

            {/* Right Part: User Icon + 98% of our travelers */}
            <div className="flex items-center gap-3 sm:gap-3.5 w-full md:w-auto justify-center md:justify-start">
              {/* Users Icon in Soft Cream Round Container */}
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#F5EFEB] flex items-center justify-center p-2 flex-shrink-0 text-[#C55938]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C55938" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="7.5" r="3.5" />
                  <path d="M3 19v-1a5 5 0 0 1 10 0v1" />
                  <path d="M15 6a3 3 0 0 1 0 5" />
                  <path d="M18 19v-1a4 4 0 0 0-3.5-3.8" />
                </svg>
              </div>

              {/* Text */}
              <div className="flex flex-col text-left">
                <span className="text-[#182A3A] text-xs sm:text-[13px] leading-tight">
                  <strong className="font-bold text-[#182A3A]">98%</strong> <span className="text-[#6B7A88]">of our travelers</span>
                </span>
                <span className="text-[#8C98A4] text-[10px] sm:text-[11px] leading-tight mt-0.5">
                  would recommend us to their family and friends.
                </span>
              </div>
            </div>

          </div>
        </motion.div>

        {/* 4 Testimonial Review Cards Carousel */}
        <div className="relative mb-12 sm:mb-16">
          {/* Carousel Left Navigation Arrow */}
          <button 
            aria-label="Previous"
            className="hidden sm:flex absolute -left-4 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-md border border-gray-100 items-center justify-center text-[#182A3A] hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Review Cards Grid */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
          >
            {reviews.map((rev, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-[24px] p-6 sm:p-7 shadow-sm border border-[#EDE7DC] flex flex-col justify-between"
              >
                <div>
                  {/* Top Rating Row */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-1 text-[#E5A83B]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill="#E5A83B" stroke="none" />
                      ))}
                    </div>
                    {/* Badge on top right (Google icon terracotta, User person icon gray) */}
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      rev.type === 'google' ? 'text-[#CC5B3B]' : 'text-[#9CA3AF]'
                    }`}>
                      {rev.type === 'google' ? (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="9" />
                          <path d="m15 9-6 6" />
                          <path d="m9 9 6 6" />
                        </svg>
                      ) : (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="7" r="4" />
                          <path d="M4 21v-2a6 6 0 0 1 12 0v2" />
                        </svg>
                      )}
                    </div>
                  </div>

                  {/* Review Quote */}
                  <p className="text-[#182A3A] text-xs sm:text-[13px] leading-relaxed font-normal mb-6 min-h-[90px]">
                    {rev.quote}
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-gray-100 flex flex-col">
                  <span className="text-[#182A3A] font-bold text-xs sm:text-[13px]">
                    {rev.name}
                  </span>
                  <span className="text-[#8C98A4] text-[10px] sm:text-[11px] mt-0.5">
                    {rev.trip}
                  </span>
                  <span className="text-[#A0AAB5] text-[10px] mt-0.5">
                    {rev.date}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Carousel Right Navigation Arrow */}
          <button 
            aria-label="Next"
            className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-[#182A3A] hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Verified Stats Bar (Floating White Card with animated Counter) */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-sm border border-[#EDE7DC] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-100 mb-12 sm:mb-16"
        >
          {/* Stat 1 */}
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FAF3EE] flex items-center justify-center p-2.5 flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#CC5B3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[#182A3A] font-bold text-base sm:text-lg leading-tight flex items-center">
                <Counter value={500} suffix="+" duration={2} />
              </span>
              <span className="text-[#8C98A4] text-[10px] sm:text-[11px] leading-tight mt-0.5">
                Happy travelers
              </span>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center gap-3.5 pt-4 sm:pt-0 sm:pl-5 lg:pl-6">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FAF3EE] flex items-center justify-center p-2.5 flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#CC5B3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="6" />
                <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[#182A3A] font-bold text-base sm:text-lg leading-tight flex items-center">
                4.9/5
              </span>
              <span className="text-[#8C98A4] text-[10px] sm:text-[11px] leading-tight mt-0.5">
                Average rating on Google
              </span>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center gap-3.5 pt-4 sm:pt-0 sm:pl-5 lg:pl-6">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FAF3EE] flex items-center justify-center p-2.5 flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#CC5B3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[#182A3A] font-bold text-base sm:text-lg leading-tight flex items-center">
                <Counter value={100} suffix="% Verified" duration={2} />
              </span>
              <span className="text-[#8C98A4] text-[10px] sm:text-[11px] leading-tight mt-0.5">
                Authentic reviews
              </span>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="flex items-center gap-3.5 pt-4 sm:pt-0 sm:pl-5 lg:pl-6">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FAF3EE] flex items-center justify-center p-2.5 flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#CC5B3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[#182A3A] font-bold text-base sm:text-lg leading-tight flex items-center">
                <Counter value={98} suffix="%" duration={2} />
              </span>
              <span className="text-[#8C98A4] text-[10px] sm:text-[11px] leading-tight mt-0.5">
                Would travel with us again
              </span>
            </div>
          </div>
        </motion.div>

        {/* Bottom Guarantees Card ("Our guarantees for a worry-free trip") */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="bg-[#F6EFE6] rounded-3xl sm:rounded-[32px] p-7 sm:p-10 border border-[#EBDCCB] flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          {/* Left Text */}
          <div className="max-w-xs text-center lg:text-left">
            <h3 
              className="text-[#182A3A] text-2xl sm:text-[28px] font-bold leading-tight mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Our guarantees for a worry-free trip
            </h3>
            <p className="text-[#6B7A88] text-xs sm:text-[13px] leading-relaxed">
              We do everything we can to offer you authentic, secure and unforgettable trips.
            </p>
          </div>

          {/* Right 5 Guarantees with subtle bounce hover */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6 w-full lg:w-auto">
            {guarantees.map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -4, scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col items-center text-center cursor-default group"
              >
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center p-3 mb-2.5 transition-shadow group-hover:shadow-md">
                  {item.icon}
                </div>
                <span className="text-[#182A3A] font-bold text-xs sm:text-[12.5px] leading-snug">
                  {item.title}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default TestimonialsGuarantees;
