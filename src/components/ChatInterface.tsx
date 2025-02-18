import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Send } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
}

interface ChatInterfaceProps {
  onBack: () => void;
}

function ChatInterface({ onBack }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your AI stock analysis assistant. How can I help you today?",
      isUser: false,
    },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    setMessages(prev => [...prev, {
      id: Date.now(),
      text: input,
      isUser: true,
    }]);

    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        text: "I'm analyzing your request about the stock market. This is a placeholder response - in a real implementation, this would be connected to an LLM API.",
        isUser: false,
      }]);
    }, 1000);

    setInput('');
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <div className="bg-gray-800 p-4 flex items-center">
        <button
          onClick={onBack}
          className="text-white hover:text-gray-300 transition-colors duration-200"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h2 className="text-white text-xl font-semibold ml-4">Stock Analysis Chat</h2>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-4 ${
                message.isUser
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-700 text-white'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="bg-gray-800 p-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about stocks, market trends, or analysis..."
            className="flex-1 bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSend}
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2 transition-colors duration-200"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatInterface;