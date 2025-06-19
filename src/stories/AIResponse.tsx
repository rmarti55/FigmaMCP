import React from 'react';
import { Edit } from 'lucide-react';
import { Button } from './Button';

export interface AIResponseProps {
  /**
   * The header text for the AI response section
   */
  headerText?: string;
  /**
   * Profile image URL for the brand/AI
   */
  profileImage?: string;
  /**
   * Profile name (e.g., "e.l.f. Cosmetics and Skincare")
   */
  profileName: string;
  /**
   * AI response body text
   */
  bodyText: string;
  /**
   * Show the header (for first response in a section)
   */
  showHeader?: boolean;
  /**
   * Callback when edit icon is clicked
   */
  onEditClick?: () => void;
  /**
   * Callback when post button is clicked
   */
  onPostClick?: () => void;
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * AIResponse component displays an AI-generated response with editing and posting capabilities
 */
export const AIResponse: React.FC<AIResponseProps> = ({
  headerText = "AI Response",
  profileImage,
  profileName,
  bodyText,
  showHeader = false,
  onEditClick,
  onPostClick,
  className = "",
}) => {
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
            <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
              <span className="font-sans text-sm font-bold text-white">
                elf
              </span>
            </div>
          )}
        </div>

        {/* Response Content */}
        <div className="flex-1 space-y-3">
          {/* Profile Name and Edit Icon */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-sans text-base font-semibold text-gray-900">
                {profileName}
              </span>
              <span className="font-sans text-sm text-gray-500">
                AI Response
              </span>
            </div>
            
            <button
              onClick={onEditClick}
              className="p-1 text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Edit response"
            >
              <Edit size={16} />
            </button>
          </div>

          {/* Response Text */}
          <p className="font-sans text-base text-gray-700 leading-relaxed">
            {bodyText}
          </p>

          {/* Post Button */}
          <div className="flex justify-end">
            <Button
              variant="default"
              onClick={onPostClick}
              className="bg-black text-white hover:bg-gray-800"
            >
              Post
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}; 