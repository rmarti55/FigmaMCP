import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button, ButtonProps } from './Button';

type DropdownButtonProps = {
  items: string[];
  buttonVariant?: ButtonProps['variant'];
};

export function DropdownButton({ items, buttonVariant = 'dark' }: DropdownButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(items[0] || 'Select');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (item: string) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  const isRectangular = buttonVariant === 'rectangular';

  if (isRectangular) {
    return (
      <div className="relative inline-block text-left" ref={dropdownRef}>
        <div 
          className="bg-white relative border border-[#c3c5d0] rounded-[50px] cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex flex-row items-center relative h-full">
            <div className="box-border flex flex-row gap-2 items-center justify-start pl-3 pr-2 py-2 relative w-full">
              <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
                <div className="box-border flex flex-row gap-1.5 items-center justify-start p-0 relative w-full">
                  <div 
                    className="basis-0 flex flex-col grow h-full justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-black text-[14px] text-left"
                    style={{ fontFamily: '"Futura Std", sans-serif', fontWeight: 400, lineHeight: 1.25 }}
                  >
                    <p className="block leading-[1.25]">{selectedItem}</p>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0">
                <div className="box-border flex flex-col gap-2 items-start justify-center p-0 relative">
                  <div className="overflow-clip relative shrink-0 w-6 h-6">
                    <motion.div
                      animate={{ rotate: isOpen ? 0 : 180 }}
                      transition={{ duration: 0.2 }}
                      className="absolute flex h-[7px] items-center justify-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-3.5"
                    >
                      <div className="flex-none rotate-[180deg]">
                        <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 9">
                          <path d="M15 8L8 1L1 8" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10"
            >
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                {items.map((item) => (
                  <a
                    href="#"
                    key={item}
                    onClick={() => handleSelect(item)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <Button
        variant={buttonVariant}
        className="pl-5 pr-3"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedItem}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="ml-2"
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10"
          >
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              {items.map((item) => (
                <a
                  href="#"
                  key={item}
                  onClick={() => handleSelect(item)}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 