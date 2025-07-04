import React from 'react';
import { ResponseTable } from '@/stories/ResponseTable';
import { TableRowData } from '@/stories/TableRow';
import Pagination from '@/stories/Pagination';
import PrimaryHeader from '@/stories/PrimaryHeader';
import { FilterBar } from '@/stories/FilterBar';
import { Container } from '@/components/Layout/Container';
import { CommentModal, type CommentData, type AIResponseData } from '@/stories/CommentModal';

// Generate cosmetics-themed social media post images
const getCosmeticsImage = (id: string) => {
  // Use Picsum Photos with seed for consistent images per ID
  return `https://picsum.photos/seed/${id}/40/40`;
};

// Transform TableRowData to CommentModal data
const transformRowDataToModalData = (rowData: TableRowData) => {
  // Generate a higher resolution image for the modal (600x800 for 3:4 aspect ratio)
  const modalImage = `https://picsum.photos/seed/${rowData.id}/600/800`;
  
  // Extract username from comment or generate one
  const generateUsername = (id: string) => {
    const usernames = [
      'maddie.ratcliff', 'guss.gussssspam', 'beauty.lover', 'skincare.enthusiast',
      'makeup.maven', 'glam.goddess', 'beauty.addict', 'cosmetics.queen'
    ];
    const index = parseInt(id) % usernames.length;
    return usernames[index];
  };

  // Generate timestamp
  const generateTimestamp = (id: string) => {
    const dates = [
      '22:34:20 June 18, 2025 PST',
      '14:55:37 June 18, 2025 PST', 
      '16:20:15 June 18, 2025 PST',
      '18:45:30 June 18, 2025 PST'
    ];
    const index = parseInt(id) % dates.length;
    return dates[index];
  };

  // Generate sentiment based on comment content
  const generateSentiment = (comment: string): 'positive' | 'negative' | 'neutral' => {
    const lowerComment = comment.toLowerCase();
    if (lowerComment.includes('love') || lowerComment.includes('amazing') || lowerComment.includes('great')) {
      return 'positive';
    }
    if (lowerComment.includes('miss') || lowerComment.includes('hate') || lowerComment.includes('bad')) {
      return 'negative';
    }
    return 'neutral';
  };

  const comments: CommentData[] = [
    {
      id: `comment-${rowData.id}`,
      profileName: generateUsername(rowData.id),
      sentiment: generateSentiment(rowData.comment),
      commentText: rowData.comment,
      timestamp: generateTimestamp(rowData.id),
    }
  ];

  const aiResponses: AIResponseData[] = [
    {
      id: `ai-${rowData.id}`,
      profileName: 'e.l.f. Cosmetics and Skincare',
      bodyText: rowData.aiResponse,
    }
  ];

  return {
    postImage: modalImage,
    postImageAlt: `Social media post ${rowData.id}`,
    postBodyText: rowData.postBody,
    comments,
    aiResponses,
  };
};

const mockHeaders: string[] = [
  'Post Image',
  'Post Body',
  'Comment',
  'AI Response',
  'Edited/Posted Response',
];

// Simple brand+platform post mapping
const postData: { [key: string]: { postA: any, postB: any } } = {
  "e.l.f. Cosmetics-Instagram": {
    postA: {
      postBody: "Just tried the new e.l.f. foundation and I'm obsessed! 💄✨",
      comment: "This looks amazing on you! What shade is this?",
      aiResponse: "Thanks babe! We're so glad you love it! 💕",
      editedResponse: "Thanks babe! We're so glad you love it! 💕",
    },
    postB: {
      postBody: "My e.l.f. skincare routine is giving me such a glow! ✨",
      comment: "Your skin is literally glowing! Need this routine ASAP",
      aiResponse: "You're too sweet! DM us for the full routine! 🌟",
      editedResponse: "You're too sweet! DM us for the full routine! 🌟",
    }
  },
  "Rhode-TikTok": {
    postA: {
      postBody: "Rhode peptide lip treatment is my new holy grail 👄",
      comment: "I need to try this! Where can I get it?",
      aiResponse: "Available on our website! You'll love it! 💋",
      editedResponse: "Available on our website! You'll love it! 💋",
    },
    postB: {
      postBody: "That Rhode glow is real! Barrier restore cream is everything ✨",
      comment: "Been using this for a week and my skin is so soft!",
      aiResponse: "Love hearing this! Glowing skin is the goal! 🌟",
      editedResponse: "Love hearing this! Glowing skin is the goal! 🌟",
    }
  },
  "Well People-Instagram": {
    postA: {
      postBody: "Clean beauty that actually works! Well People foundation is perfect 🌿",
      comment: "Finally a clean foundation with good coverage!",
      aiResponse: "Clean beauty for the win! Thanks for the love! 💚",
      editedResponse: "Clean beauty for the win! Thanks for the love! 💚",
    },
    postB: {
      postBody: "Well People mascara gives me the lashes I've always wanted 👁️",
      comment: "Your lashes look incredible! Is this just mascara?",
      aiResponse: "Just our mascara! Clean ingredients, amazing results! 🌱",
      editedResponse: "Just our mascara! Clean ingredients, amazing results! 🌱",
    }
  },
  // Default fallback
  "default": {
    postA: {
      postBody: "Loving these new products! 💄",
      comment: "This looks great!",
      aiResponse: "Thank you so much! 💕",
      editedResponse: "Thank you so much! 💕",
    },
    postB: {
      postBody: "My skin routine is on point! ✨",
      comment: "Your skin is glowing!",
      aiResponse: "You're too kind! 🌟",
      editedResponse: "You're too kind! 🌟",
    }
  }
};

