import '../styles/globals.css';

import { setConfig } from 'next/config';
import { publicRuntimeConfig } from '../next.config';
import { RouterContext } from 'next/dist/next-server/lib/router-context';
setConfig({ publicRuntimeConfig });

// TODO: pass same build args as rc next app build into the storybook build

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};
