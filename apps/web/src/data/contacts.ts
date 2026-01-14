export interface ContactMethod {
  type: "email" | "phone" | "social" | "location" | "website";
  label: string;
  value: string;
  icon: string;
  link?: string;
  description?: string;
  primary?: boolean;
}

export interface SocialLink {
  platform: string;
  username: string;
  url: string;
  icon: string;
  color: string;
}

export const ContactInfo: ContactMethod[] = [
  {
    type: "email",
    label: "Email",
    value: "rachmad.af@garasilabs.com",
    icon: "📧",
    link: "mailto:rachmad.af@garasilabs.com",
    description: "Best way to reach me for professional inquiries",
    primary: true,
  },
  {
    type: "phone",
    label: "Phone",
    value: "+62 812-3456-7890",
    icon: "📱",
    link: "tel:+6281234567890",
    description: "Available during business hours",
  },
  {
    type: "location",
    label: "Location",
    value: "Surabaya, Indonesia",
    icon: "📍",
    description: "Based in East Java",
  },
  {
    type: "website",
    label: "Website",
    value: "rachmad-af.web.id",
    icon: "🌐",
    link: "https://rachmad-af.web.id",
    description: "My personal portfolio",
    primary: true,
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "GitHub",
    username: "@rachmadalif",
    url: "https://github.com/rachmadalif",
    icon: "💻",
    color:
      "bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600",
  },
  {
    platform: "LinkedIn",
    username: "Rachmad Alif Firdaus",
    url: "https://linkedin.com/in/rachmadalif",
    icon: "💼",
    color: "bg-blue-600 hover:bg-blue-700",
  },
  {
    platform: "Twitter",
    username: "@rachmadalif",
    url: "https://twitter.com/rachmadalif",
    icon: "🐦",
    color: "bg-sky-500 hover:bg-sky-600",
  },
  {
    platform: "Instagram",
    username: "@rachmadalif",
    url: "https://instagram.com/rachmadalif",
    icon: "📸",
    color:
      "bg-gradient-to-br from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600",
  },
  {
    platform: "Discord",
    username: "rachmadalif#1234",
    url: "https://discord.com/users/rachmadalif",
    icon: "💬",
    color: "bg-indigo-600 hover:bg-indigo-700",
  },
  {
    platform: "Telegram",
    username: "@rachmadalif",
    url: "https://t.me/rachmadalif",
    icon: "✈️",
    color: "bg-blue-500 hover:bg-blue-600",
  },
];

export const AVAILABILITY = {
  status: "available", // "available" | "busy" | "away"
  message: "Open to new opportunities and collaborations!",
  responseTime: "Usually responds within 24 hours",
};
