import { Combobox, Transition } from '@headlessui/react';
import React, { Fragment, useState } from 'react';
import {
  StyledComboboxInput,
  StyledComboboxLabel,
  StyledComboboxOption,
  StyledComboboxOptions,
  StyledComboboxWrapper,
} from './Autocomplete.styled';

type T = string;

export interface Option<T> {
  value: T;
  label: string;
}

interface AutocompleteProps {
  options: Option<T>[];
  placeholder: string;
  label?: string;
  value?: string;
  onSelect: (value: string) => void;
  onChange: (value: string) => void;
}

export const Autocomplete: React.FC<AutocompleteProps> = ({
  options,
  placeholder,
  label,
  value,
  onSelect,
  onChange,
}) => {
  const [suggest, setSuggest] = useState(value);

  return (
    <Combobox value={suggest} onChange={onSelect}>
      <StyledComboboxWrapper>
        {label && <StyledComboboxLabel>{label}</StyledComboboxLabel>}
        <Combobox.Input
          // TODO: enter key should be handled by Combobox.Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            onChange(e.target.value);
            setSuggest(e.target.value);
          }}
          placeholder={placeholder}
          as={StyledComboboxInput}
        />
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Combobox.Options as={StyledComboboxOptions}>
            {options.map((option) => (
              <Combobox.Option
                as={Fragment}
                key={option.label}
                value={option.value}
              >
                {({ active }) => (
                  <StyledComboboxOption
                    $active={active}
                    onClick={() => {
                      setSuggest(option.label);
                      onChange(option.label);
                      onSelect(option.label);
                    }}
                  >
                    {option.label}
                  </StyledComboboxOption>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </Transition>
      </StyledComboboxWrapper>
    </Combobox>
  );
};
