import type { Meta, StoryObj } from '@storybook/react';
import PrimaryHeader from './PrimaryHeader';

const source = `
import React, { useState, useEffect, useRef } from 'react';
import clsx from "clsx";
import { ChevronDown } from 'lucide-react';
import BackgroundImageAndText from '@/components/BackgroundImageAndText';
import { FilterButtonGroup } from './FilterButtonGroup';
import { Button } from './Button';

type PrimaryHeaderProps = {
  initialOpen?: boolean;
  selectedBrand?: string;
  onBrandChange?: (brand: string) => void;
  selectedPlatform?: string;
  onPlatformChange?: (platform: string) => void;
  darkMode?: boolean;
}

export default function PrimaryHeader({ 
  initialOpen = false, 
  selectedBrand = "e.l.f. Cosmetics",
  onBrandChange,
  selectedPlatform = "Instagram",
  onPlatformChange,
  darkMode = false
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
    <div className={clsx(
      "flex flex-row items-center justify-between w-full fixed top-0 left-0 right-0 z-50 border-b px-6 py-4",
      darkMode ? "bg-black border-gray-800" : "bg-white border-gray-200"
    )}>
      {/* Left Side: Brand Selector and Filter Buttons */}
      <div className="flex flex-row items-center gap-8">
        <div
          className="relative w-[320px]"
          data-name="Platform Dropdown"
          ref={dropdownRef}
        >
          <div
            className="flex flex-row gap-2 items-center cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className={clsx(
              "font-sans text-3xl tracking-[-0.64px] whitespace-nowrap truncate flex-1",
              darkMode ? "text-white" : "text-black"
            )}>
              {selectedBrand}
            </div>
            <div className={clsx("transition-transform duration-200 flex-shrink-0", {"rotate-180": isOpen})}>
              <ChevronDown size={32} className={darkMode ? "text-white" : "text-black"} />
            </div>
          </div>
          {isOpen && (
            <div className={clsx(
              "absolute top-full left-0 mt-2 w-full border rounded-lg shadow-xl z-10",
              darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
            )}>
              <ul>
                {brands.map((brand) => (
                  <li
                    key={brand}
                    className={clsx(
                      "px-4 py-3 cursor-pointer text-lg whitespace-nowrap",
                      brand === selectedBrand && (darkMode ? "font-bold bg-gray-700" : "font-bold bg-gray-100"),
                      darkMode ? "hover:bg-gray-700 text-white" : "hover:bg-gray-100 text-black"
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
        <FilterButtonGroup darkMode={darkMode} />
      </div>

      {/* Right Side: Nav Links */}
      <div className="flex flex-row font-sans gap-10 items-center text-sm tracking-[0.84px] uppercase">
        <BackgroundImageAndText text="Home" darkMode={darkMode} />
        <BackgroundImageAndText text="BFe.l.f" darkMode={darkMode} />
        <BackgroundImageAndText text="Ramon" darkMode={darkMode} />
        <BackgroundImageAndText text="Logout" darkMode={darkMode} />
      </div>
    </div>
  );
}
`;

const meta: Meta<typeof PrimaryHeader> = {
  title: 'Design System/Organisms/PrimaryHeader',
  component: PrimaryHeader,
  parameters: {
    layout: 'fullscreen',
    docs: {
      source: {
        code: source,
      },
    },
  },
  argTypes: {
    darkMode: {
      control: 'boolean',
      description: 'Enable dark mode styling',
    },
    selectedBrand: {
      control: { type: 'select' },
      options: ["e.l.f. Skin", "e.l.f. Cosmetics", "Well People", "Keys Soul Care", "Naturium", "Rhode"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof PrimaryHeader>;

export const Default: Story = {
  args: {
    darkMode: false,
  },
};

export const DarkMode: Story = {
  args: {
    darkMode: true,
  },
}; 