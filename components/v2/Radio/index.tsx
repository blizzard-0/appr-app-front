import React from 'react';

import { StyledRadioWrapper, StyledRadioLabel } from './Radio.styled';
import { RadioOffIcon, RadioOnIcon } from './icons';

export interface Option {
  label: string;
  value: string;
}

interface RadioProps {
  selected: string;
  onChange: (v: string) => void;
  children?: React.ReactNode;
  items: Option[];
}

export const Radio: React.FC<RadioProps> = ({ selected, onChange, items }) => {
  return (
    <>
      {items.map((item, index) => (
        <StyledRadioWrapper onClick={() => onChange(item.value)} key={index}>
          {item.value === selected ? <RadioOnIcon /> : <RadioOffIcon />}
          <StyledRadioLabel>{item.label}</StyledRadioLabel>
        </StyledRadioWrapper>
      ))}
    </>
  );
};
