import React from 'react';

interface FontSpecimenProps {
  weight: number;
  style?: 'normal' | 'italic';
  size?: string;
  text?: string;
  label?: string;
  family?: 'normal' | 'condensed';
}

const FontSpecimen: React.FC<FontSpecimenProps> = ({
  weight,
  style = 'normal',
  size = 'text-lg',
  text = 'The quick brown fox jumps over the lazy dog',
  label,
  family = 'normal'
}) => {
  const fontClass = family === 'condensed' ? 'font-condensed' : 'font-sans';
  const weightClass = `font-[${weight}]`;
  const styleClass = style === 'italic' ? 'italic' : '';
  
  const weightName = {
    300: 'Light',
    400: 'Book',
    500: 'Medium', 
    700: 'Bold',
    800: 'Extra Bold',
    900: 'Heavy'
  }[weight] || weight.toString();

  const displayLabel = label || `${weightName}${style === 'italic' ? ' Italic' : ''}`;

  return (
    <div className="py-4 border-b border-gray-100 last:border-b-0">
      <div className="flex items-baseline justify-between mb-2">
        <span className="text-sm text-gray-500 font-medium">{displayLabel}</span>
        <span className="text-xs text-gray-400">{weight} {style}</span>
      </div>
      <p className={`${fontClass} ${weightClass} ${styleClass} ${size} text-gray-900`}>
        {text}
      </p>
    </div>
  );
};

interface TypographyScaleProps {
  family?: 'normal' | 'condensed';
  weight?: number;
  style?: 'normal' | 'italic';
}

const TypographyScale: React.FC<TypographyScaleProps> = ({
  family = 'normal',
  weight = 400,
  style = 'normal'
}) => {
  const sizes = [
    { class: 'text-xs', label: '12px', sample: 'Caption text' },
    { class: 'text-sm', label: '14px', sample: 'Body small text' },
    { class: 'text-base', label: '16px', sample: 'Body text' },
    { class: 'text-lg', label: '18px', sample: 'Body large text' },
    { class: 'text-xl', label: '20px', sample: 'Heading 5' },
    { class: 'text-2xl', label: '24px', sample: 'Heading 4' },
    { class: 'text-3xl', label: '30px', sample: 'Heading 3' },
    { class: 'text-4xl', label: '36px', sample: 'Heading 2' },
    { class: 'text-5xl', label: '48px', sample: 'Heading 1' },
    { class: 'text-6xl', label: '60px', sample: 'Display Large' },
  ];

  return (
    <div className="space-y-3">
      {sizes.map(({ class: sizeClass, label, sample }) => (
        <FontSpecimen
          key={sizeClass}
          weight={weight}
          style={style}
          size={sizeClass}
          text={sample}
          label={`${label} - ${sample}`}
          family={family}
        />
      ))}
    </div>
  );
};

