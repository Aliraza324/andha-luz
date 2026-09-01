import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { dropdownAnimation } from '../animations/animation.js';

const Dropdown = ({ trigger, items, menuClassName = '', containerClassName = 'relative inline-block text-left w-full sm:w-auto' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={containerClassName} ref={dropdownRef}>
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer w-full h-full">
        {trigger}
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={dropdownAnimation}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={`absolute z-50 mt-2 min-w-[200px] w-full sm:w-auto bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 overflow-hidden focus:outline-none origin-top-left sm:origin-top ${menuClassName}`}
          >
            <div className="py-1">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#f8f9fa] hover:text-[#dc6941] cursor-pointer font-sora transition-colors border-b border-gray-50 last:border-none"
                  onClick={() => {
                    if (item.onClick) item.onClick();
                    setIsOpen(false);
                  }}
                >
                  {item.label}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
