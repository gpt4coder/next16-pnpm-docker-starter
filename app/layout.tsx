import type React from "react";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import BaseHeader from "@/components/base-header";

export const metadata: Metadata = {
  title: "Next.js 16 Starter - Docker + TypeScript + Tailwind CSS",
  description: "A modern, production-ready starter template for Next.js projects with Docker, TypeScript, and Tailwind CSS 4.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-950">
        <ThemeProvider defaultTheme="dark">
          <BaseHeader />
          <main>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
