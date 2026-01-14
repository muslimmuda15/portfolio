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
    skills: [
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Git",
      "GitHub",
      "Python",
      "Docker",
    ],
  },
  {
    title: "AI & Fullstack Engineering",
    icon: "🤖",
    skills: ["AI Agents", "Prisma", "Next.js"],
  },
];
