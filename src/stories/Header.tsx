import React, { useState, useEffect, useRef } from 'react';
import clsx from "clsx";
import { ChevronDown } from 'lucide-react';
import BackgroundImageAndText from '@/components/BackgroundImageAndText';

// --- Main Header Component ---

type HeaderProps = {
  initialOpen?: boolean;
}

export default function Header({ initialOpen = false }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const brands = ["e.l.f. Skin", "e.l.f. Cosmetics", "Well People", "Keys Soul Care", "Naturium", "Rhode"];
  const [selectedBrand, setSelectedBrand] = useState(brands[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // This effect ensures that the component's internal open state
    // can be synced with the story's initialOpen prop.
    setIsOpen(initialOpen);
  }, [initialOpen]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);


  const handleSelectBrand = (brand: string) => {
    setSelectedBrand(brand);
    setIsOpen(false);
  }

  return (
    <div className="relative shrink-0 w-full" data-name="Platform">
      <div className="box-border content-stretch flex flex-row gap-6 items-start justify-start p-0 relative w-full">
        <div
          className="h-[42px] relative"
          data-name="Platform Dropdown"
          ref={dropdownRef}
        >
          <div
            className="box-border content-stretch flex flex-row gap-2 h-[42px] items-center justify-start p-0 relative cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div
              className="relative shrink-0"
              data-name="Mega Tabs"
            >
              <div className="flex flex-row justify-center relative size-full">
                <div className="box-border content-stretch flex flex-row gap-2 items-start justify-center pb-1 pt-0 px-0 relative">
                  <div className="flex flex-col font-sans justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[32px] text-left text-nowrap tracking-[-0.64px]">
                    <p className="adjustLetterSpacing block leading-[1.2] whitespace-pre">
                      {selectedBrand}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={clsx("transition-transform duration-200", {"rotate-180": isOpen})}
            >
              <ChevronDown size={32} />
            </div>
          </div>
          {isOpen && (
            <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-xl z-10">
              <ul>
                {brands.map((brand) => (
                  <li
                    key={brand}
                    className={clsx(
                      "px-4 py-3 hover:bg-gray-100 cursor-pointer text-lg",
                      { "font-bold bg-gray-100": brand === selectedBrand }
                    )}
                    onClick={() => handleSelectBrand(brand)}
                  >
                    {brand}
                  </li>
                ))}
              </ul>
            </div>
          )}
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
