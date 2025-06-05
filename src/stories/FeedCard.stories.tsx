import type { Meta, StoryObj } from '@storybook/react';
import FeedCard from './FeedCard';

const meta: Meta<typeof FeedCard> = {
  title: 'Components/FeedCard',
  component: FeedCard,
};

export default meta;
type Story = StoryObj<typeof FeedCard>;

export const Default: Story = {}; 