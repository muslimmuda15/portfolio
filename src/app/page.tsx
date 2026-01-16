"use client";

import { useState, useRef, useEffect } from "react";
import { useDarkMode } from "@/components/DarkModeProvider";
import Image from "next/image";
import { me as Me } from "@/app/contants/me";
import { skills as Skills } from "@/app/contants/skills";
import { projects as Projects } from "@/app/contants/projects";
import { contacts as Contacts } from "@/app/contants/contacts";
import { navigationButtons } from "@/app/contants/navigation";
import { Project } from "@/data/projects";
import ProjectDialog from "@/app/components/ProjectDialog";
import StreamingText from "@/app/components/StreamingText";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: string;
  section: Section;
}

type Section = "me" | "skills" | "projects" | "ai" | "contacts" | "prompt";

export default function Home() {
  const [inputValue, setInputValue] = useState({
    message: "",
    section: "prompt",
  });
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  // AI Chat state
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Input focus state for animation
  const [isInputFocused, setIsInputFocused] = useState(false);

  useEffect(() => {
    if (!isLoading && isInputFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isLoading, isInputFocused]);

  // Project Dialog state
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    console.log("Message :", messages);
    scrollToBottom();
  }, [messages]);

  // Handle ESC key and body scroll lock for dialog
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isDialogOpen) {
        closeDialog();
      }
    };

    if (isDialogOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isDialogOpen]);

  const openDialog = (project: Project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setTimeout(() => setSelectedProject(null), 300); // Wait for animation
  };

  const sendMessage = async (messageContent: string, section: Section) => {
    if (!messageContent.trim() || isLoading) return;

    const userMessage: Message = {
      role: "user",
      content: messageContent,
      section,
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue({
      message: "",
      section: "prompt",
    });
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: messageContent,
          section,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get AI response");
      }

      const data = await response.json();

      const aiMessage: Message = {
        role: "assistant",
        content: data.response,
        section: data.type,
        timestamp: new Date().toISOString(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      setError(
        "Failed to connect to AI service. Please make sure OPEN_ROUTER_API_KEY is configured."
      );
      console.error("AI Error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNavigate = (section: string) => {
    let data: { message: string; section: Section } = {
      message: "",
      section: "prompt",
    };
    switch (section) {
      case "me":
        data = {
          message: "Who are you? I want to know more about you",
          section: "me",
        };
        break;
      case "skills":
        data = {
          message:
            "What are your skills? Give me a list of your soft and hard skills.",
          section: "skills",
        };

        break;
      case "projects":
        data = {
          message: "What are your projects? Give me a list of your projects.",
          section: "projects",
        };
        break;
      case "contact":
        data = {
          message:
            "What are your contact information? Give me a list of your contact information.",
          section: "contacts",
        };
        break;
      default:
        break;
    }
    setInputValue(data);
    setTimeout(() => {
      // Refocus the input after navigation
      inputRef.current?.focus();
    }, 0);
    setTimeout(() => {
      sendMessage(data.message, data.section as Section);
    }, 300);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue({
      message: event.target.value,
      section: "prompt",
    });
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && inputValue.message.trim()) {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    await sendMessage(inputValue.message, inputValue.section as Section);
    // Refocus the input after submission
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  // useEffect(() => {
  //   console.log("isDarkMode", isDarkMode);
  // }, [isDarkMode]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-between relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:bg-gradient-to-br dark:from-[#1a1a1a] dark:to-[#2d2d2d]">
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
        <Image
          src="/photo.jpg"
          alt="Profile"
          width={48}
          height={48}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-gray-300 dark:border-white/30 shadow-lg hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Greeting word at top-center OR Chat Messages */}
      <div className="relative w-200 z-10 flex-1 flex items-center justify-center overflow-y-auto px-4 mb-0 scrollbar-autohide">
        {messages.length === 0 ? (
          <div className="text-center animate-fade-in-down">
            <h1 className="text-7xl md:text-8xl font-bold mb-2">👋</h1>
            <p className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-100">
              Hello!
            </p>
          </div>
        ) : (
          <div className="w-full max-w-200 space-y-6 py-6 h-[calc(100vh-12rem)]">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`${
                    message.role === "assistant" && message.section !== "prompt"
                      ? "max-w-full"
                      : "max-w-[80%]"
                  } ${
                    message.role === "user"
                      ? "rounded-2xl px-6 py-4 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-cyan-400 text-white shadow-lg"
                      : "text-gray-900 dark:text-white"
                  }`}
                >
                  {message.role === "assistant" ? (
                    message.section === "me" ? (
                      <Me />
                    ) : message.section === "skills" ? (
                      <Skills />
                    ) : message.section === "projects" ? (
                      <Projects onProjectClick={openDialog} />
                    ) : message.section === "contacts" ? (
                      <Contacts />
                    ) : (
                      <StreamingText
                        text={message.content}
                        className="text-sm md:text-base whitespace-pre-wrap px-4"
                        onUpdate={scrollToBottom}
                      />
                    )
                  ) : (
                    <p className="text-sm md:text-base whitespace-pre-wrap">
                      {message.content}
                    </p>
                  )}
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
      <div className="relative z-10 w-full max-w-200 flex flex-col items-center gap-4 pb-4">
        {/* Navigation buttons */}
        <div
          className={`flex gap-2 w-full overflow-hidden transition-all duration-500 ease-in-out ${
            !isInputFocused ? "max-h-0 opacity-0" : "max-h-20 opacity-100 mt-4"
          }`}
        >
          {navigationButtons.map((button) => (
            <button
              key={button.id}
              onClick={() => handleNavigate(button.id)}
              className="flex-1 px-3 py-2.5 text-sm font-medium rounded-lg bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 transition-all duration-200 hover:bg-gray-50 dark:hover:bg-white/10 hover:border-blue-300 dark:hover:border-blue-400/30 active:scale-95 flex items-center justify-center gap-1.5"
            >
              <span className="text-base">{button.icon}</span>
              <span className="text-xs font-medium">{button.label}</span>
            </button>
          ))}
        </div>

        {/* Search Input with Send Button */}
        <div
          className={`relative animate-fade-in-up transition-all duration-500 ease-in-out ${
            isInputFocused ? "w-full" : "w-[60%]"
          }`}
        >
          <input
            ref={inputRef}
            type="text"
            placeholder="Ask me anything..."
            value={inputValue.message}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => !isLoading && setIsInputFocused(false)}
            disabled={isLoading}
            className="w-full px-6 py-4 pr-14 text-base bg-white dark:bg-white/5 backdrop-blur-sm rounded-full border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 shadow-lg transition-all duration-300 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
            autoComplete="off"
          />
          <button
            onClick={handleSubmit}
            disabled={!inputValue.message.trim() || isLoading}
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

      {/* Project Modal */}
      {isDialogOpen && selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeDialog}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Dialog Content */}
          <ProjectDialog project={selectedProject} onClose={closeDialog} />
        </div>
      )}
    </div>
  );
}
