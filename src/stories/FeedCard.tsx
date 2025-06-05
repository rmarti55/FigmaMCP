import React from 'react';

const PinnedIcon = () => (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block mr-1">
        <path d="M10.1501 5.6999L6.1501 5.6999L4.8501 5.6999L4.8501 4.3999L6.1501 4.3999L6.1501 1.6999L7.4501 1.6999L7.4501 4.3999L10.1501 4.3999L10.1501 5.6999ZM6.8001 11.2999C6.09177 11.2999 5.4201 11.1574 4.7851 10.8724C4.1501 10.5874 3.5876 10.2237 3.1001 9.7824L2.0501 10.8324L1.1651 9.9474L2.2151 8.8974C1.77385 8.4124 1.4101 7.8524 1.1251 7.2174C0.840104 6.5824 0.697604 5.91073 0.700104 5.1999C0.700104 4.48907 0.842604 3.8174 1.1276 3.1849C1.4126 2.5524 1.7776 1.9924 2.2226 1.5049C2.6676 1.0174 3.1876 0.612404 3.7826 0.362404C4.3776 0.112404 5.01427 0.00240406 5.6926 0.0349041L6.8001 0.299904C7.50843 0.299904 8.1776 0.442404 8.8076 0.727404C9.4376 1.0124 10.0001 1.3774 10.4926 1.8224C10.9851 2.2674 11.3901 2.7874 11.6401 3.3824C11.8901 3.9774 12.0001 4.61407 11.9726 5.2924L11.7076 6.4024C11.7076 7.11073 11.5651 7.7799 11.2801 8.4099C10.9951 9.0399 10.6301 9.6024 10.1851 10.0949C9.7401 10.5874 9.2201 10.9924 8.6251 11.2424C8.0301 11.4924 7.4101 11.5824 6.8001 11.2999Z" fill="#292929"/>
    </svg>
);

const VerifiedTick = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block ml-1">
        <path fillRule="evenodd" clipRule="evenodd" d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14ZM9.70711 5.29289C10.0976 5.68342 10.0976 6.31658 9.70711 6.70711L6.70711 9.70711C6.31658 10.0976 5.68342 10.0976 5.29289 9.70711L4.29289 8.70711C3.90237 8.31658 3.90237 7.68342 4.29289 7.29289C4.68342 6.90237 5.31658 6.90237 5.70711 7.29289L6 7.58579L8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289Z" fill="#5D15D3"/>
    </svg>
);

const HeartIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block mr-1">
        <path d="M12 21.35L10.55 19.93C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C0 3.78-3.4 6.86-8.55 11.54L12 21.35Z" stroke="#000000" strokeWidth="2"/>
    </svg>
)

const BookmarkIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-4">
        <path d="M17 3H7C5.9 3 5 3.9 5 5V21L12 18L19 21V5C19 3.9 18.1 3 17 3Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)


const FeedCard = () => {
  return (
    <div className="bg-white border border-[#d7d8e0] rounded-lg p-4 max-w-sm font-sans">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <img className="w-10 h-10 rounded-full mr-3" src="https://i.pravatar.cc/40" alt="Avatar of Belltraveler" />
          <div className="text-sm">
            <p className="text-[#000000] leading-tight text-[14px] font-medium">
              Belltraveler
              <VerifiedTick />
            </p>
            <p className="text-gray-500 text-[12px]">2d</p>
          </div>
        </div>
        <div className="text-sm font-medium text-black bg-pink-100 rounded-md px-2 py-1 flex items-center">
          <PinnedIcon />
          Pinned
        </div>
      </div>
      <p className="text-black text-[16px] leading-[1.25] font-normal mb-3">
        Holy hydration lorem ispum dolor icon members lorem ispum dolor icon members lorem ispum dolor icon members lorem ispum dolor icon members lorem ispum Holy hydration lorem ispum dolor icon members lorem ispum dolor lorem
      </p>
      <div className="border-t border-[#d7d8e0] my-3"></div>
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center">
          <BookmarkIcon />
          <HeartIcon />
          <span className="text-gray-600">1</span>
        </div>
        <button className="text-black text-[14px] font-medium underline">Reply</button>
      </div>
    </div>
  );
};

export default FeedCard; 