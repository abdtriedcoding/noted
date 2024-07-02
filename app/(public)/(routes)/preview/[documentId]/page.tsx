"use client";

import { useParams } from "next/navigation";
import { Toolbar } from "@/components/toolbar";
import { Spinner } from "@/components/spinner";
import { CoverImage } from "@/components/cover-image";
const Editor = dynamic(() => import("@/components/editor"), { ssr: false });

import dynamic from "next/dynamic";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

const PreviewPage = () => {
  const params = useParams();
  const document = useQuery(api.documents.getDocumentById, {
    documentId: params.documentId as Id<"documents">,
  });

  if (document === undefined) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spinner size={"lg"} />
      </div>
    );
  }

  return (
    <>
      {document.coverImage && (
        <CoverImage id={document._id} imgUrl={document.coverImage} preview />
      )}
      <div className="p-4">
        <Toolbar document={document} preview />
        <Editor
          id={document._id}
          initialContent={document.content}
          editable={false}
        />
      </div>
    </>
  );
};

export default PreviewPage;
