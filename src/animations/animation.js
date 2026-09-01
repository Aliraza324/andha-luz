// Fade in animation variant
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

// Fade out animation variant
export const fadeOut = {
  hidden: { opacity: 1 },
  visible: { 
    opacity: 0,
    transition: { duration: 0.5, ease: "easeIn" }
  },
};

// Button hover and click (press) animation variant
export const buttonClick = {
  hover: {
    scale: 1.03,
    y: -2,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },

  tap: {
    scale: 0.97,
    y: 2,
    transition: {
      duration: 0.08,
      ease: "easeIn",
    },
  },
};

// Fade in up animation variant (useful for lists, cards or hero sections)
export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

// Fade in from left variant
export const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};

// Fade in from right variant (e.g. for map section)
export const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};

// Scale in animation variant (for cards, badges, pins)
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};

// Stagger container variant for lists and multi-item grids
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    }
  }
};

// Dropdown animation variant
export const dropdownAnimation = {
  hidden: { 
    opacity: 0, 
    y: -5,
    scale: 0.95,
    transition: { duration: 0.15, ease: "easeIn" }
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.2, ease: "easeOut", type: "spring", stiffness: 200, damping: 20 }
  }
};