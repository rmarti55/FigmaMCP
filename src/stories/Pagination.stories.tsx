import React, { useState, useRef, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Pagination from './Pagination';

const source = `
import React, { useState, useRef, useEffect } from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  itemsPerPage: number;
  onItemsPerPageChange: (items: number) => void;
  totalItems: number;
}

const ArrowIcon = ({ className }: { className?: string }) => (
  <svg
    className={\`block size-full \${className}\`}
    fill="none"
    preserveAspectRatio="none"
    viewBox="0 0 14 11"
  >
    <path
      d="M1 5.42105H13M13 5.42105L8.57895 1M13 5.42105L8.57895 9.8421"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DropdownIcon = () => (
    <svg
      className="block size-full"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 11 7"
    >
      <path
        d="M10.3333 5.66667L5.66667 1L1 5.66667"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
);


const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  itemsPerPage,
  onItemsPerPageChange,
  totalItems,
}) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const itemsPerPageOptions = [10, 20, 50, 100];

    const getPageNumbers = () => {
        const pageNumbers = [];
        const maxPagesToShow = 4;
        const ellipsis = '...';

        if (totalPages <= maxPagesToShow + 2) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            pageNumbers.push(1);
            if (currentPage > 3) {
                pageNumbers.push(ellipsis);
            }

            let startPage = Math.max(2, currentPage - 1);
            let endPage = Math.min(totalPages - 1, currentPage + 1);
            
            if (currentPage <= 3) {
                startPage = 2;
                endPage = startPage + maxPagesToShow - 2;
            } else if (currentPage >= totalPages - 2) {
                endPage = totalPages - 1;
                startPage = endPage - maxPagesToShow + 2;
            }

            for (let i = startPage; i <= endPage; i++) {
                pageNumbers.push(i);
            }
            
            if (currentPage < totalPages - 2) {
                pageNumbers.push(ellipsis);
            }
            pageNumbers.push(totalPages);
        }
        return pageNumbers;
    };

    const pageNumbers = getPageNumbers();

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


  return (
    <div className="flex flex-row gap-8 items-center justify-center p-0 font-sans">
        <div className="flex flex-row gap-4 items-center justify-start">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="backdrop-blur-[20px] backdrop-filter bg-white rounded-[50px] size-8 flex items-center justify-center border border-black disabled:opacity-50"
            >
                <div className="size-4 text-black transform rotate-180">
                    <ArrowIcon />
                </div>
            </button>

            <div className="flex flex-row gap-2 items-center justify-start">
                {pageNumbers.map((page, index) => {
                    if (page === '...') {
                        return (
                            <div key={\`\${page}-\${index}\`} className="h-8 w-6 flex items-center justify-center text-black">
                                ...
                            </div>
                        );
                    }
                    return (
                        <button
                            key={page}
                            onClick={() => onPageChange(page as number)}
                            className={\`h-8 rounded px-3 flex items-center justify-center text-base \${
                                currentPage === page
                                ? 'bg-[#dce0f4] text-black'
                                : 'bg-white text-black border border-[#ebecef]'
                            }\`}
                        >
                            {page}
                        </button>
                    );
                })}
            </div>

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="backdrop-blur-[20px] backdrop-filter bg-white rounded-[50px] size-8 flex items-center justify-center border border-black disabled:opacity-50"
            >
                <div className="size-4 text-black">
                    <ArrowIcon />
                </div>
            </button>
        </div>

        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setDropdownOpen(!isDropdownOpen)}
                className="bg-white rounded-[35px] border border-black flex flex-row items-center justify-center"
            >
                <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center pl-5 pr-3 py-[7px] relative">
                    <div className="flex flex-row gap-2 items-center justify-start">
                        <div className="text-black text-sm text-center whitespace-pre">
                            {itemsPerPage} / page
                        </div>
                        <div className="overflow-clip relative shrink-0 size-4 text-black">
                             <div
                                className="absolute flex h-[4.667px] items-center justify-center translate-x-[-50%] translate-y-[-50%] w-[9.333px]"
                                style={{
                                    top: "calc(50% + 0.66667px)",
                                    left: "calc(50% + 0.00333262px)",
                                }}
                                >
                                <div className={\`flex-none transition-transform duration-200 \${isDropdownOpen ? '' : 'rotate-180'}\`}>
                                    <div
                                    className="h-[4.667px] relative w-[9.333px]"
                                    >
                                        <DropdownIcon />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </button>
            {isDropdownOpen && (
                <div className="absolute bottom-full mb-2 w-full bg-white border border-black rounded-[10px] shadow-lg">
                    <ul>
                        {itemsPerPageOptions.map((option) => (
                            <li
                                key={option}
                                className="px-5 py-2 text-sm text-center cursor-pointer hover:bg-gray-100"
                                onClick={() => {
                                    onItemsPerPageChange(option);
                                    setDropdownOpen(false);
                                }}
                            >
                                {option} / page
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    </div>
  );
};

export default Pagination;
`;

const meta: Meta<typeof Pagination> = {
  title: 'Design System/C-Molecules/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        code: source,
      },
    },
  },
  argTypes: {
    currentPage: { control: 'number' },
    totalPages: { control: 'number' },
    itemsPerPage: { control: 'number' },
    totalItems: { control: 'number' },
    onPageChange: { action: 'onPageChange' },
    onItemsPerPageChange: { action: 'onItemsPerPageChange' },
  },
};

export default meta;

type Story = StoryObj<typeof Pagination>;

const InteractivePagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const totalItems = 4185;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (items: number) => {
    setItemsPerPage(items);
    setCurrentPage(1); // Reset to first page when items per page changes
  };

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={handlePageChange}
      itemsPerPage={itemsPerPage}
      onItemsPerPageChange={handleItemsPerPageChange}
      totalItems={totalItems}
    />
  );
};

export const Default: Story = {
    render: () => <InteractivePagination />,
}; 