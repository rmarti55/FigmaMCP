import type { Meta, StoryObj } from '@storybook/react';
import { FilterBar } from './FilterBar';

const meta: Meta<typeof FilterBar> = {
  title: 'Design System/Organisms/FilterBar',
  component: FilterBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  globals: {
    viewport: { value: 'ipad12p', isRotated: false },
  },
};

export default meta;
type Story = StoryObj<typeof FilterBar>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `
import React from 'react';
import { Button } from './Button';
import { DropdownButton } from './DropdownButton';
import { SearchInput } from './SearchInput';

export function FilterBar() {
  return (
    <div className="p-4 bg-gray-50 border rounded-lg w-full">
      <div className="flex items-center gap-2">
        <div className="w-64">
          <SearchInput />
        </div>
        <DropdownButton buttonVariant="rectangular" items={['Search Post']} />
        <DropdownButton buttonVariant="rectangular" items={['Show Bookmarked', 'Show All']} />
        <DropdownButton buttonVariant="rectangular" items={['Response', 'No Response']} />
        <DropdownButton buttonVariant="rectangular" items={['Comment Posted Time', 'Last 24 Hours']} />
        <DropdownButton buttonVariant="rectangular" items={['Show Hidden', 'Hide Hidden']} />
        <div className="flex-grow" />
        <Button variant="default">REFRESH</Button>
      </div>
    </div>
  );
}
        `,
      },
    },
  },
}; 