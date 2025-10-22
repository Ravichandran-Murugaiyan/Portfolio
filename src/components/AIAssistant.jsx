import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import './AIAssistant.css';

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your AI assistant. I can tell you about Ravichandran's skills, experience, projects, and more. What would you like to know?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const predefinedResponses = {
    'hello': "Hello! I'm here to help you learn more about Ravichandran. You can ask about his skills, experience, projects, or contact information.",
    'hi': "Hi there! How can I assist you today?",
    'skills': "Ravichandran specializes in:\n\n• Full Stack Development (MERN Stack) - Advanced\n• AI & Machine Learning - Intermediate\n• Data Science - Intermediate\n• Problem Solving - Intermediate\n\nHe's proficient in React, Node.js, Python, Django and various AI frameworks.",
    'experience': "Ravichandran has experience in:\n\n• Full Stack Development projects\n• Data science Projects\n• Web Scraping (Automation)\n• Team leadership and training\n",
    'projects': "While specific project details aren't listed here, Ravichandran works on:\n\n• Web applications using MERN stack\n• AI-based projects and implementations\n• Web Pages using python FullStack Development\n• Interactive portfolio websites like this one!\n\nYou can check his GitHub or contact him directly for more project details.",
    'contact': "You can contact Ravichandran through:\n\n• Email: Use the contact section below\n• LinkedIn: Check his profile\n• GitHub: For code and projects\n\nFeel free to reach out for collaborations or opportunities!",
    'education': "Ravichandran has a strong background in computer science with focus on:\n\n• Bachelor of Engineering \n in Computer Science And Engineering.\n• Additional Courses:\n• Full Stack DEvelopment \n• Data science Fundamentals.",
    'default': "I understand you're asking about: \"{query}\". Currently I can help you with information about:\n\n• Skills and Technologies\n• Experience\n• Projects\n• Contact Information\n• Education Background\n\nTry asking about any of these topics!"
  };

  const getBotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('skill') || lowerMessage.includes('tech')) {
      return predefinedResponses.skills;
    } else if (lowerMessage.includes('experience') || lowerMessage.includes('work')) {
      return predefinedResponses.experience;
    } else if (lowerMessage.includes('project') || lowerMessage.includes('portfolio')) {
      return predefinedResponses.projects;
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('hire')) {
      return predefinedResponses.contact;
    } else if (lowerMessage.includes('education') || lowerMessage.includes('background') || lowerMessage.includes('learn')) {
      return predefinedResponses.education;
    } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return predefinedResponses.hello;
    } else {
      return predefinedResponses.default.replace('{query}', userMessage);
    }
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI thinking
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: getBotResponse(inputMessage),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickQuestions = [
    "What are his skills?",
    "Tell me about his experience",
    "What projects has he done?",
    "How to contact him?"
  ];

  return (
    <>
      {/* Floating AI Button */}
      <button 
        className={`ai-assistant-btn ${isOpen ? 'hidden' : ''}`}
        onClick={() => setIsOpen(true)}
      >
        <MessageCircle size={24} />
        <span className="pulse-dot"></span>
      </button>

      {/* AI Chat Modal */}
      {isOpen && (
        <div className="ai-assistant-modal">
          <div className="ai-chat-container">
            {/* Header */}
            <div className="chat-header">
              <div className="chat-title">
                <Bot size={20} />
                <span>AI_ASSISTANT.exe</span>
                <div className="status-indicator"></div>
              </div>
              <button 
                className="close-btn"
                onClick={() => setIsOpen(false)}
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="chat-messages">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`message ${message.isBot ? 'bot-message' : 'user-message'}`}
                >
                  <div className="message-avatar">
                    {message.isBot ? <Bot size={16} /> : <User size={16} />}
                  </div>
                  <div className="message-content">
                    <div className="message-text">
                      {message.text.split('\n').map((line, index) => (
                        <span key={index}>
                          {line}
                          {index < message.text.split('\n').length - 1 && <br />}
                        </span>
                      ))}
                    </div>
                    <div className="message-time">
                      {message.timestamp.toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="message bot-message typing-indicator">
                  <div className="message-avatar">
                    <Bot size={16} />
                  </div>
                  <div className="message-content">
                    <div className="typing-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            <div className="quick-questions">
              {quickQuestions.map((question, index) => (
                <button
                  key={index}
                  className="quick-question-btn"
                  onClick={() => {
                    setInputMessage(question);
                    setTimeout(handleSendMessage, 100);
                  }}
                >
                  {question}
                </button>
              ))}
            </div>

            {/* Input Area */}
            <div className="chat-input-container">
              <div className="chat-input-wrapper">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about skills, experience, projects..."
                  className="chat-input"
                />
                <button 
                  onClick={handleSendMessage}
                  disabled={inputMessage.trim() === ''}
                  className="send-btn"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant;