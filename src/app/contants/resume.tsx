import React from "react";
import { Resume as ResumeData } from "../../data/resume";

export const resume = () => {
  return (
    <div className="w-full max-w-4xl mx-auto py-4 animate-fade-in-up">
      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Resume
      </h1>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
        Download my complete resume to learn more about my professional
        experience, technical skills, and educational background. Click the
        button below to view the full PDF document in a new tab.
      </p>

      {/* Open PDF in New Tab Button */}
      <div className="mb-6">
        <a
          href={ResumeData.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
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
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
          Open Resume
        </a>
      </div>

      {/* PDF Viewer */}
      {/* <div className="w-full border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800">
        <iframe
          src={ResumeData.url}
          className="w-full h-[600px] md:h-[800px]"
          title="Resume PDF"
        />
      </div> */}

      {/* Footer Text */}
      {/* <div className="mt-8 space-y-4 text-gray-600 dark:text-gray-300 border-t border-gray-200 dark:border-gray-800 pt-8">
        <p className="text-base leading-relaxed">
          You can view my resume above or download it for offline viewing. Feel
          free to reach out if you have any questions!
        </p>
      </div> */}
    </div>
  );
};
