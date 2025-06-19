import React from 'react';
import { Button } from './Button';
import { MessageSquare, Bookmark } from 'lucide-react';

// Generate cosmetics-themed social media post images
const getCosmeticsImage = (id: string) => {
  // Use Picsum Photos with seed for consistent images per ID
  return `https://picsum.photos/seed/${id}/64/64`;
};

export interface TableRowData {
  id: string;
  postImage: string;
  postBody: string;
  comment: string;
  aiResponse: string;
  editedResponse: string;
}

export interface TableRowProps {
  rowData: TableRowData;
}

export function TableRow({ rowData }: TableRowProps) {
  return (
    <tr className="border-b border-gray-200">
      <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
        <div className="h-16 w-16 flex-shrink-0 p-1">
          <img
            className="h-full w-full rounded-lg object-cover"
            src={rowData.postImage || getCosmeticsImage(rowData.id)}
            alt=""
            onError={e => {
              const target = e.currentTarget;
              if (!target.src.includes('ui-avatars.com')) {
                target.src = `https://ui-avatars.com/api/?name=User&background=random&size=64`;
              }
            }}
          />
        </div>
      </td>
      <td className="py-2 px-3 text-sm text-gray-500 max-w-xs align-top">{rowData.postBody}</td>
      <td className="py-2 px-3 text-sm text-gray-500 max-w-xs align-top">{rowData.comment}</td>
      <td className="py-2 px-3 text-sm text-gray-500 max-w-xs align-top">{rowData.aiResponse}</td>
      <td className="py-2 px-3 text-sm text-gray-500 max-w-xs align-top">
        {rowData.editedResponse}
      </td>
      <td className="relative whitespace-nowrap py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 align-top">
        <div className="flex items-center justify-end gap-2">
          <Button variant="default" size="sm" className="rounded-md">
            <MessageSquare className="h-4 w-4" />
          </Button>
          <Button variant="default" size="sm" className="rounded-md">
            <Bookmark className="h-4 w-4" />
          </Button>
          <Button variant="dark" size="sm">
            POST
          </Button>
        </div>
      </td>
    </tr>
  );
} 