import React from 'react';
import { TableHeader, TableHeaderProps } from './TableHeader';
import { TableRow, TableRowData } from './TableRow';

interface ResponseTableProps {
  headers: TableHeaderProps['headers'];
  rows: TableRowData[];
  /**
   * Callback when a table row is clicked
   */
  onRowClick?: (rowData: TableRowData) => void;
}

export function ResponseTable({ headers, rows, onRowClick }: ResponseTableProps) {
  return (
    <div className="">
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <TableHeader headers={headers} />
              <tbody className="divide-y divide-gray-200 bg-white">
                {rows.map((row) => (
                  <TableRow key={row.id} rowData={row} onRowClick={onRowClick} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
} 