import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring, animate } from 'framer-motion';

const ScrollMask = ({ children, title = "Andalusia", subtitle = "Scroll to explore" }) => {
  const [isDone, setIsDone] = useState(false);
  const rawProgress = useMotionValue(0);
  const touchStartY = useRef(0);

  // Apply a silky, natural spring physics to the scroll progress
  const smoothProgress = useSpring(rawProgress, {
    stiffness: 70,
    damping: 16,
    mass: 0.45,
    restDelta: 0.0008
  });

  // Map smooth progress (0 to 1) to clipPath percentage (0% to 150%) from the exact viewport center (50vw 50vh)
  const clipPath = useTransform(smoothProgress, [0, 1], [
    "circle(0% at 50vw 50vh)",
    "circle(150% at 50vw 50vh)"
  ]);

  // Smooth text fade out and subtle scale down
  const textOpacity = useTransform(smoothProgress, [0, 0.4], [1, 0]);
  const textScale = useTransform(smoothProgress, [0, 0.45], [1, 0.94]);

  // Function to finish the animation smoothly
  const completeAnimation = () => {
    document.body.style.overflow = 'auto';
    animate(rawProgress, 1, {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
      onComplete: () => {
        setIsDone(true);
      }
    });
  };

  useEffect(() => {
    if (isDone) {
      document.body.style.overflow = 'auto';
      return;
    }

    // Lock body scrolling during the initial mask screen
    document.body.style.overflow = 'hidden';

    // Wheel event handler: smooth proportional opening with comfortable pace
    const handleWheel = (e) => {
      if (isDone) return;

      if (e.deltaY > 0) {
        const current = rawProgress.get();
        const delta = Math.min(Math.max(e.deltaY * 0.002, 0.06), 0.18);
        const next = Math.min(1, current + delta);

        rawProgress.set(next);

        if (next >= 0.65) {
          completeAnimation();
        }
      } else if (e.deltaY < 0) {
        const current = rawProgress.get();
        const next = Math.max(0, current + e.deltaY * 0.002);
        rawProgress.set(next);
      }
    };

    // Touch event handlers for mobile devices: 1 natural swipe opens smoothly
    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      if (isDone) return;
      const currentY = e.touches[0].clientY;
      const deltaY = touchStartY.current - currentY;

      if (deltaY > 5) {
        const current = rawProgress.get();
        const next = Math.min(1, current + deltaY * 0.0035);
        rawProgress.set(next);
        touchStartY.current = currentY;

        if (next >= 0.65) {
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
