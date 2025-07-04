import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import clsx from 'clsx';
import { Button } from './Button';

export type SentimentType = 'positive' | 'negative' | 'neutral';

export interface CommentProps {
  /**
   * The header text for the comments section
   */
  headerText?: string;
  /**
   * Profile image URL
   */
  profileImage?: string;
  /**
   * Profile name/username
   */
  profileName: string;
  /**
   * Current sentiment selection
   */
  sentiment: SentimentType;
  /**
   * Comment body text
   */
  commentText: string;
  /**
   * Timestamp string
   */
  timestamp: string;
  /**
   * Show the header (for first comment in a section)
   */
  showHeader?: boolean;
  /**
   * Callback when sentiment changes
   */
  onSentimentChange?: (sentiment: SentimentType) => void;
  /**
   * Callback when tag is added to comment
   */
  onTagAdd?: (tag: string) => void;
  /**
   * Additional CSS classes
   */
  className?: string;
}

const sentimentOptions = {
  positive: { label: 'Positive', emoji: '😊' },
  negative: { label: 'Negative', emoji: '😞' },
  neutral: { label: 'Neutral', emoji: '😐' },
};

const tagOptions = [
  'Brand Love',
  'emoji',
  'Values',
  'product requests',
  'discontinued'
];

/**
 * Comment component displays a single comment with profile, sentiment, and interaction options
 */
export const Comment: React.FC<CommentProps> = ({
  headerText = "Comments",
  profileImage,
  profileName,
  sentiment,
  commentText,
  timestamp,
  showHeader = false,
  onSentimentChange,
  onTagAdd,
  className = "",
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSentimentSelect = (newSentiment: SentimentType) => {
    onSentimentChange?.(newSentiment);
    setIsDropdownOpen(false);
  };

  const currentSentiment = sentimentOptions[sentiment];

  return (
    <div className={`space-y-4 ${className}`}>
      {showHeader && (
        <h3 className="font-sans text-lg font-semibold text-gray-900">
          {headerText}
        </h3>
      )}
      
      <div className="flex items-start gap-3">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          {profileImage ? (
            <img
              src={profileImage}
              alt={profileName}
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
              <span className="font-sans text-sm font-medium text-gray-600">
                {profileName.charAt(0).toUpperCase()}
              </span>
            </div>
          )}
        </div>

        {/* Comment Content */}
        <div className="flex-1 space-y-2">
          {/* Profile Name and Sentiment */}
          <div className="flex items-center gap-3">
            <span className="font-sans text-base font-semibold text-gray-900">
              {profileName}
            </span>
            
            {/* Sentiment Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-1 px-2 py-1 text-sm font-sans font-medium text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
              >
                <span>{currentSentiment.label}</span>
                <span className="text-base">{currentSentiment.emoji}</span>
                <ChevronDown size={14} className={clsx("transition-transform", { "rotate-180": isDropdownOpen })} />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-[120px]">
                  {Object.entries(sentimentOptions).map(([key, option]) => (
                    <button
                      key={key}
                      onClick={() => handleSentimentSelect(key as SentimentType)}
                      className="w-full flex items-center gap-2 px-3 py-2 text-sm font-sans text-gray-700 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                    >
                      <span>{option.label}</span>
                      <span className="text-base">{option.emoji}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Comment Text */}
          <p className="font-sans text-base text-gray-700 leading-relaxed">
            {commentText}
          </p>

          {/* Timestamp and Tag Button */}
          <div className="flex items-center justify-between">
            <span className="font-sans text-sm text-gray-500">
              {timestamp}
            </span>
            
            <Button
              variant="default"
              size="sm"
              dropdown={{
                items: tagOptions,
                onSelect: (tag) => onTagAdd?.(tag)
              }}
            >
              Add Tag
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}; 