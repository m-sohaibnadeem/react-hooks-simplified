import { useCallback, useState } from 'react';

export const useFullscreen = (elementRef: React.RefObject<Element>) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const enterFullscreen = useCallback(() => {
    if (elementRef.current && elementRef.current.requestFullscreen) {
      elementRef.current.requestFullscreen();
      setIsFullscreen(true);
    }
  }, [elementRef]);

  const exitFullscreen = useCallback(() => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  }, []);

  return { isFullscreen, enterFullscreen, exitFullscreen };
};
