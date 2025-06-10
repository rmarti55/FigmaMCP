# Storybook Reference Documentation

*Comprehensive guide based on official Storybook documentation from [storybook.js.org/docs](https://storybook.js.org/docs)*

## Table of Contents

1. [Core Concepts](#core-concepts)
2. [Stories](#stories)
3. [Testing](#testing)
4. [Documentation](#documentation)
5. [Sharing](#sharing)
6. [Essentials](#essentials)
7. [Addons](#addons)
8. [Configuration](#configuration)
9. [Builders](#builders)
10. [API Reference](#api-reference)
11. [Best Practices](#best-practices)

## Core Concepts

### What is Storybook?

Storybook is a frontend workshop for building UI components and pages in isolation. It helps you develop and share hard-to-reach states and edge cases without needing to run your whole app.

**Key Benefits:**
- Component isolation
- State management testing
- Edge case exploration
- Documentation generation
- Team collaboration
- Design system development

### Installation

```bash
npm create storybook@latest
```

**Supported Frameworks:**
- React (with Vite/Webpack)
- Next.js
- Vue
- Angular
- Svelte/SvelteKit
- Web Components
- React Native

## Stories

### What's a Story?

A story captures the rendered state of a UI component. Each component can have multiple stories, where each story describes a different component state.

**Basic Story Structure:**
```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};
```

### Args

Args are inputs to your component that are defined in your stories. They allow you to dynamically change props, slots, styles, inputs, etc. in the Controls panel.

**Benefits:**
- Live editing in Storybook
- Shareable URLs
- Auto-generated controls
- Composition between stories

**Example:**
```typescript
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    ...Primary.args,
    size: 'large',
  },
};
```

### Parameters

Parameters are metadata about a story, typically to control the behavior of Storybook features and addons.

**Common Parameters:**
```typescript
export const MyStory: Story = {
  parameters: {
    layout: 'fullscreen', // 'centered' | 'fullscreen' | 'padded'
    backgrounds: {
      default: 'light',
    },
    docs: {
      description: {
        story: 'This story demonstrates...',
      },
    },
  },
};
```

### Decorators

Decorators are a way to wrap stories with arbitrary markup. They're often used for adding context, styling, or layout.

**Example:**
```typescript
import type { Decorator } from '@storybook/react';

const withMargin: Decorator = (Story) => (
  <div style={{ margin: '3em' }}>
    <Story />
  </div>
);

export const WithMargin: Story = {
  decorators: [withMargin],
};
```

### Play Functions

Play functions are small snippets of code that run after the story renders. They're typically used for simulating user interactions.

```typescript
import { userEvent, within } from '@storybook/testing-library';

export const FilledForm: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    await userEvent.type(canvas.getByTestId('email'), 'example@email.com');
    await userEvent.type(canvas.getByTestId('password'), 'ExamplePassword');
    await userEvent.click(canvas.getByRole('button', { name: /submit/i }));
  },
};
```

## Testing

### Interaction Tests

Test user interactions within your stories using the `@storybook/testing-library`.

**Setup:**
```bash
npm install --save-dev @storybook/testing-library
```

**Example:**
```typescript
import { expect } from '@storybook/jest';
import { userEvent, within } from '@storybook/testing-library';

export const ClickButton: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    
    await userEvent.click(button);
    await expect(button).toHaveClass('clicked');
  },
};
```

### Accessibility Tests

Automated accessibility testing using the `@storybook/addon-a11y`.

**Installation:**
```bash
npm install --save-dev @storybook/addon-a11y
```

**Configuration (.storybook/main.js):**
```javascript
module.exports = {
  addons: ['@storybook/addon-a11y'],
};
```

### Visual Tests

Catch visual regressions by comparing screenshots of your components.

**Options:**
- Chromatic (official)
- Percy
- Applitools
- Playwright

### Test Coverage

Run coverage reports on your stories:

```bash
npm run test-storybook -- --coverage
```

## Documentation

### Autodocs

Automatically generate documentation from your component definitions and stories.

**Enable Autodocs:**
```typescript
const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'], // Enable autodocs
};
```

### MDX

Write custom documentation using MDX (Markdown + JSX).

**Example (Button.mdx):**
```mdx
import { Meta, Story, Canvas } from '@storybook/blocks';
import * as ButtonStories from './Button.stories';

<Meta of={ButtonStories} />

# Button

This is a custom documentation page for the Button component.

<Canvas of={ButtonStories.Primary} />

## Usage

```jsx
<Button primary label="Click me" />
```
```

### Doc Blocks

Pre-built components for documentation:

- `<Meta>` - Story metadata
- `<Story>` - Render a story
- `<Canvas>` - Story with source code
- `<ArgTypes>` - Component prop table
- `<Source>` - Source code block

### Code Panel

Display source code in the docs panel:

```typescript
export const MyStory: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Button primary label="Custom code example" />`,
      },
    },
  },
};
```

## Sharing

### Publish Storybook

Deploy your Storybook as a static site:

```bash
npm run build-storybook
```

**Popular Hosting Options:**
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Chromatic

### Embed Stories

Embed stories in other applications:

```html
<iframe
  src="https://your-storybook.com/iframe.html?id=button--primary"
  width="100%"
  height="300"
></iframe>
```

### Design Integrations

Connect Storybook with design tools:

- **Figma:** Embed stories in Figma designs
- **InVision:** Link prototypes to stories
- **Zeplin:** Connect specs to implementations

## Essentials

### Actions

Log user interactions in the Actions panel.

```typescript
import { action } from '@storybook/addon-actions';

export const Default: Story = {
  args: {
    onClick: action('clicked'),
  },
};
```

### Backgrounds

Test components against different backgrounds:

```typescript
export const OnDark: Story = {
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};
```

### Controls

Dynamically edit component props:

```typescript
const meta: Meta<typeof Button> = {
  argTypes: {
    backgroundColor: { control: 'color' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};
```

### Viewport

Test responsive designs:

```typescript
export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
```

## Addons

### Popular Addons

- `@storybook/addon-essentials` - Core functionality
- `@storybook/addon-a11y` - Accessibility testing
- `@storybook/addon-actions` - Action logging
- `@storybook/addon-backgrounds` - Background variants
- `@storybook/addon-controls` - Dynamic prop editing
- `@storybook/addon-docs` - Documentation
- `@storybook/addon-viewport` - Responsive testing
- `@storybook/addon-storysource` - View story source

### Installing Addons

```bash
npm install --save-dev @storybook/addon-name
```

**Configure in .storybook/main.js:**
```javascript
module.exports = {
  addons: ['@storybook/addon-name'],
};
```

## Configuration

### Main Configuration (.storybook/main.js)

```javascript
module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
};
```

### Preview Configuration (.storybook/preview.js)

```javascript
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'centered',
};

export const decorators = [
  (Story) => (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  ),
];
```

### Styling and CSS

**CSS Imports:**
```javascript
// .storybook/preview.js
import '../src/index.css';
```

**Styled Components:**
```javascript
// .storybook/preview.js
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/theme';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];
```

**Tailwind CSS:**
```javascript
// .storybook/main.js
module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: '@storybook/react-vite',
  async viteFinal(config) {
    const { mergeConfig } = await import('vite');
    return mergeConfig(config, {
      // Add Tailwind
    });
  },
};
```

## Builders

### Vite Builder

Fast development with Vite:

```javascript
// .storybook/main.js
module.exports = {
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  async viteFinal(config) {
    // Customize Vite config
    return config;
  },
};
```

### Webpack Builder

Traditional Webpack setup:

```javascript
// .storybook/main.js
module.exports = {
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  webpackFinal: async (config) => {
    // Customize Webpack config
    return config;
  },
};
```

## API Reference

### Component Story Format (CSF)

**Story Object:**
```typescript
type Story = {
  args?: Args;
  argTypes?: ArgTypes;
  decorators?: Decorator[];
  parameters?: Parameters;
  play?: PlayFunction;
  render?: RenderFunction;
  tags?: string[];
};
```

**Meta Object:**
```typescript
type Meta = {
  title?: string;
  component?: Component;
  subcomponents?: Record<string, Component>;
  args?: Args;
  argTypes?: ArgTypes;
  decorators?: Decorator[];
  parameters?: Parameters;
  tags?: string[];
};
```

### ArgTypes

Control how args appear in the Controls panel:

```typescript
const meta: Meta<typeof Component> = {
  argTypes: {
    // Basic controls
    text: { control: 'text' },
    number: { control: 'number' },
    boolean: { control: 'boolean' },
    
    // Selection controls
    select: {
      control: 'select',
      options: ['option1', 'option2'],
    },
    radio: {
      control: 'radio',
      options: ['option1', 'option2'],
    },
    
    // Color control
    color: { control: 'color' },
    
    // Date control
    date: { control: 'date' },
    
    // Object/array controls
    object: { control: 'object' },
    
    // Disable control
    disabled: { control: false },
    
    // Custom description
    customProp: {
      description: 'This prop does something special',
      control: 'text',
    },
  },
};
```

### CLI Options

**Development:**
```bash
npx storybook dev -p 6006 --no-open
```

**Build:**
```bash
npx storybook build --output-dir custom-dir
```

**Common Flags:**
- `-p, --port` - Port number
- `--no-open` - Don't open browser
- `--quiet` - Suppress verbose build output
- `--output-dir` - Custom output directory

## Best Practices

### Story Organization

1. **Atomic Design Structure:**
   ```
   src/stories/
   ├── Atoms/
   ├── Molecules/
   ├── Organisms/
   └── Templates/
   ```

2. **Naming Convention:**
   - Use descriptive story names
   - Follow consistent patterns
   - Group related states

3. **Story Hierarchy:**
   ```typescript
   const meta: Meta = {
     title: 'Design System/Atoms/Button',
   };
   ```

### Component Documentation

1. **Always include descriptions:**
   ```typescript
   const meta: Meta = {
     parameters: {
       docs: {
         description: {
           component: 'Primary UI component for user interaction',
         },
       },
     },
   };
   ```

2. **Document all props with ArgTypes**
3. **Provide usage examples**
4. **Include accessibility notes**

### Testing Strategy

1. **Start with interaction tests**
2. **Add accessibility checks**
3. **Implement visual regression testing**
4. **Run tests in CI/CD**

### Performance

1. **Lazy load stories**
2. **Optimize bundle size**
3. **Use efficient decorators**
4. **Minimize re-renders**

### Team Collaboration

1. **Establish naming conventions**
2. **Document component APIs**
3. **Share Storybook deployments**
4. **Regular design system reviews**

---

*Last updated: Based on Storybook v9.0 documentation*

**Additional Resources:**
- [Official Documentation](https://storybook.js.org/docs)
- [Addon Catalog](https://storybook.js.org/addons)
- [Recipes](https://storybook.js.org/recipes)
- [Community Discord](https://discord.gg/storybook) 