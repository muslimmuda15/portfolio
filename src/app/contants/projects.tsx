import React from "react";
import Image from "next/image";

import { Projects, getFeaturedProjects, Project } from "../../data/projects";

interface ProjectsProps {
  onProjectClick?: (project: Project) => void;
}

export const projects = ({ onProjectClick }: ProjectsProps = {}) => {
  const featuredProjects = getFeaturedProjects();
  const allProjects = Projects;

  return (
    <div className="w-full max-w-6xl mx-auto py-4 animate-fade-in-up">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Projects & Work
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
          Here are some of the projects I&apos;ve built over the years. From
          mobile apps to web platforms, each project represents a unique
          challenge and learning experience. 🚀
        </p>
      </div>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2">
            <span className="text-2xl">⭐</span>
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                onClick={() => onProjectClick?.(project)}
                className="group relative bg-white dark:bg-white/5 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 cursor-pointer"
              >
                {/* Project Image */}
                <div className="relative h-56 bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-500/10 dark:to-purple-500/10 overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl opacity-30">
                        {getCategoryIcon(project.category)}
                      </div>
                    </div>
                  )}
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                        project.status
                      )}`}
                    >
                      {project.status === "in-progress"
                        ? "In Progress"
                        : project.status.charAt(0).toUpperCase() +
                          project.status.slice(1)}
                    </span>
                  </div>
                </div>

                {/* Year Badge - Top Right */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 dark:bg-black/50 backdrop-blur-sm rounded-full text-sm text-gray-700 dark:text-gray-200 font-medium">
                    {project.year}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Title */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-200 rounded-lg text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 text-gray-500 dark:text-gray-400 text-xs font-medium">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
                      >
                        <span>🌐</span>
                        Live Demo
                      </a>
                    )}
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-4 py-2 bg-gray-800 hover:bg-gray-900 dark:bg-white/10 dark:hover:bg-white/20 text-white rounded-lg text-sm font-medium transition-colors"
                      >
                        <span>💻</span>
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* All Projects */}
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
          All Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProjects.map((project, index) => (
            <div
              key={index}
              onClick={() => onProjectClick?.(project)}
              className="group bg-white dark:bg-white/5 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 hover:-translate-y-1 cursor-pointer"
            >
              {/* Compact Image */}
              <div className="relative h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-500/10 dark:to-purple-500/10 overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-5xl opacity-30">
                      {getCategoryIcon(project.category)}
                    </div>
                  </div>
                )}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2 py-1 bg-white/90 dark:bg-black/50 backdrop-blur-sm rounded-md text-xs font-semibold text-gray-700 dark:text-gray-200">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-3 right-3 z-10">
                  <span className="px-2 py-1 bg-white/90 dark:bg-black/50 backdrop-blur-sm rounded-md text-xs font-semibold text-gray-700 dark:text-gray-200">
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack - Compact */}
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-0.5 bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-200 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-0.5 text-gray-500 dark:text-gray-400 text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Compact Links */}
                <div className="flex gap-2 pt-1">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-medium transition-colors"
                    >
                      Live
                    </a>
                  )}
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-3 py-1.5 bg-gray-800 hover:bg-gray-900 dark:bg-white/10 dark:hover:bg-white/20 text-white rounded-lg text-xs font-medium transition-colors"
                    >
                      Link
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 space-y-4 text-gray-600 dark:text-gray-300 border-t border-gray-200 dark:border-gray-800 pt-8">
        <p className="text-base leading-relaxed">
          These projects showcase my journey in software development, from
          mobile applications to full-stack web platforms. Each one taught me
          something valuable! 💡
        </p>
        <p className="text-base leading-relaxed">
          Want to collaborate on a project or have an idea you&apos;d like to
          discuss? Let&apos;s chat!
        </p>
      </div>
    </div>
  );
};

// Helper function to get category icon
export function getCategoryIcon(category: string): string {
  const icons: Record<string, string> = {
    web: "🌐",
    mobile: "📱",
    fullstack: "⚡",
    ai: "🤖",
    desktop: "🖥️",
    other: "💻",
  };
  return icons[category] || "💻";
}

// Helper function to get status color
export function getStatusColor(status: string): string {
  const colors: Record<string, string> = {
    completed:
      "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300",
    "in-progress":
      "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
    archived:
      "bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-300",
  };
  return colors[status] || colors.completed;
}
