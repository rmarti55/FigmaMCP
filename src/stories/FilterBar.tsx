import React from 'react';

export function FilterBar() {
  return (
    <div className="relative w-full" data-name="Filter Container">
      <div className="box-border flex flex-row gap-6 items-center justify-start p-0 relative w-full">
        {/* Search Bar */}
        <div className="bg-white h-10 relative rounded-[50px] shrink-0 w-[246px] border border-black" data-name="Search Bar">
          <div className="flex flex-row items-center relative h-full">
            <div className="box-border flex flex-row gap-2 h-10 items-center justify-start px-3 py-4 relative w-[246px]">
              <div className="relative shrink-0 w-6 h-6" data-name="Search Icon">
                <div className="absolute h-[19.233px] left-[2.02px] w-[19.961px]" style={{ top: "calc(50% - 0.00376319px)" }}>
                  <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <path d="M8.6748 0.0107422C13.0343 0.231579 16.501 3.83665 16.501 8.25098L16.4902 8.6748C16.4017 10.4227 15.7683 12.0263 14.7578 13.3213L19.8145 18.3789L19.8789 18.457C20.0068 18.6511 19.9852 18.9152 19.8145 19.0859C19.6437 19.2566 19.3805 19.2782 19.1865 19.1504L19.1074 19.0859L14.0938 14.0713C12.5999 15.5708 10.5348 16.5009 8.25098 16.501L7.82617 16.4902C3.60728 16.2765 0.224459 12.8937 0.0107422 8.6748L0 8.25098C0 3.69435 3.69435 0 8.25098 0L8.6748 0.0107422ZM8.25098 1C4.24663 1 1 4.24663 1 8.25098C1.00025 12.2551 4.24679 15.501 8.25098 15.501C12.255 15.5007 15.5007 12.255 15.501 8.25098C15.501 4.24679 12.2551 1.00025 8.25098 1Z" fill="black"/>
                  </svg>
                </div>
              </div>
              <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-black text-[14px] text-left whitespace-nowrap" style={{ fontFamily: '"Futura Std", sans-serif', fontWeight: 400, lineHeight: 1.25 }}>
                <p className="block leading-[1.25] whitespace-pre">Search Comment</p>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Date Container */}
        <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Search and Date Container">
          <div className="box-border flex flex-row gap-2.5 items-start justify-start p-0 relative w-full">
            {/* Search Post Dropdown */}
            <div className="bg-white relative shrink-0 w-[177px] border border-[#c3c5d0] rounded-[50px]">
              <div className="flex flex-row items-center relative h-full">
                <div className="box-border flex flex-row gap-2 items-center justify-start pl-3 pr-2 py-2 relative w-full">
                  <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                    <div className="box-border flex flex-row gap-1.5 items-center justify-start p-0 relative w-full">
                      <div className="basis-0 flex flex-col grow h-full justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-black text-[14px] text-left" style={{ fontFamily: '"Futura Std", sans-serif', fontWeight: 400, lineHeight: 1.25 }}>
                        <p className="block leading-[1.25]">Search Post</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 w-6 h-6">
                    <div className="absolute flex h-[7px] items-center justify-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-3.5">
                      <div className="flex-none rotate-[180deg]">
                        <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 9">
                          <path d="M15 8L8 1L1 8" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Show Bookmarked Dropdown */}
            <div className="bg-white relative shrink-0 w-[186px] border border-[#c3c5d0] rounded-[50px]">
              <div className="flex flex-row items-center relative h-full">
                <div className="box-border flex flex-row gap-2 items-center justify-start pl-3 pr-2 py-2 relative w-full">
                  <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                    <div className="basis-0 flex flex-col grow h-full justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-black text-[14px] text-left" style={{ fontFamily: '"Futura Std", sans-serif', fontWeight: 400, lineHeight: 1.25 }}>
                      <p className="block leading-[1.25]">Show Bookmarked</p>
                    </div>
                  </div>
                  <div className="relative shrink-0 w-6 h-6">
                    <div className="absolute flex h-[7px] items-center justify-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-3.5">
                      <div className="flex-none rotate-[180deg]">
                        <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 9">
                          <path d="M15 8L8 1L1 8" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Dropdown */}
            <div className="bg-white relative shrink-0 w-[190px] border border-[#c3c5d0] rounded-[50px]">
              <div className="flex flex-row items-center relative h-full">
                <div className="box-border flex flex-row gap-2 items-center justify-start pl-3 pr-2 py-2 relative w-full">
                  <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                    <div className="basis-0 flex flex-col grow h-full justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-black text-[14px] text-left" style={{ fontFamily: '"Futura Std", sans-serif', fontWeight: 400, lineHeight: 1.25 }}>
                      <p className="block leading-[1.25]">Response</p>
                    </div>
                  </div>
                  <div className="relative shrink-0 w-6 h-6">
                    <div className="absolute flex h-[7px] items-center justify-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-3.5">
                      <div className="flex-none rotate-[180deg]">
                        <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 9">
                          <path d="M15 8L8 1L1 8" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Comment Posted Time Dropdown */}
            <div className="bg-white relative shrink-0 w-[195px] border border-[#c3c5d0] rounded-[50px]">
              <div className="flex flex-row items-center relative h-full">
                <div className="box-border flex flex-row gap-2 items-center justify-start pl-3 pr-2 py-2 relative w-full">
                  <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                    <div className="basis-0 flex flex-col grow h-full justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-black text-[14px] text-left" style={{ fontFamily: '"Futura Std", sans-serif', fontWeight: 400, lineHeight: 1.25 }}>
                      <p className="block leading-[1.25]">Comment Posted Time</p>
                    </div>
                  </div>
                  <div className="relative shrink-0 w-6 h-6">
                    <div className="absolute flex h-[7px] items-center justify-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-3.5">
                      <div className="flex-none rotate-[180deg]">
                        <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 9">
                          <path d="M15 8L8 1L1 8" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Show Hidden Dropdown */}
            <div className="bg-white relative shrink-0 w-52 border border-[#c3c5d0] rounded-[50px]">
              <div className="flex flex-row items-center relative h-full">
                <div className="box-border flex flex-row gap-2 items-center justify-start pl-3 pr-2 py-2 relative w-full">
                  <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                    <div className="basis-0 flex flex-col grow h-full justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-black text-[14px] text-left" style={{ fontFamily: '"Futura Std", sans-serif', fontWeight: 400, lineHeight: 1.25 }}>
                      <p className="block leading-[1.25]">Show Hidden</p>
                    </div>
                  </div>
                  <div className="relative shrink-0 w-6 h-6">
                    <div className="absolute flex h-[7px] items-center justify-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-3.5">
                      <div className="flex-none rotate-[180deg]">
                        <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 9">
                          <path d="M15 8L8 1L1 8" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="bg-white h-8 relative rounded-[100px] shrink-0 border border-black" data-name="CTA Button">
          <div className="box-border flex flex-row gap-3 h-8 items-center justify-end p-0 relative">
            <div className="relative rounded-[100px] shrink-0">
              <div className="flex flex-row items-center justify-center overflow-clip relative h-full">
                <div className="box-border flex flex-row items-center justify-center px-4 py-[7px] relative">
                  <div className="leading-[0] not-italic relative shrink-0 text-black text-[14px] text-center whitespace-nowrap tracking-[0.84px] uppercase" style={{ fontFamily: '"Futura Std", sans-serif', fontWeight: 700, lineHeight: 1.25 }}>
                    <p className="block leading-[1.25] whitespace-pre">REFRESH</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 