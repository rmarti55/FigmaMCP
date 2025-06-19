import type { Meta, StoryObj } from '@storybook/react';
import { AIResponse } from './AIResponse';

const source = `
import React from 'react';
import { Edit } from 'lucide-react';
import { Button } from './Button';

export interface AIResponseProps {
  headerText?: string;
  profileImage?: string;
  profileName: string;
  bodyText: string;
  showHeader?: boolean;
  onEditClick?: () => void;
  onPostClick?: () => void;
  className?: string;
}

export const AIResponse: React.FC<AIResponseProps> = ({
  headerText = "AI Response",
  profileImage,
  profileName,
  bodyText,
  showHeader = false,
  onEditClick,
  onPostClick,
  className = "",
}) => {
  // Component implementation...
};
`;

const meta: Meta<typeof AIResponse> = {
  title: 'Design System/Atoms/AIResponse',
  component: AIResponse,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'An AI response component with profile image, response text, edit functionality, and post button. Uses Futura Std font family and our existing Button component.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    headerText: {
      control: 'text',
      description: 'The header text for the AI response section',
    },
    profileImage: {
      control: 'text',
      description: 'Profile image URL for the brand/AI',
    },
    profileName: {
      control: 'text',
      description: 'Profile name (e.g., "e.l.f. Cosmetics and Skincare")',
    },
    bodyText: {
      control: 'text',
      description: 'AI response body text',
    },
    showHeader: {
      control: 'boolean',
      description: 'Show the header (for first response in a section)',
    },
    onEditClick: {
      action: 'edit clicked',
      description: 'Callback when edit icon is clicked',
    },
    onPostClick: {
      action: 'post clicked',
      description: 'Callback when post button is clicked',
    },
  },
};

export default meta;
type Story = StoryObj<typeof AIResponse>;

export const Default: Story = {
  args: {
    profileName: 'e.l.f. Cosmetics and Skincare',
    bodyText: '@maddie.ratcliff We love you! 🥰',
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
    profileName: 'e.l.f. Cosmetics and Skincare',
    bodyText: '@maddie.ratcliff We love you! 🥰',
  },
};

export const WithProfileImage: Story = {
  args: {
    profileImage: 'https://picsum.photos/seed/elf/40/40',
    profileName: 'e.l.f. Cosmetics and Skincare',
    bodyText: '@maddie.ratcliff We love you! 🥰',
  },
};

export const LongResponse: Story = {
  args: {
    profileName: 'e.l.f. Cosmetics and Skincare',
    bodyText: '@guss.gussssspam OMG we love that for you! 😊 St. Lucia Bronzer is an e.l.f.ing classic! 🙌 We know you\'ll be glowing and radiant on your special day!',
  },
};

export const MultipleResponses: Story = {
  render: () => (
    <div className="space-y-6">
      <AIResponse
        showHeader={true}
        profileName="e.l.f. Cosmetics and Skincare"
        bodyText="@maddie.ratcliff We love you! 🥰"
      />
      <AIResponse
        profileName="e.l.f. Cosmetics and Skincare"
        bodyText="@guss.gussssspam OMG we love that for you! 😊 St. Lucia Bronzer is an e.l.f.ing classic! 🙌 We know you'll be glowing and radiant on your special day!"
      />
      <AIResponse
        profileName="e.l.f. Cosmetics and Skincare"
        bodyText="Thanks for sharing your experience! We're so glad you're loving our products! ✨"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Shows multiple AI responses in a conversation thread',
      },
    },
  },
};

export const CustomBrand: Story = {
  args: {
    profileImage: 'https://picsum.photos/seed/brand/40/40',
    profileName: 'Beauty Brand Support',
    bodyText: 'Thank you for your feedback! We really appreciate you taking the time to share your thoughts with us. 💕',
  },
};

export const WithEmojis: Story = {
  args: {
    profileName: 'e.l.f. Cosmetics and Skincare',
    bodyText: 'Hey fabulous! ✨ We\'re so grateful for your support! It inspires us every day! What\'s your favorite way to use our products? 💄',
  },
}; 