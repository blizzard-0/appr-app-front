import { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';

import { ArrowIcon, CheckIcon } from './icon';

import {
  StyledListOption,
  StyledListOptions,
  StyledListSelector,
  StyledListWrapper,
  StyledListButton,
  StyledListButtonContainer,
  StyledListButtonContent,
} from './Listbox.styled';
import { ThinArrowIcon } from './icon/ThinArrow';
import { ThinCheckIcon } from './icon/ThinCheck';

type T = string;
export interface Option<T> {
  value: T;
  label: string;
}
export type AppListboxVariant = 'white' | 'gray' | 'sort';

interface AppListboxProps {
  value: T;
  options: Option<T>[];
  onChange: (option: T) => void;
  $variant?: AppListboxVariant;
  placeholder?: string;
}

export const AppListbox: React.FC<AppListboxProps> = ({
  value,
  options,
  onChange,
  $variant = 'gray',
  placeholder,
}) => {
  return (
    <Listbox value={value} onChange={onChange}>
      <StyledListWrapper>
        <StyledListSelector>
          <Listbox.Button as={Fragment}>
            <StyledListButtonContainer $variant={$variant}>
              <StyledListButtonContent $variant={$variant}>
                {placeholder && !value ? placeholder : ''}
                {options.find((o) => o.value === value)?.label}
              </StyledListButtonContent>
              <StyledListButton>
                {$variant !== 'sort' ? <ArrowIcon /> : <ThinArrowIcon />}
              </StyledListButton>
            </StyledListButtonContainer>
          </Listbox.Button>
        </StyledListSelector>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options as={StyledListOptions}>
            {options.map((option) => (
              <Listbox.Option
                key={option.label}
                as={Fragment}
                value={option.value}
              >
                {({ selected, active }) => (
                  <StyledListOption $active={active} $variant={$variant}>
                    <StyledListButtonContent $variant={$variant}>
                      {option.label}
                    </StyledListButtonContent>
                    {selected ? (
                      <StyledListButton>
                        {$variant !== 'sort' ? (
                          <CheckIcon />
                        ) : (
                          <ThinCheckIcon />
                        )}
                      </StyledListButton>
                    ) : null}
                  </StyledListOption>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </StyledListWrapper>
    </Listbox>
  );
};
