import type { Meta, StoryObj } from '@storybook/react';
import { DropdownButton } from './DropdownButton';

const meta: Meta<typeof DropdownButton> = {
  title: 'Design System/Atoms/DropdownButton',
  component: DropdownButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DropdownButton>;

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

export const Default: Story = {
  args: {
    items: socialMediaPlatforms,
  },
}; 