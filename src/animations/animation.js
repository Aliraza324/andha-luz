// Fade in animation variant
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
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
    y: 3,
    transition: {
      duration: 0.08,
      ease: "easeIn",
    },
  },
};



// Fade in up animation variant (useful for lists or hero sections)
export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
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