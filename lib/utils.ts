import { Metadata } from "next";
import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function constructMetadata({
  title = "Jotion",
  description = "Jotion is an all-in-one workspace application that provides tools for note-taking, project management, collaboration, and more.",
  image = "/thumbnail.png",
  icons = [
    {
      media: "(prefers-color-scheme: light)",
      url: "/logo.svg",
      href: "/logo.svg",
    },
    {
      media: "(prefers-color-scheme: dark)",
      url: "/logo-dark.svg",
      href: "/logo-dark.svg",
    },
  ],
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: {
    media: string;
    url: string;
    href: string;
  }[];
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@Sidddabdullah",
    },
    icons,
    metadataBase: new URL("https://jotion-ashy.vercel.app"),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
