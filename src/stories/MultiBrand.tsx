import clsx from "clsx";
import React from 'react';

// This is a complex component generated from Figma.
// It has been broken down into smaller sub-components for clarity and reusability.

// --- Sub-Components ---

function MultiBrandBackgroundImage3({ children }: React.PropsWithChildren<{}>) {
  return (
    <svg
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 11 7"
      className="block size-full"
    >
      {children}
    </svg>
  );
}

function BackgroundImage123({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-col justify-center relative shrink-0">
      {children}
    </div>
  );
}
type DropdownlistboxBackgroundImageProps = {
  additionalClassNames?: string[];
  text: string;
  additionalClassNames1?: string[];
};

function DropdownlistboxBackgroundImage({
  children,
  additionalClassNames = [],
  text,
  additionalClassNames1 = [],
}: React.PropsWithChildren<DropdownlistboxBackgroundImageProps>) {
  return (
    <div
      className={clsx("bg-[#ffffff] relative shrink-0", ...additionalClassNames)}
    >
      <div className="absolute border border-[#c3c5d0] border-solid inset-[-0.5px] pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div
          className={clsx(
            "box-border content-stretch flex flex-row gap-2 items-center justify-start pl-3 pr-2 py-2 relative",
            ...additionalClassNames,
          )}
        >
          <div
            className="basis-0 grow min-h-px min-w-px relative shrink-0"
            data-name="Swatch & Text"
          >
            <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-start p-0 relative w-full">
              <div className="basis-0 flex flex-col font-['Futura_Std:Book',_sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[14px] text-left">
                <p className="block leading-[1.25]">{text}</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0" data-name="dropdown chevron">
            <div className="box-border content-stretch flex flex-col gap-2 items-start justify-center p-0 relative">
              <div
                className="overflow-clip relative shrink-0 size-6"
                data-name="Icons"
              >
                <div className="absolute flex h-[7px] items-center justify-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-3.5">
                  <div className="flex-none rotate-[180deg]">
                    <div className="h-[7px] relative w-3.5" data-name="Vector">
                      <div
                        className="absolute bottom-[-7.143%] left-[-3.571%] right-[-3.571%] top-[-7.143%]"
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
                          viewBox="0 0 16 9"
                        >
                          <path
                            d="M15 8L8 1L1 8"
                            id="Vector"
                            stroke="var(--stroke-0, black)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
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

function MultiBrandBackgroundImage2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex-none rotate-[180deg]">
      <div className="h-[4.667px] relative w-[9.333px]" data-name="Vector">
        {children}
      </div>
    </div>
  );
}

function BackgroundImage79({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative w-full">
        {children}
      </div>
    </div>
  );
}

function BackgroundImage64({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#ffffff] relative shrink-0 w-full">
      <div className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid bottom-[-1px] left-0 pointer-events-none right-0 top-0" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-6 items-center justify-start px-3 py-4 relative w-full">
          {children}
        </div>
      </div>
    </div>
  );
}
type BackgroundImage50Props = {
  additionalClassNames?: string[];
};

function BackgroundImage50({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<BackgroundImage50Props>) {
  return (
    <div
      className={clsx(
        "box-border content-stretch flex flex-row gap-2 items-center justify-center py-[7px] relative",
        additionalClassNames,
      )}
    >
      <div className="relative shrink-0" data-name="Wrapper">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative">
          {children}
        </div>
      </div>
    </div>
  );
}

function SelectorsBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="backdrop-blur-[20px] backdrop-filter bg-[#ffffff] relative rounded-[50px] shrink-0">
      <div className="absolute border border-[#000000] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[8px] relative">
          <div
            className="overflow-clip relative shrink-0 size-4"
            data-name="Icons"
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

function MultiBrandBackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center justify-center relative size-full">
      <BackgroundImage50 additionalClassNames={["pl-5", "pr-3"]}>
        {children}
      </BackgroundImage50>
    </div>
  );
}

