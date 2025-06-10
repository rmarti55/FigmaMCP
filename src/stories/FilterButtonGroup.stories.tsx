import type { Meta, StoryObj } from '@storybook/react';
import { FilterButtonGroup } from './FilterButtonGroup';

const meta: Meta<typeof FilterButtonGroup> = {
  title: 'Design System/Organisms/FilterButtonGroup',
  component: FilterButtonGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof FilterButtonGroup>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from './Button';

export function FilterButtonGroup() {
  return (
    <div className="flex flex-row gap-2 items-center p-4 bg-white rounded-lg">
      <Button variant="dark" className="pl-5 pr-3">
        Instagram
        <ChevronDown className="h-4 w-4 ml-2" />
      </Button>
      <Button variant="selected">Comments</Button>
      <Button variant="default">Ads</Button>
      <Button variant="default">All Posts</Button>
      <Button variant="default">Earned Media</Button>
      <Button variant="default">Statistics</Button>
    </div>
  );
}
        `,
      },
    },
  },
}; 