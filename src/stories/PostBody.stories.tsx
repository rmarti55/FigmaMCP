import type { Meta, StoryObj } from '@storybook/react';
import { PostBody } from './PostBody';

const source = `
import React from 'react';

export interface PostBodyProps {
  headerText?: string;
  bodyText: string;
  className?: string;
}

export const PostBody: React.FC<PostBodyProps> = ({
  headerText = "Post Body",
  bodyText,
  className = "",
}) => {
  return (
    <div className={\`space-y-4 \${className}\`}>
      <h3 className="font-sans text-lg font-semibold text-gray-900">
        {headerText}
      </h3>
      <p className="font-sans text-base text-gray-700 leading-relaxed">
        {bodyText}
      </p>
    </div>
  );
};
`;

const meta: Meta<typeof PostBody> = {
  title: 'Design System/Atoms/PostBody',
  component: PostBody,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A simple atom component for displaying post content with an optional header. Uses Jost font family for consistent typography.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    headerText: {
      control: 'text',
      description: 'The header text for the post body section',
    },
    bodyText: {
      control: 'text',
      description: 'The main post content text',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof PostBody>;

export const Default: Story = {
  args: {
    bodyText: "Just got my beauty box and I'm so excited to try the products! ✨ #BeautyBox",
  },
  parameters: {
    docs: {
      source: {
        code: source,
      },
    },
  },
};

export const WithCustomHeader: Story = {
  args: {
    headerText: "Original Post",
    bodyText: "Just got my beauty box and I'm so excited to try the products! ✨ #BeautyBox",
  },
};

export const LongContent: Story = {
  args: {
    bodyText: "Start your e.l.f.ing engines! 🏎️ @elfcosmetics and the legendary @katherineracing are gearing up to race at Autódromo Hermanos Rodríguez for the @nascar Viva Mexico 250. 🏁 Tune in as she races her iconic Power Grip Primer-inspired car. Looking for makeup grip that sticks? 👀 Shop Power Grip Primer and all your e.l.f. faves online at sephora.com.mx and in-store at ALL Sephora Mexico locations. #elfsephoramexico #elfcosmetics",
  },
};

export const MinimalContent: Story = {
  args: {
    bodyText: "Loving this new shade! 💄",
  },
};

export const WithHashtags: Story = {
  args: {
    bodyText: "The glow-up is real. ✨ Which e.l.f. product is your fave? 👇 Tell us in the comments 😊 #elftalgia #elfcosmetics #elfinamazing #eyeslipsface",
  },
}; 