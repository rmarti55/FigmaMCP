import type { Meta, StoryObj } from '@storybook/react';
import { TypographyShowcase } from './Typography';

const meta: Meta<typeof TypographyShowcase> = {
  title: 'Design System/Foundation/Typography',
  component: TypographyShowcase,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Complete Futura Std typography system with all weights, styles, and usage examples. This is our primary font family across all e.l.f. digital experiences.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TypographyShowcase>;

export const FuturaTypographySystem: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Interactive typography showcase featuring the complete Futura Std font family with weight matrix, usage examples, and implementation guidelines.',
      },
    },
  },
}; 