import React, { forwardRef } from 'react';
import clsx from 'clsx';
import {
  AddIcon,
  SortIcon,
  MenuDown,
} from '../../../../../../../components/Icons';
import { WalkthroughStep, WALKTHROUGH_STEPS } from '../Walkthrough';
import {
  AppListbox,
  IconButton,
  Menu,
} from '../../../../../../../components/v2';
import { useMyWalletPageContext } from '../../../../../context';
import { SORT_OPTIONS } from '../../../../../hooks';
import { WalletItemsSortTypeInput } from '@/generated/graphql';

export interface WalletToolbarProps {
  walkthrough: WalkthroughStep | undefined;
  sticky?: boolean;
}

const PopupMenuItem: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
}> = ({ children, onClick }) => {
  return (
    <div
      className="block p-4 font-sans text-14-px leading-6 text-gray-800 cursor-pointer"
      onClick={onClick}
    >
      {children}
    </div>
  );
};

// We are using forwardRef here to pass the ref to this component directly from parent.
// Because we are getting scroll trigger event for this element while scrolling so we need to get the DOM element of this in the way
export const WalletToolbar = forwardRef<HTMLDivElement, WalletToolbarProps>(
  ({ walkthrough }, ref) => {
    const { changeSortDirection, changeSortType, setAppState, sort } =
      useMyWalletPageContext();
    return (
      <div className="w-full md:w-small-container-tablet lg:w-small-container mx-auto relative">
        <div
          className={clsx(
            'mx-auto px-5 md:px-0 py-7 md:py-8 flex justify-between',
            (walkthrough === WALKTHROUGH_STEPS.SHOW_WALLET_ITEM ||
              walkthrough === WALKTHROUGH_STEPS.SHOW_ADD_BUTTON) &&
              'pb-60 lg:pb-10',
          )}
          ref={ref}
        >
          <div className="flex flex-1">
            <div
              className={clsx(
                'w-sort-dropdown-small md:w-sort-dropdown',
                (walkthrough === WALKTHROUGH_STEPS.SHOW_WALLET_ITEM ||
                  walkthrough === WALKTHROUGH_STEPS.SHOW_ADD_BUTTON) &&
                  'opacity-30',
              )}
            >
              <AppListbox
                options={SORT_OPTIONS}
                value={sort}
                onChange={(value) =>
                  changeSortType(value as keyof WalletItemsSortTypeInput)
                }
                $variant="sort"
              />
            </div>
            <div className="ml-2 lg:ml-4">
              <IconButton
                $outline={false}
                onClick={changeSortDirection}
                disabled={
                  walkthrough === WALKTHROUGH_STEPS.SHOW_WALLET_ITEM ||
                  walkthrough === WALKTHROUGH_STEPS.SHOW_ADD_BUTTON
                }
              >
                <SortIcon />
              </IconButton>
            </div>
          </div>
          <div className="flex">
            <div className="relative inline-flex">
              <Menu.Wrapper>
                <Menu.Button>
                  <div>
                    <IconButton
                      $iconLeft={<AddIcon />}
                      $outline={false}
                      $wide
                      onClick={() => null}
                    >
                      add <MenuDown />
                    </IconButton>
                  </div>
                </Menu.Button>
                <Menu.Items position="left">
                  <Menu.Item>
                    <PopupMenuItem onClick={() => setAppState('AddWallet')}>
                      Add to your wallet
                    </PopupMenuItem>
                  </Menu.Item>
                  <Menu.Divider />
                  <Menu.Item>
                    <PopupMenuItem
                      onClick={() => setAppState('ForwardReceipt')}
                    >
                      Forward a receipt
                    </PopupMenuItem>
                  </Menu.Item>
                </Menu.Items>
              </Menu.Wrapper>
            </div>
          </div>
        </div>
      </div>
    );
  },
);
WalletToolbar.displayName = 'WalletToolbar';
