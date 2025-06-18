import type { Meta, StoryObj } from '@storybook/react';
import { TableRow, TableRowData } from './TableRow';

const meta: Meta<typeof TableRow> = {
  title: 'Design System/Atoms/TableRow',
  component: TableRow,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <table>
        <tbody>
          <Story />
        </tbody>
      </table>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TableRow>;

const mockRowData: TableRowData = {
  id: '1',
  postImage: 'https://via.placeholder.com/40',
  postBody: 'Just got my beauty box and I\'m so excited to try the products! ✨ #BeautyBox',
  comment: 'This makeup look is everything, I need to recreate it ASAP!',
  aiResponse:
    'Hey fabulous! ✨ We\'re so grateful for your support! It inspires us every day! What\'s your favorite way to use our products?',
  editedResponse:
    'Hey fabulous! ✨ We\'re so grateful for your support! It inspires us every day! What\'s your favorite way to use our products?',
};

export const Default: Story = {
  args: {
    rowData: mockRowData,
  },
}; 