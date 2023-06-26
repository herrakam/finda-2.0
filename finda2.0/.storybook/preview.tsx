import type { Preview } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { darkMode } from '../src/globalStyles/GlobalTheme';
import React from 'react';

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
  decorators: [
    Story => {
      return (
        <ThemeProvider theme={darkMode}>
          <Story />
        </ThemeProvider>
      );
    },
  ],
};

export default preview;

