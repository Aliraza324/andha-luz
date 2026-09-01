import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring, animate } from 'framer-motion';

const ScrollMask = ({ children, title = "Andalusia", subtitle = "Scroll to explore" }) => {
  const [isDone, setIsDone] = useState(false);
  const rawProgress = useMotionValue(0);
  const touchStartY = useRef(0);

  // Apply a silky smooth spring physics to the scroll progress
  const smoothProgress = useSpring(rawProgress, {
    stiffness: 40,
    damping: 18,
    mass: 0.6,
    restDelta: 0.0005
  });

  // Map smooth progress (0 to 1) to clipPath percentage (0% to 150%)
  const clipPath = useTransform(smoothProgress, [0, 1], [
    "circle(0% at 50% 50%)",
    "circle(150% at 50% 50%)"
  ]);

  // Smooth text fade out and subtle scale down
  const textOpacity = useTransform(smoothProgress, [0, 0.45], [1, 0]);
  const textScale = useTransform(smoothProgress, [0, 0.5], [1, 0.92]);

  // Function to finish the animation smoothly
  const completeAnimation = () => {
    animate(rawProgress, 1, {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
      onComplete: () => {
        // Give a tiny buffer for spring to settle
        setTimeout(() => {
          setIsDone(true);
          document.body.style.overflow = 'auto';
        }, 300);
      }
    });
  };

  useEffect(() => {
    if (isDone) return;

    // Lock body scrolling during the mask intro stage
    document.body.style.overflow = 'hidden';

    // Wheel event handler (mouse wheel / trackpad scroll)
    const handleWheel = (e) => {
      if (isDone) return;

      if (e.deltaY > 0) {
        // User scrolling down - smooth gradual increment
        const current = rawProgress.get();
        const delta = Math.min(Math.max(e.deltaY * 0.0007, 0.015), 0.08);
        const next = Math.min(1, current + delta);
        
        rawProgress.set(next);

        if (next >= 0.85) {
          completeAnimation();
        }
      } else if (e.deltaY < 0) {
        // User scrolling up while in intro: gentle decrease
        const current = rawProgress.get();
        const next = Math.max(0, current + e.deltaY * 0.0007);
        rawProgress.set(next);
      }
    };

    // Touch event handlers for mobile devices
    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      if (isDone) return;
      const currentY = e.touches[0].clientY;
      const deltaY = touchStartY.current - currentY;

      if (deltaY > 5) {
        const current = rawProgress.get();
        const next = Math.min(1, current + deltaY * 0.0012);
        rawProgress.set(next);
        touchStartY.current = currentY;

        if (next >= 0.85) {
          completeAnimation();
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      document.body.style.overflow = 'auto';
    };
  }, [isDone, rawProgress]);

  return (
    <div className="relative bg-black w-full min-h-screen">
      {/* Intro Black Screen Overlay */}
      {!isDone && (
        <div className="fixed inset-0 z-0 flex flex-col items-center justify-center bg-black select-none pointer-events-auto">
          <motion.div 
            style={{ opacity: textOpacity, scale: textScale }} 
            className="text-center px-4 flex flex-col items-center cursor-pointer transition-transform"
            onClick={completeAnimation}
          >
            <h1 
              className="text-5xl sm:text-7xl md:text-8xl font-bold text-white mb-4 tracking-tight" 
              style={{ fontFamily: "'MuseoModerno', sans-serif" }}
            >
              {title}
            </h1>
            <p className="text-gray-300 text-sm sm:text-base font-sora font-medium mb-6">
              {subtitle}
            </p>
            <div className="animate-bounce text-white/90">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </div>
          </motion.div>
        </div>
      )}

      {/* Masked Website Content (revealed smoothly with spring physics) */}
      <motion.div
        className="relative z-10 w-full"
        style={!isDone ? { clipPath } : { clipPath: 'none' }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollMask;
