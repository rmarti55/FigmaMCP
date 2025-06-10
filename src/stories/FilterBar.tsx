import React from 'react';
import { Button } from './Button';
import { DropdownButton } from './DropdownButton';
import { SearchInput } from './SearchInput';

export function FilterBar() {
  return (
    <div className="p-4 bg-gray-50 border rounded-lg w-full">
      <div className="flex items-center gap-2">
        <div className="w-64">
          <SearchInput />
        </div>
        <DropdownButton buttonVariant="rectangular" items={['Search Post']} />
        <DropdownButton buttonVariant="rectangular" items={['Show Bookmarked', 'Show All']} />
        <DropdownButton buttonVariant="rectangular" items={['Response', 'No Response']} />
        <DropdownButton buttonVariant="rectangular" items={['Comment Posted Time', 'Last 24 Hours']} />
        <DropdownButton buttonVariant="rectangular" items={['Show Hidden', 'Hide Hidden']} />
        <div className="flex-grow" />
        <Button variant="default">REFRESH</Button>
      </div>
    </div>
  );
} 