import "./globals.css";
import { Metadata } from "next";
import { Toaster } from "sonner";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { EdgeStoreProvider } from "@/lib/edgestore";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ConvexProvider } from "@/components/providers/convex-provider";

const font = Poppins({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: {
    default: "Noted",
    template: `%s | Noted`,
  },
  metadataBase: new URL("https://notedwebapp.vercel.app"),
  description:
    "Noted is an all-in-one workspace application that helps you for note-making, project management, collaboration, and more.",
  keywords: [
    "Note Making",
    "Project Management",
    "Task Management",
    "Team Collaboration",
    "Digital Workspace",
  ],
  authors: [
    {
      name: "abdtriedcoding",
      url: "https://abdullahsidd.vercel.app",
    },
  ],
  creator: "abdtriedcoding",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://notedwebapp.vercel.app",
    title: "Noted",
    description:
      "Noted is an all-in-one workspace application that helps you for note-making, project management, collaboration, and more.",
    siteName: "Noted",
    images: [
      {
        url: "/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Noted",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Noted",
    description:
      "Noted is an all-in-one workspace application that helps you for note-making, project management, collaboration, and more.",
    images: ["/thumbnail.png"],
    creator: "@abdtriedcoding",
  },
  icons: [
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("antialiased", font.className)}>
        <ConvexProvider>
          <EdgeStoreProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
              storageKey="noted-theme-2"
            >
              <Toaster richColors theme="system" position="bottom-center" />
              {children}
              <Analytics />
              <SpeedInsights />
            </ThemeProvider>
          </EdgeStoreProvider>
        </ConvexProvider>
      </body>
    </html>
  );
}
