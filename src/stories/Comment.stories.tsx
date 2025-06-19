import type { Meta, StoryObj } from '@storybook/react';
import { Comment, type SentimentType } from './Comment';

const source = `
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import clsx from 'clsx';

export type SentimentType = 'positive' | 'negative' | 'neutral';

export interface CommentProps {
  headerText?: string;
  profileImage?: string;
  profileName: string;
  sentiment: SentimentType;
  commentText: string;
  timestamp: string;
  showHeader?: boolean;
  onSentimentChange?: (sentiment: SentimentType) => void;
  onAddClick?: () => void;
  className?: string;
}

export const Comment: React.FC<CommentProps> = ({
  headerText = "Comments",
  profileImage,
  profileName,
  sentiment,
  commentText,
  timestamp,
  showHeader = false,
  onSentimentChange,
  onAddClick,
  className = "",
}) => {
  // Component implementation...
};
`;

const meta: Meta<typeof Comment> = {
  title: 'Design System/Atoms/Comment',
  component: Comment,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A comment component with profile image, sentiment selection, comment text, timestamp, and add button. Uses Futura Std font family for consistent typography.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    headerText: {
      control: 'text',
      description: 'The header text for the comments section',
    },
    profileImage: {
      control: 'text',
      description: 'Profile image URL',
    },
    profileName: {
      control: 'text',
      description: 'Profile name/username',
    },
    sentiment: {
      control: 'select',
      options: ['positive', 'negative', 'neutral'],
      description: 'Current sentiment selection',
    },
    commentText: {
      control: 'text',
      description: 'Comment body text',
    },
    timestamp: {
      control: 'text',
      description: 'Timestamp string',
    },
    showHeader: {
      control: 'boolean',
      description: 'Show the header (for first comment in a section)',
    },
    onSentimentChange: {
      action: 'sentiment changed',
      description: 'Callback when sentiment changes',
    },
    onAddClick: {
      action: 'add clicked',
      description: 'Callback when add button is clicked',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Comment>;

export const Default: Story = {
  args: {
    profileName: 'maddie.ratcliff',
    sentiment: 'positive',
    commentText: 'Love elf',
    timestamp: '22:34:20 June 18, 2025 PST',
  },
  parameters: {
    docs: {
      source: {
        code: source,
      },
    },
  },
};

export const WithHeader: Story = {
  args: {
    showHeader: true,
    profileName: 'maddie.ratcliff',
    sentiment: 'positive',
    commentText: 'Love elf',
    timestamp: '22:34:20 June 18, 2025 PST',
  },
};

export const WithProfileImage: Story = {
  args: {
    profileImage: 'https://picsum.photos/seed/maddie/40/40',
    profileName: 'maddie.ratcliff',
    sentiment: 'positive',
    commentText: 'Love elf',
    timestamp: '22:34:20 June 18, 2025 PST',
  },
};

export const NegativeSentiment: Story = {
  args: {
    profileName: 'guss.gussssspam',
    sentiment: 'negative',
    commentText: 'I miss all of the old elf products 😭',
    timestamp: '14:55:37 June 18, 2025 PST',
  },
};

export const NeutralSentiment: Story = {
  args: {
    profileName: 'user.example',
    sentiment: 'neutral',
    commentText: 'This is an okay product, nothing special but does the job.',
    timestamp: '16:25:00 June 18, 2025 PST',
  },
};

export const LongComment: Story = {
  args: {
    profileImage: 'https://picsum.photos/seed/user/40/40',
    profileName: 'beauty.enthusiast',
    sentiment: 'positive',
    commentText: '@elfcosmetics the original formula of the st Lucia and bronzer in powder form! I\'m literally saving it for my wedding! 😍 This product has been a game-changer in my routine.',
    timestamp: '16:50:23 June 18, 2025 PST',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-6">
      <Comment
        showHeader={true}
        profileName="maddie.ratcliff"
        sentiment="positive"
        commentText="Love elf"
        timestamp="22:34:20 June 18, 2025 PST"
      />
      <Comment
        profileImage="https://picsum.photos/seed/guss/40/40"
        profileName="guss.gussssspam"
        sentiment="negative"
        commentText="I miss all of the old elf products 😭"
        timestamp="14:55:37 June 18, 2025 PST"
      />
      <Comment
        profileImage="https://picsum.photos/seed/neutral/40/40"
        profileName="neutral.user"
        sentiment="neutral"
        commentText="It's an okay product."
        timestamp="12:30:15 June 18, 2025 PST"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Shows all sentiment variants in a single view',
      },
    },
  },
}; 