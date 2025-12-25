import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatMessage } from '../types';
import { sendMessageToAda } from '../services/geminiService';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hi, I'm Ada. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    const responseText = await sendMessageToAda(messages, userMessage.text);
    
    setIsTyping(false);
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-3xl bg-gradient-to-br from-brand-accent to-brand-purple flex items-center justify-center shadow-[0_0_30px_rgba(6,96,216,0.5)] hover:scale-110 transition-transform duration-300 border border-white/20"
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X className="text-brand-light w-8 h-8" /> : <MessageCircle className="text-brand-light w-8 h-8" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            className="fixed bottom-28 right-8 z-50 w-[90vw] md:w-[450px] h-[600px] rounded-[3rem] glass shadow-2xl overflow-hidden flex flex-col border border-brand-accent/20"
          >
            {/* Header */}
            <div className="p-8 bg-brand-primary/40 border-b border-brand-accent/10 flex items-center space-x-5">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-accent to-brand-purple flex items-center justify-center shadow-[0_0_20px_#0660d8]">
                <Bot className="text-brand-light w-8 h-8" />
              </div>
              <div>
                <h3 className="text-brand-light font-black tracking-widest text-lg">Ada</h3>
                <p className="text-[10px] text-brand-purple uppercase font-black tracking-[0.3em] flex items-center">
                  <span className="w-2 h-2 rounded-full bg-brand-purple mr-2 animate-pulse shadow-[0_0_10px_#6b0073]"></span>
                  Neural Link Online
                </p>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-8 space-y-6">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-5 rounded-[2rem] text-sm leading-relaxed shadow-lg ${
                      msg.role === 'user'
                        ? 'bg-brand-accent text-brand-light font-black rounded-tr-none shadow-[0_5px_15px_rgba(6,96,216,0.2)]'
                        : 'bg-brand-primary border border-brand-purple/20 text-brand-light rounded-tl-none font-light'
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-brand-primary p-5 rounded-3xl rounded-tl-none border border-brand-purple/10 flex space-x-2 items-center">
                    <span className="w-2 h-2 bg-brand-accent rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-brand-purple rounded-full animate-bounce delay-150"></span>
                    <span className="w-2 h-2 bg-brand-accent rounded-full animate-bounce delay-300"></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-8 border-t border-brand-accent/10 bg-brand-support/60 backdrop-blur-xl">
              <div className="flex items-center space-x-4 bg-brand-primary/40 rounded-3xl px-6 py-4 border border-brand-accent/20 focus-within:border-brand-accent transition-all">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Transmit intent..."
                  className="bg-transparent border-none outline-none text-brand-light text-sm w-full placeholder-gray-600 font-light"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="text-brand-accent hover:scale-125 disabled:opacity-50 transition-all p-1"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;