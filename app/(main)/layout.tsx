"use client";

import { useRouter } from "next/navigation";
import { useConvexAuth } from "convex/react";
import { Spinner } from "@/components/spinner";
import { Sidebar } from "./_components/sidebar";
import { NavigationMenu } from "./_components/navigation-menu";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useConvexAuth();
  if (isLoading) {
    return (
      <div className="h-full dark:bg-[#1F1F1F] flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return router.push("/");
  }

  return (
    <div className="h-full flex dark:bg-[#1F1F1F] dark:text-slate-300">
      <Sidebar />
      <main className="flex-1 h-full overflow-y-auto">
        <NavigationMenu />
        {children}
      </main>
    </div>
  );
}
