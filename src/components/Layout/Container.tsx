import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const containerVariants = cva(
  'mx-auto w-full',
  {
    variants: {
      size: {
        sm: 'max-w-container-sm',
        md: 'max-w-container-md',
        lg: 'max-w-container-lg', 
        xl: 'max-w-container-xl',
        '2xl': 'max-w-container-2xl',
        grid: 'max-w-grid',
        full: 'max-w-full',
        none: '',
      },
      padding: {
        none: 'px-0',
        xs: 'px-xs',
        sm: 'px-sm',
        md: 'px-md',
        lg: 'px-lg', 
        xl: 'px-xl',
        '2xl': 'px-2xl',
        responsive: 'px-sm md:px-md lg:px-lg xl:px-xl',
        tight: 'px-xs sm:px-sm md:px-md lg:px-md',
      },
      centered: {
        true: 'mx-auto',
        false: '',
      },
    },
    defaultVariants: {
      size: 'grid',
      padding: 'responsive',
      centered: true,
    },
  }
);

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  children: React.ReactNode;
}

/**
 * Container - Responsive container component
 * 
 * Provides systematic width control with:
 * - Responsive max-widths based on design tokens
 * - Consistent horizontal padding across breakpoints
 * - Flexible sizing options for different content types
 */
export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size, padding, centered, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={containerVariants({ size, padding, centered, className })}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container';

// Specialized container variants for common use cases
export const PageContainer = React.forwardRef<HTMLDivElement, Omit<ContainerProps, 'size'>>(
  ({ children, ...props }, ref) => (
    <Container ref={ref} size="grid" {...props}>
      {children}
    </Container>
  )
);

PageContainer.displayName = 'PageContainer';

export const ContentContainer = React.forwardRef<HTMLDivElement, Omit<ContainerProps, 'size' | 'padding'>>(
  ({ children, ...props }, ref) => (
    <Container ref={ref} size="xl" padding="responsive" {...props}>
      {children}
    </Container>
  )
);

ContentContainer.displayName = 'ContentContainer';

export const NarrowContainer = React.forwardRef<HTMLDivElement, Omit<ContainerProps, 'size'>>(
  ({ children, ...props }, ref) => (
    <Container ref={ref} size="md" {...props}>
      {children}
    </Container>
  )
);

NarrowContainer.displayName = 'NarrowContainer'; 