import { cn } from "@/lib/utils";
import Balancer from "react-wrap-balancer";
import { Indie_Flower } from "next/font/google";

const font = Indie_Flower({ subsets: ["latin"], weight: ["400"] });

export const Features = () => {
  return (
    <section className="py-10 space-y-6 w-full">
      <div className="text-center">
        <h1
          className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl animate-fade-up opacity-0"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          <Balancer>
            Keep track of your{" "}
            <span className="relative bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text font-extrabold text-transparent">
              meetings all in one place
            </span>
          </Balancer>
        </h1>

        <p
          className="pt-4 leading-normal text-muted-foreground sm:text-xl sm:leading-8 animate-fade-up opacity-0"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          <Balancer>
            Capture your ideas, thoughts, and meeting notes in a structured and
            organized manner.
          </Balancer>
        </p>
      </div>

      <div
        className="relative mx-auto h-96 rounded-md border-2 border-dashed animate-fade-up opacity-0"
        style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
      >
        <div
          className={cn(
            "absolute inset-2 flex items-center justify-center rounded-md bg-muted text-center text-2xl md:text-4xl",
            font.className
          )}
        >
          A Planner goes here!
        </div>
      </div>
    </section>
  );
};
