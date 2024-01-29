import Link from "next/link";
import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  ClerkLoaded,
  ClerkLoading,
} from "@clerk/nextjs";

export const LoginAndProfileButton = () => {
  return (
    <>
      <ClerkLoading>
        <Spinner size={"lg"} />
      </ClerkLoading>
      <ClerkLoaded>
        <SignedIn>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/documents">Enter Noted</Link>
          </Button>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          <SignInButton
            mode="modal"
            fallbackRedirectUrl={"/documents"}
            signUpFallbackRedirectUrl={"/documents"}
          >
            <Button size="sm">Get Noted free</Button>
          </SignInButton>
        </SignedOut>
      </ClerkLoaded>
    </>
  );
};
