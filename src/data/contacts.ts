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
    type: "phone",
    label: "WhatsApp",
    value: "+62 838-5451-9854",
    icon: "/icons/contacts/whatsapp.png",
    link: "https://wa.me/6283854519854",
    description: "Available during business hours",
    primary: true,
  },
  {
    type: "email",
    label: "Email",
    value: "muslimmuda15@gmail.com",
    icon: "/icons/contacts/email.png",
    link: "mailto:muslimmuda15@gmail.com",
    description: "Best way to reach me for professional inquiries",
  },
  {
    type: "location",
    label: "Location",
    value: "Surabaya, Indonesia",
    icon: "/icons/contacts/location.png",
    description: "Based in East Java",
  },
  // {
  //   type: "website",
  //   label: "Website",
  //   value: "rachmad-af.web.id",
  //   icon: "/icons/contacts/website.png",
  //   link: "https://rachmad-af.web.id",
  //   description: "My personal portfolio",
  // },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "GitHub",
    username: "@muslimmuda15",
    url: "https://github.com/muslimmuda15",
    icon: "/icons/social/github.png",
    color:
      "bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600",
  },
  {
    platform: "LinkedIn",
    username: "Rachmad Alif Firdaus",
    url: "https://www.linkedin.com/in/rachmad-alif-firdaus/",
    icon: "/icons/social/linkedin.png",
    color: "bg-blue-600 hover:bg-blue-700",
  },
  {
    platform: "Instagram",
    username: "@rachmad_alif_firdaus",
    url: "https://www.instagram.com/rachmad_alif_firdaus/",
    icon: "/icons/social/instagram.png",
    color:
      "bg-gradient-to-br from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600",
  },
  {
    platform: "Discord",
    username: "muslimmuda15#7428",
    url: "https://discord.com/users/muslimmuda15",
    icon: "/icons/social/discord.png",
    color: "bg-indigo-600 hover:bg-indigo-700",
  },
  {
    platform: "Telegram",
    username: "@muslimmuda15",
    url: "https://t.me/muslimmuda15",
    icon: "/icons/social/telegram.png",
    color: "bg-blue-500 hover:bg-blue-600",
  },
];

export const AVAILABILITY = {
  status: "available", // "available" | "busy" | "away"
  message: "Open to new opportunities and collaborations!",
  responseTime: "Usually responds within 24 hours",
};
