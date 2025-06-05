import React from 'react';

const PinnedIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block mr-1">
    <path d="M9.49992 5.50008L6.49992 8.50008L4.62492 6.62508L5.18492 6.06508L6.49992 7.38008L8.93992 4.94008L9.49992 5.50008ZM5.99992 11.0001C5.25325 11.0001 4.54492 10.8601 3.87492 10.5801C3.20492 10.3001 2.60492 9.94508 2.07492 9.51508C1.54492 9.08508 1.09992 8.58008 0.739922 7.99008C0.379922 7.40008 0.189922 6.74508 0.174922 6.02508C0.169922 5.27508 0.314922 4.56508 0.609922 3.89508C0.904922 3.22508 1.28492 2.63008 1.74992 2.11008C2.21492 1.59008 2.75492 1.15508 3.36992 0.805082C3.98492 0.455082 4.64992 0.280082 5.36492 0.280082C6.07992 0.280082 6.73492 0.450082 7.32992 0.790082C7.92492 1.13008 8.44992 1.55508 8.90492 2.06508C9.35992 2.57508 9.72992 3.15008 10.0149 3.79008C10.2999 4.43008 10.4549 5.11008 10.4799 5.83008C10.5049 6.55008 10.3699 7.23508 10.0749 7.88508C9.77992 8.53508 9.38492 9.11508 8.88992 9.62508C8.39492 10.1351 7.82492 10.5551 7.17992 10.8851C6.53492 11.2151 5.83992 11.3651 5.09492 11.4301L5.99992 11.0001Z" fill="#A259FF"/>
  </svg>
);

const VerifiedTick = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block ml-1">
        <path d="M12.0837 6.63691L8.2778 10.4428L5.79199 7.957L6.46824 7.28075L8.2778 9.0903L11.4075 5.96066L12.0837 6.63691ZM7.00033 13.167C6.12533 13.167 5.30033 13.0037 4.52533 12.677C3.75033 12.3503 3.06866 11.942 2.47949 11.452C1.89033 10.962 1.41133 10.3837 1.04249 9.717C0.673658 9.05033 0.474825 8.312 0.446158 7.502C0.436158 6.682 0.596158 5.90366 0.926158 5.167C1.25616 4.43033 1.68282 3.772 2.20616 3.192C2.72949 2.612 3.33616 2.127 4.02616 1.737C4.71616 1.347 5.46616 1.152 6.27616 1.152C7.08616 1.152 7.82366 1.32533 8.48866 1.672C9.15366 2.01866 9.73616 2.457 10.2362 2.987C10.7362 3.517 11.1437 4.11866 11.4587 4.792C11.7737 5.46533 11.9362 6.187 11.9462 6.957C11.9662 7.727 11.8137 8.45533 11.4887 9.142C11.1637 9.82866 10.7223 10.4437 10.1642 10.987C9.60616 11.5303 8.94866 11.9887 8.19233 12.362C7.43599 12.7353 6.61933 12.9353 5.74233 12.962L7.00033 13.167Z" fill="#7B61FF"/>
    </svg>
)

const HeartIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block mr-1">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
)

const BookmarkIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-4">
        <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)


const FeedCard = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 max-w-sm font-sans">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <img className="w-10 h-10 rounded-full mr-3" src="https://i.pravatar.cc/40" alt="Avatar of Belltraveler" />
          <div className="text-sm">
            <p className="text-gray-900 leading-none font-bold">
              Belltraveler
              <VerifiedTick />
            </p>
            <p className="text-gray-600">2d</p>
          </div>
        </div>
        <div className="text-sm font-semibold text-purple-600">
          <PinnedIcon />
          Pinned
        </div>
      </div>
      <p className="text-black text-[16px] leading-[1.25] font-medium mb-3">
        Holy hydration lorem ispum dolor icon members lorem ispum dolor icon members lorem ispum dolor icon members lorem ispum dolor icon members lorem ispum Holy hydration lorem ispum dolor icon members lorem ispum dolor lorem
      </p>
      <div className="border-t border-gray-200 my-3"></div>
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center">
          <BookmarkIcon />
          <HeartIcon />
          <span className="text-gray-600">1</span>
        </div>
        <button className="text-gray-600 font-semibold">Reply</button>
      </div>
    </div>
  );
};

export default FeedCard; 