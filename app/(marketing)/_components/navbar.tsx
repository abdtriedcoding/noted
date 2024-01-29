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
        "p-4 sticky inset-x-0 top-0 z-30 flex items-center w-full bg-background",
        scrolled && "border-b shadow-sm"
      )}
    >
      <Logo />
      <div className="ml-auto justify-end flex items-center gap-x-2">
        <LoginAndProfileButton />
        <ThemeToggle />
      </div>
    </div>
  );
};
