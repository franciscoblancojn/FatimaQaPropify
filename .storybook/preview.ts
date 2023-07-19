import type { Preview } from '@storybook/react';

import  "fenextjs-component/styles/index.css"
import "../styles/style.css"

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;