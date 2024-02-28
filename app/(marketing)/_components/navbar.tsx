"use client";

import { Logo } from "./logo";
import { cn } from "@/lib/utils";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { ThemeToggle } from "@/components/theme-toggle";
import { LoginAndProfileButton } from "./login&profile-button";

export const Navbar = () => {
  const scrolled = useScrollTop();

  return (
    <div
      className={cn(
        "z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-4",
        scrolled && "border-b shadow-sm"
      )}
    >
      <Logo />
      <div className="ml-auto justify-end w-full flex items-center gap-x-2">
        <LoginAndProfileButton />
        <ThemeToggle />
      </div>
    </div>
  );
};
