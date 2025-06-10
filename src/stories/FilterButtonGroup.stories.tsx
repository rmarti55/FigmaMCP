import type { Meta, StoryObj } from '@storybook/react';
import { FilterButtonGroup } from './FilterButtonGroup';

const meta: Meta<typeof FilterButtonGroup> = {
  title: 'Design System/Organisms/FilterButtonGroup',
  component: FilterButtonGroup,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FilterButtonGroup>;

export const Default: Story = {}; 