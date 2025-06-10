import React from 'react';
import { Button } from './Button';
import { MessageSquare, Bookmark } from 'lucide-react';

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
      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
        <div className="h-10 w-10 flex-shrink-0">
          <img
            className="h-10 w-10 rounded-full"
            src={rowData.postImage || `https://ui-avatars.com/api/?name=User&background=random&size=40`}
            alt=""
            onError={e => {
              const target = e.currentTarget;
              if (!target.src.includes('ui-avatars.com')) {
                target.src = `https://ui-avatars.com/api/?name=User&background=random&size=40`;
              }
            }}
          />
        </div>
      </td>
      <td className="py-4 px-3 text-sm text-gray-500 max-w-xs">{rowData.postBody}</td>
      <td className="py-4 px-3 text-sm text-gray-500 max-w-xs">{rowData.comment}</td>
      <td className="py-4 px-3 text-sm text-gray-500 max-w-xs">{rowData.aiResponse}</td>
      <td className="py-4 px-3 text-sm text-gray-500 max-w-xs">
        <textarea
          defaultValue={rowData.editedResponse}
          className="w-full h-24 p-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </td>
      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
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