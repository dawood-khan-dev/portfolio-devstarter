import type { Metadata } from "next";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const interDisplay = Inter({
  variable: "--display-family",
  weight: ["700"],
  subsets: ["latin"],
});

const interBody = Inter({
  variable: "--body-family",
  weight: ["400"],
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  weight: ["400"],
  subsets: ["latin"],
});

const siteUrl =
  process.env.VERCEL_ENV === "preview"
    ? `https://${process.env.VERCEL_BRANCH_URL}`
    : process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000";

const title = "Dawood Khan — Full-Stack SaaS Developer";
const description =
  "I build SaaS products and modern web applications with Next.js, React, TypeScript and Node.js.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "./",
    siteName: title,
    images: "/og.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`scroll-smooth shadcn ${interDisplay.variable} ${interBody.variable} ${jetBrainsMono.variable}`}
    >
      <body className="font-body antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
