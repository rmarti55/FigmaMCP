import type { Meta, StoryObj } from '@storybook/react';

import Header from './Header';

const meta: Meta<typeof Header> = {
  component: Header,
  title: 'BF Elfuencer/Header',
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
}; 