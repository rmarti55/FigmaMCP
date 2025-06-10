import type { Meta, StoryObj } from '@storybook/react';
import { ChevronDown } from 'lucide-react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'selected', 'dark'],
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg'],
    },
    disabled: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Default Button',
    variant: 'default',
  },
};

export const Selected: Story = {
  args: {
    children: 'Selected Button',
    variant: 'selected',
  },
};

export const Dark: Story = {
  args: {
    children: 'Dark Button',
    variant: 'dark',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    variant: 'default',
    disabled: true,
  },
};

export const FilterButtonGroup: Story = {
  name: 'Filter Button Group',
  render: () => (
    <div className="flex flex-row gap-2 items-center p-4 bg-gray-50 rounded-lg">
      <Button variant="dark">
        Instagram
        <ChevronDown className="h-4 w-4 ml-1 stroke-current" />
      </Button>
      <Button variant="selected">Comments</Button>
      <Button variant="default">Ads</Button>
      <Button variant="default">All Posts</Button>
      <Button variant="default">Earned Media</Button>
      <Button variant="default">Statistics</Button>
    </div>
  ),
}; 