"use client";

import { Button } from "@/components/ui/button";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Logo from "./logo";

const Navbar = () => {
  const scrolled = useScrollTop();

  return (
    <div
      className={cn(
        "z-50 bg-background fixed top-0 flex items-center w-full p-6",
        scrolled && "border-b shadow-sm"
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        <>
          <Button variant="ghost" size="sm">
            Log in
          </Button>
          <Button size="sm">Get Jotion free</Button>
        </>
        <>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/documents">Enter Jotion</Link>
          </Button>
        </>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
