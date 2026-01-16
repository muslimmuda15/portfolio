import "./globals.css";
import localFont from "next/font/local";
import { DarkModeProvider } from "@/components/DarkModeProvider";

export const metadata = {
  title: "Rachmad AF - Portfolio",
  description: "Personal portfolio website of Rachmad AF",
};

const sourceCodePro = localFont({
  src: "../fonts/SourceCodePro-Light.ttf",
  display: "swap",
  variable: "--font-source-code-pro",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sourceCodePro.variable} suppressHydrationWarning>
      <body className={sourceCodePro.className}>
        <DarkModeProvider>{children}</DarkModeProvider>
      </body>
    </html>
  );
}
