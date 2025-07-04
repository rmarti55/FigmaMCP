import React, { useState } from 'react';
import { Button } from './Button';

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

export function FilterButtonGroup({ darkMode = false }: { darkMode?: boolean }) {
  const [selectedFilter, setSelectedFilter] = useState('Comments');

  return (
    <div className={`flex flex-row gap-2 items-center rounded-lg w-full ${darkMode ? 'bg-black' : 'bg-white'}`}>
      <Button 
        variant="default"
        dropdown={{ 
          items: socialMediaPlatforms,
          onSelect: (item) => console.log('Platform selected:', item)
        }} 
      />
      {filterOptions.map((option) => (
        <Button
          key={option}
          variant={selectedFilter === option ? 'selected' : (darkMode ? 'dark' : 'default')}
          onClick={() => setSelectedFilter(option)}
        >
          {option}
        </Button>
      ))}
    </div>
  );
} 