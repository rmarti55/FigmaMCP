import type { Preview } from '@storybook/react-vite'
import React from 'react';
import '../src/index.css'

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      codePanel: true,
      source: {
        type: 'code',
      },
    },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [
          'Design System', 
          [
            'Foundation', 
            'Atoms', 
            'Molecules', 
            'Organisms'
          ]
        ],
      },
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;