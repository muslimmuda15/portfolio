import React from "react";
import NextImage from "next/image";
import { PROFILE } from "../../data/profile";

export const me = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 md:p-8 animate-fade-in-up">
      {/* Header Section with Photo and Intro */}
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Profile Photo */}
        <div className="flex-shrink-0 w-full md:w-auto flex justify-center md:justify-start">
          <div className="relative w-64 h-64 md:w-72 md:h-72 aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-white/10">
            <NextImage
              src={PROFILE.photo}
              alt={PROFILE.name}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Info Column */}
        <div className="flex-1 space-y-4 text-center md:text-left">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
              {PROFILE.name}
            </h1>
            <p className="text-lg text-gray-500 dark:text-gray-400 font-medium">
              {PROFILE.age} years old <span className="mx-2">•</span>{" "}
              {PROFILE.location}
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              Hey 👋
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
              {PROFILE.shortBio}
            </p>
          </div>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 justify-center md:justify-start pt-8">
        {PROFILE.skills.map((tag) => (
          <span
            key={tag}
            className="px-4 py-1.5 bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-200 rounded-full text-sm font-medium hover:bg-gray-200 dark:hover:bg-white/20 transition-colors cursor-default"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Bio Text Section */}
      <div className="mt-8 md:mt-12 space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed border-t border-gray-200 dark:border-gray-800 padding-t-8 pt-8">
        <p className="whitespace-pre-line">{PROFILE.bio}</p>
      </div>
    </div>
  );
};
