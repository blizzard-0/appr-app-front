import { useCallback, useRef, useEffect } from 'react';

export const useClickOutside = (
  element: HTMLElement | null,
  callback: (evt: MouseEvent) => void,
) => {
  const elementRef = useRef(element);
  const callbackRef = useRef(callback);

  const memoizedCallback = useCallback((event: MouseEvent) => {
    const element = elementRef.current;

    if (
      element &&
      event.target instanceof HTMLElement &&
      !element.contains(event.target)
    ) {
      callbackRef.current(event);
    }
  }, []);

  useEffect(() => {
    elementRef.current = element;
    callbackRef.current = callback;
  }, [callback, element]);

  useEffect(() => {
    window.addEventListener('click', (evt) => {
      memoizedCallback(evt);
    });

    return () => {
      window.removeEventListener('click', memoizedCallback);
    };
  }, [memoizedCallback]);
};
