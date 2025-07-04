import React from 'react';
import { X } from 'lucide-react';
import { Image } from './Image';
import { PostBody } from './PostBody';
import { Comment, type SentimentType } from './Comment';
import { AIResponse } from './AIResponse';

export interface CommentData {
  id: string;
  profileImage?: string;
  profileName: string;
  sentiment: SentimentType;
  commentText: string;
  timestamp: string;
  tags?: string[];
}

export interface AIResponseData {
  id: string;
  profileImage?: string;
  profileName: string;
  bodyText: string;
}

export interface CommentModalProps {
  /**
   * Whether the modal is open
   */
  isOpen: boolean;
  /**
   * Callback when modal should close
   */
  onClose: () => void;
  /**
   * Post image URL
   */
  postImage: string;
  /**
   * Post image alt text
   */
  postImageAlt: string;
  /**
   * Post body content
   */
  postBodyText: string;
  /**
   * Array of comments
   */
  comments: CommentData[];
  /**
   * Array of AI responses
   */
  aiResponses: AIResponseData[];
  /**
   * Response filter dropdown value
   */
  responseFilter?: string;
  /**
   * Show hide checkbox state
   */
  showHide?: boolean;
  /**
   * Callback when comment sentiment changes
   */
  onSentimentChange?: (commentId: string, sentiment: SentimentType) => void;
  /**
   * Callback when tag is added to comment
   */
  onCommentTagAdd?: (commentId: string, tag: string) => void;
  /**
   * Callback when AI response edit is clicked
   */
  onAIResponseEdit?: (responseId: string) => void;
  /**
   * Callback when AI response regenerate is clicked
   */
  onAIResponseRegenerate?: (responseId: string) => void;
  /**
   * Callback when AI response post is clicked
   */
  onAIResponsePost?: (responseId: string) => void;
}

/**
 * CommentModal organism displays a modal with post image, content, comments, and AI responses
 */
export const CommentModal: React.FC<CommentModalProps> = ({
  isOpen,
  onClose,
  postImage,
  postImageAlt,
  postBodyText,
  comments,
  aiResponses,
  responseFilter = "All",
  showHide = false,
  onSentimentChange,
  onCommentTagAdd,
  onAIResponseEdit,
  onAIResponseRegenerate,
  onAIResponsePost,
}) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white max-w-6xl w-full max-h-[90vh] overflow-hidden flex">
        {/* Left Side - Full Image */}
        <div className="w-1/2 flex-shrink-0">
          <Image
            src={postImage}
            alt={postImageAlt}
            aspectRatio="3:4"
            size="full"
            rounded="none"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side - Content with Close Button */}
        <div className="w-1/2 flex flex-col relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          {/* Content Area */}
          <div className="flex flex-col h-full p-6 pt-14">
            {/* Post Body */}
            <div className="mb-6">
              <PostBody
                bodyText={postBodyText}
              />
            </div>

            {/* Comments Section */}
            <div className="flex-1 overflow-y-auto space-y-6">
              {/* Comments Header with Controls */}
              <div className="flex items-center justify-between">
                <h3 className="font-sans text-lg font-semibold text-gray-900">
                  Comments
                </h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="font-sans text-sm text-gray-700">Response:</span>
                    <select className="font-sans text-sm border border-gray-300 rounded px-2 py-1">
                      <option value="All">All</option>
                      <option value="Posted">Posted</option>
                      <option value="Not Posted">Not Posted</option>
                    </select>
                  </div>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={showHide}
                      className="rounded"
                    />
                    <span className="font-sans text-sm text-gray-700">Hide</span>
                  </label>
                </div>
              </div>

              {/* Comments List */}
              <div className="space-y-6">
                {comments.map((comment, index) => (
                  <div key={comment.id} className="space-y-4">
                    <Comment
                      profileImage={comment.profileImage}
                      profileName={comment.profileName}
                      sentiment={comment.sentiment}
                      commentText={comment.commentText}
                      timestamp={comment.timestamp}
                      tags={comment.tags}
                      onSentimentChange={(sentiment) => onSentimentChange?.(comment.id, sentiment)}
                      onTagAdd={(tag) => onCommentTagAdd?.(comment.id, tag)}
                    />
                    
                    {/* AI Response for this comment */}
                    {aiResponses[index] && (
                      <AIResponse
                        profileImage={aiResponses[index].profileImage}
                        profileName={aiResponses[index].profileName}
                        bodyText={aiResponses[index].bodyText}
                        onEditClick={() => onAIResponseEdit?.(aiResponses[index].id)}
                        onRegenerateClick={() => onAIResponseRegenerate?.(aiResponses[index].id)}
                        onPostClick={() => onAIResponsePost?.(aiResponses[index].id)}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 