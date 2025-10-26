
import React from 'react';
import { ChatMessage as ChatMessageType } from '../types';
import { BotIcon, UserIcon } from './icons';

interface ChatMessageProps {
  message: ChatMessageType;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.role === 'user';

  return (
    <div className={`flex items-start gap-4 my-4 ${isUser ? 'justify-end' : ''}`}>
      {!isUser && <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center"><BotIcon className="w-5 h-5 text-white" /></div>}
      <div className={`max-w-lg md:max-w-xl lg:max-w-2xl px-5 py-3 rounded-2xl ${isUser ? 'bg-blue-600 rounded-br-none' : 'bg-gray-700 rounded-bl-none'}`}>
        <p className="whitespace-pre-wrap">{message.text}</p>
        {message.sources && message.sources.length > 0 && (
          <div className="mt-3 pt-3 border-t border-gray-600">
            <h4 className="text-xs font-semibold text-gray-400 mb-2">Sources:</h4>
            <ul className="flex flex-wrap gap-2">
              {message.sources.map((source, index) => (
                <li key={index}>
                  <a href={source.uri} target="_blank" rel="noopener noreferrer" className="text-xs bg-gray-600 hover:bg-gray-500 text-gray-200 px-2 py-1 rounded-full transition-colors">
                    {source.title || new URL(source.uri).hostname}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
       {isUser && <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center"><UserIcon className="w-5 h-5 text-gray-300" /></div>}
    </div>
  );
};
