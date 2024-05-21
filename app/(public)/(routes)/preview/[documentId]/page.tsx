"use client";

import { Toolbar } from "@/components/toolbar";
import { Spinner } from "@/components/spinner";
import { notFound, useParams } from "next/navigation";
import { CoverImage } from "@/components/cover-image";
import { PreviewEditor } from "@/components/preview-editor";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

const PreviewPage = () => {
  const params = useParams();
  const document = useQuery(api.documents.getById, {
    documentId: params.documentId as Id<"documents">,
  });

  if (document === undefined) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spinner size={"lg"} />
      </div>
    );
  }

  if (document === null) {
    return <div>Not found</div>;
  }

  if (document?.isPublished === false) {
    notFound();
  }

  return (
    <div className="p-2">
      {document.coverImage && (
        <CoverImage id={document._id} imgUrl={document.coverImage} preview />
      )}
      <Toolbar document={document} preview />
      <PreviewEditor initialContent={document.content} />
    </div>
  );
};

export default PreviewPage;
