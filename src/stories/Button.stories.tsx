import type { Meta, StoryObj } from '@storybook/react';
import { ChevronDown } from 'lucide-react';
import { Button } from './Button';

const source = `
import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';

const buttonVariants = cva(
  'inline-flex items-center justify-center text-sm font-normal transition-colors border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap truncate',
  {
    variants: {
      variant: {
        default: 'bg-white hover:bg-neutral-100 text-black border-[#c3c5d0] rounded-[35px]',
        selected:
          'bg-[#dce0f4] text-black hover:bg-indigo-200 border-[#dce0f4] rounded-[35px]',
        dark: 'bg-black text-white hover:bg-neutral-800 border-transparent rounded-[35px]',
        rectangular: 'h-10 justify-start bg-white hover:bg-neutral-100 text-black border-[#c3c5d0] rounded-none pl-3 pr-2 py-2 text-[14px] leading-[1.25]',
        'dark-default': 'bg-gray-800 hover:bg-gray-700 text-white border-gray-700 rounded-[35px]',
        'dark-selected': 'bg-gray-600 text-white hover:bg-gray-500 border-gray-600 rounded-[35px]',
        'dark-rectangular': 'h-10 justify-start bg-gray-800 hover:bg-gray-700 text-white border-gray-700 rounded-none pl-3 pr-2 py-2 text-[14px] leading-[1.25]',
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

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    const finalSize = variant === 'rectangular' || variant === 'dark-rectangular' ? null : size;
    return (
      <button
        className={clsx(
          buttonVariants({ variant, size: finalSize, className }),
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
`;

const meta: Meta<typeof Button> = {
  title: 'Design System/Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'selected', 'dark', 'rectangular', 'dark-default', 'dark-selected', 'dark-rectangular'],
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg'],
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

export const DarkDefault: Story = {
  args: {
    children: 'Dark Default Button',
    variant: 'dark-default',
  },
};

export const DarkSelected: Story = {
  args: {
    children: 'Dark Selected Button',
    variant: 'dark-selected',
  },
};

export const DarkRectangular: Story = {
  args: {
    children: 'Dark Rectangular Button',
    variant: 'dark-rectangular',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    variant: 'default',
    disabled: true,
  },
}; 