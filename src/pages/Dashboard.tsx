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

// Master templates for variation
const masterTemplates = [
  {
    postBody: "Just got my beauty box and I'm so excited to try the products! ✨ #BeautyBox",
    comment: 'This makeup look is everything, I need to recreate it ASAP!',
    aiResponse: "Hey fabulous! ✨ We're so grateful for your support! It inspires us every day! What's your favorite way to use our products?",
    editedResponse: "Hey fabulous! ✨ We're so grateful for your support! It inspires us every day! What's your favorite way to use our products?",
  },
  {
    postBody: 'Excited to pamper myself with BlissfulBubbles bath bombs! 🛁 #PamperTime',
    comment: 'This makeup look is everything, I need to recreate it ASAP!',
    aiResponse: "Hey fabulous! ✨ We're so grateful for your support! It inspires us every day! What's your favorite way to use our products?",
    editedResponse: "Hey fabulous! ✨ We're so grateful for your support! It inspires us every day! What's your favorite way to use our products?",
  },
  {
    postBody: "Thrilled to start my self-care journey with RadiantSkin's new line! 🌟 #SelfCare",
    comment: 'This makeup look is everything, I need to recreate it ASAP!',
    aiResponse: "Hi beautiful! 💕 We appreciate your love for our brand! Your feedback means the world to us! What's your go-to beauty tip?",
    editedResponse: "Hi beautiful! 💕 We appreciate your love for our brand! Your feedback means the world to us! What's your go-to beauty tip?",
  },
  {
    postBody: 'New video up on my channel! Trying out the latest foundation. 🎥',
    comment: 'OMG, your skin looks flawless!',
    aiResponse: "You're too kind! So glad you enjoyed the video. Let us know how you like the foundation!",
    editedResponse: "You're too kind! So glad you enjoyed the video. Let us know how you like the foundation!",
  },
  {
    postBody: 'Feeling confident in my new lipstick shade! 💄',
    comment: 'That color is stunning on you!',
    aiResponse: 'We love to see it! That shade was made for you. 🔥',
    editedResponse: 'We love to see it! That shade was made for you. 🔥',
  },
  {
    postBody: 'My morning routine just got an upgrade with this serum.',
    comment: 'I need to know more about this!',
    aiResponse: "It's a game-changer, right? So glad you're loving it!",
    editedResponse: "It's a game-changer, right? So glad you're loving it!",
  },
  {
    postBody: 'Loving the new packaging on these products!',
    comment: 'So chic and sustainable!',
    aiResponse: 'Thank you for noticing! We put a lot of thought into our new designs.',
    editedResponse: 'Thank you for noticing! We put a lot of thought into our new designs.',
  },
  {
    postBody: 'This eyeshadow palette has so many amazing colors.',
    comment: 'The pigment is incredible!',
    aiResponse: 'We agree! The color payoff is one of our favorite things about it.',
    editedResponse: 'We agree! The color payoff is one of our favorite things about it.',
  },
  {
    postBody: 'My skin has never felt so soft. Thank you!',
    comment: 'I can vouch for this! Best moisturizer ever.',
    aiResponse: 'That makes us so happy to hear! Soft skin for the win!',
    editedResponse: 'That makes us so happy to hear! Soft skin for the win!',
  },
  {
    postBody: 'The perfect scent for a cozy night in. 🕯️',
    comment: 'My whole apartment smells amazing now.',
    aiResponse: 'Enjoy the cozy vibes! Nothing beats a good candle.',
    editedResponse: 'Enjoy the cozy vibes! Nothing beats a good candle.',
  },
];

// Brand and platform configuration
const brands = ["e.l.f. Skin", "e.l.f. Cosmetics", "Well People", "Keys Soul Care", "Naturium", "Rhode"];
const platforms = ["Instagram", "TikTok", "Facebook", "YouTube", "Twitter", "LinkedIn", "Pinterest", "Snapchat", "Reddit", "Twitch"];
const contentTypes = ["Comments", "Ads", "All Posts", "Earned Media", "Statistics"];

// Simple variation function
const getVariedPost = (brand: string, platform: string, contentType: string, templateIndex: number) => {
  const template = masterTemplates[templateIndex];
  
  // Brand-specific variations
  const brandVariations: { [key: string]: any } = {
    "e.l.f. Cosmetics": {
      postBody: template.postBody.replace("BlissfulBubbles", "e.l.f.").replace("RadiantSkin", "e.l.f."),
      comment: template.comment.replace("makeup look", "e.l.f. look"),
      aiResponse: template.aiResponse.replace("We're", "We at e.l.f. are"),
    },
    "e.l.f. Skin": {
      postBody: template.postBody.replace("BlissfulBubbles", "e.l.f. Skin").replace("RadiantSkin", "e.l.f. Skin"),
      comment: template.comment.replace("makeup look", "skincare routine"),
      aiResponse: template.aiResponse.replace("We're", "We at e.l.f. Skin are"),
    },
    "Well People": {
      postBody: template.postBody.replace("BlissfulBubbles", "Well People").replace("RadiantSkin", "Well People"),
      comment: template.comment.replace("makeup look", "clean beauty look"),
      aiResponse: template.aiResponse.replace("We're", "We at Well People are"),
    },
    "Keys Soul Care": {
      postBody: template.postBody.replace("BlissfulBubbles", "Keys Soul Care").replace("RadiantSkin", "Keys Soul Care"),
      comment: template.comment.replace("makeup look", "self-care routine"),
      aiResponse: template.aiResponse.replace("We're", "We at Keys Soul Care are"),
    },
    "Naturium": {
      postBody: template.postBody.replace("BlissfulBubbles", "Naturium").replace("RadiantSkin", "Naturium"),
      comment: template.comment.replace("makeup look", "science-backed routine"),
      aiResponse: template.aiResponse.replace("We're", "We at Naturium are"),
    },
    "Rhode": {
      postBody: template.postBody.replace("BlissfulBubbles", "Rhode").replace("RadiantSkin", "Rhode"),
      comment: template.comment.replace("makeup look", "glowing skin look"),
      aiResponse: template.aiResponse.replace("We're", "We at Rhode are"),
    },
  };

  const variation = brandVariations[brand] || template;
  return {
    ...template,
    ...variation,
    editedResponse: variation.aiResponse || template.editedResponse,
  };
};

// Generate dynamic data
const generateMockData = (brand: string = "e.l.f. Cosmetics", platform: string = "Instagram", contentType: string = "Comments") => {
  return Array.from({ length: 200 }, (_, i) => {
    const templateIndex = i % 10;
    const variedPost = getVariedPost(brand, platform, contentType, templateIndex);
    
    return {
      id: `${i + 1}`,
      postImage: getCosmeticsImage(`${brand}-${platform}-${i + 1}`),
      ...variedPost,
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
        />
        <Container size="full" padding="tight" className="mt-8 pt-4">
          <FilterBar 
            selectedContentType={selectedContentType}
            onContentTypeChange={setSelectedContentType}
          />
        </Container>
        <div className="mt-8">
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