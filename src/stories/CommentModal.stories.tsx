import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { CommentModal, type CommentData, type AIResponseData } from './CommentModal';

const source = `
import React from 'react';
import { X } from 'lucide-react';
import { Image } from './Image';
import { PostBody } from './PostBody';
import { Comment, type SentimentType } from './Comment';
import { AIResponse } from './AIResponse';

export interface CommentData {
  id: string;
  profileImage?: string;
  profileName: string;
  sentiment: SentimentType;
  commentText: string;
  timestamp: string;
}

export interface AIResponseData {
  id: string;
  profileImage?: string;
  profileName: string;
  bodyText: string;
}

export const CommentModal: React.FC<CommentModalProps> = ({
  isOpen,
  onClose,
  postImage,
  postImageAlt,
  postBodyText,
  comments,
  aiResponses,
  // ... other props
}) => {
  // Component implementation...
};
`;

const mockComments: CommentData[] = [
  {
    id: '1',
    profileName: 'maddie.ratcliff',
    sentiment: 'positive',
    commentText: 'Love elf',
    timestamp: '22:34:20 June 18, 2025 PST',
  },
  {
    id: '2',
    profileImage: 'https://picsum.photos/seed/guss/40/40',
    profileName: 'guss.gussssspam',
    sentiment: 'negative',
    commentText: 'I miss all of the old elf products 😭',
    timestamp: '14:55:37 June 18, 2025 PST',
  },
];

const mockAIResponses: AIResponseData[] = [
  {
    id: 'ai-1',
    profileName: 'e.l.f. Cosmetics and Skincare',
    bodyText: '@maddie.ratcliff We love you! 🥰',
  },
  {
    id: 'ai-2',
    profileName: 'e.l.f. Cosmetics and Skincare',
    bodyText: '@guss.gussssspam OMG we love that for you! 😊 St. Lucia Bronzer is an e.l.f.ing classic! 🙌 We know you\'ll be glowing and radiant on your special day!',
  },
];

const meta: Meta<typeof CommentModal> = {
  title: 'Design System/Organisms/CommentModal',
  component: CommentModal,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A modal organism that displays post content, comments, and AI responses. Combines Image, PostBody, Comment, and AIResponse atoms in a two-column layout.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Whether the modal is open',
    },
    postImage: {
      control: 'text',
      description: 'Post image URL',
    },
    postImageAlt: {
      control: 'text',
      description: 'Post image alt text',
    },
    postBodyText: {
      control: 'text',
      description: 'Post body content',
    },
    responseFilter: {
      control: 'select',
      options: ['All', 'Posted', 'Not Posted'],
      description: 'Response filter dropdown value',
    },
    showHide: {
      control: 'boolean',
      description: 'Show hide checkbox state',
    },
    onClose: {
      action: 'close clicked',
      description: 'Callback when modal should close',
    },
    onSentimentChange: {
      action: 'sentiment changed',
      description: 'Callback when comment sentiment changes',
    },
    onCommentAdd: {
      action: 'comment add clicked',
      description: 'Callback when comment add button is clicked',
    },
    onAIResponseEdit: {
      action: 'AI response edit clicked',
      description: 'Callback when AI response edit is clicked',
    },
    onAIResponsePost: {
      action: 'AI response post clicked',
      description: 'Callback when AI response post is clicked',
    },
  },
};

export default meta;
type Story = StoryObj<typeof CommentModal>;

export const Default: Story = {
  args: {
    isOpen: true,
    postImage: 'https://picsum.photos/seed/cosmetics/600/800',
    postImageAlt: 'e.l.f. cosmetics products arranged in a pattern',
    postBodyText: 'The glow-up is real. ✨ Which e.l.f. product is your fave? 👇 Tell us in the comments 😊 #elftalgia #elfcosmetics #elfinamazing #eyeslipsface',
    comments: mockComments,
    aiResponses: mockAIResponses,
  },
  parameters: {
    docs: {
      source: {
        code: source,
      },
    },
  },
};

export const RaceCarPost: Story = {
  args: {
    isOpen: true,
    postImage: 'https://picsum.photos/seed/racecar/600/800',
    postImageAlt: 'e.l.f. race car themed cosmetics',
    postBodyText: 'Start your e.l.f.ing engines! 🏎️ @elfcosmetics and the legendary @katherineracing are gearing up to race at Autódromo Hermanos Rodríguez for the @nascar Viva Mexico 250. 🏁 Tune in as she races her iconic Power Grip Primer-inspired car. Looking for makeup grip that sticks? 👀 Shop Power Grip Primer and all your e.l.f. faves online at sephora.com.mx and in-store at ALL Sephora Mexico locations. #elfsephoramexico #elfcosmetics',
    comments: mockComments,
    aiResponses: mockAIResponses,
  },
};

export const SingleComment: Story = {
  args: {
    isOpen: true,
    postImage: 'https://picsum.photos/seed/single/600/800',
    postImageAlt: 'Single product showcase',
    postBodyText: 'Just got my beauty box and I\'m so excited to try the products! ✨ #BeautyBox',
    comments: [mockComments[0]],
    aiResponses: [mockAIResponses[0]],
  },
};

export const MultipleComments: Story = {
  args: {
    isOpen: true,
    postImage: 'https://picsum.photos/seed/multiple/600/800',
    postImageAlt: 'Multiple products display',
    postBodyText: 'Loving the new packaging on these products! So chic and sustainable!',
    comments: [
      ...mockComments,
      {
        id: '3',
        profileImage: 'https://picsum.photos/seed/user3/40/40',
        profileName: 'beauty.lover',
        sentiment: 'positive',
        commentText: 'The pigment is incredible! This eyeshadow palette has so many amazing colors.',
        timestamp: '16:20:15 June 18, 2025 PST',
      },
      {
        id: '4',
        profileName: 'skincare.enthusiast',
        sentiment: 'neutral',
        commentText: 'My skin has never felt so soft. Thank you!',
        timestamp: '18:45:30 June 18, 2025 PST',
      },
    ],
    aiResponses: [
      ...mockAIResponses,
      {
        id: 'ai-3',
        profileName: 'e.l.f. Cosmetics and Skincare',
        bodyText: '@beauty.lover We agree! The color payoff is one of our favorite things about it. ✨',
      },
      {
        id: 'ai-4',
        profileName: 'e.l.f. Cosmetics and Skincare',
        bodyText: '@skincare.enthusiast That makes us so happy to hear! Soft skin for the win! 💕',
      },
    ],
  },
};

export const Closed: Story = {
  args: {
    isOpen: false,
    postImage: 'https://picsum.photos/seed/closed/600/800',
    postImageAlt: 'Closed modal example',
    postBodyText: 'This modal is closed',
    comments: mockComments,
    aiResponses: mockAIResponses,
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows the modal in closed state (nothing rendered)',
      },
    },
  },
};

export const InteractiveDemo: Story = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);
    
    return (
      <div className="p-8">
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-sans"
        >
          Open Comment Modal
        </button>
        
        <CommentModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          postImage="https://picsum.photos/seed/interactive/600/800"
          postImageAlt="Interactive demo image"
          postBodyText="Click the button above to open this modal! This demonstrates the full interactive experience."
          comments={mockComments}
          aiResponses={mockAIResponses}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive demo showing how to open and close the modal',
      },
    },
  },
}; 