function BackgroundImage12({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-0 relative w-full">
        <div className="basis-0 flex flex-col font-['Futura_Std:Book',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[12px] text-left tracking-[0.12px]">
          <p className="block leading-[1.25]">{children}</p>
        </div>
      </div>
    </div>
  );
}
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
      <div className="font-['Futura_Std:Book',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[16px] text-left text-nowrap">
        <p className="block leading-[1.25] whitespace-pre">{text}</p>
      </div>
    </div>
  );
}
type MultiBrandBackgroundImageAndText3Props = {
  text: string;
};

function MultiBrandBackgroundImageAndText3({
  text,
}: MultiBrandBackgroundImageAndText3Props) {
  return (
    <div className="flex flex-col items-center justify-center relative size-full">
      <BackgroundImageAndText
        text={text}
        additionalClassNames={["px-3", "py-0"]}
      />
    </div>
  );
}

function MultiBrandBackgroundImage() {
  return (
    <div
      style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}
      className="absolute bottom-[-5.655%] left-[-4.167%] right-[-4.167%] top-[-5.655%]"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 11"
      >
        <path
          d="M1 5.42105H13M13 5.42105L8.57895 1M13 5.42105L8.57895 9.8421"
          id="Vector"
          stroke="var(--stroke-0, black)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function TablerowBackgroundImage() {
  return (
    <BackgroundImage64>
      <MultiBrandImagecontainerBackgroundImage />
      <MultiBrandCommenttextcontainerBackgroundImageAndText text="Thrilled to try out the new ColorPop palette! 🎨💖 #MakeupLover" />
      <MultiBrandCommenttextcontainerBackgroundImageAndText text="Love this skincare routine, my skin is gonna glow!" />
      <MultiBrandCommenttextcontainerBackgroundImageAndText text="Hey! 🌼 Thanks for being an awesome fan! What's the one item from our collection you can't live without?" />
      <MultiBrandCommenttextcontainerBackgroundImageAndText text="Hey! 🌼 Thanks for being an awesome fan! What's the one item from our collection you can't live without?" />
      <MultiBrandActioncontainerBackgroundImage
        icon1="[icon: comment-dots]"
        icon2="[icon: bookmark]"
        ctaText="POST"
      />
    </BackgroundImage64>
  );
}
type MultiBrandActioncontainerBackgroundImageProps = {
  icon1: string;
  icon2: string;
  ctaText: string;
};

