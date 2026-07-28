type Props = {
  slug: string;
  color?: string;
  size?: number;
  className?: string;
};

const DEVICON_OVERRIDES: Record<string, string> = {
  amazonwebservices:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  aws: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
};

export function TechIcon({ slug, color = "FFFFFF", size = 22, className }: Readonly<Props>) {
  const override = DEVICON_OVERRIDES[slug];
  const src = override ?? `https://cdn.simpleicons.org/${slug}/${color}`;
  return (
    <img
      src={src}
      width={size}
      height={size}
      loading="lazy"
      alt=""
      className={className}
      style={{ display: "inline-block" }}
    />
  );
}
