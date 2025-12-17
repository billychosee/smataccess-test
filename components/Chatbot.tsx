"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  PaperAirplaneIcon,
  ChatBubbleLeftIcon,
  XMarkIcon,
  CheckIcon,
  XMarkIcon as XIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  cards?: PricingCard[];
  questions?: OnboardingQuestion[];
}

interface PricingCard {
  id: string;
  name: string;
  price: string;
  tagline: string;
  isPopular: boolean;
  features: string[];
  missingFeatures: string[];
  buttonText: string;
  link: string;
}

interface OnboardingQuestion {
  id: string;
  question: string;
  category: string;
}

const PRICING_CARDS: PricingCard[] = [
  {
    id: "residential",
    name: "Residential",
    price: "$5",
    tagline: "Cluster Homes, Residential Complexes, Apartment Buildings",
    isPopular: false,
    features: [
      "Digital Visitor Logbook",
      "Web-Based Admin Portal",
      "Tier 1 (Self-Serve) Support",
      "Mobile App (iOS & Android)",
    ],
    missingFeatures: ["Time & Attendance Module", "Cloud-Based Audit Logs"],
    buttonText: "Start Free Trial",
    link: "/signup/residential",
  },
  {
    id: "business",
    name: "Business Standard",
    price: "$70",
    tagline: "Best for Corporate Offices, SMEs, Single-Site Facilities",
    isPopular: true,
    features: [
      "Time & Attendance Module",
      "Cloud-Based Audit Logs",
      "Web Admin Portal",
      "All core access control features",
      "Tier 1 (Self-Serve) Support",
    ],
    missingFeatures: [
      "Advanced Zoned-Off Access Control",
      "Centralized Multi-Site Management",
    ],
    buttonText: "Request Quote",
    link: "/contact/business",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "$500-1200",
    tagline:
      "Best for Mining Operations, Banks, Manufacturing, Multi-Site Corporations",
    isPopular: false,
    features: [
      "Advanced Zoned-Off Access Control (for high-security areas, vaults, etc.)",
      "Centralized Multi-Site Management Dashboard",
      "Custom Integrations & API Access",
      "Includes all Business Standard features",
      "Tier 2 (Enterprise) Support",
    ],
    missingFeatures: [],
    buttonText: "Contact Sales",
    link: "/contact/enterprise",
  },
];

