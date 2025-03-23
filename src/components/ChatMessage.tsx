
import React from 'react';
import { Loader2 } from 'lucide-react';

type MessageProps = {
  content: string;
  sender: 'user' | 'bot';
  isLoading?: boolean;
};

const ChatMessage: React.FC<MessageProps> = ({ content, sender, isLoading = false }) => {
  return (
    <div className={`flex ${sender === 'user' ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[80%] p-3 rounded-xl ${
          sender === 'user'
            ? 'bg-emerald-600 text-white rounded-tr-none'
            : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-tl-none'
        }`}
      >
        {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : content}
      </div>
    </div>
  );
};

export default ChatMessage;
