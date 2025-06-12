import React from 'react';
import Header from '@/components/Header';
import { FilterBar } from '@/stories/FilterBar';
import { FilterButtonGroup } from '@/stories/FilterButtonGroup';
import { ResponseTable } from '@/stories/ResponseTable';
import { TableRowData } from '@/stories/TableRow';

const mockHeaders: string[] = [
  'Post Image',
  'Post Body',
  'Comment',
  'AI Response',
  'Edited/Posted Response',
];

const mockRows: TableRowData[] = [
  {
    id: '1',
    postImage: 'https://via.placeholder.com/40',
    postBody: 'This is the body of the first post.',
    comment: 'This is a test comment on the first post.',
    aiResponse: "This is the AI's generated response.",
    editedResponse: 'This is the user-edited response.',
  },
  {
    id: '2',
    postImage: 'https://via.placeholder.com/40',
    postBody: 'Here is the content for the second social media post.',
    comment: 'Another test comment goes here.',
    aiResponse: 'This is what the AI thought of for a response.',
    editedResponse: 'The user has updated the response to this.',
  },
];

const Dashboard = () => {
  return (
    <div className="py-8">
      <div className="px-8">
        <Header />
        <div className="mt-8">
          <FilterBar />
        </div>
        <div className="mt-8">
          <FilterButtonGroup />
        </div>
      </div>
      <div className="mt-8">
        <ResponseTable headers={mockHeaders} rows={mockRows} />
      </div>
    </div>
  );
};

export default Dashboard; 