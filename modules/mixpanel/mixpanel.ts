import Mixpanel, { Dict } from 'mixpanel-browser';
import { publicRuntimeConfig } from '../config';

Mixpanel.init(publicRuntimeConfig.NEXT_PUBLIC_MIXPANEL_TOKEN, {
  debug: publicRuntimeConfig.NEXT_PUBLIC_MIXPANEL_DEBUG,
});

export const mixpanel = {
  identify: (id: string) => {
    Mixpanel.identify(id);
  },
  reset: () => {
    Mixpanel.reset();
  },
  alias: (id: string) => {
    Mixpanel.alias(id);
  },
  track: (name: string, props: Dict = {}) => {
    Mixpanel.track(name, props);
  },
};
