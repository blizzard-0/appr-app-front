import { useState, useEffect, useRef } from 'react';

const MAX_PROGRESS = 80;

export const useSmoothProgress = (progress: number) => {
  const [visualProgress, setVisualProgress] = useState(0);
  const interval = useRef<number>(-1);

  useEffect(() => {
    interval.current = window.setInterval(() => {
      setVisualProgress((prevP) => Math.min(prevP + 10 / 3, MAX_PROGRESS));
    }, 1000);

    return () => {
      window.clearInterval(interval.current);
    };
  }, []);

  useEffect(() => {
    if (progress > 0) {
      window.clearInterval(interval.current);
    }
    setVisualProgress((prevProgress) => Math.max(prevProgress, progress));
  }, [progress]);

  return [visualProgress];
};
