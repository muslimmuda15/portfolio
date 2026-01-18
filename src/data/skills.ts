export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export const Skills: SkillCategory[] = [
  {
    title: "Mobile & Web Development",
    icon: "💻",
    skills: [
      "React",
      "Kotlin",
      "React Native",
      "Android",
      "Next.js",
      "Apollo Graphql",
      "JavaScript/TypeScript",
      "Tailwind CSS",
      "Material UI",
      "Java",
      "Flutter",
      "C#",
    ],
  },
  {
    title: "Backend & Systems",
    icon: "⚙️",
    skills: ["Node.js", "PostgreSQL", "Prisma", "Git", "GitHub", "Python"],
  },
  {
    title: "AI & Fullstack Engineering",
    icon: "🤖",
    skills: [
      "AI Agents",
      "LlamaIndex",
      "Prisma",
      "Next.js",
      "Python",
      "Docker",
    ],
  },
];
