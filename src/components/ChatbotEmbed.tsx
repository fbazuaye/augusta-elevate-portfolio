import { useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

const ChatbotEmbed = () => {
  useEffect(() => {
    const loadChatbot = async () => {
      try {
        // Load the chatbot script from our edge function
        const script = document.createElement('script');
        script.type = 'module';
        script.src = `https://ulqnimmhknylzhbxvibw.supabase.co/functions/v1/chatbot-embed`;
        document.head.appendChild(script);
        
        return () => {
          document.head.removeChild(script);
        };
      } catch (error) {
        console.error('Error loading chatbot:', error);
      }
    };

    loadChatbot();
  }, []);

  return null; // This component doesn't render anything visible
};

export default ChatbotEmbed;