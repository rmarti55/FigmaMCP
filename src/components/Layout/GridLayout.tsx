import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const gridLayoutVariants = cva(
  'min-h-screen grid',
  {
    variants: {
      layout: {
        dashboard: 'grid-areas-dashboard grid-rows-dashboard',
        'dashboard-lg': 'lg:grid-areas-dashboard-lg lg:grid-cols-dashboard lg:grid-rows-dashboard',
        basic: 'grid-rows-[auto_1fr_auto]',
        sidebar: 'lg:grid-cols-[280px_1fr] grid-rows-[auto_1fr_auto]',
      },
      gap: {
        none: 'gap-0',
        xs: 'gap-xs',
        sm: 'gap-sm', 
        md: 'gap-md',
        lg: 'gap-lg',
        xl: 'gap-xl',
      },
      padding: {
        none: 'p-0',
        xs: 'p-xs',
        sm: 'p-sm',
        md: 'p-md', 
        lg: 'p-lg',
        xl: 'p-xl',
      },
    },
    defaultVariants: {
      layout: 'basic',
      gap: 'none',
      padding: 'none',
    },
  }
);

export interface GridLayoutProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof gridLayoutVariants> {
  children: React.ReactNode;
}

/**
 * GridLayout - Foundational layout component using CSS Grid
 * 
 * Provides systematic layout structure with:
 * - CSS Grid for 2D layout control
 * - Design token-based spacing
 * - Responsive breakpoint behavior
 * - Semantic grid areas for dashboard layouts
 */
export const GridLayout = React.forwardRef<HTMLDivElement, GridLayoutProps>(
  ({ className, layout, gap, padding, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={gridLayoutVariants({ layout, gap, padding, className })}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GridLayout.displayName = 'GridLayout';

// Grid area components for semantic layouts
export const GridHeader = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, children, ...props }, ref) => (
  <header
    ref={ref}
    className={`grid-area-header ${className || ''}`}
    {...props}
  >
    {children}
  </header>
));

GridHeader.displayName = 'GridHeader';

export const GridFilters = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, children, ...props }, ref) => (
  <section
    ref={ref}
    className={`grid-area-filters ${className || ''}`}
    {...props}
  >
    {children}
  </section>
));

GridFilters.displayName = 'GridFilters';

export const GridMain = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, children, ...props }, ref) => (
  <main
    ref={ref}
    className={`grid-area-main ${className || ''}`}
    {...props}
  >
    {children}
  </main>
));

GridMain.displayName = 'GridMain';

export const GridSidebar = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, children, ...props }, ref) => (
  <aside
    ref={ref}
    className={`grid-area-sidebar ${className || ''}`}
    {...props}
  >
    {children}
  </aside>
));

GridSidebar.displayName = 'GridSidebar';

export const GridFooter = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, children, ...props }, ref) => (
  <footer
    ref={ref}
    className={`grid-area-footer ${className || ''}`}
    {...props}
  >
    {children}
  </footer>
));

GridFooter.displayName = 'GridFooter'; 