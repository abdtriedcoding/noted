import Balancer from "react-wrap-balancer";
import { TESTIMONIALS } from "@/lib/constants";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export const Testimonials = () => {
  return (
    <section className="py-10 space-y-6 w-full">
      <div className="text-center">
        <h1
          className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl animate-fade-up opacity-0"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          <Balancer>
            <span className="relative bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text font-extrabold text-transparent">
              Trusted{" "}
            </span>
            by all
          </Balancer>
        </h1>

        <p
          className="pt-4 leading-normal text-muted-foreground sm:text-xl sm:leading-8 animate-fade-up opacity-0"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          <Balancer>
            Join thousands of satisfied users who rely on our platform for their
            personal and professional productivity needs.
          </Balancer>
        </p>
      </div>

      <div
        className="animate-fade-up opacity-0"
        style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
      >
        {[...Array(2)].map((_, i) => (
          <InfiniteMovingCards
            key={i}
            items={TESTIMONIALS}
            direction="right"
            speed="slow"
          />
        ))}
      </div>
    </section>
  );
};
