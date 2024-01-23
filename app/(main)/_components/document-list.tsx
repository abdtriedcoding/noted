"use client";

import { Spinner } from "@/components/spinner";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { FileIcon } from "lucide-react";
import { useState } from "react";
import DocumentItem from "./document-item";
import { useParams, useRouter } from "next/navigation";

const DocumentList = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { user } = useUser();
  const router = useRouter();
  const params = useParams();
  const documents = useQuery(api.documents.getUserDocuments, {
    userId: user?.id || "",
  });

  if (documents === undefined) {
    return (
      <div className="items-center justify-center flex h-80">
        <Spinner size={"lg"} />
      </div>
    );
  }

  return (
    <div
      className={`max-h-[400px] mt-4 overflow-y-auto transition-scrollbar ${
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
          icon={FileIcon}
          documentIcon={document.icon}
          active={params.documentId === document._id}
          onClick={() => router.push(`/documents/${document._id}`)}
        />
      ))}
    </div>
  );
};

export default DocumentList;
