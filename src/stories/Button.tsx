import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-[35px] text-sm font-normal transition-colors border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap truncate',
  {
    variants: {
      variant: {
        default: 'bg-white hover:bg-neutral-100 text-black border-[#c3c5d0]',
        selected:
          'bg-[#dce0f4] text-black hover:bg-indigo-200 border-[#dce0f4]',
        dark: 'bg-black text-white hover:bg-neutral-800 border-transparent',
        rectangular: 'bg-white hover:bg-neutral-100 text-black border-neutral-400',
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
    // Determine if the variant is rectangular to apply different border-radius
    const isRectangular = variant === 'rectangular';
    const borderRadiusClass = isRectangular ? 'rounded-md' : 'rounded-[35px]';

    return (
      <button
        className={clsx(
          'inline-flex items-center justify-center text-sm font-normal transition-colors border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
          borderRadiusClass,
          buttonVariants({ variant, size, className }),
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants }; 