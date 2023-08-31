import { useUnboxingContext } from '@/modules/credential/context';
import React, { useEffect, useRef, useState } from 'react';

import { UnboxingHeader, UnboxingCard } from '..';
import { ProgressBar } from './components';
import {
  StyledBackground,
  StyledVideoWrapper,
  StyledUnboxingCardWrapper,
} from './PlayingSection.styled';

export const UnboxingPlaying: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [progress, setProgress] = useState(0);
  const { currentIndex, identifiedItems, setStep } = useUnboxingContext();

  useEffect(() => {
    const timerId = window.setInterval(() => {
      if (!videoRef.current || videoRef.current.readyState !== 4) return;
      const { duration } = videoRef.current;
      setProgress((prev) => prev + 10 / (duration + 2));
    }, 100);

    return () => {
      window.clearInterval(timerId);
    };
  }, []);

  useEffect(() => {
    if (progress < 100) return;
    setStep('Confirmation');
  }, [progress, setStep]);

  return (
    <StyledBackground>
      <UnboxingHeader />
      <ProgressBar progress={progress} />
      <StyledVideoWrapper>
        <video
          ref={videoRef}
          webkit-playsinline="true"
          controls={false}
          muted={true}
          playsInline={true}
          loop={false}
          preload="none"
          autoPlay={true}
          className="w-full h-full object-cover"
          poster="https://res.cloudinary.com/appreciate-stuff-inc/image/upload/v1660014108/assets/videos/unboxing_placeholder_new_i5eacr.jpg"
        >
          <source
            type="video/webm"
            src="https://res.cloudinary.com/appreciate-stuff-inc/video/upload/v1659707485/assets/videos/unboxing_lg_bbhe9i.webm"
          />
        </video>
        <StyledUnboxingCardWrapper>
          <UnboxingCard walletItem={identifiedItems[currentIndex]} />
        </StyledUnboxingCardWrapper>
      </StyledVideoWrapper>
    </StyledBackground>
  );
};
