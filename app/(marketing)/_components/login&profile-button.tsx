import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";
import {
  ClerkLoading,
  UserButton,
  SignInButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";

const LoginAndProfileButton = () => {
  return (
    <>
      <ClerkLoading>
        <Spinner size={"lg"} />
      </ClerkLoading>

      <SignedIn>
        <Button variant="ghost" size="sm" asChild>
          <Link href="/documents">Enter Jotion</Link>
        </Button>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>

      <SignedOut>
        <SignInButton mode="modal">
          <Button variant="ghost" size="sm">
            Log in
          </Button>
        </SignInButton>
        <SignInButton mode="modal">
          <Button size="sm">Get Jotion free</Button>
        </SignInButton>
      </SignedOut>
    </>
  );
};

export default LoginAndProfileButton;
