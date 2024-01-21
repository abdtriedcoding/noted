import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ClerkLoading, UserButton, SignInButton, useUser } from "@clerk/nextjs";

const LoginAndProfileButton = () => {
  const { isSignedIn } = useUser();

  return (
    <>
      <ClerkLoading>
        <div>Clerk is loading</div>
      </ClerkLoading>

      {isSignedIn ? (
        <>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/documents">Enter Jotion</Link>
          </Button>
          <UserButton afterSignOutUrl="/" />
        </>
      ) : (
        <>
          <SignInButton mode="modal">
            <Button variant="ghost" size="sm">
              Log in
            </Button>
          </SignInButton>
          <SignInButton mode="modal">
            <Button size="sm">Get Jotion free</Button>
          </SignInButton>
        </>
      )}
    </>
  );
};

export default LoginAndProfileButton;
