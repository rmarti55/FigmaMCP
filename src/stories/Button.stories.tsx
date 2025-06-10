import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'selected'],
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    children: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Default Button',
    variant: 'default',
    disabled: false,
  },
};

export const Selected: Story = {
  args: {
    children: 'Selected Button',
    variant: 'selected',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    variant: 'default',
    disabled: true,
  },
};

export const Showcase: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button variant="default">Comments</Button>
      <Button variant="default">Ads</Button>
      <Button variant="selected">All Posts</Button>
      <Button variant="default">Earned Media</Button>
      <Button variant="default" disabled>
        Statistics
      </Button>
    </div>
  ),
}; 