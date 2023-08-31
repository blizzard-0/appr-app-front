import React, { InputHTMLAttributes } from 'react';
import { SearchIcon } from '../../../components/Icons';
import { FormControl, FormInput } from '@/components/v2';

export const ProductSearch: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({
  ...rest
}) => {
  return (
    <FormControl $align="left" className="relative mb-6 md:mb-8 px-2.5 md:px-0">
      <FormInput
        placeholder="What do you appreciate?"
        $size="large"
        $noBorder
        {...rest}
      />
      <div className="absolute top-3 right-6 md:right-4 text-gray-500">
        <SearchIcon />
      </div>
    </FormControl>
  );
};
