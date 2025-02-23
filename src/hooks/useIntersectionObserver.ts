'use client';

import { useEffect, useRef, useState } from 'react';

type IntersectionObserverHookResult = {
  ref: React.RefObject<HTMLElement | null>;
  isVisible: boolean;
};

export function useIntersectionObserver(
  options: IntersectionObserverInit = {}
): IntersectionObserverHookResult {
  const elementRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentElement = elementRef.current;
    
    if (!currentElement) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(currentElement);
      }
    }, options);

    observer.observe(currentElement);

    return () => {
      observer.unobserve(currentElement);
    };
  }, [options]);

  return { ref: elementRef, isVisible };
}