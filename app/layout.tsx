import "./globals.css";

import { Toaster } from "sonner";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { EdgeStoreProvider } from "../lib/edgestore";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ConvexProvider } from "@/components/providers/convex-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jotion",
  description:
    "Jotion is an all-in-one workspace application that provides tools for note-taking, project management, collaboration, and more.",
  icons: {
    icon: [
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
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexProvider>
          <EdgeStoreProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
              storageKey="jotion-theme-2"
            >
              <Toaster position="bottom-center" />
              {children}
            </ThemeProvider>
          </EdgeStoreProvider>
        </ConvexProvider>
      </body>
    </html>
  );
}
