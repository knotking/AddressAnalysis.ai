
import React, { useState } from 'react';
import { SendIcon } from './icons';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isLoading }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSubmit(e as unknown as React.FormEvent);
    }
  };


  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 p-2 bg-gray-800 border-t border-gray-700">
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ask a follow-up question..."
        className="flex-grow bg-gray-700 text-gray-200 rounded-lg p-3 resize-none focus:ring-2 focus:ring-cyan-500 focus:outline-none"
        rows={1}
        disabled={isLoading}
      />
      <button
        type="submit"
        disabled={isLoading || !message.trim()}
        className="p-3 bg-cyan-600 rounded-full text-white hover:bg-cyan-500 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors"
      >
        {isLoading ? (
          <div className="w-6 h-6 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
        ) : (
          <SendIcon />
        )}
      </button>
    </form>
  );
};
