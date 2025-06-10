import React from 'react';

export interface TableHeaderProps {
  headers: string[];
}

export function TableHeader({ headers }: TableHeaderProps) {
  return (
    <thead className="bg-gray-50">
      <tr>
        {headers.map((header) => (
          <th
            key={header}
            scope="col"
            className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
          >
            {header}
          </th>
        ))}
        {/* Empty header for the action buttons column */}
        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
          <span className="sr-only">Actions</span>
        </th>
      </tr>
    </thead>
  );
} 