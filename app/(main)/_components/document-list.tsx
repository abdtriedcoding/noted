"use client";

import { useState } from "react";
import { DocumentItem } from "./document-item";
import { Skeleton } from "@/components/ui/skeleton";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export const DocumentList = () => {
  const [isHovered, setIsHovered] = useState(false);
  const documents = useQuery(api.documents.getUserDocuments);

  if (documents === undefined) {
    return (
      <div className="space-y-2 mt-4 text-muted-foreground">
        <Skeleton className="px-4 py-4 w-full" />
        <Skeleton className="px-4 py-4 w-full" />
        <Skeleton className="px-4 py-4 w-full" />
      </div>
    );
  }

  return (
    <div
      className={`max-h-[400px] space-y-2 mt-4 overflow-y-auto transition-scrollbar ${
        isHovered ? "overflow-y-auto" : "overflow-y-hidden"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
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
