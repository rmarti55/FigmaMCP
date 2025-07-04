import React from 'react';
import { Button } from './Button';
import { DropdownButton } from './DropdownButton';
import { SearchInput } from './SearchInput';
import { Download } from 'lucide-react';

export function FilterBar() {
  return (
    <div className="relative w-full" data-name="Filter Container">
      <div className="box-border flex flex-row gap-6 items-center justify-start p-0 relative w-full">
        <div className="w-[246px]">
          <SearchInput />
        </div>
        <div className="basis-0 grow min-h-px min-w-px relative shrink-0 flex gap-2.5">
          <DropdownButton buttonVariant="rectangular" items={['Search Post']} className="flex-1" />
          <DropdownButton buttonVariant="rectangular" items={['Show Bookmarked', 'Show All']} className="flex-1" />
          <DropdownButton buttonVariant="rectangular" items={['Response', 'No Response']} className="flex-1" />
          <DropdownButton buttonVariant="rectangular" items={['Comment Posted Time', 'Last 24 Hours']} className="flex-1" />
          <DropdownButton buttonVariant="rectangular" items={['Show Hidden', 'Hide Hidden']} className="flex-1" />
        </div>
        <Button variant="default" icon={<Download />} className="font-sans font-bold text-sm tracking-wider uppercase">
          DOWNLOAD
        </Button>
        <Button variant="default" className="font-sans font-bold text-sm tracking-wider uppercase">
          REFRESH
        </Button>
      </div>
    </div>
  );
} 