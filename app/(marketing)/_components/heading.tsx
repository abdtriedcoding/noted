import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";
import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";

const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Ideas, Documents, & Plans. Unified. Welcome to{" "}
        <span className="underline">Jotion</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Jotion is the connected workspace where <br />
        better, faster work happens.
      </h3>
      <ClerkLoading>
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      </ClerkLoading>
      <ClerkLoaded>
        <Button asChild>
          <Link href="/documents">
            Enter Jotion
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      </ClerkLoaded>
    </div>
  );
};

export default Heading;
