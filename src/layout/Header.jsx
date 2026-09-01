import React, { useState } from 'react';
import { User, Star, Phone, ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { buttonClick } from '../animations/animation.js';
import Dropdown from '../common/Dropdown.jsx';

const MotionLink = motion(Link);

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      {/* Top Bar - Hidden on small screens */}
      <div className="hidden lg:block text-white py-2 px-2 sm:px-4 lg:px-6 border-b border-white/10">
        <div className="w-full max-w-[1600px] mx-auto flex justify-between items-center text-sm">
          {/* Left: Login */}
          <motion.button 
            variants={buttonClick} whileHover="hover" whileTap="tap"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-1.5 rounded-md transition-colors font-sora"
          >
            <User size={16} />
            <span>Login</span>
          </motion.button>
          
          {/* Right: Info & CTA */}
          <div className="flex items-center gap-6 font-sora font-medium">
            <div className="flex items-center gap-1 text-[#f39c12]">
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <span className="text-white ml-1">4.9/5</span>
            </div>
            <div className="w-px h-4 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>09 64 22 86 16</span>
            </div>
            <motion.button 
              variants={buttonClick} whileHover="hover" whileTap="tap"
              className="bg-[#dc6941] hover:bg-[#c95d38] text-white px-5 py-2 rounded-full font-bold transition-colors uppercase text-xs tracking-wider"
            >
              DEMANDER UN DEVIS
            </motion.button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-[#1b3447]/40 backdrop-blur-md border-b border-white/10 py-4 px-4 lg:px-8 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Mobile Menu Toggle (Left on mobile, hidden on lg) */}
          <div className="lg:hidden flex-1">
            <button onClick={() => setIsMobileMenuOpen(true)} className="text-white hover:text-gray-300">
              <Menu size={28} />
            </button>
          </div>

          {/* Left Links (Desktop) */}
          <nav className="hidden lg:flex flex-1 items-center gap-8 text-white font-sora text-sm font-semibold tracking-wide">
            <Dropdown 
              items={[
                { label: 'Seville' }, { label: 'Granada' }, { label: 'Córdoba' }, { label: 'Ronda' }
              ]}
              trigger={
                <motion.div variants={buttonClick} whileHover="hover" whileTap="tap" className="flex items-center gap-1 hover:text-[#dc6941] transition-colors cursor-pointer">
                  DESTINATIONS <ChevronDown size={14} />
                </motion.div>
              }
            />
            <Dropdown 
              items={[
                { label: 'Culture & History' }, { label: 'Nature & Beach' }, { label: 'Gastronomy' }
              ]}
              trigger={
                <motion.div variants={buttonClick} whileHover="hover" whileTap="tap" className="flex items-center gap-1 hover:text-[#dc6941] transition-colors cursor-pointer">
                  YOUR DESIRES <ChevronDown size={14} />
                </motion.div>
              }
            />
            <MotionLink to="/" variants={buttonClick} whileHover="hover" whileTap="tap" className="hover:text-[#dc6941] transition-colors">
              SELF-DRIVE TOURS
            </MotionLink>
          </nav>

          {/* Logo (Centered) */}
          <MotionLink to="/" variants={buttonClick} whileHover="hover" whileTap="tap" className="flex-shrink-0 text-center flex-1 lg:flex-none flex justify-center">
            <img src="/src/assets/images/logo.png" alt="Andha Luz VOYAGES" className="h-12 sm:h-14 object-contain" />
          </MotionLink>

          {/* Dummy flex-1 for mobile centering */}
          <div className="lg:hidden flex-1"></div>

          {/* Right Links (Desktop) */}
          <nav className="hidden lg:flex flex-1 justify-end items-center gap-8 text-white font-sora text-sm font-semibold tracking-wide">
            <MotionLink to="/" variants={buttonClick} whileHover="hover" whileTap="tap" className="hover:text-[#dc6941] transition-colors">
              GUIDED TOURS
            </MotionLink>
            <Dropdown 
              items={[
                { label: 'Luxury Hotels' }, { label: 'Beach Villas' }, { label: 'Authentic Riads' }
              ]}
              trigger={
                <motion.div variants={buttonClick} whileHover="hover" whileTap="tap" className="flex items-center gap-1 hover:text-[#dc6941] transition-colors cursor-pointer">
                  STAYS <ChevronDown size={14} />
                </motion.div>
              }
            />
            <Dropdown 
              items={[
                { label: 'About Us' }, { label: 'Contact' }, { label: 'Reviews' }
              ]}
              trigger={
                <motion.div variants={buttonClick} whileHover="hover" whileTap="tap" className="flex items-center gap-1 hover:text-[#dc6941] transition-colors cursor-pointer">
                  OUR AGENCY <ChevronDown size={14} />
                </motion.div>
              }
            />
          </nav>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-[100] flex lg:hidden">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Sidebar Content */}
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="relative w-[85%] max-w-sm bg-white h-full shadow-2xl flex flex-col overflow-y-auto font-sora text-black"
            >
              <div className="flex items-center justify-between p-5 border-b border-gray-100">
                <img src="/src/assets/images/logo.png" alt="Logo" className="h-10 filter invert" />
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                  <X size={20} />
                </button>
              </div>

              <div className="p-5 flex flex-col gap-4 font-semibold text-sm">
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-between py-2 border-b border-gray-50">
                  DESTINATIONS <ChevronDown size={16} className="text-gray-400" />
                </Link>
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-between py-2 border-b border-gray-50">
                  YOUR DESIRES <ChevronDown size={16} className="text-gray-400" />
                </Link>
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="py-2 border-b border-gray-50">
                  SELF-DRIVE TOURS
                </Link>
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="py-2 border-b border-gray-50">
                  GUIDED TOURS
                </Link>
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-between py-2 border-b border-gray-50">
                  STAYS <ChevronDown size={16} className="text-gray-400" />
                </Link>
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-between py-2 border-b border-gray-50">
                  OUR AGENCY <ChevronDown size={16} className="text-gray-400" />
                </Link>
              </div>

              <div className="mt-auto p-5 bg-gray-50 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-[#dc6941]" />
                  <span className="font-bold text-sm">09 64 22 86 16</span>
                </div>
                <div className="flex items-center gap-1 text-[#f39c12] text-sm">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <span className="text-black font-bold ml-1">4.9/5</span>
                </div>
                <button className="w-full bg-[#1b3447] text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 mt-2">
                  <User size={18} /> Login
                </button>
                <button className="w-full bg-[#dc6941] text-white py-3 rounded-lg font-bold">
                  DEMANDER UN DEVIS
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
