import { useEffect } from 'react';

const useKeyPress = (targetKey: string, callbackFn: () => void) => {
  useEffect(() => {
    const onKeyDown = (ev: KeyboardEvent) => {
      if (ev.key === targetKey) {
        callbackFn();
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [targetKey, callbackFn]);
};

export { useKeyPress };
