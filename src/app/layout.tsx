import { Geist, Inter } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-heading" });
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const titlte = "Zain Ali - Software Engineer";
const description =
  "I am a software engineer with a passion for building scalable and efficient applications. I specialize in web development, cloud computing, and AI integration.";

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`dark ${inter.variable} ${geist.variable}`}>
        <main className="px-6 lg:px-10">{children}</main>
      </body>
    </html>
  );
}
