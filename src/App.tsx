import React from 'react';
import ProductTile from './components/ProductTile';

function App() {
  const sampleProduct = {
    imageUrl: 'https://via.placeholder.com/300x200.png?text=Sample+Product+Image',
    title: 'Awesome Gadget Pro',
    price: '$99.99',
  };

  const handleAddToCart = () => {
    alert('Added to cart!');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Product Preview</h1>
      <div className="w-full max-w-xs sm:max-w-sm">
         <ProductTile 
          imageUrl={sampleProduct.imageUrl}
          title={sampleProduct.title}
          price={sampleProduct.price}
          onAddToCart={handleAddToCart}
        />
      </div>
      <div className="mt-8 w-full max-w-xs sm:max-w-sm">
        <ProductTile 
          title="Basic Widget"
          price="$29.50"
          onAddToCart={handleAddToCart}
        />
      </div>
    </div>
  );
}

export default App; 