import Balancer from "react-wrap-balancer";
import { FeatureCardGrid } from "./feature-card-grid";

export const Features = () => {
  return (
    <section className="py-10 space-y-6 w-full">
      <h1
        className="text-3xl font-extrabold text-center tracking-tight sm:text-4xl md:text-5xl lg:text-6xl animate-fade-up opacity-0"
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
        className="leading-normal text-center text-muted-foreground sm:text-xl sm:leading-8 animate-fade-up opacity-0"
        style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
      >
        <Balancer>
          Capture your ideas, thoughts, and meeting notes in a structured and
          organized manner.
        </Balancer>
      </p>
      <div
        className="animate-fade-up opacity-0"
        style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
      >
        <FeatureCardGrid />
      </div>
    </section>
  );
};
