import type { Meta, StoryObj } from '@storybook/react';
import { ResponseTable } from './ResponseTable';
import { TableRowData } from './TableRow';

const meta: Meta<typeof ResponseTable> = {
  title: 'Design System/04-Organisms/ResponseTable',
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
  parameters: {
    docs: {
      source: {
        code: `
import React from 'react';
import { TableHeader, TableHeaderProps } from './TableHeader';
import { TableRow, TableRowData } from './TableRow';

interface ResponseTableProps {
  headers: TableHeaderProps['headers'];
  rows: TableRowData[];
}

export function ResponseTable({ headers, rows }: ResponseTableProps) {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <TableHeader headers={headers} />
              <tbody className="divide-y divide-gray-200 bg-white">
                {rows.map((row) => (
                  <TableRow key={row.id} rowData={row} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
`,
      },
    },
  },
}; 