// Brand and platform configuration
const brands = ["e.l.f. Skin", "e.l.f. Cosmetics", "Well People", "Keys Soul Care", "Naturium", "Rhode"];
const platforms = ["Instagram", "TikTok", "Facebook", "YouTube", "Twitter", "LinkedIn", "Pinterest", "Snapchat", "Reddit", "Twitch"];
const contentTypes = ["Comments", "Ads", "All Posts", "Earned Media", "Statistics"];

// Simple data generation
const generateMockData = (brand: string = "e.l.f. Cosmetics", platform: string = "Instagram", contentType: string = "Comments") => {
  const key = `${brand}-${platform}`;
  const posts = postData[key] || postData["default"];
  
  return Array.from({ length: 200 }, (_, i) => {
    const post = (i % 2 === 0) ? posts.postA : posts.postB;
    
    return {
      id: `${i + 1}`,
      postImage: getCosmeticsImage(`${brand}-${platform}-${i + 1}`),
      ...post,
    };
  });
};

const Dashboard = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage, setItemsPerPage] = React.useState(10);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedRowData, setSelectedRowData] = React.useState<TableRowData | null>(null);
  const [selectedBrand, setSelectedBrand] = React.useState("e.l.f. Cosmetics");
  const [selectedPlatform, setSelectedPlatform] = React.useState("Instagram");
  const [selectedContentType, setSelectedContentType] = React.useState("Comments");
  const [darkMode, setDarkMode] = React.useState(true); // Enable dark mode by default

  // Generate data based on current selections
  const mockRows: TableRowData[] = React.useMemo(() => {
    return generateMockData(selectedBrand, selectedPlatform, selectedContentType);
  }, [selectedBrand, selectedPlatform, selectedContentType]);

  const totalItems = mockRows.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (items: number) => {
    setItemsPerPage(items);
    setCurrentPage(1);
  };

  const handleRowClick = (rowData: TableRowData) => {
    setSelectedRowData(rowData);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedRowData(null);
  };

  const paginatedRows = mockRows.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Transform selected row data for modal
  const modalData = selectedRowData ? transformRowDataToModalData(selectedRowData) : null;

  return (
    <div>
      <div className="pt-8 pb-24">
        <PrimaryHeader 
          selectedBrand={selectedBrand}
          onBrandChange={setSelectedBrand}
          selectedPlatform={selectedPlatform}
          onPlatformChange={setSelectedPlatform}
          darkMode={darkMode}
        />
        <div className="fixed top-[72px] left-0 right-0 bg-white border-b border-gray-200 z-40">
          <Container size="full" padding="tight" className="py-4">
            <FilterBar />
          </Container>
        </div>
        <div className="mt-[140px]">
          <ResponseTable headers={mockHeaders} rows={paginatedRows} onRowClick={handleRowClick} />
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t border-gray-200 flex justify-center z-50">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          itemsPerPage={itemsPerPage}
          onItemsPerPageChange={handleItemsPerPageChange}
          totalItems={totalItems}
        />
      </div>
      
      {/* Comment Modal */}
      {modalData && (
        <CommentModal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          postImage={modalData.postImage}
          postImageAlt={modalData.postImageAlt}
          postBodyText={modalData.postBodyText}
          comments={modalData.comments}
          aiResponses={modalData.aiResponses}
        />
      )}
    </div>
  );
};

export default Dashboard; 