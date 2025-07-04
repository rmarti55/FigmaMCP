import React from 'react';

type BackgroundImageAndTextProps = {
  text: string;
  darkMode?: boolean;
};

function BackgroundImageAndText({
  text,
  darkMode = false
}: BackgroundImageAndTextProps) {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 h-8 items-center justify-center relative"
    >
      <div className={`font-sans leading-[0] not-italic relative shrink-0 text-[16px] text-left text-nowrap ${darkMode ? 'text-white' : 'text-[#000000]'}`}>
        <p className="block leading-[1.25] whitespace-pre">{text}</p>
      </div>
    </div>
  );
}

export default BackgroundImageAndText; 