"use client";

import { useState, useRef, useEffect } from "react";
import { useDarkMode } from "@/components/DarkModeProvider";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  // AI Chat state
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleNavigate = (section: string) => {
    console.log(`Navigating to ${section}`);
    // Navigate to the appropriate page
    if (section === "ai") {
      window.location.href = "/ai";
    }
    // Add your navigation logic for other sections here
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && inputValue.trim()) {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      role: "user",
      content: inputValue,
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:8000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: inputValue,
          conversation_id: conversationId,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get AI response");
      }

      const data = await response.json();

      if (!conversationId) {
        setConversationId(data.conversation_id);
      }

      const aiMessage: Message = {
        role: "assistant",
        content: data.response,
        timestamp: new Date().toISOString(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      setError(
        "Failed to connect to AI backend. Make sure the Python server is running on port 8000."
      );
      console.error("AI Error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  // useEffect(() => {
  //   console.log("isDarkMode", isDarkMode);
  // }, [isDarkMode]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-between relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:bg-gradient-to-br dark:from-[#1a1a1a] dark:to-[#2d2d2d]">
      {/* Soft gradient background blobs */}
      {/* <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse-slow" />
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      /> */}

      {/* Dark Mode Toggle & Profile Photo - Top Right Corner */}
      <div className="absolute top-8 right-8 z-20 flex items-center gap-4">
        {/* Dark Mode Toggle Button */}
        <button
          onClick={toggleDarkMode}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white dark:bg-white/10 backdrop-blur-sm border border-gray-200 dark:border-white/20 shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl"
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? (
            // Sun icon for light mode
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 md:w-6 md:h-6 text-yellow-500"
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          ) : (
            // Moon icon for dark mode
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 md:w-6 md:h-6 text-gray-700"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>

        {/* Profile Photo */}
        <img
          src="/photo.jpg"
          alt="Profile"
          className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-gray-300 dark:border-white/30 shadow-lg hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Greeting word at top-center OR Chat Messages */}
      <div className="relative z-10 flex-1 flex items-center justify-center w-full overflow-y-auto px-4 mb-4">
        {messages.length === 0 ? (
          <div className="text-center animate-fade-in-down">
            <h1 className="text-7xl md:text-8xl font-bold mb-2">👋</h1>
            <p className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
              Hello!
            </p>
          </div>
        ) : (
          <div className="w-full max-w-2xl space-y-6 py-6 h-[calc(100vh-12rem)]">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                } animate-fade-in-up`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-6 py-4 ${
                    message.role === "user"
                      ? "bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-cyan-400 text-white"
                      : "bg-white dark:bg-white/10 text-gray-900 dark:text-white border border-gray-200 dark:border-white/10"
                  } shadow-lg`}
                >
                  <p className="text-sm md:text-base whitespace-pre-wrap">
                    {message.content}
                  </p>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start animate-fade-in-up">
                <div className="bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 rounded-2xl px-6 py-4 shadow-lg">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                    <div
                      className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                    <div
                      className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                      style={{ animationDelay: "0.4s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}

            {error && (
              <div className="flex justify-center animate-fade-in">
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl px-6 py-4 max-w-[80%]">
                  <p className="text-red-600 dark:text-red-400 text-sm">
                    ⚠️ {error}
                  </p>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Search Input and Navigation buttons at bottom */}
      <div className="relative z-10 w-full max-w-2xl flex flex-col items-center gap-4 pb-4">
        {/* Navigation buttons */}
        <div className="flex gap-3 w-full animate-fade-in-up-delay">
          <button
            onClick={() => handleNavigate("me")}
            className="flex-1 px-4 py-3 text-sm font-medium rounded-2xl bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-300 dark:border-white/10 text-gray-800 dark:text-gray-200 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:bg-blue-50 dark:hover:bg-white/10 active:translate-y-0 flex items-center justify-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 text-gray-700 dark:text-gray-300"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            Me
          </button>

          <button
            onClick={() => handleNavigate("projects")}
            className="flex-1 px-4 py-3 text-sm font-medium rounded-2xl bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-300 dark:border-white/10 text-gray-800 dark:text-gray-200 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:bg-blue-50 dark:hover:bg-white/10 active:translate-y-0 flex items-center justify-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 text-gray-700 dark:text-gray-300"
            >
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
            </svg>
            Projects
          </button>

          <button
            onClick={() => handleNavigate("skills")}
            className="flex-1 px-4 py-3 text-sm font-medium rounded-2xl bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-300 dark:border-white/10 text-gray-800 dark:text-gray-200 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:bg-blue-50 dark:hover:bg-white/10 active:translate-y-0 flex items-center justify-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 text-gray-700 dark:text-gray-300"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            Skills
          </button>

          <button
            onClick={() => handleNavigate("ai")}
            className="flex-1 px-4 py-3 text-sm font-medium rounded-2xl bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-300 dark:border-white/10 text-gray-800 dark:text-gray-200 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:bg-blue-50 dark:hover:bg-white/10 active:translate-y-0 flex items-center justify-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 text-gray-700 dark:text-gray-300"
            >
              <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
              <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
              <circle cx="12" cy="19" r="3" />
            </svg>
            AI
          </button>

          <button
            onClick={() => handleNavigate("fun")}
            className="flex-1 px-4 py-3 text-sm font-medium rounded-2xl bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-300 dark:border-white/10 text-gray-800 dark:text-gray-200 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:bg-blue-50 dark:hover:bg-white/10 active:translate-y-0 flex items-center justify-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            Fun
          </button>

          <button
            onClick={() => handleNavigate("contact")}
            className="flex-1 px-4 py-3 text-sm font-medium rounded-2xl bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-300 dark:border-white/10 text-gray-800 dark:text-gray-200 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:bg-blue-50 dark:hover:bg-white/10 active:translate-y-0 flex items-center justify-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 text-gray-700 dark:text-gray-300"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Contact
          </button>
        </div>

        {/* Search Input with Send Button */}
        <div className="relative w-full animate-fade-in-up">
          <input
            type="text"
            placeholder="Ask me anything..."
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            disabled={isLoading}
            className="w-full px-6 py-4 pr-14 text-base bg-white dark:bg-white/5 backdrop-blur-sm rounded-full border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 shadow-lg transition-all duration-300 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
            autoComplete="off"
          />
          <button
            onClick={handleSubmit}
            disabled={!inputValue.trim() || isLoading}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-cyan-400 flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-110 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
            aria-label="Send message"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 text-white"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
