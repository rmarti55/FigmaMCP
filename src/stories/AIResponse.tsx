import React, { useState } from 'react';
import { Edit, RotateCcw, Loader2 } from 'lucide-react';
import { Button } from './Button';

// AI Response variations for regeneration
const aiResponseVariations = [
  "Thanks babe! We're so glad you love it! 💕",
  "OMG yes! So happy you're obsessed with it! ✨", 
  "You're amazing! Thanks for the love! 🥰",
  "This makes our day! Love seeing you glow! 💫",
  "Yasss! You're absolutely glowing! Thanks hun! 💖",
  "We love this for you! Thanks for sharing! 🌟",
  "So happy to hear this! You're the best! 💝",
  "Thanks for the love! Keep glowing! ✨",
  "You're too sweet! We appreciate you! 💕",
  "Love hearing this! Thanks beautiful! 🥰"
];

// Generate a new response based on original sentiment
const generateNewResponse = (originalText: string): string => {
  // Filter out the current response to avoid repeating
  const availableResponses = aiResponseVariations.filter(response => response !== originalText);
  
  // Return a random response from the available options
  const randomIndex = Math.floor(Math.random() * availableResponses.length);
  return availableResponses[randomIndex] || aiResponseVariations[0];
};

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
   * Callback when regenerate icon is clicked
   */
  onRegenerateClick?: () => void;
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
  onRegenerateClick,
  onPostClick,
  className = "",
}) => {
  const [currentResponse, setCurrentResponse] = useState(bodyText);
  const [isRegenerating, setIsRegenerating] = useState(false);

  const handleRegenerate = async () => {
    setIsRegenerating(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Generate new response
    const newResponse = generateNewResponse(currentResponse);
    setCurrentResponse(newResponse);
    
    setIsRegenerating(false);
    
    // Call the optional callback
    onRegenerateClick?.();
  };
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
          {/* Profile Name and Action Icons */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-sans text-base font-semibold text-gray-900">
                {profileName}
              </span>
              <span className="font-sans text-sm text-gray-500">
                AI Response
              </span>
            </div>
            
            <div className="flex items-center gap-1">
              <button
                onClick={onEditClick}
                className="p-1 text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="Edit response"
              >
                <Edit size={16} />
              </button>
              <button
                onClick={handleRegenerate}
                disabled={isRegenerating}
                className="p-1 text-gray-500 hover:text-gray-700 transition-colors disabled:opacity-50"
                aria-label="Regenerate response"
              >
                {isRegenerating ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  <RotateCcw size={16} />
                )}
              </button>
            </div>
          </div>

          {/* Response Text */}
          <p className="font-sans text-base text-gray-700 leading-relaxed">
            {currentResponse}
          </p>

          {/* Post Button */}
          <div className="flex justify-end">
            <Button
              variant="default"
              onClick={onPostClick}
            >
              POST
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}; 