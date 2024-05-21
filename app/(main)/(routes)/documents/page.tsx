"use client";

import Image from "next/image";
import { toast } from "sonner";
import { useUser } from "@clerk/nextjs";
import { PlusCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

const MainPage = () => {
  const router = useRouter();
  const { isLoaded, isSignedIn, user } = useUser();
  const createDocument = useMutation(api.documents.createDocument);

  const onCreateNote = () => {
    const promise = createDocument({ title: "Untitled" }).then((documentId) =>
      router.push(`/documents/${documentId}`)
    );

    toast.promise(promise, {
      loading: "Creating a new note...",
      success: "New note created!",
      error: "Failed to create a new note.",
    });
  };

  return (
    <div className="h-[90vh] flex flex-col items-center justify-center space-y-4">
      <Image
        src="/welcome-logo.svg"
        priority
        fetchPriority="high"
        loading="eager"
        height="300"
        width="300"
        alt="Empty"
        className="dark:invert"
      />
      {!isLoaded || !isSignedIn ? (
        <SkeltonData />
      ) : (
        <>
          <h2 className="text-lg font-medium">
            Welcome to {user?.firstName}&apos;s Jotion
          </h2>
          <Button onClick={onCreateNote}>
            <PlusCircle className="h-4 w-4 mr-2" />
            Create a note
          </Button>
        </>
      )}
    </div>
  );
};

export default MainPage;

function SkeltonData() {
  return (
    <div className="flex flex-col items-center space-y-4 w-full">
      <Skeleton className="h-6 w-60" />
      <Skeleton className="h-10 w-40" />
    </div>
  );
}
