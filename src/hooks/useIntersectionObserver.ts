import { useEffect, useState, RefObject } from 'react';

export const useIntersectionObserver = (
  elementRef: RefObject<Element>,
  options?: IntersectionObserverInit
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (!elementRef.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(elementRef.current);

    return () => {
      observer.disconnect();
    };
  }, [elementRef, options]);

  return isIntersecting;
};
