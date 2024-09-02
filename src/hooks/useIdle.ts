import { useEffect, useState } from 'react';

export const useIdle = (timeout: number = 3000) => {
  const [isIdle, setIsIdle] = useState(false);

  useEffect(() => {
    let timeoutId: number;

    const handleActivity = () => {
      setIsIdle(false);
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => setIsIdle(true), timeout); 
    };

    document.addEventListener('mousemove', handleActivity);
    document.addEventListener('keydown', handleActivity);

    timeoutId = window.setTimeout(() => setIsIdle(true), timeout); // Initial call to set idle state

    return () => {
      document.removeEventListener('mousemove', handleActivity);
      document.removeEventListener('keydown', handleActivity);
      clearTimeout(timeoutId);
    };
  }, [timeout]);

  return isIdle;
};
