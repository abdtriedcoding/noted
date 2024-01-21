"use client";

import Image from "next/image";
import { ClerkLoaded, ClerkLoading, useUser } from "@clerk/nextjs";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Spinner } from "@/components/spinner";

const Page = () => {
  const router = useRouter();
  const { user } = useUser();
  const create = useMutation(api.documents.create);

  const onCreate = () => {
    if (!user) return;

    const promise = create({ title: "Untitled", userId: user.id }).then(
      (documentId) => router.push(`/documents/${documentId}`)
    );

    toast.promise(promise, {
      loading: "Creating a new note...",
      success: "New note created!",
      error: "Failed to create a new note.",
    });
  };

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src="/empty.png"
        height="300"
        width="300"
        alt="Empty"
        className="dark:hidden"
      />
      <Image
        src="/empty-dark.png"
        height="300"
        width="300"
        alt="Empty"
        className="hidden dark:block"
      />
      <ClerkLoading>
        <Spinner size={"lg"} />
      </ClerkLoading>
      <ClerkLoaded>
        <>
          <h2 className="text-lg font-medium">
            Welcome to {user?.firstName}&apos;s Jotion
          </h2>
          <Button onClick={onCreate}>
            <PlusCircle className="h-4 w-4 mr-2" />
            Create a note
          </Button>
        </>
      </ClerkLoaded>
    </div>
  );
};

export default Page;
