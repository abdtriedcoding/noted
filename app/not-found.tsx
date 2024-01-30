"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
      <Image
        src="/error.svg"
        height="300"
        width="300"
        alt="Error"
        className="dark:invert animate-fade-up opacity-0"
        style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
      />
      <h2
        className="text-xl font-medium animate-fade-up opacity-0"
        style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
      >
        Page not found!!
      </h2>
      <Button
        className="animate-fade-up opacity-0"
        asChild
        style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
      >
        <Link href="/">Go back</Link>
      </Button>
    </div>
  );
};

export default NotFound;
