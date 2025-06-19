import type { Meta, StoryObj } from '@storybook/react';
import { GridLayout, GridHeader, GridMain, GridFooter, Container } from '../components/Layout';

const meta = {
  title: 'Design System/Foundation/Grid System',
  component: GridLayout,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Grid System Foundation

Our grid system provides a systematic approach to layout design using modern CSS Grid and design tokens. It follows the **"Grid for structure, Flexbox for alignment"** principle and implements a **4px/8px spacing system** for consistency.

## Core Principles

### 1. CSS Grid for 2D Layout
- **Page Structure**: Use CSS Grid for overall page layout (header, main, footer)
- **Component Layout**: Use CSS Grid for complex 2D arrangements
- **Semantic Areas**: Named grid areas for clear layout intent

### 2. Design Token Foundation  
- **4px/8px System**: All spacing follows multiples of 4px for visual consistency
- **Responsive Breakpoints**: Mobile-first approach with standard breakpoints
- **Systematic Spacing**: Consistent spacing scale from xs (4px) to 6xl (192px)

### 3. Container System
- **Max-width Control**: Responsive containers with design token-based widths
- **Responsive Padding**: Automatic padding adjustment across breakpoints
- **Content Hierarchy**: Different container sizes for different content types

## Spacing Scale

| Token | Value | Rem | Use Case |
|-------|-------|-----|----------|
| xs    | 4px   | 0.25rem | Fine details, borders |
| sm    | 8px   | 0.5rem  | Small gaps, tight spacing |
| md    | 16px  | 1rem    | Standard spacing, component gaps |
| lg    | 24px  | 1.5rem  | Section spacing, larger gaps |
| xl    | 32px  | 2rem    | Major section breaks |
| 2xl   | 48px  | 3rem    | Large section spacing |
| 3xl   | 64px  | 4rem    | Hero sections, major breaks |
| 4xl   | 96px  | 6rem    | Page-level spacing |

## Breakpoints

| Breakpoint | Value | Device Target |
|------------|-------|---------------|
| xs         | 480px | Large mobile |
| sm         | 640px | Small tablet |
| md         | 768px | Tablet |
| lg         | 1024px | Desktop |
| xl         | 1280px | Large desktop |
| 2xl        | 1440px | Wide desktop |
| 3xl        | 1920px | Ultra-wide |

## Container Sizes

| Size | Max Width | Use Case |
|------|-----------|----------|
| sm   | 640px     | Narrow content, forms |
| md   | 768px     | Articles, blog posts |
| lg   | 1024px    | Standard content |
| xl   | 1280px    | Wide content |
| 2xl  | 1440px    | Full-width content |
| grid | 1440px    | Main grid container |

## Usage Guidelines

### When to Use CSS Grid
- ✅ Page-level layout structure
- ✅ Dashboard layouts with multiple areas
- ✅ Card grids and complex arrangements
- ✅ Two-dimensional layouts (rows AND columns)

### When to Use Flexbox
- ✅ Navigation bars and toolbars
- ✅ Button groups and form controls
- ✅ Centering and alignment within grid areas
- ✅ One-dimensional layouts (row OR column)

### Layout Hierarchy
1. **GridLayout** - Page structure and major layout areas
2. **Container** - Content width and responsive padding
3. **Flexbox** - Component-level alignment and distribution
        `,
      },
    },
  },
  argTypes: {
    layout: {
      control: 'select',
      options: ['basic', 'dashboard', 'dashboard-lg', 'sidebar'],
      description: 'Grid layout template',
    },
    gap: {
      control: 'select', 
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Gap between grid areas',
    },
    padding: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Padding around grid container',
    },
  },
} satisfies Meta<typeof GridLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

// Demo content components
const DemoHeader = () => (
  <div className="bg-blue-100 p-md rounded border-2 border-dashed border-blue-300">
    <h3 className="text-lg font-semibold text-blue-800">Header Area</h3>
    <p className="text-blue-600 text-sm">Fixed header with navigation</p>
  </div>
);

const DemoMain = () => (
  <div className="bg-green-100 p-md rounded border-2 border-dashed border-green-300 min-h-[200px]">
    <h3 className="text-lg font-semibold text-green-800">Main Content Area</h3>
    <p className="text-green-600 text-sm">Primary content goes here</p>
    <div className="mt-md space-y-sm">
      <div className="bg-green-200 p-sm rounded">Content Block 1</div>
      <div className="bg-green-200 p-sm rounded">Content Block 2</div>
      <div className="bg-green-200 p-sm rounded">Content Block 3</div>
    </div>
  </div>
);

const DemoFooter = () => (
  <div className="bg-purple-100 p-md rounded border-2 border-dashed border-purple-300">
    <h3 className="text-lg font-semibold text-purple-800">Footer Area</h3>
    <p className="text-purple-600 text-sm">Footer content and pagination</p>
  </div>
);

const DemoSidebar = () => (
  <div className="bg-orange-100 p-md rounded border-2 border-dashed border-orange-300 min-h-[200px]">
    <h3 className="text-lg font-semibold text-orange-800">Sidebar</h3>
    <p className="text-orange-600 text-sm">Navigation or filters</p>
  </div>
);

const DemoFilters = () => (
  <div className="bg-yellow-100 p-md rounded border-2 border-dashed border-yellow-300">
    <h3 className="text-lg font-semibold text-yellow-800">Filters Area</h3>
    <p className="text-yellow-600 text-sm">Search and filter controls</p>
  </div>
);

export const BasicLayout: Story = {
  args: {
    layout: 'basic',
    gap: 'md',
    padding: 'md',
    children: (
      <>
        <GridHeader>
          <DemoHeader />
        </GridHeader>
        <GridMain>
          <Container>
            <DemoMain />
          </Container>
        </GridMain>
        <GridFooter>
          <DemoFooter />
        </GridFooter>
      </>
    ),
  },
};

export const DashboardLayout: Story = {
  args: {
    layout: 'dashboard-lg',
    gap: 'none',
    padding: 'none',
    children: (
      <>
        <GridHeader className="border-b border-gray-200">
          <Container padding="md">
            <DemoHeader />
          </Container>
        </GridHeader>
        <div className="grid-area-filters border-b border-gray-200">
          <Container padding="md">
            <DemoFilters />
          </Container>
        </div>
        <aside className="grid-area-sidebar border-r border-gray-200 hidden lg:block">
          <div className="p-md">
            <DemoSidebar />
          </div>
        </aside>
        <GridMain className="overflow-auto">
          <div className="p-md">
            <DemoMain />
          </div>
        </GridMain>
        <GridFooter className="border-t border-gray-200">
          <Container padding="md">
            <DemoFooter />
          </Container>
        </GridFooter>
      </>
    ),
  },
  parameters: {
    layout: 'fullscreen',
  },
  render: (args) => (
    <div className="h-screen">
      <GridLayout {...args} />
    </div>
  ),
};

export const SpacingDemo: Story = {
  args: {
    children: (
      <Container>
        <div className="space-y-xl py-xl">
          <div>
            <h3 className="text-lg font-semibold mb-md">Spacing Scale Examples</h3>
            <div className="space-y-lg">
              {[
                { token: 'xs', value: '4px', class: 'gap-xs' },
                { token: 'sm', value: '8px', class: 'gap-sm' },
                { token: 'md', value: '16px', class: 'gap-md' },
                { token: 'lg', value: '24px', class: 'gap-lg' },
                { token: 'xl', value: '32px', class: 'gap-xl' },
                { token: '2xl', value: '48px', class: 'gap-2xl' },
              ].map((spacing) => (
                <div key={spacing.token} className="border rounded p-md">
                  <div className="flex items-center justify-between mb-sm">
                    <span className="font-mono text-sm font-semibold">{spacing.token}</span>
                    <span className="text-sm text-gray-600">{spacing.value}</span>
                  </div>
                  <div className={`flex ${spacing.class}`}>
                    <div className="w-12 h-12 bg-blue-200 rounded"></div>
                    <div className="w-12 h-12 bg-blue-200 rounded"></div>
                    <div className="w-12 h-12 bg-blue-200 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: `
## Spacing System Demonstration

This example shows our systematic spacing scale in action. Each level demonstrates the visual hierarchy created by consistent spacing increments.
        `,
      },
    },
  },
};

export const ContainerSizes: Story = {
  args: {
    children: (
      <div className="space-y-xl py-xl">
        {[
          { name: 'Small (640px)', component: 'sm', description: 'Forms, narrow content' },
          { name: 'Medium (768px)', component: 'md', description: 'Articles, blog posts' },
          { name: 'Large (1024px)', component: 'lg', description: 'Standard content' },
          { name: 'Extra Large (1280px)', component: 'xl', description: 'Wide content' },
          { name: 'Grid (1440px)', component: 'grid', description: 'Main grid container' },
        ].map((container) => (
          <Container key={container.component} size={container.component as any} className="bg-gray-100 border-2 border-dashed border-gray-300 py-lg">
            <div className="text-center">
              <h4 className="font-semibold text-lg">{container.name}</h4>
              <p className="text-gray-600 text-sm">{container.description}</p>
            </div>
          </Container>
        ))}
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: `
## Container Size Demonstration

Different container sizes for different content types. Each container shows its maximum width and responsive behavior.
        `,
      },
    },
  },
};

export const ResponsiveGrid: Story = {
  args: {
    layout: 'dashboard-lg',
    children: (
      <>
        <GridHeader className="bg-blue-50 border-b border-blue-200">
          <Container padding="md">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-blue-800">Responsive Dashboard</h2>
              <div className="text-sm text-blue-600">
                <span className="inline sm:hidden">Mobile</span>
                <span className="hidden sm:inline md:hidden">Small</span>
                <span className="hidden md:inline lg:hidden">Medium</span>
                <span className="hidden lg:inline xl:hidden">Large</span>
                <span className="hidden xl:inline">Extra Large</span>
              </div>
            </div>
          </Container>
        </GridHeader>
        
        <div className="grid-area-filters bg-yellow-50 border-b border-yellow-200">
          <Container padding="md">
            <DemoFilters />
          </Container>
        </div>
        
        <aside className="grid-area-sidebar bg-orange-50 border-r border-orange-200 hidden lg:block">
          <div className="p-md">
            <DemoSidebar />
          </div>
        </aside>
        
        <GridMain className="bg-green-50 overflow-auto">
          <div className="p-md">
            <DemoMain />
          </div>
        </GridMain>
        
        <GridFooter className="bg-purple-50 border-t border-purple-200">
          <Container padding="md">
            <DemoFooter />
          </Container>
        </GridFooter>
      </>
    ),
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: `
## Responsive Grid Behavior

This example demonstrates how the grid system adapts across different screen sizes. Resize your browser to see the responsive behavior.

- **Mobile**: Single column layout
- **Tablet**: Two column layout  
- **Desktop**: Full dashboard layout with sidebar
        `,
      },
    },
  },
  render: (args) => (
    <div className="h-screen">
      <GridLayout {...args} />
    </div>
  ),
}; 