const ONBOARDING_QUESTIONS: OnboardingQuestion[] = [
  {
    id: "pricing",
    question: "What are your pricing plans?",
    category: "pricing",
  },
  {
    id: "features",
    question: "What features do you offer?",
    category: "product",
  },
  {
    id: "demo",
    question: "Can I see a demo?",
    category: "demo",
  },
  {
    id: "support",
    question: "What kind of support do you provide?",
    category: "support",
  },
  {
    id: "installation",
    question: "How does installation work?",
    category: "installation",
  },
  {
    id: "industries",
    question: "What industries do you serve?",
    category: "industries",
  },
];

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm here to help you learn about SmatAccess. Ask me about our products, pricing, or services. You can also click on the suggested questions below to get started!",
      isUser: false,
      timestamp: new Date(),
      questions: ONBOARDING_QUESTIONS.slice(0, 3), // Show first 3 questions initially
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleCardExpansion = (cardId: string) => {
    setExpandedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(cardId)) {
        newSet.delete(cardId);
      } else {
        newSet.add(cardId);
      }
      return newSet;
    });
  };

  const handleQuestionClick = (question: string) => {
    setInputMessage(question);
    setTimeout(() => handleSendMessage(), 100);
  };


  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) {
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage.trim(),
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: inputMessage.trim() }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to get response");
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.reply,
        isUser: false,
        timestamp: new Date(),
      };

      // Auto-show pricing cards if user asks about pricing
      const lowerMessage = inputMessage.toLowerCase();
      if (
        lowerMessage.includes("pricing") ||
        lowerMessage.includes("cost") ||
        lowerMessage.includes("price") ||
        lowerMessage.includes("fee") ||
        lowerMessage.includes("plan")
      ) {
        botMessage.cards = PRICING_CARDS;
      }

      setMessages((prev) => [...prev, botMessage]);
    } catch {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Sorry, I encountered an error. Please try again.",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  if (!isOpen) {
    return (
      <div className="fixed z-50 bottom-6 right-6">
        <button
          onClick={() => setIsOpen(true)}
          className="group relative overflow-hidden bg-gradient-to-r from-[#2090C4] to-[#0284c7] hover:from-[#0284c7] hover:to-[#2090C4] text-white rounded-full p-4 shadow-2xl transition-all duration-500 transform hover:scale-110 hover:rotate-3"
          aria-label="Open chat"
        >
          {/* Animated background pulse */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#2090C4] to-[#0284c7] rounded-full animate-pulse opacity-20"></div>

          {/* Chat bubble icon */}
          <ChatBubbleLeftIcon className="relative w-6 h-6 transition-transform duration-300 transform group-hover:scale-110" />

          {/* Notification dot */}
          <div className="absolute w-3 h-3 rounded-full -top-1 -right-1 bg-gradient-to-r from-green-400 to-green-500 animate-pulse"></div>
        </button>
      </div>
    );
  }

  return (
    <div className="fixed z-50 bottom-6 right-6 w-80 sm:w-96">
      {/* Main chat container with glass morphism effect */}
      <div className="relative overflow-hidden border shadow-2xl bg-white/95 backdrop-blur-xl rounded-2xl border-white/20">
        {/* Gradient header */}
        <div className="relative bg-gradient-to-r from-[#2090C4] to-[#0284c7] p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20">
                  <ChatBubbleLeftIcon className="w-4 h-4 text-white" />
                </div>
                <div className="absolute w-3 h-3 bg-green-400 border-2 border-white rounded-full -bottom-1 -right-1"></div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">
                  SmatAccess Assistant
                </h3>
                <p className="text-xs text-white/80">Online now</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 transition-all duration-200 rounded-full text-white/80 hover:text-white hover:bg-white/10"
              aria-label="Close chat"
            >
              <XMarkIcon className="w-4 h-4" />
            </button>
          </div>

          {/* Header shine effect */}
          <div className="absolute inset-0 transform -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
        </div>

        {/* Sleek disclaimer */}
        <div className="px-4 py-2 border-b border-yellow-100 bg-gradient-to-r from-yellow-50 to-orange-50">
          <p className="flex items-center text-xs text-yellow-800">
            <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2 animate-pulse"></span>
            AI responses may be inaccurate
          </p>
        </div>

        {/* Messages container */}
        <div className="p-4 space-y-4 overflow-y-auto h-80 bg-gradient-to-b from-gray-50/50 to-white">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex animate-fadeIn ${
                message.isUser ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[85%] ${
                  message.isUser ? "order-2" : "order-1"
                }`}
              >
                <div
                  className={`relative px-4 py-3 rounded-2xl shadow-sm ${
                    message.isUser
                      ? "bg-gradient-to-r from-[#2090C4] to-[#0284c7] text-white rounded-br-md"
                      : "bg-white border border-gray-100 text-gray-800 rounded-bl-md"
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">
                    {message.text}
                  </p>

                  {/* Pricing Cards */}
                  {message.cards && (
                    <div className="mt-4 space-y-3">
                      {message.cards.map((card) => (
                        <div
                          key={card.id}
                          className={`p-4 rounded-lg border transition-all duration-300 cursor-pointer ${
                            card.isPopular
                              ? "bg-gradient-to-r from-[#2090C4]/10 to-[#0284c7]/10 border-[#2090C4]/30"
                              : "bg-gray-50 border-gray-200 hover:border-[#2090C4]/50"
                          }`}
                          onClick={() => toggleCardExpansion(card.id)}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <div className="flex items-center space-x-2">
                                <h4
                                  className={`font-semibold ${
                                    card.isPopular
                                      ? "text-[#2090C4]"
                                      : "text-gray-900"
                                  }`}
                                >
                                  {card.name}
                                </h4>
                                {card.isPopular && (
                                  <span className="px-2 py-1 text-xs bg-[#2090C4] text-white rounded-full">
                                    Popular
                                  </span>
                                )}
                              </div>
                              <p className="mt-1 text-sm text-gray-600">
                                {card.tagline}
                              </p>
                              <div className="flex items-center mt-2 space-x-1">
                                <CurrencyDollarIcon className="w-4 h-4 text-[#2090C4]" />
                                <span
                                  className={`font-bold ${
                                    card.isPopular
                                      ? "text-[#2090C4]"
                                      : "text-gray-900"
                                  }`}
                                >
                                  {card.price}/month
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center">
                              {expandedCards.has(card.id) ? (
                                <ChevronDownIcon className="w-5 h-5 text-gray-400" />
                              ) : (
                                <ChevronRightIcon className="w-5 h-5 text-gray-400" />
                              )}
                            </div>
                          </div>

                          {/* Expanded Details */}
                          {expandedCards.has(card.id) && (
                            <div className="pt-4 mt-4 border-t border-gray-200">
                              <div className="space-y-3">
                                <div>
                                  <h5 className="mb-2 text-sm font-semibold text-green-700">
                                    ✅ Included Features:
                                  </h5>
                                  <ul className="space-y-1">
                                    {card.features.map((feature, index) => (
                                      <li
                                        key={index}
                                        className="flex items-center text-xs text-gray-600"
                                      >
                                        <CheckIcon className="flex-shrink-0 w-3 h-3 mr-2 text-green-500" />
                                        {feature}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                {card.missingFeatures.length > 0 && (
                                  <div>
                                    <h5 className="mb-2 text-sm font-semibold text-red-700">
                                      ❌ Not Included:
                                    </h5>
                                    <ul className="space-y-1">
                                      {card.missingFeatures.map(
                                        (feature, index) => (
                                          <li
                                            key={index}
                                            className="flex items-center text-xs text-gray-500 line-through"
                                          >
                                            <XIcon className="flex-shrink-0 w-3 h-3 mr-2 text-red-400" />
                                            {feature}
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  </div>
                                )}
                                <div className="pt-2">
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      window.open(card.link, "_blank");
                                    }}
                                    className={`w-full py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                                      card.isPopular
                                        ? "bg-[#2090C4] text-white hover:bg-[#0284c7]"
                                        : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                                    }`}
                                  >
                                    {card.buttonText}
                                  </button>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Onboarding Questions */}
                  {message.questions && (
                    <div className="mt-4 space-y-2">
                      <p className="mb-3 text-xs text-gray-500">
                        Quick questions to get started:
                      </p>
                      {message.questions.map((question) => (
                        <button
                          key={question.id}
                          onClick={() => handleQuestionClick(question.question)}
                          className="w-full text-left p-3 text-sm bg-gray-50 hover:bg-[#2090C4]/10 border border-gray-200 hover:border-[#2090C4]/30 rounded-lg transition-all duration-200"
                        >
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-[#2090C4] rounded-full"></div>
                            <span className="text-gray-700 hover:text-[#2090C4]">
                              {question.question}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Message tail */}
                  <div
                    className={`absolute bottom-0 w-3 h-3 ${
                      message.isUser
                        ? "right-0 bg-gradient-to-r from-[#2090C4] to-[#0284c7] transform translate-x-1 translate-y-1 rotate-45"
                        : "left-0 bg-white border-l border-b border-gray-100 transform -translate-x-1 translate-y-1 rotate-45"
                    }`}
                  ></div>
                </div>
                <p
                  className={`text-xs mt-1 ${
                    message.isUser
                      ? "text-right text-[#2090C4]/70"
                      : "text-left text-gray-500"
                  }`}
                >
                  {formatTime(message.timestamp)}
                </p>
              </div>
            </div>
          ))}

          {/* Loading animation */}
          {isLoading && (
            <div className="flex justify-start animate-fadeIn">
              <div className="max-w-[85%]">
                <div className="px-4 py-3 bg-white border border-gray-100 shadow-sm rounded-2xl rounded-bl-md">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-[#2090C4] rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-[#2090C4] rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-[#2090C4] rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input area */}
        <div className="p-4 border-t border-gray-100 bg-white/80 backdrop-blur-sm">
          <div className="flex items-end space-x-3">
            <div className="relative flex-1">
              <input
                ref={inputRef}
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about our products, pricing, or services..."
                className="w-full px-4 py-3 pr-12 text-sm border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#2090C4] focus:border-transparent bg-white/90 backdrop-blur-sm placeholder-gray-500 transition-all duration-200"
                disabled={isLoading}
                maxLength={500}
              />
              <div className="absolute transform -translate-y-1/2 right-3 top-1/2">
                <span className="text-xs text-gray-400">
                  {inputMessage.length}/500
                </span>
              </div>
            </div>
            <button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim() || isLoading}
              className="bg-gradient-to-r from-[#2090C4] to-[#0284c7] hover:from-[#0284c7] hover:to-[#2090C4] disabled:from-gray-300 disabled:to-gray-400 text-white rounded-2xl p-3 transition-all duration-300 transform hover:scale-105 disabled:scale-100 shadow-lg"
              aria-label="Send message"
            >
              <PaperAirplaneIcon className="w-4 h-4 transform rotate-12" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2090C4]/20 to-[#0284c7]/20 rounded-2xl blur-xl -z-10 animate-pulse"></div>
    </div>
  );
};

export default Chatbot;

