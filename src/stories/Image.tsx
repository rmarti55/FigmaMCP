import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const imageVariants = cva(
  'object-cover rounded-lg',
  {
    variants: {
      aspectRatio: {
        '3:4': 'aspect-[3/4]',
        '4:3': 'aspect-[4/3]',
        '1:1': 'aspect-square',
        '16:9': 'aspect-video',
        auto: 'aspect-auto',
      },
      size: {
        xs: 'w-16',
        sm: 'w-24',
        md: 'w-32',
        lg: 'w-48',
        xl: 'w-64',
        '2xl': 'w-80',
        full: 'w-full',
      },
      rounded: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      aspectRatio: '3:4',
      size: 'full',
      rounded: 'lg',
    },
  }
);

export interface ImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement>,
    VariantProps<typeof imageVariants> {
  /**
   * Image source URL
   */
  src: string;
  /**
   * Alt text for accessibility
   */
  alt: string;
  /**
   * Optional fallback image URL
   */
  fallback?: string;
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Image component with consistent aspect ratios and sizing options
 */
export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  fallback,
  aspectRatio,
  size,
  rounded,
  className,
  onError,
  ...props
}) => {
  const [imgSrc, setImgSrc] = React.useState(src);
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    setImgSrc(src);
    setHasError(false);
  }, [src]);

  const handleError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (!hasError && fallback) {
      setImgSrc(fallback);
      setHasError(true);
    }
    onError?.(event);
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={imageVariants({ aspectRatio, size, rounded, className })}
      onError={handleError}
      {...props}
    />
  );
}; 