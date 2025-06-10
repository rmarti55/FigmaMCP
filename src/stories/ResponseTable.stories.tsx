import type { Meta, StoryObj } from '@storybook/react';
import { ResponseTable } from './ResponseTable';
import { TableRowData } from './TableRow';

const meta: Meta<typeof ResponseTable> = {
  title: 'Design System/Organisms/ResponseTable',
  component: ResponseTable,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ResponseTable>;

const mockTableData: TableRowData[] = [
  {
    id: '1',
    postImage: 'https://via.placeholder.com/40',
    postBody: 'Just got my beauty box and I\'m so excited to try the products! ✨ #BeautyBox',
    comment: 'This makeup look is everything, I need to recreate it ASAP!',
    aiResponse:
      'Hey fabulous! ✨ We\'re so grateful for your support! It inspires us every day! What\'s your favorite way to use our products?',
    editedResponse:
      'Hey fabulous! ✨ We\'re so grateful for your support! It inspires us every day! What\'s your favorite way to use our products?',
  },
  {
    id: '2',
    postImage: 'https://via.placeholder.com/40',
    postBody: 'Excited to pamper myself with BlissfulBubbles bath bombs! 🛁 #PamperTime',
    comment: 'This makeup look is everything, I need to recreate it ASAP!',
    aiResponse:
      'Hey fabulous! ✨ We\'re so grateful for your support! It inspires us every day! What\'s your favorite way to use our products?',
    editedResponse:
      'Hey fabulous! ✨ We\'re so grateful for your support! It inspires us every day! What\'s your favorite way to use our products?',
  },
  {
    id: '3',
    postImage: 'https://via.placeholder.com/40',
    postBody: 'Thrilled to start my self-care journey with RadiantSkin\'s new line! 🌟 #SelfCare',
    comment: 'This makeup look is everything, I need to recreate it ASAP!',
    aiResponse: 'Hi beautiful! 💕 We appreciate your love for our brand! Your feedback means the world to us! What\'s your go-to beauty tip?',
    editedResponse: 'Hi beautiful! 💕 We appreciate your love for our brand! Your feedback means the world to us! What\'s your go-to beauty tip?',
  },
];

const tableHeaders = [
  'Post Image',
  'Post Body',
  'Comment',
  'AI Response',
  'Edited/Posted Response',
];

export const Default: Story = {
  args: {
    headers: tableHeaders,
    rows: mockTableData,
  },
}; 