export interface Project {
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  category: "web" | "mobile" | "fullstack" | "ai" | "other";
  featured?: boolean;
  year: number;
  status: "completed" | "in-progress" | "archived";
}

export const Projects: Project[] = [
  {
    title: "Smart AutoClicker",
    description:
      "An intelligent auto-clicking application for Android with advanced gesture recognition and automation features.",
    longDescription:
      "Smart AutoClicker is a powerful Android application that enables users to automate repetitive tasks with intelligent gesture recognition. Features include multi-point clicking, gesture recording, and customizable automation workflows.",
    technologies: ["Kotlin", "Android", "Java", "Material Design"],
    image: "/projects/smart-autoclicker.jpg",
    githubUrl: "https://github.com/yourusername/smart-autoclicker",
    category: "mobile",
    featured: true,
    year: 2024,
    status: "completed",
  },
  {
    title: "AI Portfolio Assistant",
    description:
      "An interactive portfolio website with integrated AI chat assistant powered by Gemini AI.",
    longDescription:
      "A modern portfolio website featuring an AI-powered chat assistant that can answer questions about skills, experience, and projects. Built with Next.js and integrated with Gemini AI for intelligent conversations.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Gemini AI",
      "Tailwind CSS",
    ],
    image: "/projects/ai-portfolio.jpg",
    liveUrl: "https://rachmad-af.web.id",
    githubUrl: "https://github.com/yourusername/portfolio",
    category: "fullstack",
    featured: true,
    year: 2026,
    status: "in-progress",
  },
  {
    title: "IP Management API",
    description:
      "A secure REST API for managing IP addresses with authentication and database integration.",
    longDescription:
      "Backend service for managing IP address whitelisting and access control. Features include IP registration, validation, and comprehensive logging with PostgreSQL database.",
    technologies: ["Node.js", "PostgreSQL", "Prisma", "Express"],
    image: "/projects/ip-management.jpg",
    githubUrl: "https://github.com/yourusername/ip-management",
    category: "fullstack",
    featured: false,
    year: 2026,
    status: "completed",
  },
  {
    title: "E-Commerce Mobile App",
    description:
      "Cross-platform mobile shopping application with real-time inventory and payment integration.",
    longDescription:
      "A feature-rich e-commerce mobile application built with React Native, offering seamless shopping experience across iOS and Android platforms with integrated payment gateways and real-time inventory management.",
    technologies: ["React Native", "TypeScript", "Redux", "Firebase"],
    image: "/projects/ecommerce-app.jpg",
    category: "mobile",
    featured: false,
    year: 2025,
    status: "completed",
  },
  {
    title: "Task Management Dashboard",
    description:
      "Modern web dashboard for project and task management with team collaboration features.",
    longDescription:
      "A comprehensive task management solution with drag-and-drop kanban boards, team collaboration tools, real-time updates, and analytics dashboard for tracking project progress.",
    technologies: ["React", "Next.js", "PostgreSQL", "Prisma", "Material UI"],
    image: "/projects/task-dashboard.jpg",
    liveUrl: "https://tasks.example.com",
    category: "web",
    featured: true,
    year: 2025,
    status: "completed",
  },
  {
    title: "Weather Forecast App",
    description:
      "Beautiful weather application with detailed forecasts and location-based alerts.",
    longDescription:
      "A sleek weather application providing accurate forecasts, severe weather alerts, and interactive weather maps. Features include hourly and weekly forecasts, multiple location tracking, and customizable widgets.",
    technologies: ["Flutter", "Dart", "Weather API", "Google Maps"],
    image: "/projects/weather-app.jpg",
    category: "mobile",
    featured: false,
    year: 2024,
    status: "completed",
  },
];

export const getFeaturedProjects = () => Projects.filter((p) => p.featured);
export const getProjectsByCategory = (category: Project["category"]) =>
  Projects.filter((p) => p.category === category);
export const getProjectsByStatus = (status: Project["status"]) =>
  Projects.filter((p) => p.status === status);
