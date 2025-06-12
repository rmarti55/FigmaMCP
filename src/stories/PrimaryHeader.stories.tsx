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
}

export default function PrimaryHeader({ initialOpen = false }: PrimaryHeaderProps) {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const brands = ["e.l.f. Skin", "e.l.f. Cosmetics", "Well People", "Keys Soul Care", "Naturium", "Rhode"];
  const [selectedBrand, setSelectedBrand] = useState(brands[0]);
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
    setSelectedBrand(brand);
    setIsOpen(false);
  }

  return (
    <div className="flex flex-col gap-8 w-full">
      {/* Top Row: Brand Selector and Nav */}
      <div className="flex flex-row justify-between items-center w-full">
        <div
          className="relative"
          data-name="Platform Dropdown"
          ref={dropdownRef}
        >
          <div
            className="flex flex-row gap-2 items-center cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="font-sans text-3xl text-black tracking-[-0.64px]">
              {selectedBrand}
            </div>
            <div className={clsx("transition-transform duration-200", {"rotate-180": isOpen})}>
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
        <div className="flex flex-row font-sans gap-10 items-center text-black text-sm tracking-[0.84px] uppercase">
          <BackgroundImageAndText text="Home" />
          <BackgroundImageAndText text="BFe.l.f" />
          <BackgroundImageAndText text="Ramon" />
          <BackgroundImageAndText text="Logout" />
        </div>
      </div>

      {/* Bottom Row: Filter Buttons and Refresh */}
      <div className="flex flex-row justify-between items-center w-full">
        <FilterButtonGroup />
        <Button variant="default">REFRESH</Button>
      </div>
    </div>
  );
}
`;

const meta: Meta<typeof PrimaryHeader> = {
  title: 'Components/Organisms/PrimaryHeader',
  component: PrimaryHeader,
    parameters: {
        layout: 'fullscreen',
        docs: {
        source: {
            code: source,
        },
        },
    },
};

export default meta;

type Story = StoryObj<typeof PrimaryHeader>;

export const Default: Story = {
  args: {},
}; 