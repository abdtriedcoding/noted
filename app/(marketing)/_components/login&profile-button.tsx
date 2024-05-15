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
            <Link href="/documents">Enter Jotion</Link>
          </Button>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          <SignInButton
            signUpFallbackRedirectUrl={"/documents"}
            fallbackRedirectUrl={"/documents"}
            mode="modal"
          >
            <Button variant="ghost" size="sm">
              Log in
            </Button>
          </SignInButton>
          <SignInButton mode="modal">
            <Button size="sm">Get Jotion free</Button>
          </SignInButton>
        </SignedOut>
      </ClerkLoaded>
    </>
  );
};
