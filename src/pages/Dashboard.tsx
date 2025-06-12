import React from 'react';
import Header from '@/components/Header';
import { FilterBar } from '@/stories/FilterBar';
import { FilterButtonGroup } from '@/stories/FilterButtonGroup';
import { ResponseTable } from '@/stories/ResponseTable';
import { TableRowData } from '@/stories/TableRow';

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
    postImage: 'https://via.placeholder.com/40',
    postBody: "Just got my beauty box and I'm so excited to try the products! ✨ #BeautyBox",
    comment: 'This makeup look is everything, I need to recreate it ASAP!',
    aiResponse:
      "Hey fabulous! ✨ We're so grateful for your support! It inspires us every day! What's your favorite way to use our products?",
    editedResponse:
      "Hey fabulous! ✨ We're so grateful for your support! It inspires us every day! What's your favorite way to use our products?",
  },
  {
    id: '2',
    postImage: 'https://via.placeholder.com/40',
    postBody: 'Excited to pamper myself with BlissfulBubbles bath bombs! 🛁 #PamperTime',
    comment: 'This makeup look is everything, I need to recreate it ASAP!',
    aiResponse:
      "Hey fabulous! ✨ We're so grateful for your support! It inspires us every day! What's your favorite way to use our products?",
    editedResponse:
      "Hey fabulous! ✨ We're so grateful for your support! It inspires us every day! What's your favorite way to use our products?",
  },
  {
    id: '3',
    postImage: 'https://via.placeholder.com/40',
    postBody: "Thrilled to start my self-care journey with RadiantSkin's new line! 🌟 #SelfCare",
    comment: 'This makeup look is everything, I need to recreate it ASAP!',
    aiResponse: "Hi beautiful! 💕 We appreciate your love for our brand! Your feedback means the world to us! What's your go-to beauty tip?",
    editedResponse: "Hi beautiful! 💕 We appreciate your love for our brand! Your feedback means the world to us! What's your go-to beauty tip?",
  },
  {
    id: '4',
    postImage: 'https://via.placeholder.com/40',
    postBody: 'New video up on my channel! Trying out the latest foundation. 🎥',
    comment: 'OMG, your skin looks flawless!',
    aiResponse: "You're too kind! So glad you enjoyed the video. Let us know how you like the foundation!",
    editedResponse: "You're too kind! So glad you enjoyed the video. Let us know how you like the foundation!",
  },
  {
    id: '5',
    postImage: 'https://via.placeholder.com/40',
    postBody: 'Feeling confident in my new lipstick shade! 💄',
    comment: 'That color is stunning on you!',
    aiResponse: 'We love to see it! That shade was made for you. 🔥',
    editedResponse: 'We love to see it! That shade was made for you. 🔥',
  },
  {
    id: '6',
    postImage: 'https://via.placeholder.com/40',
    postBody: 'My morning routine just got an upgrade with this serum.',
    comment: 'I need to know more about this!',
    aiResponse: "It's a game-changer, right? So glad you're loving it!",
    editedResponse: "It's a game-changer, right? So glad you're loving it!",
  },
  {
    id: '7',
    postImage: 'https://via.placeholder.com/40',
    postBody: 'Loving the new packaging on these products!',
    comment: 'So chic and sustainable!',
    aiResponse: 'Thank you for noticing! We put a lot of thought into our new designs.',
    editedResponse: 'Thank you for noticing! We put a lot of thought into our new designs.',
  },
  {
    id: '8',
    postImage: 'https://via.placeholder.com/40',
    postBody: 'This eyeshadow palette has so many amazing colors.',
    comment: 'The pigment is incredible!',
    aiResponse: 'We agree! The color payoff is one of our favorite things about it.',
    editedResponse: 'We agree! The color payoff is one of our favorite things about it.',
  },
  {
    id: '9',
    postImage: 'https://via.placeholder.com/40',
    postBody: 'My skin has never felt so soft. Thank you!',
    comment: 'I can vouch for this! Best moisturizer ever.',
    aiResponse: 'That makes us so happy to hear! Soft skin for the win!',
    editedResponse: 'That makes us so happy to hear! Soft skin for the win!',
  },
  {
    id: '10',
    postImage: 'https://via.placeholder.com/40',
    postBody: 'The perfect scent for a cozy night in. 🕯️',
    comment: 'My whole apartment smells amazing now.',
    aiResponse: 'Enjoy the cozy vibes! Nothing beats a good candle.',
    editedResponse: 'Enjoy the cozy vibes! Nothing beats a good candle.',
  },
];

const Dashboard = () => {
  return (
    <div className="py-8">
      <div className="px-8">
        <Header />
        <div className="mt-8">
          <FilterBar />
        </div>
        <div className="mt-8">
          <FilterButtonGroup />
        </div>
      </div>
      <div className="mt-8">
        <ResponseTable headers={mockHeaders} rows={mockRows} />
      </div>
    </div>
  );
};

export default Dashboard; 