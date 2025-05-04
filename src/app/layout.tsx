import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeRegistry } from "@/components/ThemeRegistry";
import localFont from "next/font/local";

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
    <html lang="en" className={sourceCodePro.variable}>
      <body className={sourceCodePro.className}>
        <AppRouterCacheProvider>
          <ThemeRegistry>{children}</ThemeRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
