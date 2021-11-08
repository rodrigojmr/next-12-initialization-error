import { Configuration, apply } from 'twind';

import { theme } from './theme';

const config: Configuration = {
  mode: 'silent',
  preflight: (preflight, { theme }) => ({
    ...preflight,
    html: {
      'scroll-behavior': 'smooth',
      'scroll-padding': '4.5rem'
    }
  }),
  prefix: true,
  theme: {
    extend: theme
  }
};

export default config;
