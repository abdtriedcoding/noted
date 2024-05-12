"use client";

import Image from "next/image";
import { toast } from "sonner";
import { useUser } from "@clerk/nextjs";
import { PlusCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";

import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

const MainPage = () => {
  const router = useRouter();
  const { isLoaded, isSignedIn, user } = useUser();
  const create = useMutation(api.documents.create);

  const onCreate = () => {
    const promise = create({ title: "Untitled" }).then((documentId) =>
      router.push(`/documents/${documentId}`)
    );

    toast.promise(promise, {
      loading: "Creating a new note...",
      success: "New note created!",
      error: "Failed to create a new note.",
    });
  };

  return (
    <div className="h-[85vh] flex flex-col items-center justify-center space-y-4">
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
      {!isLoaded || !isSignedIn ? (
        <Spinner size={"lg"} />
      ) : (
        <>
          <h2 className="text-lg font-medium">
            Welcome to {user?.firstName}&apos;s Jotion
          </h2>
          <Button onClick={onCreate}>
            <PlusCircle className="h-4 w-4 mr-2" />
            Create a note
          </Button>
        </>
      )}
    </div>
  );
};

export default MainPage;
