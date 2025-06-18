import type { Meta, StoryObj } from '@storybook/react';
import { TableHeader } from './TableHeader';

const meta: Meta<typeof TableHeader> = {
  title: 'Design System/02-Atoms/TableHeader',
  component: TableHeader,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <table>
        <Story />
      </table>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TableHeader>;

export const Default: Story = {
  args: {
    headers: [
      'Post Image',
      'Post Body',
      'Comment',
      'AI Response',
      'Edited/Posted Response',
    ],
  },
}; 