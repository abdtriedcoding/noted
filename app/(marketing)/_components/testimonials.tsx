import Balancer from "react-wrap-balancer";
import Marquee from "@/components/ui/marquee";
import { TESTIMONIALS } from "@/lib/constants";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const firstRow = TESTIMONIALS.slice(0, TESTIMONIALS.length / 2);
const secondRow = TESTIMONIALS.slice(TESTIMONIALS.length / 2);

export const Testimonials = () => {
  return (
    <section className="py-10 space-y-6 w-full">
      <h1
        className="text-3xl font-extrabold text-center tracking-tight sm:text-4xl md:text-5xl lg:text-6xl animate-fade-up opacity-0"
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
        className="text-center leading-normal text-muted-foreground sm:text-xl sm:leading-8 animate-fade-up opacity-0"
        style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
      >
        <Balancer>
          Join thousands of satisfied users who rely on our platform for their
          personal and professional productivity needs.
        </Balancer>
      </p>
      <div
        className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background py-20 animate-fade-up opacity-0"
        style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
      >
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review, idx) => (
            <ReviewCard key={idx} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review, idx) => (
            <ReviewCard key={idx} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </section>
  );
};

const ReviewCard = ({ name, message }: { name: string; message: string }) => {
  return (
    <Card className="w-[28rem] shrink-0 rounded-xl duration-300 hover:shadow-md dark:bg-gradient-to-br dark:from-border/50 dark:to-background">
      <CardHeader>
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage alt={`Avatar of ${name}`} loading="lazy" />
            <AvatarFallback>{name.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>

          <div>
            <CardTitle className="drop-shadow-2xl">{name}</CardTitle>
            <CardDescription>@{name.toLocaleLowerCase()}</CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-[15px] leading-5">{message}</p>
      </CardContent>
    </Card>
  );
};
