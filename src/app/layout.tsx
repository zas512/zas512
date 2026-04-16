import classNames from "classnames";
import type { ReactNode } from "react";
import { font, home, style } from "@/app/resources";
import { Footer, Header } from "@/components";
import ParticlesBackground from "@/components/ParticlesBackground";
import { Meta } from "@/once-ui/modules";
import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";
import "./globals.css";
import { Inter, Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geistHeading = Geist({subsets:['latin'],variable:'--font-heading'});

const inter = Inter({subsets:['latin'],variable:'--font-sans'});


export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    path: home.path,
    image: home.image,
  });
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      data-theme="dark"
      data-neutral={style.neutral}
      data-brand={style.brand}
      data-accent={style.accent}
      data-solid={style.solid}
      data-solid-style={style.solidStyle}
      data-border={style.border}
      data-surface={style.surface}
      data-transition={style.transition}
      className={cn(classNames(
              "page-background",
              font.primary.variable,
              font.secondary.variable,
              font.tertiary.variable,
              font.code.variable,
              "font-sans"
            ), "font-sans", inter.variable, geistHeading.variable)}
    >
      <body>
        <ParticlesBackground />
        <Header />
        <div className="max-w-9/12 mx-auto px-6 lg:px-10">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
