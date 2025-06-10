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
import React, { useState } from 'react';
import { Button } from './Button';
import { DropdownButton } from './DropdownButton';

const socialMediaPlatforms = [
  'Instagram',
  'TikTok',
  'Facebook',
  'YouTube',
  'Twitter',
  'LinkedIn',
  'Pinterest',
  'Snapchat',
  'Reddit',
  'Twitch',
];

const filterOptions = ['Comments', 'Ads', 'All Posts', 'Earned Media', 'Statistics'];

export function FilterButtonGroup() {
  const [selectedFilter, setSelectedFilter] = useState('Comments');

  return (
    <div className="flex flex-row gap-2 items-center p-4 bg-white rounded-lg">
      <DropdownButton items={socialMediaPlatforms} />
      {filterOptions.map((option) => (
        <Button
          key={option}
          variant={selectedFilter === option ? 'selected' : 'default'}
          onClick={() => setSelectedFilter(option)}
        >
          {option}
        </Button>
      ))}
    </div>
  );
}
        `,
      },
    },
  },
}; 