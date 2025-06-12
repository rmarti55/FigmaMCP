import React from 'react';

const TextStyle: React.FC<{
  size: number;
  isBold?: boolean;
  isExtraBold?: boolean;
  isUppercase?: boolean;
  isTitle?: boolean;
}> = ({ size, isBold, isExtraBold, isUppercase, isTitle }) => {
  const classes = [
    `text-[${size}px]`,
    isBold ? 'font-bold' : '',
    isExtraBold ? 'font-extrabold' : '',
    isUppercase ? 'uppercase' : '',
  ].filter(Boolean).join(' ');

  let label = `${size}px`;
  if (isTitle) label = `Title / ${label}`;
  if (isBold) label += ' / Bold';
  if (isExtraBold) label += ' / Extra Bold';
  if (isUppercase) label += ' / Uppercase';

  return (
    <div className="py-4 border-b border-gray-200">
      <p className="text-sm text-gray-500 mb-2">{label}</p>
      <p className={classes}>The quick brown fox jumps over the lazy dog.</p>
    </div>
  );
};

export const TypographyShowcase = () => {
  const bodySizes = [9, 10, 12, 14, 16, 18, 20, 24, 28, 32];
  const titleSizes = [36, 42, 48, 56, 64];

  return (
    <div className="p-8 font-sans">
      <h1 className="text-3xl font-bold border-b pb-4 mb-4">Typography System</h1>
      
      <h2 className="text-2xl font-bold mt-8 mb-4">Body Text</h2>
      {bodySizes.map(size => (
        <React.Fragment key={`body-${size}`}>
          <TextStyle size={size} />
          <TextStyle size={size} isBold />
          <TextStyle size={size} isUppercase />
          <TextStyle size={size} isBold isUppercase />
        </React.Fragment>
      ))}

      <h2 className="text-2xl font-bold mt-12 mb-4">Title Text</h2>
      {titleSizes.map(size => (
        <React.Fragment key={`title-${size}`}>
          <TextStyle size={size} isTitle />
          <TextStyle size={size} isTitle isBold />
          <TextStyle size={size} isTitle isExtraBold />
          <TextStyle size={size} isTitle isUppercase />
          <TextStyle size={size} isTitle isBold isUppercase />
          <TextStyle size={size} isTitle isExtraBold isUppercase />
        </React.Fragment>
      ))}
    </div>
  );
}; 