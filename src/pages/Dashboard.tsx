import React from 'react';
import { ResponseTable } from '@/stories/ResponseTable';
import { TableRowData } from '@/stories/TableRow';
import Pagination from '@/stories/Pagination';
import PrimaryHeader from '@/stories/PrimaryHeader';
import { FilterBar } from '@/stories/FilterBar';
import { Container } from '@/components/Layout/Container';

// Generate cosmetics-themed social media post images
const getCosmeticsImage = (id: string) => {
  // Use Picsum Photos with seed for consistent images per ID
  return `https://picsum.photos/seed/${id}/40/40`;
};

const mockHeaders: string[] = [
  'Post Image',
  'Post Body',
  'Comment',
  'AI Response',
  'Edited/Posted Response',
];

const mockRows: TableRowData[] = [
  {
    id: '1',
    postImage: getCosmeticsImage('1'),
    postBody: "Just got my beauty box and I'm so excited to try the products! ✨ #BeautyBox",
    comment: 'This makeup look is everything, I need to recreate it ASAP!',
    aiResponse:
      "Hey fabulous! ✨ We're so grateful for your support! It inspires us every day! What's your favorite way to use our products?",
    editedResponse:
      "Hey fabulous! ✨ We're so grateful for your support! It inspires us every day! What's your favorite way to use our products?",
  },
  {
    id: '2',
    postImage: getCosmeticsImage('2'),
    postBody: 'Excited to pamper myself with BlissfulBubbles bath bombs! 🛁 #PamperTime',
    comment: 'This makeup look is everything, I need to recreate it ASAP!',
    aiResponse:
      "Hey fabulous! ✨ We're so grateful for your support! It inspires us every day! What's your favorite way to use our products?",
    editedResponse:
      "Hey fabulous! ✨ We're so grateful for your support! It inspires us every day! What's your favorite way to use our products?",
  },
  {
    id: '3',
    postImage: getCosmeticsImage('3'),
    postBody: "Thrilled to start my self-care journey with RadiantSkin's new line! 🌟 #SelfCare",
    comment: 'This makeup look is everything, I need to recreate it ASAP!',
    aiResponse: "Hi beautiful! 💕 We appreciate your love for our brand! Your feedback means the world to us! What's your go-to beauty tip?",
    editedResponse: "Hi beautiful! 💕 We appreciate your love for our brand! Your feedback means the world to us! What's your go-to beauty tip?",
  },
  {
    id: '4',
    postImage: getCosmeticsImage('4'),
    postBody: 'New video up on my channel! Trying out the latest foundation. 🎥',
    comment: 'OMG, your skin looks flawless!',
    aiResponse: "You're too kind! So glad you enjoyed the video. Let us know how you like the foundation!",
    editedResponse: "You're too kind! So glad you enjoyed the video. Let us know how you like the foundation!",
  },
  {
    id: '5',
    postImage: getCosmeticsImage('5'),
    postBody: 'Feeling confident in my new lipstick shade! 💄',
    comment: 'That color is stunning on you!',
    aiResponse: 'We love to see it! That shade was made for you. 🔥',
    editedResponse: 'We love to see it! That shade was made for you. 🔥',
  },
  {
    id: '6',
    postImage: getCosmeticsImage('6'),
    postBody: 'My morning routine just got an upgrade with this serum.',
    comment: 'I need to know more about this!',
    aiResponse: "It's a game-changer, right? So glad you're loving it!",
    editedResponse: "It's a game-changer, right? So glad you're loving it!",
  },
  {
    id: '7',
    postImage: getCosmeticsImage('7'),
    postBody: 'Loving the new packaging on these products!',
    comment: 'So chic and sustainable!',
    aiResponse: 'Thank you for noticing! We put a lot of thought into our new designs.',
    editedResponse: 'Thank you for noticing! We put a lot of thought into our new designs.',
  },
  {
    id: '8',
    postImage: getCosmeticsImage('8'),
    postBody: 'This eyeshadow palette has so many amazing colors.',
    comment: 'The pigment is incredible!',
    aiResponse: 'We agree! The color payoff is one of our favorite things about it.',
    editedResponse: 'We agree! The color payoff is one of our favorite things about it.',
  },
  {
    id: '9',
    postImage: getCosmeticsImage('9'),
    postBody: 'My skin has never felt so soft. Thank you!',
    comment: 'I can vouch for this! Best moisturizer ever.',
    aiResponse: 'That makes us so happy to hear! Soft skin for the win!',
    editedResponse: 'That makes us so happy to hear! Soft skin for the win!',
  },
  {
    id: '10',
    postImage: getCosmeticsImage('10'),
    postBody: 'The perfect scent for a cozy night in. 🕯️',
    comment: 'My whole apartment smells amazing now.',
    aiResponse: 'Enjoy the cozy vibes! Nothing beats a good candle.',
    editedResponse: 'Enjoy the cozy vibes! Nothing beats a good candle.',
  },
  {
    id: '11',
    postImage: getCosmeticsImage('11'),
    postBody: "Just got my beauty box and I'm so excited to try the products! ✨ #BeautyBox",
    comment: 'This makeup look is everything, I need to recreate it ASAP!',
    aiResponse:
      "Hey fabulous! ✨ We're so grateful for your support! It inspires us every day! What's your favorite way to use our products?",
    editedResponse:
      "Hey fabulous! ✨ We're so grateful for your support! It inspires us every day! What's your favorite way to use our products?",
  },
  {
    id: '12',
    postImage: getCosmeticsImage('12'),
    postBody: 'Excited to pamper myself with BlissfulBubbles bath bombs! 🛁 #PamperTime',
    comment: 'This makeup look is everything, I need to recreate it ASAP!',
    aiResponse:
      "Hey fabulous! ✨ We're so grateful for your support! It inspires us every day! What's your favorite way to use our products?",
    editedResponse:
      "Hey fabulous! ✨ We're so grateful for your support! It inspires us every day! What's your favorite way to use our products?",
  },
  {
    id: '13',
    postImage: getCosmeticsImage('13'),
    postBody: "Thrilled to start my self-care journey with RadiantSkin's new line! 🌟 #SelfCare",
    comment: 'This makeup look is everything, I need to recreate it ASAP!',
    aiResponse: "Hi beautiful! 💕 We appreciate your love for our brand! Your feedback means the world to us! What's your go-to beauty tip?",
    editedResponse: "Hi beautiful! 💕 We appreciate your love for our brand! Your feedback means the world to us! What's your go-to beauty tip?",
  },
  {
    id: '14',
    postImage: getCosmeticsImage('14'),
    postBody: 'New video up on my channel! Trying out the latest foundation. 🎥',
    comment: 'OMG, your skin looks flawless!',
    aiResponse: "You're too kind! So glad you enjoyed the video. Let us know how you like the foundation!",
    editedResponse: "You're too kind! So glad you enjoyed the video. Let us know how you like the foundation!",
  },
  {
    id: '15',
    postImage: getCosmeticsImage('15'),
    postBody: 'Feeling confident in my new lipstick shade! 💄',
    comment: 'That color is stunning on you!',
    aiResponse: 'We love to see it! That shade was made for you. 🔥',
    editedResponse: 'We love to see it! That shade was made for you. 🔥',
  },
  {
    id: '16',
    postImage: getCosmeticsImage('16'),
    postBody: 'My morning routine just got an upgrade with this serum.',
    comment: 'I need to know more about this!',
    aiResponse: "It's a game-changer, right? So glad you're loving it!",
    editedResponse: "It's a game-changer, right? So glad you're loving it!",
  },
  {
    id: '17',
    postImage: getCosmeticsImage('17'),
    postBody: 'Loving the new packaging on these products!',
    comment: 'So chic and sustainable!',
    aiResponse: 'Thank you for noticing! We put a lot of thought into our new designs.',
    editedResponse: 'Thank you for noticing! We put a lot of thought into our new designs.',
  },
  {
    id: '18',
    postImage: getCosmeticsImage('18'),
    postBody: 'This eyeshadow palette has so many amazing colors.',
    comment: 'The pigment is incredible!',
    aiResponse: 'We agree! The color payoff is one of our favorite things about it.',
    editedResponse: 'We agree! The color payoff is one of our favorite things about it.',
  },
  {
    id: '19',
    postImage: getCosmeticsImage('19'),
    postBody: 'My skin has never felt so soft. Thank you!',
    comment: 'I can vouch for this! Best moisturizer ever.',
    aiResponse: 'That makes us so happy to hear! Soft skin for the win!',
    editedResponse: 'That makes us so happy to hear! Soft skin for the win!',
  },
  {
    id: '20',
    postImage: getCosmeticsImage('20'),
    postBody: 'The perfect scent for a cozy night in. 🕯️',
    comment: 'My whole apartment smells amazing now.',
    aiResponse: 'Enjoy the cozy vibes! Nothing beats a good candle.',
    editedResponse: 'Enjoy the cozy vibes! Nothing beats a good candle.',
  },
  {
    id: '21',
    postImage: getCosmeticsImage('21'),
    postBody: "Just got my beauty box and I'm so excited to try the products! ✨ #BeautyBox",
    comment: 'This makeup look is everything, I need to recreate it ASAP!',
    aiResponse:
      "Hey fabulous! ✨ We're so grateful for your support! It inspires us every day! What's your favorite way to use our products?",
    editedResponse:
      "Hey fabulous! ✨ We're so grateful for your support! It inspires us every day! What's your favorite way to use our products?",
  },
  {
    id: '22',
    postImage: getCosmeticsImage('22'),
    postBody: 'Excited to pamper myself with BlissfulBubbles bath bombs! 🛁 #PamperTime',
    comment: 'This makeup look is everything, I need to recreate it ASAP!',
    aiResponse:
      "Hey fabulous! ✨ We're so grateful for your support! It inspires us every day! What's your favorite way to use our products?",
    editedResponse:
      "Hey fabulous! ✨ We're so grateful for your support! It inspires us every day! What's your favorite way to use our products?",
  },
  {
    id: '23',
    postImage: getCosmeticsImage('23'),
    postBody: "Thrilled to start my self-care journey with RadiantSkin's new line! 🌟 #SelfCare",
    comment: 'This makeup look is everything, I need to recreate it ASAP!',
    aiResponse: "Hi beautiful! 💕 We appreciate your love for our brand! Your feedback means the world to us! What's your go-to beauty tip?",
    editedResponse: "Hi beautiful! 💕 We appreciate your love for our brand! Your feedback means the world to us! What's your go-to beauty tip?",
  },
  {
    id: '24',
    postImage: getCosmeticsImage('24'),
    postBody: 'New video up on my channel! Trying out the latest foundation. 🎥',
    comment: 'OMG, your skin looks flawless!',
    aiResponse: "You're too kind! So glad you enjoyed the video. Let us know how you like the foundation!",
    editedResponse: "You're too kind! So glad you enjoyed the video. Let us know how you like the foundation!",
  },
  {
    id: '25',
    postImage: getCosmeticsImage('25'),
    postBody: 'Feeling confident in my new lipstick shade! 💄',
    comment: 'That color is stunning on you!',
    aiResponse: 'We love to see it! That shade was made for you. 🔥',
    editedResponse: 'We love to see it! That shade was made for you. 🔥',
  },
  {
    id: '26',
    postImage: getCosmeticsImage('26'),
    postBody: 'My morning routine just got an upgrade with this serum.',
    comment: 'I need to know more about this!',
    aiResponse: "It's a game-changer, right? So glad you're loving it!",
    editedResponse: "It's a game-changer, right? So glad you're loving it!",
  },
  {
    id: '27',
    postImage: getCosmeticsImage('27'),
    postBody: 'Loving the new packaging on these products!',
    comment: 'So chic and sustainable!',
    aiResponse: 'Thank you for noticing! We put a lot of thought into our new designs.',
    editedResponse: 'Thank you for noticing! We put a lot of thought into our new designs.',
  },
  {
    id: '28',
    postImage: getCosmeticsImage('28'),
    postBody: 'This eyeshadow palette has so many amazing colors.',
    comment: 'The pigment is incredible!',
    aiResponse: 'We agree! The color payoff is one of our favorite things about it.',
    editedResponse: 'We agree! The color payoff is one of our favorite things about it.',
  },
  {
    id: '29',
    postImage: getCosmeticsImage('29'),
    postBody: 'My skin has never felt so soft. Thank you!',
    comment: 'I can vouch for this! Best moisturizer ever.',
    aiResponse: 'That makes us so happy to hear! Soft skin for the win!',
    editedResponse: 'That makes us so happy to hear! Soft skin for the win!',
  },
  {
    id: '30',
    postImage: getCosmeticsImage('30'),
    postBody: 'The perfect scent for a cozy night in. 🕯️',
    comment: 'My whole apartment smells amazing now.',
    aiResponse: 'Enjoy the cozy vibes! Nothing beats a good candle.',
    editedResponse: 'Enjoy the cozy vibes! Nothing beats a good candle.',
  },
].concat(
  Array.from({ length: 170 }, (_, i) => ({
    id: `${i + 31}`,
    postImage: getCosmeticsImage(`${i + 31}`),
    postBody: `This is post body number ${i + 31}. #Example`,
    comment: `This is a comment for post ${i + 31}.`,
    aiResponse: `This is the AI response for post ${i + 31}.`,
    editedResponse: `This is the edited response for post ${i + 31}.`,
  }))
);

const Dashboard = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage, setItemsPerPage] = React.useState(10);

  const totalItems = mockRows.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (items: number) => {
    setItemsPerPage(items);
    setCurrentPage(1);
  };

  const paginatedRows = mockRows.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      <div className="pt-8 pb-24">
        <PrimaryHeader />
        <Container size="full" padding="tight" className="mt-8 pt-4">
          <FilterBar />
        </Container>
        <div className="mt-8">
          <ResponseTable headers={mockHeaders} rows={paginatedRows} />
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
    </div>
  );
};

export default Dashboard; 