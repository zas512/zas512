import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Zain Ali - Software Engineer",
  description:
    "I am a software engineer with a passion for building scalable and efficient applications. I specialize in web development, cloud computing, and AI integration.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`dark ${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable}`}
      >
        <main className="px-6 lg:px-10">{children}</main>
      </body>
    </html>
  );
}
