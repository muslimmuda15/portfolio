import React from "react";
import { Skills } from "../../data/skills";

export const skills = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 md:p-8 animate-fade-in-up">
      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
        Skills & Expertise
      </h1>

      {/* Skills Categories */}
      <div className="space-y-8">
        {Skills.map((category, index) => (
          <div key={index} className="space-y-4">
            {/* Category Title */}
            <div className="flex items-center gap-2">
              <span className="text-xl">{category.icon}</span>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-100">
                {category.title}
              </h2>
            </div>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-4 py-1.5 bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-200 rounded-full text-sm font-medium hover:bg-gray-200 dark:hover:bg-white/20 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Text */}
      <div className="mt-12 space-y-4 text-gray-600 dark:text-gray-300 border-t border-gray-200 dark:border-gray-800 pt-8">
        <p className="text-base leading-relaxed">
          You can check out all my skills above! I've got a mix of skills like
          coding in various languages. I'm all about that balance! 💪
        </p>
        <p className="text-base leading-relaxed">
          What skills are you looking to develop or improve?
        </p>
      </div>
    </div>
  );
};
