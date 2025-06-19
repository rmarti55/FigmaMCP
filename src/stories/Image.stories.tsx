import type { Meta, StoryObj } from '@storybook/react';
import { Image } from './Image';

const source = `
import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const imageVariants = cva(
  'object-cover rounded-lg',
  {
    variants: {
      aspectRatio: {
        '3:4': 'aspect-[3/4]',
        '4:3': 'aspect-[4/3]',
        '1:1': 'aspect-square',
        '16:9': 'aspect-video',
        auto: 'aspect-auto',
      },
      size: {
        xs: 'w-16',
        sm: 'w-24',
        md: 'w-32',
        lg: 'w-48',
        xl: 'w-64',
        '2xl': 'w-80',
        full: 'w-full',
      },
      rounded: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      aspectRatio: '3:4',
      size: 'full',
      rounded: 'lg',
    },
  }
);

export interface ImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement>,
    VariantProps<typeof imageVariants> {
  src: string;
  alt: string;
  fallback?: string;
  className?: string;
}

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  fallback,
  aspectRatio,
  size,
  rounded,
  className,
  onError,
  ...props
}) => {
  // Component implementation...
};
`;

const meta: Meta<typeof Image> = {
  title: 'Design System/Atoms/Image',
  component: Image,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A flexible image component with consistent aspect ratios, sizing options, and fallback support. Default aspect ratio is 3:4 for modal content.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'text',
      description: 'Image source URL',
    },
    alt: {
      control: 'text',
      description: 'Alt text for accessibility',
    },
    fallback: {
      control: 'text',
      description: 'Optional fallback image URL',
    },
    aspectRatio: {
      control: 'select',
      options: ['3:4', '4:3', '1:1', '16:9', 'auto'],
      description: 'Image aspect ratio',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', 'full'],
      description: 'Image width size',
    },
    rounded: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl', 'full'],
      description: 'Border radius',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Image>;

export const Default: Story = {
  args: {
    src: 'https://picsum.photos/seed/modal/600/800',
    alt: 'Modal content image',
  },
  parameters: {
    docs: {
      source: {
        code: source,
      },
    },
  },
};

export const PostImage: Story = {
  args: {
    src: 'https://picsum.photos/seed/cosmetics/600/800',
    alt: 'e.l.f. cosmetics products arranged in a pattern',
    size: 'lg',
  },
};

export const Square: Story = {
  args: {
    src: 'https://picsum.photos/seed/square/400/400',
    alt: 'Square image example',
    aspectRatio: '1:1',
    size: 'md',
  },
};

export const Landscape: Story = {
  args: {
    src: 'https://picsum.photos/seed/landscape/800/600',
    alt: 'Landscape image example',
    aspectRatio: '4:3',
    size: 'lg',
  },
};

export const Video: Story = {
  args: {
    src: 'https://picsum.photos/seed/video/1600/900',
    alt: 'Video aspect ratio example',
    aspectRatio: '16:9',
    size: 'xl',
  },
};

export const WithFallback: Story = {
  args: {
    src: 'https://invalid-url-that-will-fail.jpg',
    alt: 'Image with fallback',
    fallback: 'https://picsum.photos/seed/fallback/600/800',
    size: 'md',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 items-end">
      <Image
        src="https://picsum.photos/seed/xs/600/800"
        alt="Extra small"
        size="xs"
      />
      <Image
        src="https://picsum.photos/seed/sm/600/800"
        alt="Small"
        size="sm"
      />
      <Image
        src="https://picsum.photos/seed/md/600/800"
        alt="Medium"
        size="md"
      />
      <Image
        src="https://picsum.photos/seed/lg/600/800"
        alt="Large"
        size="lg"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Shows different size variants of the Image component',
      },
    },
  },
};

export const AspectRatios: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 max-w-2xl">
      <div className="space-y-2">
        <h4 className="font-sans text-sm font-medium">3:4 (Default)</h4>
        <Image
          src="https://picsum.photos/seed/3-4/600/800"
          alt="3:4 aspect ratio"
          size="sm"
        />
      </div>
      <div className="space-y-2">
        <h4 className="font-sans text-sm font-medium">4:3</h4>
        <Image
          src="https://picsum.photos/seed/4-3/800/600"
          alt="4:3 aspect ratio"
          aspectRatio="4:3"
          size="sm"
        />
      </div>
      <div className="space-y-2">
        <h4 className="font-sans text-sm font-medium">1:1 (Square)</h4>
        <Image
          src="https://picsum.photos/seed/1-1/400/400"
          alt="1:1 aspect ratio"
          aspectRatio="1:1"
          size="sm"
        />
      </div>
      <div className="space-y-2">
        <h4 className="font-sans text-sm font-medium">16:9 (Video)</h4>
        <Image
          src="https://picsum.photos/seed/16-9/1600/900"
          alt="16:9 aspect ratio"
          aspectRatio="16:9"
          size="sm"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Shows all available aspect ratio variants',
      },
    },
  },
}; 