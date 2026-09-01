import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

const Counter = ({ value, target, duration = 2, suffix = "", prefix = "", decimals = 0 }) => {
  const numericValue = value !== undefined ? value : (target !== undefined ? target : 0);
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseFloat(numericValue);
    if (isNaN(end)) return;

    const totalFrames = Math.round(duration * 60);
    let currentFrame = 0;

    const counterInterval = setInterval(() => {
      currentFrame++;
      // Ease out cubic function for silky smooth deceleration
      const progress = Math.min(currentFrame / totalFrames, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentVal = start + (end - start) * easeOut;

      if (decimals > 0) {
        setCount(parseFloat(currentVal.toFixed(decimals)));
      } else {
        setCount(Math.round(currentVal));
      }

      if (currentFrame >= totalFrames) {
        setCount(end);
        clearInterval(counterInterval);
      }
    }, 1000 / 60);

    return () => clearInterval(counterInterval);
  }, [isInView, numericValue, duration, decimals]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {decimals > 0 ? count.toFixed(decimals) : count}
      {suffix}
    </span>
  );
};

export default Counter;
