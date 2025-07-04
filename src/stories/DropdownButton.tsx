import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button, ButtonProps } from './Button';

type DropdownButtonProps = {
  items: string[];
  buttonVariant?: ButtonProps['variant'];
  className?: string;
};

export function DropdownButton({ items, buttonVariant = 'dark', className = '' }: DropdownButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(items[0] || 'Select');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Determine styling mode based on button variant
  const isLightMode = buttonVariant === 'default' || buttonVariant === 'selected' || buttonVariant === 'rectangular';
  const isDarkMode = buttonVariant === 'dark' || buttonVariant?.includes('dark');

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

  return (
    <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
      <Button
        variant={buttonVariant}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full"
      >
        <span>{selectedItem}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
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
            className={`origin-top-right absolute left-0 mt-2 w-full min-w-56 rounded-md shadow-lg ring-1 ring-opacity-5 z-10 ${
              isDarkMode 
                ? 'bg-gray-800 ring-gray-700' 
                : 'bg-white ring-black'
            }`}
          >
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              {items.map((item) => (
                <a
                  href="#"
                  key={item}
                  onClick={() => handleSelect(item)}
                  className={`block px-4 py-2 text-[14px] leading-[1.25] ${
                    isDarkMode 
                      ? 'text-white hover:bg-gray-700' 
                      : 'text-black hover:bg-gray-100'
                  }`}
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