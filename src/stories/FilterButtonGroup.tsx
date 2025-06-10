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