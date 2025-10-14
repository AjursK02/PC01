"use client";

import { useState, useEffect, useRef, RefObject } from 'react';

type Options = IntersectionObserverInit;

export function useInView<T extends HTMLElement>(options?: Options): [RefObject<T>, boolean] {
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (entry.isIntersecting && options?.rootMargin === '0px 0px -100px 0px') {
          observer.unobserve(element);
        }
      },
      {
        rootMargin: "0px 0px -100px 0px",
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return [ref, isInView];
}
