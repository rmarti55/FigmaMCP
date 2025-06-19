import React from 'react';

export interface PostBodyProps {
  /**
   * The header text for the post body section
   */
  headerText?: string;
  /**
   * The main post content text
   */
  bodyText: string;
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * PostBody component displays post content with an optional header
 */
export const PostBody: React.FC<PostBodyProps> = ({
  headerText = "Post Body",
  bodyText,
  className = "",
}) => {
  return (
    <div className={`space-y-4 ${className}`}>
      <h3 className="font-sans text-lg font-semibold text-gray-900">
        {headerText}
      </h3>
      <p className="font-sans text-base text-gray-700 leading-relaxed">
        {bodyText}
      </p>
    </div>
  );
}; 