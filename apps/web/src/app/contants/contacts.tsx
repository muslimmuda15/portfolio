import React from "react";
import { ContactInfo, SOCIAL_LINKS, AVAILABILITY } from "../../data/contacts";

export const contacts = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 md:p-8 animate-fade-in-up">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Let's Connect! 🤝
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          I'm always excited to collaborate on interesting projects or just have
          a chat about tech. Feel free to reach out through any of these
          channels!
        </p>
      </div>

      {/* Availability Status */}
      <div className="mb-10">
        <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-6 border border-green-200 dark:border-green-800/30">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <div className="absolute inset-0 w-4 h-4 bg-green-500 rounded-full animate-ping opacity-75"></div>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                {AVAILABILITY.message}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {AVAILABILITY.responseTime}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
          Contact Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ContactInfo.map((contact, index) => (
            <div
              key={index}
              className={`group relative bg-white dark:bg-white/5 rounded-xl p-6 border transition-all duration-300 ${
                contact.primary
                  ? "border-blue-300 dark:border-blue-700 shadow-md hover:shadow-xl"
                  : "border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 hover:shadow-lg"
              }`}
            >
              {contact.primary && (
                <div className="absolute -top-3 -right-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-600 text-white shadow-lg">
                    ⭐ Primary
                  </span>
                </div>
              )}

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 text-4xl">{contact.icon}</div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                    {contact.label}
                  </h3>
                  {contact.link ? (
                    <a
                      href={contact.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <p className="text-lg font-semibold text-gray-900 dark:text-white break-all">
                      {contact.value}
                    </p>
                  )}
                  {contact.description && (
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                      {contact.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Social Media Links */}
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
          Social Media
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SOCIAL_LINKS.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-4 p-5 rounded-xl text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl ${social.color}`}
            >
              <div className="text-3xl">{social.icon}</div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-white mb-0.5">
                  {social.platform}
                </h3>
                <p className="text-sm text-white/90 truncate">
                  {social.username}
                </p>
              </div>
              <svg
                className="w-5 h-5 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          ))}
        </div>
      </div>

      {/* Contact Form CTA */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 md:p-10 text-center text-white shadow-2xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Have a Project in Mind? 💡
        </h2>
        <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
          Whether you have a question, want to collaborate, or just want to say
          hi, I'd love to hear from you. Let's build something amazing together!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:rachmad.af@garasilabs.com"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-xl"
          >
            <span className="text-xl">📧</span>
            Send an Email
          </a>
          <a
            href="https://linkedin.com/in/rachmadalif"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span className="text-xl">💼</span>
            Connect on LinkedIn
          </a>
        </div>
      </div>

      {/* Footer Note */}
      <div className="mt-12 text-center space-y-4 text-gray-600 dark:text-gray-300 border-t border-gray-200 dark:border-gray-800 pt-8">
        <p className="text-base leading-relaxed">
          I'm based in Surabaya, Indonesia 🇮🇩 but I work with clients and teams
          from all around the world! 🌍
        </p>
        <p className="text-base leading-relaxed">
          Looking forward to connecting with you! 😊
        </p>
      </div>
    </div>
  );
};
