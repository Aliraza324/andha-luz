import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';
import { fadeInLeft, fadeInRight, fadeInUp, staggerContainer, buttonClick } from '../../../animations/animation.js';

import blog1 from '../../../assets/images/blog (1).jpg';
import blog2 from '../../../assets/images/blog (2).png';
import blog3 from '../../../assets/images/blog (3).png';
import blog4 from '../../../assets/images/blog (4).png';
import starIcon from '../../../assets/icons/Vector.png';

const LatestBlogArticles = () => {
  const smallArticles = [
    {
      img: blog4, // Swapped with main card
      category: "CULTURE",
      title: "The white villages of Andalusia: a timeless charm",
      excerpt: "Flowered alleyways, breathtaking panoramas and preserved authenticity...",
      readTime: "5 min read",
      date: "May 12, 2024"
    },
    {
      img: blog2,
      category: "EXPERIENCES",
      title: "The Andalusian horse: elegance and tradition",
      excerpt: "Dive into the fascinating world of the Andalusian horse and Spanish equestrian art...",
      readTime: "4 min read",
      date: "May 8, 2024"
    },
    {
      img: blog3,
      category: "NATURE",
      title: "The most beautiful beaches of Andalusia",
      excerpt: "From the secret coves of the Costa Tropical to the long golden beaches of Costa de la Luz...",
      readTime: "6 min read",
      date: "May 3, 2024"
    }
  ];

  return (
    <section className="w-full bg-[#FAF4EE] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 font-sora overflow-hidden border-t border-[#F0EBE1]">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div>
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-2.5"
            >
              <img src={starIcon} alt="star" className="w-4 h-4 object-contain" />
              <span className="text-[#CC5B3B] text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em]">
                TRAVEL INSPIRATION
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[32px] sm:text-[44px] lg:text-[48px] text-[#182A3A] font-bold tracking-tight mb-3 font-sora"
            >
              Our latest blog articles
            </motion.h2>

            {/* Subtle Divider with 4-petal icon */}
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-[1px] bg-[#CC5B3B]/40" />
              <div className="text-[#CC5B3B]">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="7.5" r="3.5" />
                  <circle cx="12" cy="16.5" r="3.5" />
                  <circle cx="7.5" cy="12" r="3.5" />
                  <circle cx="16.5" cy="12" r="3.5" />
                  <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                </svg>
              </div>
              <div className="w-8 h-[1px] bg-[#CC5B3B]/40" />
            </div>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[#6B7A88] text-xs sm:text-[13.5px] max-w-xl font-normal leading-relaxed"
            >
              Travel tips, discoveries and inspiration to prepare your next trip to Andalusia and Spain.
            </motion.p>
          </div>

          {/* Top Right "See all articles" Button */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <motion.button 
              variants={buttonClick}
              whileHover="hover"
              whileTap="tap"
              className="border border-[#CC5B3B] text-[#CC5B3B] hover:bg-[#CC5B3B] hover:text-white px-6 py-2.5 rounded-full font-sora font-semibold text-xs sm:text-[13px] transition-all flex items-center gap-2 cursor-pointer shadow-xs whitespace-nowrap"
            >
              <span>See all articles</span>
              <ArrowRight size={14} />
            </motion.button>
          </motion.div>
        </div>

        {/* Blog Grid: Large Left Card + 3 Right Horizontal Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-7 items-stretch">
          
          {/* Left Large Featured Card */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeInLeft}
            className="lg:col-span-6 relative rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-md group cursor-pointer min-h-[460px] lg:min-h-[520px] flex flex-col justify-end p-6 sm:p-8"
          >
            {/* Background Image */}
            <img 
              src={blog1} 
              alt="Granada modern patio" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Dark Gradient Overlay for optimal legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

            {/* Floating Top Category Badge */}
            <div className="absolute top-6 left-6 z-10">
              <span className="text-[#E5A83B] font-bold text-xs uppercase tracking-[0.18em]">
                DESTINATIONS
              </span>
            </div>

            {/* Content at bottom */}
            <div className="relative z-10 text-white">
              <h3 
                className="text-2xl sm:text-3xl lg:text-[32px] font-bold leading-tight mb-3 group-hover:text-amber-100 transition-colors"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Granada, an Andalusian gem between history and modernity
              </h3>

              <p className="text-gray-200 text-xs sm:text-[13px] leading-relaxed mb-6 font-normal max-w-lg line-clamp-2">
                Explore the Alhambra, stroll through the Albaicín and let yourself be enchanted by the vibrant soul of Granada.
              </p>

              <div className="flex items-center justify-between pt-2 border-t border-white/20 text-xs text-gray-200">
                <span className="font-semibold text-white flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                  <span>Read the article</span>
                  <ArrowRight size={14} />
                </span>

                <span className="flex items-center gap-1.5 text-gray-300">
                  <Clock size={13} />
                  <span>6 min read</span>
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3 Horizontal Cards */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="lg:col-span-6 flex flex-col justify-between gap-4 sm:gap-4.5"
          >
            {smallArticles.map((article, idx) => (
              <motion.div
                key={idx}
                variants={fadeInRight}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-[22px] sm:rounded-[24px] p-4 sm:p-4.5 shadow-sm border border-[#EDE7DC] flex flex-col sm:flex-row items-center gap-4 sm:gap-5 group cursor-pointer h-full"
              >
                {/* Thumbnail Image */}
                <div className="w-full sm:w-36 md:w-40 h-36 sm:h-28 md:h-32 rounded-[16px] overflow-hidden flex-shrink-0 relative">
                  <img 
                    src={article.img} 
                    alt={article.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between flex-grow w-full">
                  <div>
                    {/* Category */}
                    <span className="text-[#CC5B3B] text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.15em] block mb-1">
                      {article.category}
                    </span>

                    {/* Title */}
                    <h4 
                      className="text-[#182A3A] font-bold text-sm sm:text-[15px] leading-snug mb-1.5 group-hover:text-[#CC5B3B] transition-colors line-clamp-2"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {article.title}
                    </h4>

                    {/* Excerpt */}
                    <p className="text-[#6B7A88] text-[11px] sm:text-xs leading-relaxed font-normal mb-2 line-clamp-1">
                      {article.excerpt}
                    </p>
                  </div>

                  {/* Meta: Read time & Date */}
                  <div className="flex items-center gap-3 text-[10.5px] sm:text-[11px] text-[#8C98A4]">
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      <span>{article.readTime}</span>
                    </span>
                    <span>|</span>
                    <span>{article.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default LatestBlogArticles;
