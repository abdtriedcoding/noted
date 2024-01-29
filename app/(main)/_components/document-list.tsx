"use client";

import { DocumentItem } from "./document-item";
import { Skeleton } from "@/components/ui/skeleton";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export const DocumentList = () => {
  const documents = useQuery(api.documents.getUserDocuments);

  if (documents === undefined) {
    return (
      <div className="space-y-2 mt-4 p-2 mr-2">
        <Skeleton className="px-4 py-4 w-full" />
        <Skeleton className="px-4 py-4 w-full" />
        <Skeleton className="px-4 py-4 w-full" />
      </div>
    );
  }

  return (
    <div className="p-2 mr-2 space-y-2">
      {documents?.map((document) => (
        <DocumentItem
          key={document._id}
          id={document._id}
          label={document.title}
          documentIcon={document.icon}
        />
      ))}
    </div>
  );
};
