import React from 'react';
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

export function FilterButtonGroup() {
  return (
    <div className="flex flex-row gap-2 items-center p-4 bg-white rounded-lg">
      <DropdownButton items={socialMediaPlatforms} />
      <Button variant="selected">Comments</Button>
      <Button variant="default">Ads</Button>
      <Button variant="default">All Posts</Button>
      <Button variant="default">Earned Media</Button>
      <Button variant="default">Statistics</Button>
    </div>
  );
} 