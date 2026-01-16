import { Project } from "@/data/projects";
import { getCategoryIcon, getStatusColor } from "@/app/contants/projects";

interface ProjectDialogProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectDialog({
  project,
  onClose,
}: ProjectDialogProps) {
  return (
    <div
      className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-zoom-in border border-gray-200 dark:border-white/10"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors"
        aria-label="Close dialog"
      >
        <svg
          className="w-6 h-6 text-gray-600 dark:text-gray-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Header with Image */}
      <div className="relative h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-500/10 dark:to-purple-500/10">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-8xl opacity-30">
            {getCategoryIcon(project.category)}
          </div>
        </div>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-3 py-1 bg-white/90 dark:bg-black/50 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-700 dark:text-gray-200">
            {project.year}
          </span>
          <span className="px-3 py-1 bg-white/90 dark:bg-black/50 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-700 dark:text-gray-200">
            {project.category}
          </span>
        </div>

        <div className="absolute top-4 right-16">
          <span
            className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(
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

      {/* Content */}
      <div className="p-8 space-y-6">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          {project.title}
        </h2>

        {/* Description */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            About This Project
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {project.longDescription || project.description}
          </p>
        </div>

        {/* Technologies */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            Technologies Used
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1.5 bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-200 rounded-lg text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        {(project.liveUrl || project.githubUrl) && (
          <div className="flex gap-4 pt-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <span>🌐</span>
                View Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-900 dark:bg-white/10 dark:hover:bg-white/20 text-white rounded-lg font-medium transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <span>💻</span>
                View on GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
