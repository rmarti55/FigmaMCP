import React from 'react';

const PinnedIcon = () => (
    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block mr-2">
        <circle cx="4" cy="4" r="4" fill="#292929"/>
    </svg>
);

const VerifiedTick = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block ml-1">
        <path fillRule="evenodd" clipRule="evenodd" d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14ZM9.70711 5.29289C10.0976 5.68342 10.0976 6.31658 9.70711 6.70711L6.70711 9.70711C6.31658 10.0976 5.68342 10.0976 5.29289 9.70711L4.29289 8.70711C3.90237 8.31658 3.90237 7.68342 4.29289 7.29289C4.68342 6.90237 5.31658 6.90237 5.70711 7.29289L6 7.58579L8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289Z" fill="#5D15D3"/>
    </svg>
);

const CommentIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block mr-1" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
)

const BookmarkIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-4">
        <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)


const FeedCard = () => {
  return (
    <div className="bg-white border border-[#d7d8e0] rounded-lg p-4 max-w-sm font-sans">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <img className="w-10 h-10 rounded-full mr-3" src="https://images.unsplash.com/photo-1521146764736-56c929d59c83?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="Avatar of Belltraveler" />
          <div className="text-sm">
            <p className="text-[#000000] text-[14px] font-medium" style={{ lineHeight: '1.25' }}>
              Belltraveler
              <VerifiedTick />
            </p>
            <p className="text-[#8e8e8e] text-[12px]" style={{ lineHeight: '1.25' }}>2d</p>
          </div>
        </div>
        <div className="text-sm font-medium text-black bg-[#fcefee] rounded-md px-3 py-1 flex items-center text-[12px]" style={{ lineHeight: '1.25' }}>
          <PinnedIcon />
          Pinned
        </div>
      </div>
      <p className="text-black text-[16px] font-normal mb-3" style={{ lineHeight: '1.25' }}>
        Holy hydration lorem ispum dolor icon members lorem ispum dolor icon members lorem ispum dolor icon members lorem ispum dolor icon members lorem ispum Holy hydration lorem ispum dolor icon members lorem ispum dolor lorem
      </p>
      <div className="border-t border-[#d7d8e0] my-3"></div>
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center">
          <BookmarkIcon />
          <CommentIcon />
          <span className="text-[#8e8e8e] text-[14px]" style={{ lineHeight: '1.25' }}>1</span>
        </div>
        <button className="text-black text-[14px] font-medium underline" style={{ lineHeight: '1.25' }}>Reply</button>
      </div>
    </div>
  );
};

export default FeedCard; 