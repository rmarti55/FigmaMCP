import React, { useState, useRef, useEffect } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const buttonVariants = cva(
  'inline-flex items-center justify-center text-sm font-normal transition-colors border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap truncate',
  {
    variants: {
      variant: {
        default: 'bg-white hover:bg-neutral-100 text-black border-[#c3c5d0] rounded-[35px]',
        selected: 'bg-[#dce0f4] text-black hover:bg-indigo-200 border-[#dce0f4] rounded-[35px]',
        dark: 'bg-gray-800 hover:bg-gray-700 text-white border-gray-700 rounded-[35px]',
        rectangular: 'h-10 justify-start bg-white hover:bg-neutral-100 text-black border-[#c3c5d0] rounded-none pl-3 pr-2 py-2 text-[14px] leading-[1.25]',
      },
      size: {
        default: 'h-8 px-5 py-[7px] text-[14px]',
        sm: 'h-7 px-3',
        lg: 'h-9 px-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

type DropdownConfig = {
  items: string[];
  onSelect?: (item: string) => void;
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /**
   * Icon to display alongside the button text
   */
  icon?: React.ReactNode;
  /**
   * Position of the icon relative to text
   */
  iconPosition?: 'left' | 'right';
  /**
   * Dropdown configuration - when provided, button becomes a dropdown
   */
  dropdown?: DropdownConfig;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, icon, iconPosition = 'left', dropdown, children, onClick, ...props }, ref) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(dropdown?.items[0] || '');
    const dropdownRef = useRef<HTMLDivElement>(null);
    
    const finalSize = variant === 'rectangular' ? null : size;
    const isDarkMode = variant === 'dark';
    const isDropdown = !!dropdown;

    useEffect(() => {
      if (dropdown) {
        setSelectedItem(dropdown.items[0] || '');
      }
    }, [dropdown]);

    useEffect(() => {
      if (!isDropdown) return;
      
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsDropdownOpen(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isDropdown]);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (isDropdown) {
        setIsDropdownOpen(!isDropdownOpen);
      } else {
        onClick?.(e);
      }
    };

    const handleDropdownSelect = (item: string) => {
      setSelectedItem(item);
      setIsDropdownOpen(false);
      dropdown?.onSelect?.(item);
    };

    const renderIcon = (iconElement: React.ReactNode) => (
      <span className={clsx(
        'flex-shrink-0',
        iconPosition === 'left' ? 'mr-2' : 'ml-2'
      )}>
        {React.cloneElement(iconElement as React.ReactElement, {
          className: clsx('h-4 w-4', (iconElement as React.ReactElement).props?.className),
        })}
      </span>
    );

    const buttonContent = (
      <>
        {icon && iconPosition === 'left' && renderIcon(icon)}
        <span>{isDropdown ? selectedItem : children}</span>
        {icon && iconPosition === 'right' && renderIcon(icon)}
        {isDropdown && (
          <motion.span
            animate={{ rotate: isDropdownOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="ml-2 flex-shrink-0"
          >
            <ChevronDown className="h-4 w-4" />
          </motion.span>
        )}
      </>
    );

    if (isDropdown) {
      return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
          <button
            className={clsx(
              buttonVariants({ variant, size: finalSize, className }),
              'flex items-center justify-between w-full'
            )}
            onClick={handleClick}
            ref={ref}
            {...props}
          >
            {buttonContent}
          </button>

          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className={clsx(
                  'origin-top-right absolute left-0 mt-2 w-full min-w-56 rounded-md shadow-lg ring-1 ring-opacity-5 z-10',
                  isDarkMode ? 'bg-gray-800 ring-gray-700' : 'bg-white ring-black'
                )}
              >
                <div className="py-1" role="menu" aria-orientation="vertical">
                  {dropdown.items.map((item) => (
                    <button
                      key={item}
                      onClick={() => handleDropdownSelect(item)}
                      className={clsx(
                        'block w-full text-left px-4 py-2 text-[14px] leading-[1.25]',
                        isDarkMode 
                          ? 'text-white hover:bg-gray-700' 
                          : 'text-black hover:bg-gray-100'
                      )}
                      role="menuitem"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    }

    return (
      <button
        className={clsx(
          buttonVariants({ variant, size: finalSize, className }),
        )}
        onClick={handleClick}
        ref={ref}
        {...props}
      >
        {buttonContent}
      </button>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants }; 