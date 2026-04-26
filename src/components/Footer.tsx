import Link from "next/link";
import { person, social } from "@/app/resources";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { HiEnvelope } from "react-icons/hi2";

const socialIcons = {
  github: FaGithub,
  linkedin: FaLinkedin,
  email: HiEnvelope,
} as const;

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex w-full items-center justify-between">
      <div className="flex items-center gap-4">
        <span>© {currentYear} /</span>
        <span>{person.name}</span>
      </div>
      <div className="flex gap-1">
        {social.map((item) => {
          if (!item.link) return null;
          const Icon =
            socialIcons[item.icon as keyof typeof socialIcons] ?? HiEnvelope;
          const isHttp = item.link.startsWith("http");
          return (
            <Button
              key={item.name}
              asChild
              variant="ghost"
              size="icon-sm"
              className="text-muted-foreground hover:text-foreground"
            >
              <Link
                href={item.link}
                target={isHttp ? "_blank" : undefined}
                rel={isHttp ? "noopener noreferrer" : undefined}
                title={item.name}
                aria-label={item.name}
                prefetch={false}
              >
                <Icon className="size-4" />
              </Link>
            </Button>
          );
        })}
      </div>
    </footer>
  );
};
