import { useEffect, useState, RefObject } from 'react';

// This is custom hook to get what stickable element to show by scrolling
// It receives HTMLDivElementRefs as array
const useSticky = (refs: Array<RefObject<HTMLDivElement>>) => {
  const [visibleIndex, setVisibleIndex] = useState(-1);

  useEffect(() => {
    // If there is null ref, don't check.
    // Can be happend if the page isn't fully mounted
    if (refs.find((ref) => ref.current === null)) {
      return;
    }

    // Scrolling event
    const onScroll = () => {
      const NAV_BAR = 64;
      let index = -1;

      // Checks 1 - n-1 refs to see if current window scroll is between i and i+1 div
      // If that is, set visible index as i so that we can know i to show on page
      for (let i = 0; i < refs.length - 1; i++) {
        const currentEl = refs[i].current;
        if (!!currentEl) {
          const boundingRect = currentEl.getBoundingClientRect();
          const { top: currentTop, height: currentHeight } = boundingRect;
          if (currentTop <= NAV_BAR && currentTop + currentHeight >= NAV_BAR) {
            index = i;
          }
        }
      }
      const lastEl = refs[refs.length - 1].current;
      if (!!lastEl) {
        const boundingRect = lastEl.getBoundingClientRect();
        const { top: currentTop, height: currentHeight } = boundingRect;
        if (currentTop <= NAV_BAR) {
          index = refs.length - 1;
        }
      }
      setVisibleIndex(index);
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [refs]);

  return {
    visibleIndex,
  };
};

export { useSticky };
