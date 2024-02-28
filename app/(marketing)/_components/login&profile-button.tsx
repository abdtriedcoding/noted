"use client";

import Link from "next/link";
import { useConvexAuth } from "convex/react";
import { UserButton, SignInButton } from "@clerk/nextjs";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";

export const LoginAndProfileButton = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading) {
    return <Spinner size={"lg"} />;
  }

  return (
    <>
      {isAuthenticated ? (
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
