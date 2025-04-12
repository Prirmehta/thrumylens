import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export const useCountAnimation = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5
  });

  useEffect(() => {
    if (inView) {
      let startTime;
      const startValue = 0;
      
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        setCount(Math.floor(progress * (end - startValue) + startValue));
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      
      window.requestAnimationFrame(step);
    }
  }, [inView, end, duration]);

  return [count, ref];
};