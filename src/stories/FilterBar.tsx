import React from 'react';
import { Button } from './Button';
import { DropdownButton } from './DropdownButton';
import { SearchInput } from './SearchInput';

export function FilterBar() {
  return (
    <div className="relative w-full" data-name="Filter Container">
      <div className="box-border flex flex-row gap-6 items-center justify-start p-0 relative w-full">
        <div className="w-[246px]">
          <SearchInput />
        </div>
        <div className="basis-0 grow min-h-px min-w-px relative shrink-0 flex gap-2.5">
          <DropdownButton buttonVariant="rectangular" items={['Search Post']} />
          <DropdownButton buttonVariant="rectangular" items={['Show Bookmarked', 'Show All']} />
          <DropdownButton buttonVariant="rectangular" items={['Response', 'No Response']} />
          <DropdownButton buttonVariant="rectangular" items={['Comment Posted Time', 'Last 24 Hours']} />
          <DropdownButton buttonVariant="rectangular" items={['Show Hidden', 'Hide Hidden']} />
        </div>
        <Button variant="default" style={{ fontFamily: '"Futura Std", sans-serif', fontWeight: 700, fontSize: '14px', letterSpacing: '0.84px', textTransform: 'uppercase' as const }}>
          REFRESH
        </Button>
      </div>
    </div>
  );
} 