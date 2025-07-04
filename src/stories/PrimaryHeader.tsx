import React, { useState, useEffect, useRef } from 'react';
import clsx from "clsx";
import { ChevronDown } from 'lucide-react';
import BackgroundImageAndText from '@/components/BackgroundImageAndText';
import { FilterButtonGroup } from './FilterButtonGroup';

type PrimaryHeaderProps = {
  initialOpen?: boolean;
  selectedBrand?: string;
  onBrandChange?: (brand: string) => void;
  selectedPlatform?: string;
  onPlatformChange?: (platform: string) => void;
}

export default function PrimaryHeader({ 
  initialOpen = false, 
  selectedBrand = "e.l.f. Cosmetics",
  onBrandChange,
  selectedPlatform = "Instagram",
  onPlatformChange
}: PrimaryHeaderProps) {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const brands = ["e.l.f. Skin", "e.l.f. Cosmetics", "Well People", "Keys Soul Care", "Naturium", "Rhode"];
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
    onBrandChange?.(brand);
    setIsOpen(false);
  }

  return (
    <div className="flex flex-row items-center justify-between w-full fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-200 px-6 py-4">
      {/* Left Side: Brand Selector and Filter Buttons */}
      <div className="flex flex-row items-center gap-8">
        <div
          className="relative"
          data-name="Platform Dropdown"
          ref={dropdownRef}
        >
          <div
            className="flex flex-row gap-2 items-center cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="font-sans text-3xl text-black tracking-[-0.64px] whitespace-nowrap">
              {selectedBrand}
            </div>
            <div className={clsx("transition-transform duration-200", {"rotate-180": isOpen})}>
              <ChevronDown size={32} />
            </div>
          </div>
          {isOpen && (
            <div className="absolute top-full left-0 mt-2 w-auto bg-white border border-gray-200 rounded-lg shadow-xl z-10">
              <ul>
                {brands.map((brand) => (
                  <li
                    key={brand}
                    className={clsx(
                      "px-4 py-3 hover:bg-gray-100 cursor-pointer text-lg whitespace-nowrap",
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
        <FilterButtonGroup />
      </div>

      {/* Right Side: Nav Links */}
      <div className="flex flex-row font-sans gap-10 items-center text-black text-sm tracking-[0.84px] uppercase">
        <BackgroundImageAndText text="Home" />
        <BackgroundImageAndText text="BFe.l.f" />
        <BackgroundImageAndText text="Ramon" />
        <BackgroundImageAndText text="Logout" />
      </div>
    </div>
  );
} 