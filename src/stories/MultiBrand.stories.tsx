import type { Meta, StoryObj } from '@storybook/react';

import MultiBrand from './MultiBrand/index';

const meta: Meta<typeof MultiBrand> = {
  component: MultiBrand,
  title: 'Components/MultiBrand',
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // Args for the component go here.
    // Since this is a large, complex component, we'll start with no args.
  },
}; 