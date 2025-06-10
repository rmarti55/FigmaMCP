import type { Meta, StoryObj } from '@storybook/react';

import MultiBrand from './MultiBrand';

const meta: Meta<typeof MultiBrand> = {
  component: MultiBrand,
  title: 'Design System/Organisms/MultiBrand',
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
}; 