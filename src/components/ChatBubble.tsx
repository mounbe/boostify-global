
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

interface ChatBubbleProps {
  onClick: () => void;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ onClick }) => {
  const { t } = useLanguage();
  
  return (
    <motion.div
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      <button
        onClick={onClick}
        className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-all duration-300 hover:shadow-xl"
        aria-label={t('chat.openChat')}
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </motion.div>
  );
};

export default ChatBubble;
