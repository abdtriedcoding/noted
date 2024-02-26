"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";
import { UserButton, SignInButton, useUser, ClerkLoading } from "@clerk/nextjs";

export  const LoginAndProfileButton = () => {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) {
    return <Spinner size={"lg"} />;
  }

  return (
    <>
      <ClerkLoading>
        <Spinner size="lg" />
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