import type { Meta, StoryObj } from '@storybook/react';
import { Download, Filter, Settings, ChevronDown } from 'lucide-react';
import { Button } from './Button';

const source = `
import React, { useState, useRef, useEffect } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const buttonVariants = cva(
  'inline-flex items-center justify-center text-sm font-normal transition-colors border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap truncate',
  {
    variants: {
      variant: {
        default: 'bg-white hover:bg-neutral-100 text-black border-[#c3c5d0] rounded-[35px]',
        selected: 'bg-[#dce0f4] text-black hover:bg-indigo-200 border-[#dce0f4] rounded-[35px]',
        dark: 'bg-gray-800 hover:bg-gray-700 text-white border-gray-700 rounded-[35px]',
        rectangular: 'h-10 justify-start bg-white hover:bg-neutral-100 text-black border-[#c3c5d0] rounded-none pl-3 pr-2 py-2 text-[14px] leading-[1.25]',
      },
      size: {
        default: 'h-8 px-5 py-[7px] text-[14px]',
        sm: 'h-7 px-3',
        lg: 'h-9 px-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

type DropdownConfig = {
  items: string[];
  onSelect?: (item: string) => void;
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  dropdown?: DropdownConfig;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, icon, children, ...props }, ref) => {
    const finalSize = variant === 'rectangular' || variant === 'dark-rectangular' ? null : size;
    return (
      <button
        className={clsx(
          buttonVariants({ variant, size: finalSize, className }),
        )}
        ref={ref}
        {...props}
      >
        {icon && (
          <span className="mr-2 flex-shrink-0">
            {React.cloneElement(icon as React.ReactElement, {
              className: clsx('h-4 w-4', (icon as React.ReactElement).props?.className),
            })}
          </span>
        )}
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
`;

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

const filterOptions = ['Show All', 'Show Bookmarked', 'Show Hidden'];

const meta: Meta<typeof Button> = {
  title: 'Design System/Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'selected', 'dark', 'rectangular'],
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg'],
    },
    iconPosition: {
      control: { type: 'select' },
      options: ['left', 'right'],
    },
    disabled: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
  },
  parameters: {
    docs: {
      source: {
        code: source,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Basic Button Variants
export const Default: Story = {
  args: {
    children: 'Default Button',
    variant: 'default',
  },
};

export const Selected: Story = {
  args: {
    children: 'Selected Button',
    variant: 'selected',
  },
};

export const Dark: Story = {
  args: {
    children: 'Dark Button',
    variant: 'dark',
  },
};

export const Rectangular: Story = {
  args: {
    children: 'Rectangular Button',
    variant: 'rectangular',
  },
};

// Icon Buttons
export const WithIconLeft: Story = {
  args: {
    children: 'Download',
    variant: 'default',
    icon: <Download />,
    iconPosition: 'left',
  },
};

export const WithIconRight: Story = {
  args: {
    children: 'Settings',
    variant: 'default',
    icon: <Settings />,
    iconPosition: 'right',
  },
};

export const DarkWithIcon: Story = {
  args: {
    children: 'Download',
    variant: 'dark',
    icon: <Download />,
  },
};

// Dropdown Buttons
export const WithDropdown: Story = {
  args: {
    variant: 'default',
    dropdown: {
      items: socialMediaPlatforms,
      onSelect: (item) => console.log('Selected:', item),
    },
  },
};

export const DarkDropdown: Story = {
  args: {
    variant: 'dark',
    dropdown: {
      items: socialMediaPlatforms,
      onSelect: (item) => console.log('Selected:', item),
    },
  },
};

export const RectangularDropdown: Story = {
  args: {
    variant: 'rectangular',
    dropdown: {
      items: filterOptions,
      onSelect: (item) => console.log('Selected:', item),
    },
  },
};

// Icon + Dropdown Combo
export const IconDropdown: Story = {
  args: {
    variant: 'default',
    icon: <Filter />,
    dropdown: {
      items: filterOptions,
      onSelect: (item) => console.log('Selected:', item),
    },
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    variant: 'default',
    disabled: true,
  },
}; 