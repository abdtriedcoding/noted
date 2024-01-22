"use client";

import { Spinner } from "@/components/spinner";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { useParams } from "next/navigation";

const Page = () => {
  const { user } = useUser();
  const params = useParams();
  const document = useQuery(api.documents.getById, {
    documentId: params.documentId as Id<"documents">,
    userId: user?.id || "",
  });

  if (document === undefined) {
    return (
      <div className="flex items-center justify-center h-full">
        <Spinner size={"lg"} />
      </div>
    );
  }

  if (document === null) {
    return <div>Not found</div>;
  }

  return <div>{document.title}</div>;
};

export default Page;
