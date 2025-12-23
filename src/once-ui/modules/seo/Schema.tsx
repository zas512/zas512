import Script from "next/script";
import { social } from "@/app/resources/content";

export interface SchemaProps {
  as:
    | "website"
    | "article"
    | "blog"
    | "blogPosting"
    | "techArticle"
    | "webPage"
    | "organization";
  title: string;
  description: string;
  path: string;
  datePublished?: string;
  dateModified?: string;
  image?: string;
  author?: {
    name: string;
    url?: string;
    image?: string;
  };
}

type SchemaValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | SchemaObject
  | SchemaValue[];

interface SchemaObject {
  [key: string]: SchemaValue;
}

const schemaTypeMap = {
  website: "WebSite",
  article: "Article",
  blog: "Blog",
  blogPosting: "BlogPosting",
  techArticle: "TechArticle",
  webPage: "WebPage",
  organization: "Organization",
};

export function Schema({
  as,
  title,
  description,
  path,
  datePublished,
  dateModified,
  author,
}: SchemaProps) {
  const schemaType = schemaTypeMap[as];

  const schema: SchemaObject = {
    "@context": "https://schema.org",
    "@type": schemaType,
  };

  schema.sameAs = Object.values(social).filter(Boolean);

  if (as === "website") {
    schema.name = title;
    schema.description = description;
  } else if (as === "organization") {
    schema.name = title;
    schema.description = description;
  } else {
    schema.headline = title;
    schema.description = description;

    if (datePublished) {
      schema.datePublished = datePublished;
      schema.dateModified = dateModified || datePublished;
    }
  }

  if (author) {
    schema.author = {
      "@type": "Person",
      name: author.name,
      ...(author.url && { url: author.url }),
      ...(author.image && {
        image: {
          "@type": "ImageObject",
          url: author.image,
        },
      }),
    };
  }

  return (
    <Script id={`schema-${as}-${path}`} type="application/ld+json">
      {JSON.stringify(schema)}
    </Script>
  );
}

export default Schema;
