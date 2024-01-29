import Link from "next/link";
import { cn } from "@/lib/utils";
import Balancer from "react-wrap-balancer";
import { ChevronRight, LogIn } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";
import { ShinnyLinkButton } from "@/components/button";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";

export const Heading = () => {
  return (
    <div className="h-[40rem] w-full rounded-md flex items-center justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="relative text-center space-y-6 z-10 w-full pt-20 md:pt-0">
        <Link
          href="https://twitter.com/abdtriedcoding"
          className="flex items-center justify-center w-fit mx-auto animate-fade-up opacity-0"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          <AnimatedGradientText>
            🎉&nbsp;
            <span
              className={cn(
                `inline font-semibold animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
              )}
            >
              Introducing on Twitter
            </span>
            <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedGradientText>
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
        <ShinnyLinkButton
          label="Get started"
          href="/documents"
          shiny
          size={"lg"}
          IconLeft={LogIn}
          className="rounded-lg animate-fade-up opacity-0"
          style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
        />
      </div>
    </div>
  );
};
