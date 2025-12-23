import { Metadata as NextMetadata } from "next";

export interface MetaProps {
  title: string;
  description: string;
  path?: string;
  type?: "website" | "article";
  image?: string;
  publishedTime?: string;
  author?: {
    name: string;
  };
}

export function generateMetadata({
  title,
  description,
  path = "",
  type = "website",
  image,
  publishedTime,
  author,
}: MetaProps): NextMetadata {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  const isFullUrl = (url: string) => /^https?:\/\//.test(url);

  const ogImage = image ? isFullUrl(image) : image;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type,
      ...(publishedTime && type === "article" ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    ...(author ? { authors: [{ name: author.name }] } : {}),
  };
}

export const Meta = {
  generate: generateMetadata,
};

export default Meta;
