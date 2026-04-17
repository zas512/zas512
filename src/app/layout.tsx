import type { ReactNode } from "react";
import ParticlesBackground from "@/components/ParticlesBackground";
import { Inter, Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-heading" });

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`dark ${inter.variable} ${geist.variable}`}>
        <ParticlesBackground />
        <div className="max-w-7xl mx-auto px-6 lg:px-10">{children}</div>
      </body>
    </html>
  );
}