function MultiBrandActioncontainerBackgroundImage({
  icon1,
  icon2,
  ctaText,
}: MultiBrandActioncontainerBackgroundImageProps) {
  return (
    <div className="relative shrink-0">
      <div className="box-border content-stretch flex flex-row gap-4 items-center justify-center p-0 relative">
        <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[24px] text-left text-nowrap">
          <p className="block leading-none whitespace-pre">{icon1}</p>
        </div>
        <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[24px] text-left text-nowrap">
          <p className="block leading-none whitespace-pre">{icon2}</p>
        </div>
        <div
          className="bg-[#000000] h-8 relative rounded-[100px] shrink-0"
          data-name="CTA Button"
        >
          <div className="flex flex-row items-center justify-center relative size-full">
            <div className="box-border content-stretch flex flex-row gap-3 h-8 items-center justify-center px-4 py-0 relative">
              <div className="font-['Futura_Std:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap tracking-[0.84px] uppercase">
                <p className="adjustLetterSpacing block leading-[1.25] whitespace-pre">
                  {ctaText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type MultiBrandCommenttextcontainerBackgroundImageAndTextProps = {
  text: string;
};

function MultiBrandCommenttextcontainerBackgroundImageAndText({
  text,
}: MultiBrandCommenttextcontainerBackgroundImageAndTextProps) {
  return <BackgroundImage12>{text}</BackgroundImage12>;
}

function MultiBrandImagecontainerBackgroundImage() {
  return (
    <div className="h-[50px] relative shrink-0 w-[76px]">
      <div
        className="[background-size:cover,_auto] absolute bg-[#dcdcdc] left-0 size-[50px] top-0"
        data-name="Image"
        style={{
          backgroundImage:
            "url(data:image/svg+xml;base64,PHN2ZwogICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgICAgIHZpZXdCb3g9IjAgMCAxIDEiCiAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiCiAgICAgIHdpZHRoPSIxMDAlIgogICAgICBoZWlnaHQ9IjEwMCUiCiAgICA+CiAgICAgIDxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNFRUUiIC8+CiAgICA8L3N2Zz4=)",
        }}
      />
    </div>
  );
}
type MultiBrandTdBackgroundImageAndTextProps = {
  text: string;
};

function MultiBrandTdBackgroundImageAndText({
  text,
}: MultiBrandTdBackgroundImageAndTextProps) {
  return (
    <BackgroundImage79>
      <div className="basis-0 flex flex-col font-['Futura_Std:Bold',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[14px] text-left">
        <p className="block leading-[1.25]">{text}</p>
      </div>
    </BackgroundImage79>
  );
}
type MultiBrandBackgroundImageAndText1Props = {
  text: string;
};

function MultiBrandBackgroundImageAndText1({
  text,
}: MultiBrandBackgroundImageAndText1Props) {
  return (
    <div className="flex flex-row items-center justify-center relative size-full">
      <BackgroundImage50 additionalClassNames={["px-5"]}>
        <div className="flex flex-col font-['Futura_Std:Book',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] text-center text-nowrap">
          <p className="block leading-[1.25] whitespace-pre">{text}</p>
        </div>
      </BackgroundImage50>
    </div>
  );
}

// --- Main Component ---

export default function MultiBrand() {
  return (
    <div className="bg-[#f2f2f2] relative size-full" data-name="Multi-Brand">
      <div
        className="absolute left-0 top-0 w-[1440px]"
        data-name="Main Container"
      >
        <div className="relative size-full">
          <div className="box-border content-stretch flex flex-col gap-8 items-start justify-start p-[24px] relative w-[1440px]">
            <div
              className="relative shrink-0 w-full"
              data-name="Top Nav & Chips"
            >
              <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-0 relative w-full">
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
                              <div className="flex flex-col font-['Futura_Std:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[32px] text-left text-nowrap tracking-[-0.64px]">
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
                      <div className="box-border content-stretch flex flex-row font-['Futura_Std:Bold',_sans-serif] gap-10 h-[42px] items-center justify-end leading-[0] not-italic p-0 relative text-[#000000] text-[14px] text-left text-nowrap tracking-[0.84px] uppercase w-full">
                        <BackgroundImageAndText text="Home" />
                        <BackgroundImage123>
                          <p className="leading-[1.25] text-nowrap whitespace-pre">
                            BF
                            <span className="adjustLetterSpacing lowercase">
                              e.l.f
                            </span>
                          </p>
                        </BackgroundImage123>
                        <BackgroundImageAndText text="Ramon" />
                        <BackgroundImageAndText text="Logout" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-8 relative shrink-0 w-full" data-name="BRand">
                  <div className="box-border content-stretch flex flex-row gap-4 h-8 items-start justify-start p-0 relative w-full">
                    <div
                      className="bg-[#000000] relative rounded-[35px] shrink-0"
                      data-name="Filter Chips"
                    >
                      <MultiBrandBackgroundImage1>
                        <div className="flex flex-col font-['Futura_Std:Book',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap">
                          <p className="block leading-[1.25] whitespace-pre">
                            Instagram
                          </p>
                        </div>
                        <div
                          className="overflow-clip relative shrink-0 size-4"
                          data-name="All Icons/Chevron-Down/White/16"
                        >
                          <div
                            className="absolute flex h-[4.667px] items-center justify-center translate-x-[-50%] translate-y-[-50%] w-[9.333px]"
                            style={{
                              top: "calc(50% - 0.133334px)",
                              left: "calc(50% + 0.00333262px)",
                            }}
                          >
                            <MultiBrandBackgroundImage2>
                              <div
                                className="absolute bottom-[-10.714%] left-[-5.357%] right-[-5.357%] top-[-10.714%]"
                                style={
                                  {
                                    "--stroke-0": "rgba(255, 255, 255, 1)",
                                  } as React.CSSProperties
                                }
                              >
                                <MultiBrandBackgroundImage3>
                                  <path
                                    d="M10.3333 5.66667L5.66667 1L1 5.66667"
                                    id="Vector"
                                    stroke="var(--stroke-0, white)"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </MultiBrandBackgroundImage3>
                              </div>
                            </MultiBrandBackgroundImage2>
                          </div>
                        </div>
                      </MultiBrandBackgroundImage1>
                    </div>
                    <div
                      className="bg-[#dce0f4] relative rounded-[35px] shrink-0"
                      data-name="Filter Chips"
                    >
                      <div className="absolute border border-[#dce0f4] border-solid inset-0 pointer-events-none rounded-[35px]" />
                      <MultiBrandBackgroundImageAndText1 text="Comments" />
                    </div>
                    <div
                      className="relative rounded-[35px] shrink-0"
                      data-name="Filter Chips"
                    >
                      <div className="absolute border border-[#c3c5d0] border-solid inset-0 pointer-events-none rounded-[35px]" />
                      <MultiBrandBackgroundImageAndText1 text="Ads" />
                    </div>
                    <div
                      className="relative rounded-[35px] shrink-0"
                      data-name="Filter Chips"
                    >
                      <div className="absolute border border-[#c3c5d0] border-solid inset-0 pointer-events-none rounded-[35px]" />
                      <MultiBrandBackgroundImageAndText1 text="All Posts" />
                    </div>
                    <div
                      className="relative rounded-[35px] shrink-0"
                      data-name="Filter Chips"
                    >
                      <div className="absolute border border-[#c3c5d0] border-solid inset-0 pointer-events-none rounded-[35px]" />
                      <MultiBrandBackgroundImageAndText1 text="Earned Media" />
                    </div>
                    <div
                      className="relative rounded-[35px] shrink-0"
                      data-name="Filter Chips"
                    >
                      <div className="absolute border border-[#c3c5d0] border-solid inset-0 pointer-events-none rounded-[35px]" />
                      <MultiBrandBackgroundImageAndText1 text="Statistics" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="relative shrink-0 w-full"
              data-name="Filter Container"
            >
              <div className="box-border content-stretch flex flex-row gap-6 items-center justify-start p-0 relative w-full">
                <div
                  className="bg-[#ffffff] h-10 relative rounded-[50px] shrink-0 w-[246px]"
                  data-name="Search Bar"
                >
                  <div className="absolute border border-[#000000] border-solid inset-0 pointer-events-none rounded-[50px]" />
                  <div className="flex flex-row items-center relative size-full">
                    <div className="box-border content-stretch flex flex-row gap-2 h-10 items-center justify-start px-3 py-4 relative w-[246px]">
                      <div
                        className="relative shrink-0 size-6"
                        data-name="All Icons/Search/White/24"
                      >
                        <div
                          className="absolute h-[19.233px] left-[2.02px] translate-y-[-50%] w-[19.961px]"
                          data-name="Union"
                          style={{ top: "calc(50% - 0.00376319px)" }}
                        >
                          <div
                            className="absolute bottom-0 left-0 right-[0.001%] top-0"
                            style={
                              {
                                "--fill-0": "rgba(0, 0, 0, 1)",
                              } as React.CSSProperties
                            }
                          >
                            <svg
                              className="block size-full"
                              fill="none"
                              preserveAspectRatio="none"
                              viewBox="0 0 20 20"
                            >
                              <path
                                d="M8.6748 0.0107422C13.0343 0.231579 16.501 3.83665 16.501 8.25098L16.4902 8.6748C16.4017 10.4227 15.7683 12.0263 14.7578 13.3213L19.8145 18.3789L19.8789 18.457C20.0068 18.6511 19.9852 18.9152 19.8145 19.0859C19.6437 19.2566 19.3805 19.2782 19.1865 19.1504L19.1074 19.0859L14.0938 14.0713C12.5999 15.5708 10.5348 16.5009 8.25098 16.501L7.82617 16.4902C3.60728 16.2765 0.224459 12.8937 0.0107422 8.6748L0 8.25098C0 3.69435 3.69435 0 8.25098 0L8.6748 0.0107422ZM8.25098 1C4.24663 1 1 4.24663 1 8.25098C1.00025 12.2551 4.24679 15.501 8.25098 15.501C12.255 15.5007 15.5007 12.255 15.501 8.25098C15.501 4.24679 12.2551 1.00025 8.25098 1Z"
                                fill="var(--fill-0, black)"
                                id="Union"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col font-['Futura_Std:Book',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap">
                        <p className="block leading-[1.25] whitespace-pre">
                          Search Comment
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="basis-0 grow min-h-px min-w-px relative shrink-0"
                  data-name="Search and Date Container"
                >
                  <div className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start p-0 relative w-full">
                    <DropdownlistboxBackgroundImage
                      additionalClassNames={["w-[177px]"]}
                      text="Search Post"
                      additionalClassNames1={["w-[177px]"]}
                    />
                    <DropdownlistboxBackgroundImage
                      additionalClassNames={["w-[186px]"]}
                      text="Show Bookmarked"
                      additionalClassNames1={["w-[186px]"]}
                    />
                    <DropdownlistboxBackgroundImage
                      additionalClassNames={["w-[190px]"]}
                      text="Response"
                      additionalClassNames1={["w-[190px]"]}
                    />
                    <DropdownlistboxBackgroundImage
                      additionalClassNames={["w-[195px]"]}
                      text="Comment Posted TIme"
                      additionalClassNames1={["w-[195px]"]}
                    />
                    <DropdownlistboxBackgroundImage
                      additionalClassNames={["w-52"]}
                      text="Show Hidden"
                      additionalClassNames1={["w-52"]}
                    />
                  </div>
                </div>
                <div
                  className="bg-[#ffffff] h-8 relative rounded-[100px] shrink-0"
                  data-name="CTA Button"
                >
                  <div className="box-border content-stretch flex flex-row gap-3 h-8 items-center justify-end p-0 relative">
                    <div
                      className="relative rounded-[100px] shrink-0"
                      data-name="_Button base component"
                    >
                      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
                        <div className="box-border content-stretch flex flex-row items-center justify-center px-4 py-[7px] relative">
                          <div className="font-['Futura_Std:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] text-center text-nowrap tracking-[0.84px] uppercase">
                            <p className="adjustLetterSpacing block leading-[1.25] whitespace-pre">
                              REFRESH
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="absolute border border-[#000000] border-solid inset-0 pointer-events-none rounded-[100px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full" data-name="Table">
              <div className="absolute border border-[#eaeaea] border-solid inset-0 pointer-events-none" />
              <div className="box-border content-stretch flex flex-col gap-px items-start justify-start p-0 relative w-full">
                <div
                  className="bg-neutral-50 relative shrink-0 w-full"
                  data-name="Table/th"
                >
                  <div className="absolute border-[#eaeaea] border-[0px_0px_1px] border-solid bottom-[-1px] left-0 pointer-events-none right-0 top-0" />
                  <div className="relative size-full">
                    <div className="box-border content-stretch flex flex-row gap-6 items-start justify-start p-[12px] relative w-full">
                      <div className="relative shrink-0" data-name="td">
                        <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative">
                          <div className="flex flex-col font-['Futura_Std:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap">
                            <p className="block leading-[1.25] whitespace-pre">
                              Post Image
                            </p>
                          </div>
                        </div>
                      </div>
                      <MultiBrandTdBackgroundImageAndText text="Post Body" />
                      <MultiBrandTdBackgroundImageAndText text="Comment" />
                      <MultiBrandTdBackgroundImageAndText text="AI Response" />
                      <BackgroundImage79>
                        <div className="flex flex-col font-['Futura_Std:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] text-left w-[224.87px]">
                          <p className="block leading-[1.25]">
                            Edited/Posted Response
                          </p>
                        </div>
                      </BackgroundImage79>
                      <div
                        className="relative shrink-0 w-[156px]"
                        data-name="td"
                      >
                        <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 w-[156px]" />
                      </div>
                    </div>
                  </div>
                </div>
                <BackgroundImage64>
                  <MultiBrandImagecontainerBackgroundImage />
                  <BackgroundImage12>{`Just got my beauty box and I'm so excited to try the products! ✨ #BeautyBox`}</BackgroundImage12>
                  <MultiBrandCommenttextcontainerBackgroundImageAndText text="This makeup look is everything, I need to recreate it ASAP!" />
                  <MultiBrandCommenttextcontainerBackgroundImageAndText text="Hey fabulous! ✨ We're so grateful for your support! It inspires us every day! What's your favorite way to use our products?" />
                  <MultiBrandCommenttextcontainerBackgroundImageAndText text="Hey fabulous! ✨ We're so grateful for your support! It inspires us every day! What's your favorite way to use our products?" />
                  <MultiBrandActioncontainerBackgroundImage
                    icon1="[icon: comment-dots]"
                    icon2="[icon: bookmark]"
                    ctaText="POST"
                  />
                </BackgroundImage64>
                <BackgroundImage64>
                  <MultiBrandImagecontainerBackgroundImage />
                  <MultiBrandCommenttextcontainerBackgroundImageAndText text="Excited to pamper myself with BlissfulBubbles bath bombs! 🛁 #PamperTime" />
                  <MultiBrandCommenttextcontainerBackgroundImageAndText text="This makeup look is everything, I need to recreate it ASAP!" />
                  <MultiBrandCommenttextcontainerBackgroundImageAndText text="Hey fabulous! ✨ We're so grateful for your support! It inspires us every day! What's your favorite way to use our products?" />
                  <MultiBrandCommenttextcontainerBackgroundImageAndText text="Hey fabulous! ✨ We're so grateful for your support! It inspires us every day! What's your favorite way to use our products?" />
                  <MultiBrandActioncontainerBackgroundImage
                    icon1="[icon: comment-dots]"
                    icon2="[icon: bookmark]"
                    ctaText="POST"
                  />
                </BackgroundImage64>
                <BackgroundImage64>
                  <MultiBrandImagecontainerBackgroundImage />
                  <BackgroundImage12>{`Thrilled to start my self-care journey with RadiantSkin's new line! 🌟 #SelfCare`}</BackgroundImage12>
                  <MultiBrandCommenttextcontainerBackgroundImageAndText text="This makeup look is everything, I need to recreate it ASAP!" />
                  <MultiBrandCommenttextcontainerBackgroundImageAndText text="Hi beautiful! 💕 We appreciate your love for our brand! Your feedback means the world to us! What's your go-to beauty tip?" />
                  <MultiBrandCommenttextcontainerBackgroundImageAndText text="Hi beautiful! 💕 We appreciate your love for our brand! Your feedback means the world to us! What's your go-to beauty tip?" />
                  <MultiBrandActioncontainerBackgroundImage
                    icon1="[icon: comment-dots]"
                    icon2="[icon: bookmark]"
                    ctaText="POST"
                  />
                </BackgroundImage64>
                <BackgroundImage64>
                  <MultiBrandImagecontainerBackgroundImage />
                  <MultiBrandCommenttextcontainerBackgroundImageAndText text="So excited to dive into the latest ColorPop palette! 🎨✨ #BeautyBuzz" />
                  <MultiBrandCommenttextcontainerBackgroundImageAndText text="Love this skincare routine, my skin is gonna glow!" />
                  <MultiBrandCommenttextcontainerBackgroundImageAndText text="Hey there! 🌼 Thanks for being such an awesome fan! We're super excited to have you here! What's the one item from our collection you can't live without?" />
                  <MultiBrandCommenttextcontainerBackgroundImageAndText text="Hey there! 🌼 Thanks for being such an awesome fan! We're super excited to have you here! What's the one item from our collection you can't live without?" />
                  <MultiBrandActioncontainerBackgroundImage
                    icon1="[icon: comment-dots]"
                    icon2="[icon: bookmark]"
                    ctaText="POST"
                  />
                </BackgroundImage64>
                <TablerowBackgroundImage />
                <TablerowBackgroundImage />
                <TablerowBackgroundImage />
              </div>
            </div>
            <div
              className="relative shrink-0 w-[1392px]"
              data-name="Pagination Container"
            >
              <div className="box-border content-stretch flex flex-col gap-2.5 items-end justify-center p-0 relative w-[1392px]">
                <div className="relative shrink-0" data-name="Pagination">
                  <div className="box-border content-stretch flex flex-row gap-8 items-center justify-center p-0 relative">
                    <div
                      className="relative shrink-0"
                      data-name="Selectors & Numbers"
                    >
                      <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative">
                        <SelectorsBackgroundImage>
                          <div
                            className="absolute flex h-[8.842px] items-center justify-center left-1/2 translate-x-[-50%] translate-y-[-50%] w-3"
                            style={{ top: "calc(50% + 0.00105429px)" }}
                          >
                            <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                              <div
                                className="h-[8.842px] relative w-3"
                                data-name="Vector"
                              >
                                <MultiBrandBackgroundImage />
                              </div>
                            </div>
                          </div>
                        </SelectorsBackgroundImage>
                        <div
                          className="bg-[#dce0f4] h-8 relative rounded shrink-0"
                          data-name="Number"
                        >
                          <MultiBrandBackgroundImageAndText3 text="1" />
                        </div>
                        <div
                          className="bg-[#ffffff] h-8 relative rounded shrink-0"
                          data-name="Number"
                        >
                          <div className="absolute border border-[#ebecef] border-solid inset-0 pointer-events-none rounded" />
                          <MultiBrandBackgroundImageAndText3 text="2" />
                        </div>
                        <div
                          className="bg-[#ffffff] h-8 relative rounded shrink-0"
                          data-name="Number"
                        >
                          <div className="absolute border border-[#ebecef] border-solid inset-0 pointer-events-none rounded" />
                          <MultiBrandBackgroundImageAndText3 text="3" />
                        </div>
                        <div
                          className="bg-[#ffffff] h-8 relative rounded shrink-0"
                          data-name="Number"
                        >
                          <div className="absolute border border-[#ebecef] border-solid inset-0 pointer-events-none rounded" />
                          <MultiBrandBackgroundImageAndText3 text="4" />
                        </div>
                        <div
                          className="h-8 relative shrink-0 w-6"
                          data-name="Elipses"
                        >
                          <BackgroundImageAndText
                            text="..."
                            additionalClassNames={["p-0", "w-6"]}
                          />
                        </div>
                        <div
                          className="bg-[#ffffff] h-8 relative rounded shrink-0"
                          data-name="Number"
                        >
                          <div className="absolute border border-[#ebecef] border-solid inset-0 pointer-events-none rounded" />
                          <MultiBrandBackgroundImageAndText3 text="4185" />
                        </div>
                        <SelectorsBackgroundImage>
                          <div
                            className="absolute h-[8.842px] left-1/2 translate-x-[-50%] translate-y-[-50%] w-3"
                            data-name="Vector"
                            style={{ top: "calc(50% + 0.00105429px)" }}
                          >
                            <MultiBrandBackgroundImage />
                          </div>
                        </SelectorsBackgroundImage>
                      </div>
                    </div>
                    <div
                      className="bg-[#ffffff] relative rounded-[35px] shrink-0"
                      data-name="Dropdown"
                    >
                      <div className="absolute border border-[#000000] border-solid inset-0 pointer-events-none rounded-[35px]" />
                      <MultiBrandBackgroundImage1>
                        <div className="flex flex-col font-['Futura_Std:Book',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] text-center text-nowrap">
                          <p className="block leading-[1.25] whitespace-pre">
                            10 / page
                          </p>
                        </div>
                        <div
                          className="overflow-clip relative shrink-0 size-4"
                          data-name="Icons"
                        >
                          <div
                            className="absolute flex h-[4.667px] items-center justify-center translate-x-[-50%] translate-y-[-50%] w-[9.333px]"
                            style={{
                              top: "calc(50% + 0.66667px)",
                              left: "calc(50% + 0.00333262px)",
                            }}
                          >
                            <MultiBrandBackgroundImage2>
                              <div
                                className="absolute bottom-[-10.714%] left-[-5.357%] right-[-5.357%] top-[-10.714%]"
                                style={
                                  {
                                    "--stroke-0": "rgba(0, 0, 0, 1)",
                                  } as React.CSSProperties
                                }
                              >
                                <MultiBrandBackgroundImage3>
                                  <path
                                    d="M10.3333 5.66667L5.66667 1L1 5.66667"
                                    id="Vector"
                                    stroke="var(--stroke-0, black)"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </MultiBrandBackgroundImage3>
                              </div>
                            </MultiBrandBackgroundImage2>
                          </div>
                        </div>
                      </MultiBrandBackgroundImage1>
                    </div>
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