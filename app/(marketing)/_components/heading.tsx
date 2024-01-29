import Link from "next/link";
import { cn } from "@/lib/utils";
import { Twitter } from "lucide-react";
import Balancer from "react-wrap-balancer";
import { Spotlight } from "@/components/ui/spotlight";
import { Button, buttonVariants } from "@/components/ui/button";

export const Heading = () => {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="relative text-center space-y-6 z-10 w-full pt-20 md:pt-0">
        <Link
          href="https://twitter.com/abdtriedcoding"
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "animate-fade-up opacity-0"
          )}
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
          target="_blank"
        >
          Introducing on <Twitter className="ml-2 h-4 w-4" />
        </Link>
        <h1
          className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl animate-fade-up opacity-0"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          <Balancer>
            All-In-One{" "}
            <span className="relative bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text font-extrabold text-transparent">
              Collaboration and Productivity{" "}
            </span>
            Platform
          </Balancer>
        </h1>
        <p
          className="leading-normal text-muted-foreground sm:text-xl sm:leading-8 animate-fade-up opacity-0"
          style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
        >
          <Balancer>
            Jotion is the connected workspace where better, faster work happens.
            Capture your ideas, thoughts, and meeting notes in a structured and
            organized manner.
          </Balancer>
        </p>
        <Link
          href={"/documents"}
          className={cn(
            buttonVariants({ size: "lg" }),
            "rounded-lg animate-fade-up opacity-0"
          )}
          style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};
