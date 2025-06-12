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
        rectangular: 'h-10 justify-start bg-white hover:bg-neutral-100 text-black border-[#c3c5d0] rounded-none pl-3 pr-2 py-2 font-["Futura_Std:Book",_sans-serif] text-[14px] leading-[1.25]',
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
    return (
      <button
        className={clsx(
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