export const TypographyShowcase = () => {
  const [selectedFamily, setSelectedFamily] = React.useState<'normal' | 'condensed'>('normal');
  const [selectedWeight, setSelectedWeight] = React.useState(400);
  const [selectedStyle, setSelectedStyle] = React.useState<'normal' | 'italic'>('normal');

  const weights = [
    { value: 300, label: 'Light' },
    { value: 400, label: 'Book' },
    { value: 500, label: 'Medium' },
    { value: 700, label: 'Bold' },
    { value: 800, label: 'Extra Bold' },
    { value: 900, label: 'Heavy' },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h1 className="font-sans text-5xl font-bold text-gray-900 mb-4">
          Futura Std Typography System
        </h1>
        <p className="font-sans text-xl text-gray-600 max-w-3xl">
          A complete geometric sans-serif font family with 6 weights, italic styles, and condensed variants. 
          Designed for modern, clean, and professional typography across all e.l.f. digital experiences.
        </p>
      </div>

      {/* Interactive Controls */}
      <div className="bg-gray-50 p-6 rounded-lg mb-12">
        <h2 className="font-sans text-2xl font-bold text-gray-900 mb-4">Interactive Font Explorer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <label className="block font-sans text-sm font-medium text-gray-700 mb-2">
              Font Family
            </label>
            <select 
              value={selectedFamily}
              onChange={(e) => setSelectedFamily(e.target.value as 'normal' | 'condensed')}
              className="font-sans w-full px-3 py-2 border border-gray-300 rounded-md"
            >
              <option value="normal">Futura Std</option>
              <option value="condensed">Futura Std Condensed</option>
            </select>
          </div>
          
          <div>
            <label className="block font-sans text-sm font-medium text-gray-700 mb-2">
              Font Weight
            </label>
            <select 
              value={selectedWeight}
              onChange={(e) => setSelectedWeight(Number(e.target.value))}
              className="font-sans w-full px-3 py-2 border border-gray-300 rounded-md"
            >
              {weights.map(weight => (
                <option key={weight.value} value={weight.value}>
                  {weight.label} ({weight.value})
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block font-sans text-sm font-medium text-gray-700 mb-2">
              Font Style
            </label>
            <select 
              value={selectedStyle}
              onChange={(e) => setSelectedStyle(e.target.value as 'normal' | 'italic')}
              className="font-sans w-full px-3 py-2 border border-gray-300 rounded-md"
            >
              <option value="normal">Normal</option>
              <option value="italic">Italic</option>
            </select>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg border">
          <TypographyScale 
            family={selectedFamily}
            weight={selectedWeight}
            style={selectedStyle}
          />
        </div>
      </div>

      {/* Font Weight Matrix */}
      <div className="mb-12">
        <h2 className="font-sans text-3xl font-bold text-gray-900 mb-6">Font Weight Matrix</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Regular Futura */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-sans text-xl font-bold text-gray-900 mb-4">Futura Std</h3>
            <div className="space-y-1">
              {weights.map(weight => (
                <div key={`normal-${weight.value}`} className="grid grid-cols-2 gap-4">
                  <FontSpecimen
                    weight={weight.value}
                    style="normal"
                    text="e.l.f. Cosmetics"
                    size="text-2xl"
                  />
                  <FontSpecimen
                    weight={weight.value}
                    style="italic"
                    text="e.l.f. Cosmetics"
                    size="text-2xl"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Condensed Futura */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-sans text-xl font-bold text-gray-900 mb-4">Futura Std Condensed</h3>
            <div className="space-y-1">
              {[300, 400, 700, 800].map(weight => (
                <div key={`condensed-${weight}`} className="grid grid-cols-2 gap-4">
                  <FontSpecimen
                    weight={weight}
                    style="normal"
                    text="e.l.f. Cosmetics"
                    size="text-2xl"
                    family="condensed"
                  />
                  <FontSpecimen
                    weight={weight}
                    style="italic"
                    text="e.l.f. Cosmetics"
                    size="text-2xl"
                    family="condensed"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Real-World Usage Examples */}
      <div className="mb-12">
        <h2 className="font-sans text-3xl font-bold text-gray-900 mb-6">Usage Examples</h2>
        
        {/* Hero Section Example */}
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-8 rounded-lg mb-6">
          <h1 className="font-sans text-6xl font-black mb-4">
            Beauty for Everyone
          </h1>
          <p className="font-sans text-xl font-light max-w-2xl">
            Discover our complete collection of cruelty-free, vegan cosmetics that celebrate your unique beauty.
          </p>
          <button className="font-sans font-bold text-lg bg-white text-purple-600 px-8 py-3 rounded-full mt-6 hover:bg-gray-100 transition-colors">
            Shop Now
          </button>
        </div>

        {/* Product Card Example */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {[
            { name: 'Pure Skin Cleanser', price: '$12', category: 'Skincare' },
            { name: 'Liquid Lipstick Set', price: '$24', category: 'Makeup' },
            { name: 'Glow Serum', price: '$18', category: 'Skincare' },
          ].map((product, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="h-48 bg-gray-100 rounded-md mb-4"></div>
              <p className="font-condensed text-sm font-bold text-purple-600 uppercase tracking-wide mb-1">
                {product.category}
              </p>
              <h3 className="font-sans text-lg font-bold text-gray-900 mb-2">
                {product.name}
              </h3>
              <p className="font-sans text-2xl font-bold text-gray-900">
                {product.price}
              </p>
            </div>
          ))}
        </div>

        {/* UI Elements Example */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <h3 className="font-sans text-2xl font-bold text-gray-900 mb-6">UI Elements</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-sans text-base font-medium text-gray-900">Navigation Item</span>
              <span className="font-condensed text-sm font-bold text-gray-500 uppercase">Menu</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-sans text-lg font-bold text-gray-900">Section Heading</span>
              <span className="font-sans text-sm text-gray-500">Subtitle</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-sans text-sm text-gray-700">Body text content</span>
              <span className="font-sans text-xs font-medium text-gray-400">Caption</span>
            </div>
          </div>
        </div>
      </div>

      {/* Character Set */}
      <div className="mb-12">
        <h2 className="font-sans text-3xl font-bold text-gray-900 mb-6">Character Set</h2>
        <div className="bg-white border border-gray-200 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-sans text-lg font-bold text-gray-900 mb-4">Uppercase</h4>
              <p className="font-sans text-2xl font-medium text-gray-900 mb-6 tracking-wide">
                ABCDEFGHIJKLMNOPQRSTUVWXYZ
              </p>
              
              <h4 className="font-sans text-lg font-bold text-gray-900 mb-4">Lowercase</h4>
              <p className="font-sans text-2xl font-medium text-gray-900 mb-6">
                abcdefghijklmnopqrstuvwxyz
              </p>
            </div>
            
            <div>
              <h4 className="font-sans text-lg font-bold text-gray-900 mb-4">Numbers</h4>
              <p className="font-sans text-2xl font-medium text-gray-900 mb-6">
                0123456789
              </p>
              
                             <h4 className="font-sans text-lg font-bold text-gray-900 mb-4">Special Characters</h4>
               <p className="font-sans text-2xl font-medium text-gray-900">
                 !@#$%^&*()_+-=[]{}|;':",./?
               </p>
            </div>
          </div>
        </div>
      </div>

      {/* Usage Guidelines */}
      <div className="bg-blue-50 p-8 rounded-lg">
        <h2 className="font-sans text-2xl font-bold text-blue-900 mb-4">Usage Guidelines</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-sans text-lg font-bold text-blue-900 mb-3">Recommended Uses</h3>
            <ul className="font-sans text-blue-800 space-y-2">
              <li><strong>Light (300):</strong> Large display text, hero sections</li>
              <li><strong>Book (400):</strong> Body text, paragraphs</li>
              <li><strong>Medium (500):</strong> Subheadings, emphasis</li>
              <li><strong>Bold (700):</strong> Headings, buttons, navigation</li>
              <li><strong>Extra Bold (800):</strong> Impact headlines</li>
              <li><strong>Heavy (900):</strong> Logo, brand statements</li>
            </ul>
          </div>
          <div>
            <h3 className="font-sans text-lg font-bold text-blue-900 mb-3">Condensed Uses</h3>
            <ul className="font-sans text-blue-800 space-y-2">
              <li><strong>Labels:</strong> Category tags, metadata</li>
              <li><strong>Navigation:</strong> Compact menu items</li>
              <li><strong>Tables:</strong> Column headers, data</li>
              <li><strong>Captions:</strong> Image descriptions</li>
              <li><strong>Buttons:</strong> Call-to-action text</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}; 