import Navbar from "@/components/nav";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Zain Ali - Software Engineer",
  description:
    "I am a software engineer with a passion for building scalable and efficient applications. I specialize in web development, cloud computing, and AI integration."
};

export default async function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className="dark">
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
