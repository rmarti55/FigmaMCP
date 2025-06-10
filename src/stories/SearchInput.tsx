import React from 'react';
import { Search } from 'lucide-react';

export function SearchInput() {
  return (
    <div className="flex items-center gap-2 h-10 px-4 rounded-full border border-neutral-400 bg-white">
      <Search className="h-5 w-5 text-neutral-500" />
      <input
        type="text"
        placeholder="Search Comment"
        className="w-full h-full bg-transparent text-black placeholder-neutral-500 focus:outline-none"
      />
    </div>
  );
} 