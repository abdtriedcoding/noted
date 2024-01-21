"use client";

import { Spinner } from "@/components/spinner";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { FileIcon } from "lucide-react";
import { useState } from "react";

const DocumentList = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { user } = useUser();
  const documents = useQuery(api.documents.getUserDocuments, {
    userId: user?.id || "",
  });

  if (documents === undefined) {
    return (
      <div className="items-center justify-center flex pt-10">
        <Spinner size={"lg"} />
      </div>
    );
  }

  return (
    <div
      className={`max-h-[460px] mt-4  h-full transition-scrollbar ${
        isHovered ? "overflow-y-auto" : "overflow-y-hidden"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {documents?.map((document) => (
        <div
          key={document._id}
          role="button"
          className="px-4 py-2 text-sm w-full hover:bg-primary/5 flex items-center text-muted-foreground font-medium rounded-md"
        >
          <FileIcon className="shrink-0 h-[18px] w-[18px] mr-2 text-muted-foreground" />
          <span className="truncate">{document.title}</span>
        </div>
      ))}
    </div>
  );
};

export default DocumentList;
