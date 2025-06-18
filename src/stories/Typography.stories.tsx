import type { Meta, StoryObj } from '@storybook/react';
import { TypographyShowcase } from './Typography';

const meta: Meta<typeof TypographyShowcase> = {
  title: 'Design System/01-Foundation/Typography',
  component: TypographyShowcase,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof TypographyShowcase>;

export const Default: Story = {}; 