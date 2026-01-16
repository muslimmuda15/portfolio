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
      "Forked open-source Android auto-clicker, customized the app, and built a web admin panel for integration and management.",
    longDescription:
      "A freelance project for personal use that involved pulling an open-source Android auto-clicker application, modifying and customizing the Android app to meet specific requirements, and developing a comprehensive web admin system for integration, configuration, and management of the auto-clicker features.",
    technologies: [
      "Kotlin",
      "Android",
      "Java",
      "Next.js",
      "Node.js",
      "REST API",
      "Material UI",
      "Prisma",
      "PostgreSQL",
    ],
    image: "/projects/smart-autoclicker.jpg",
    githubUrl: "",
    category: "fullstack",
    featured: true,
    year: 2025,
    status: "completed",
  },
  {
    title: "AI-Powered Educational Platform",
    description:
      "An intelligent learning management system that leverages AI to enhance education quality and accessibility for students and teachers.",
    longDescription:
      "A comprehensive e-learning platform designed to make quality education accessible for all, regardless of geography or social background. The system acts as a personal tutor for students, providing customized learning paths based on individual progress, and empowers teachers with AI-assisted content preparation, test generation, and classroom delivery support. Particularly beneficial for rural schools facing challenges like lack of qualified teachers and infrastructure.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "LlamaIndex",
      "AI LLM Integration",
    ],
    image: "/projects/ai-education.jpg",
    liveUrl: "",
    githubUrl: "",
    category: "fullstack",
    featured: true,
    year: 2025,
    status: "in-progress",
  },
  {
    title: "HR Management System",
    description:
      "Enterprise HR platform with web admin dashboard and iOS mobile app for real-time attendance tracking and employee management.",
    longDescription:
      "Comprehensive HR management ecosystem consisting of a Next.js web admin platform and React Native iOS mobile app. Web platform features include bulk scheduling, leave management, payroll processing, content publishing, and organization management with role-based access control. Mobile app provides real-time GPS-based attendance tracking, offline support with WatermelonDB, push notifications via Firebase, and employee self-service features. Developed both web and mobile applications with GraphQL API integration and multi-environment deployment (Local, UAT, Production).",
    technologies: [
      "Next.js",
      "React Native",
      "TypeScript",
      "React",
      "Express",
      "Material-UI",
      "Redux",
      "Apollo GraphQL",
      "Mapbox",
      "Firebase",
      "WatermelonDB",
    ],
    image: "/projects/atendi-webadmin.jpg",
    githubUrl: "",
    category: "fullstack",
    featured: true,
    year: 2025,
    status: "completed",
  },
  {
    title: "Restaurant Ordering System",
    description:
      "Complete restaurant ordering ecosystem with customer mobile apps (Android & iOS), waiter management app, and admin dashboard.",
    longDescription:
      "Comprehensive restaurant ordering and management platform consisting of four applications: Native Android customer app (Kotlin) with QR code ordering, menu browsing, and real-time order tracking; React Native iOS customer app with Apple/Facebook authentication and Google Maps integration; Android waiter app for order management and table service; and React admin dashboard with Material-UI for restaurant operations, menu management, order analytics, and multi-environment deployment. Features include Firebase push notifications, Room ORM for offline support, WatermelonDB for local data persistence, and GraphQL API integration across all platforms.",
    technologies: [
      "Kotlin",
      "React Native",
      "React",
      "TypeScript",
      "Material-UI",
      "GraphQL",
      "Apollo Graphql",
      "Firebase",
      "SQLite",
      "WatermelonDB",
    ],
    image: "/projects/ecommerce-app.jpg",
    githubUrl: "",
    category: "mobile",
    featured: true,
    year: 2019,
    status: "completed",
  },
  {
    title: "Document Scanner App",
    description:
      "Native Android document scanning app for creating PDFs from images with OCR, image editing, and cloud storage integration.",
    longDescription:
      "Professional document scanning application built with Kotlin for Android. Features include camera-based document scanning with auto edge detection using OpenCV, multi-page PDF creation with iText7, OCR text recognition with ML Kit, advanced image editing (crop, rotate, filters, brightness/contrast adjustment), QR code scanning and generation, batch image import from gallery, Room database for local document storage, Firebase Crashlytics for error tracking, AdMob integration for monetization, and in-app purchases for premium features. Includes image compression, Glide for image loading, and RxJava for reactive programming.",
    technologies: ["Kotlin", "Android", "OpenCV", "OCR", "SQLite"],
    image: "/projects/weather-app.jpg",
    githubUrl: "",
    category: "mobile",
    featured: false,
    year: 2021,
    status: "completed",
  },
  {
    title: "Trampil - Logistics Management Platform",
    description:
      "Web-based logistics management system for shipping operations, vessel tracking, and cargo management with comprehensive admin features.",
    longDescription:
      "Enterprise logistics management platform built with Next.js for managing shipping operations and cargo logistics. Features include vessel tracking and management, shipping company administration, port management, combined shipment handling, merchant and corporate account management, quote generation and tracking, payment processing, product catalog management, document verification workflows, and real-time notifications. Includes role-based access control (RBAC), multi-environment deployment (local, dev, staging, production), GraphQL API integration with Apollo Client, interactive maps with React Map GL, and comprehensive admin dashboard with Material-UI components.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "GraphQL",
      "Apollo Graphql",
      "Material-UI",
    ],
    image: "/projects/task-dashboard.jpg",
    githubUrl: "",
    category: "web",
    featured: true,
    year: 2021,
    status: "completed",
  },
  {
    title: "Travel Sightseeing Platform",
    description:
      "Web-based travel booking platform for sightseeing tours with integrated payment processing and tour management.",
    longDescription:
      "Travel and tour booking web application built with Node.js and Express for UOB Travel services. Features include tour browsing and search, detailed tour information and itineraries, booking management system, integrated payment processing, session-based user authentication, multi-environment deployment (local, staging, production), API integration with Tocco sightseeing services, error monitoring with Slack notifications, and responsive EJS templating. Includes custom validators for booking data and comprehensive error handling.",
    technologies: ["Node.js", "Express", "JavaScript", "REST API"],
    image: "/projects/weather-app.jpg",
    githubUrl: "",
    category: "web",
    featured: false,
    year: 2017,
    status: "completed",
  },
];

export const getFeaturedProjects = () => Projects.filter((p) => p.featured);
export const getProjectsByCategory = (category: Project["category"]) =>
  Projects.filter((p) => p.category === category);
export const getProjectsByStatus = (status: Project["status"]) =>
  Projects.filter((p) => p.status === status);
