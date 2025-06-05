import React from 'react';

interface ProductTileProps {
  imageUrl?: string; // Optional: to be replaced by Image / Product component
  title: string;    // To be used by Text / Title component
  price: string;    // To be used by Text / Price component
  onAddToCart?: () => void; // Action for the button
}

const ProductTile: React.FC<ProductTileProps> = ({
  imageUrl,
  title,
  price,
  onAddToCart,
}) => {
  // Assumed token mappings to Tailwind:
  // Card / Product styles: bg-white rounded-md shadow-sm
  // spacing/md for padding: p-4 (applied to card)
  // spacing/md for vertical spacing: mb-4 (applied to elements)
  // color/background (for card): bg-white
  // radius/md: rounded-md
  // shadow/sm: shadow-sm

  return (
    <div className="bg-white rounded-md shadow-sm overflow-hidden max-w-sm mx-auto">
      {/* Image / Product placeholder */}
      {imageUrl ? (
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      ) : (
        <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">Image</span>
        </div>
      )}

      <div className="p-4">
        {/* Text / Title */}
        <h3 className="text-lg font-semibold mb-2">{title}</h3>

        {/* Text / Price */}
        <p className="text-gray-700 mb-4">{price}</p>

        {/* Button / Primary */}
        <button
          onClick={onAddToCart}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductTile; 