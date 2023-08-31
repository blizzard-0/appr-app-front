import { mixpanel } from '../../../modules/mixpanel/mixpanel';

export const handleTrack = {
  /**
   * Fired whenever a user begins adding a new wallet item.
   * Right now, it could happen via Instagram or via Filesystem.
   */
  initiateNewWalletItem: (payload: {
    uploadSource: 'instagram' | 'filesystem';
  }) => {
    mixpanel.track('initiateAddWalletItem', payload);
  },

  /**
   * Fired whenever a user submits a new wallet item
   */
  submitNewWalletItem: (payload: {
    uploadSource: 'instagram' | 'filesystem';
  }) => {
    mixpanel.track('submitNewWalletItem', payload);
  },

  /**
   * Fired whenever a user submits a removeWalletItem mutation
   */
  removeWalletItems: (payload: { numRemoved: number }) => {
    mixpanel.track('submitRemoveWalletItems', payload);
  },
};
