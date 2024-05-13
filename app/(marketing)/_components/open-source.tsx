import { Github } from "lucide-react";

export const OpenSource = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col items-center justify-center gap-4 rounded-3xl bg-muted py-8 text-center md:py-12 xl:py-16">
        <h2
          className="text-3xl font-semibold drop-shadow-xl dark:bg-gradient-to-br dark:from-neutral-200 dark:to-neutral-600 dark:bg-clip-text dark:text-transparent sm:text-3xl md:text-6xl animate-fade-up opacity-0"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          Proudly Open Source
        </h2>

        <p
          className="max-w-[85%] text-muted-foreground sm:text-lg animate-fade-up opacity-0"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          Jotion is open source and powered by open source software. <br /> The
          code is available on{" "}
          <a
            href="https://github.com/abdtriedcoding/jotion"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 duration-200 hover:text-foreground"
          >
            GitHub
          </a>
          .
        </p>

        <a
          href="https://github.com/abdtriedcoding/jotion"
          target="_blank"
          rel="noreferrer"
          className="flex animate-fade-up opacity-0"
          style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
        >
          <div className="flex size-10 items-center justify-center rounded-md bg-foreground shadow-md hover:shadow-lg">
            <Github className="size-6 text-background" />
          </div>

          <div className="flex items-center">
            <div className="size-4 border-y-8 border-r-8 border-foreground border-y-transparent" />
            <div className="flex h-10 items-center rounded-md border border-foreground bg-foreground px-4 font-medium text-background shadow-md hover:shadow-lg">
              293 stars on GitHub
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};
