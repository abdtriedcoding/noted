import "./globals.css";
import { Toaster } from "sonner";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { cn, constructMetadata } from "@/lib/utils";
import { EdgeStoreProvider } from "@/lib/edgestore";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ConvexProvider } from "@/components/providers/convex-provider";

const font = Poppins({ subsets: ["latin"], weight: ["400"] });

export const metadata = constructMetadata();

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
              storageKey="jotion-theme-2"
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
