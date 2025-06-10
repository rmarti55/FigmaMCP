import React from 'react';
import clsx from "clsx";

// --- Sub-Components used only by Header ---

type BackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string[];
};

function BackgroundImageAndText({
  text,
  additionalClassNames = [],
}: BackgroundImageAndTextProps) {
  return (
    <div
      className={clsx(
        "box-border content-stretch flex flex-col gap-2.5 h-8 items-center justify-center relative",
        additionalClassNames,
      )}
    >
      <div className="font-sans leading-[0] not-italic relative shrink-0 text-[#000000] text-[16px] text-left text-nowrap">
        <p className="block leading-[1.25] whitespace-pre">{text}</p>
      </div>
    </div>
  );
}


// --- Main Header Component ---

export default function Header() {
  return (
    <div className="relative shrink-0 w-full" data-name="Platform">
      <div className="box-border content-stretch flex flex-row gap-6 items-start justify-start p-0 relative w-full">
        <div
          className="h-[42px] relative shrink-0"
          data-name="Platform Dropdown"
        >
          <div className="box-border content-stretch flex flex-row gap-2 h-[42px] items-center justify-start p-0 relative">
            <div
              className="relative shrink-0"
              data-name="Mega Tabs"
            >
              <div className="flex flex-row justify-center relative size-full">
                <div className="box-border content-stretch flex flex-row gap-2 items-start justify-center pb-1 pt-0 px-0 relative">
                  <div className="flex flex-col font-sans justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[32px] text-left text-nowrap tracking-[-0.64px]">
                    <p className="adjustLetterSpacing block leading-[1.2] whitespace-pre">
                      e.l.f. Skin
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="overflow-clip relative shrink-0 size-10"
              data-name="Icons"
            >
              <div
                className="absolute flex h-[11.667px] items-center justify-center left-1/2 translate-x-[-50%] translate-y-[-50%] w-[23.333px]"
                style={{ top: "calc(50% - 0.0333343px)" }}
              >
                <div className="flex-none rotate-[180deg]">
                  <div
                    className="h-[11.667px] relative w-[23.333px]"
                    data-name="Vector"
                  >
                    <div
                      className="absolute bottom-[-8.571%] left-[-4.286%] right-[-4.286%] top-[-8.571%]"
                      style={
                        {
                          "--stroke-0": "rgba(0, 0, 0, 1)",
                        } as React.CSSProperties
                      }
                    >
                      <svg
                        className="block size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 26 14"
                      >
                        <path
                          d="M24.3333 12.6667L12.6667 1L1 12.6667"
                          id="Vector"
                          stroke="var(--stroke-0, black)"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="basis-0 grow h-[42px] min-h-px min-w-px relative shrink-0"
          data-name="Tertiary Links"
        >
          <div className="box-border content-stretch flex flex-row font-sans gap-10 h-[42px] items-center justify-end leading-[0] not-italic p-0 relative text-[#000000] text-[14px] text-left text-nowrap tracking-[0.84px] uppercase w-full">
            <BackgroundImageAndText text="Home" />
            <BackgroundImageAndText text="BFe.l.f" />
            <BackgroundImageAndText text="Ramon" />
            <BackgroundImageAndText text="Logout" />
          </div>
        </div>
      </div>
    </div>
  );
}
