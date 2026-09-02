import React, { useState, useEffect } from 'react';
import { User, Star, Phone, ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { buttonClick } from '../animations/animation.js';
import Dropdown from '../common/Dropdown.jsx';
import logoImg from '../assets/images/logo.png';

const MotionLink = motion(Link);

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

  const toggleMobileDropdown = (name) => {
    setOpenMobileDropdown((prev) => (prev === name ? null : name));
  };

  const destinationsList = [
    { label: 'Seville', path: '/' },
    { label: 'Granada', path: '/' },
    { label: 'Córdoba', path: '/' },
    { label: 'Ronda', path: '/' },
  ];

  const desiresList = [
    { label: 'Culture & History', path: '/' },
    { label: 'Nature & Beach', path: '/' },
    { label: 'Gastronomy', path: '/' },
  ];

  const staysList = [
    { label: 'Luxury Hotels', path: '/' },
    { label: 'Beach Villas', path: '/' },
    { label: 'Authentic Riads', path: '/' },
  ];

  const agencyList = [
    { label: 'About Us', path: '/' },
    { label: 'Contact', path: '/' },
    { label: 'Reviews', path: '/' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenMobileDropdown(null);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-lg shadow-md border-b border-gray-100' 
            : 'bg-gradient-to-b from-black/60 via-black/20 to-transparent'
        }`}
      >
      {/* Top Bar - Hidden on small screens & Hidden on scroll down */}
      <div 
        className={`hidden lg:block text-white transition-all duration-300 overflow-hidden ${
          isScrolled 
            ? 'max-h-0 opacity-0 py-0 border-transparent pointer-events-none' 
            : 'max-h-16 opacity-100 py-2 px-2 sm:px-4 lg:px-6 border-b border-white/10'
        }`}
      >
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
              className="bg-[#dc6941] hover:bg-[#c95d38] text-white px-5 py-2 rounded-full font-bold transition-colors uppercase text-xs tracking-wider cursor-pointer shadow-sm"
            >
              DEMANDER UN DEVIS
            </motion.button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div 
        className={`transition-all duration-300 px-4 lg:px-8 ${
          isScrolled 
            ? 'py-3 sm:py-3.5' 
            : 'bg-[#1b3447]/35 backdrop-blur-md border-b border-white/10 py-4 px-4 lg:px-8 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Mobile Menu Toggle (Left on mobile, hidden on lg) */}
          <div className="lg:hidden flex-1">
            <button 
              onClick={() => setIsMobileMenuOpen(true)} 
              className={`p-1 transition-colors ${isScrolled ? 'text-gray-900 hover:text-gray-600' : 'text-white hover:text-gray-300'}`}
            >
              <Menu size={26} />
            </button>
          </div>

          {/* Left Links (Desktop) */}
          <nav className={`hidden lg:flex flex-1 items-center gap-8 font-sora text-sm font-semibold tracking-wide transition-colors duration-300 ${
            isScrolled ? 'text-gray-800' : 'text-white'
          }`}>
            <Dropdown 
              items={destinationsList}
              trigger={
                <motion.div variants={buttonClick} whileHover="hover" whileTap="tap" className="flex items-center gap-1 hover:text-[#dc6941] transition-colors cursor-pointer">
                  DESTINATIONS <ChevronDown size={14} />
                </motion.div>
              }
            />
            <Dropdown 
              items={desiresList}
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
            <img 
              src={logoImg} 
              alt="Andha Luz VOYAGES" 
              className={`object-contain transition-all duration-300 ${
                isScrolled ? 'h-10 sm:h-11 filter invert' : 'h-12 sm:h-14'
              }`} 
            />
          </MotionLink>

          {/* Dummy flex-1 for mobile centering */}
          <div className="lg:hidden flex-1"></div>

          {/* Right Links (Desktop) */}
          <nav className={`hidden lg:flex flex-1 justify-end items-center gap-8 font-sora text-sm font-semibold tracking-wide transition-colors duration-300 ${
            isScrolled ? 'text-gray-800' : 'text-white'
          }`}>
            <MotionLink to="/" variants={buttonClick} whileHover="hover" whileTap="tap" className="hover:text-[#dc6941] transition-colors">
              GUIDED TOURS
            </MotionLink>
            <Dropdown 
              items={staysList}
              trigger={
                <motion.div variants={buttonClick} whileHover="hover" whileTap="tap" className="flex items-center gap-1 hover:text-[#dc6941] transition-colors cursor-pointer">
                  STAYS <ChevronDown size={14} />
                </motion.div>
              }
            />
            <Dropdown 
              items={agencyList}
              trigger={
                <motion.div variants={buttonClick} whileHover="hover" whileTap="tap" className="flex items-center gap-1 hover:text-[#dc6941] transition-colors cursor-pointer">
                  OUR AGENCY <ChevronDown size={14} />
                </motion.div>
              }
            />
          </nav>
        </div>
      </div>
    </header>

    {/* Mobile Sidebar - Outside <header> to avoid backdrop-filter and transform clipping */}
    <AnimatePresence>
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[9999] flex lg:hidden">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMobileMenu}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Sidebar Content */}
          <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="relative w-[85%] max-w-sm bg-white h-screen h-[100dvh] shadow-2xl flex flex-col overflow-y-auto font-sora text-black z-10"
          >
            <div className="flex items-center justify-between p-5 border-b border-gray-100 flex-shrink-0">
              <img src={logoImg} alt="Logo" className="h-10 filter invert" />
              <button onClick={closeMobileMenu} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                <X size={20} />
              </button>
            </div>

            <div className="p-5 flex flex-col gap-1 font-semibold text-sm flex-grow">
              {/* Destinations Accordion */}
              <div className="border-b border-gray-100 py-1">
                <button 
                  onClick={() => toggleMobileDropdown('destinations')} 
                  className="w-full flex items-center justify-between py-2 text-left hover:text-[#dc6941] transition-colors"
                >
                  <span>DESTINATIONS</span>
                  <ChevronDown 
                    size={16} 
                    className={`text-gray-400 transition-transform duration-200 ${openMobileDropdown === 'destinations' ? 'rotate-180 text-[#dc6941]' : ''}`} 
                  />
                </button>
                <AnimatePresence>
                  {openMobileDropdown === 'destinations' && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden bg-gray-50/70 rounded-lg my-1"
                    >
                      <div className="py-1 px-3 flex flex-col">
                        {destinationsList.map((item, idx) => (
                          <Link 
                            key={idx} 
                            to={item.path} 
                            onClick={closeMobileMenu}
                            className="py-2 text-gray-600 hover:text-[#dc6941] text-xs font-medium border-b border-gray-100 last:border-none transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Your Desires Accordion */}
              <div className="border-b border-gray-100 py-1">
                <button 
                  onClick={() => toggleMobileDropdown('desires')} 
                  className="w-full flex items-center justify-between py-2 text-left hover:text-[#dc6941] transition-colors"
                >
                  <span>YOUR DESIRES</span>
                  <ChevronDown 
                    size={16} 
                    className={`text-gray-400 transition-transform duration-200 ${openMobileDropdown === 'desires' ? 'rotate-180 text-[#dc6941]' : ''}`} 
                  />
                </button>
                <AnimatePresence>
                  {openMobileDropdown === 'desires' && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden bg-gray-50/70 rounded-lg my-1"
                    >
                      <div className="py-1 px-3 flex flex-col">
                        {desiresList.map((item, idx) => (
                          <Link 
                            key={idx} 
                            to={item.path} 
                            onClick={closeMobileMenu}
                            className="py-2 text-gray-600 hover:text-[#dc6941] text-xs font-medium border-b border-gray-100 last:border-none transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Direct Link 1 */}
              <Link to="/" onClick={closeMobileMenu} className="py-3 border-b border-gray-100 hover:text-[#dc6941] transition-colors">
                SELF-DRIVE TOURS
              </Link>

              {/* Direct Link 2 */}
              <Link to="/" onClick={closeMobileMenu} className="py-3 border-b border-gray-100 hover:text-[#dc6941] transition-colors">
                GUIDED TOURS
              </Link>

              {/* Stays Accordion */}
              <div className="border-b border-gray-100 py-1">
                <button 
                  onClick={() => toggleMobileDropdown('stays')} 
                  className="w-full flex items-center justify-between py-2 text-left hover:text-[#dc6941] transition-colors"
                >
                  <span>STAYS</span>
                  <ChevronDown 
                    size={16} 
                    className={`text-gray-400 transition-transform duration-200 ${openMobileDropdown === 'stays' ? 'rotate-180 text-[#dc6941]' : ''}`} 
                  />
                </button>
                <AnimatePresence>
                  {openMobileDropdown === 'stays' && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden bg-gray-50/70 rounded-lg my-1"
                    >
                      <div className="py-1 px-3 flex flex-col">
                        {staysList.map((item, idx) => (
                          <Link 
                            key={idx} 
                            to={item.path} 
                            onClick={closeMobileMenu}
                            className="py-2 text-gray-600 hover:text-[#dc6941] text-xs font-medium border-b border-gray-100 last:border-none transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Our Agency Accordion */}
              <div className="border-b border-gray-100 py-1">
                <button 
                  onClick={() => toggleMobileDropdown('agency')} 
                  className="w-full flex items-center justify-between py-2 text-left hover:text-[#dc6941] transition-colors"
                >
                  <span>OUR AGENCY</span>
                  <ChevronDown 
                    size={16} 
                    className={`text-gray-400 transition-transform duration-200 ${openMobileDropdown === 'agency' ? 'rotate-180 text-[#dc6941]' : ''}`} 
                  />
                </button>
                <AnimatePresence>
                  {openMobileDropdown === 'agency' && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden bg-gray-50/70 rounded-lg my-1"
                    >
                      <div className="py-1 px-3 flex flex-col">
                        {agencyList.map((item, idx) => (
                          <Link 
                            key={idx} 
                            to={item.path} 
                            onClick={closeMobileMenu}
                            className="py-2 text-gray-600 hover:text-[#dc6941] text-xs font-medium border-b border-gray-100 last:border-none transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="mt-auto p-5 bg-gray-50 flex flex-col gap-4 flex-shrink-0">
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
  </>
);
};

export default Header;
