"use client";

import { notFound, useParams } from "next/navigation";

import { Editor } from "@/components/editor";
import { Toolbar } from "@/components/toolbar";
import { Spinner } from "@/components/spinner";
import { CoverImage } from "@/components/cover-image";

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
      <div className="flex items-center justify-center h-full">
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
    <>
      {document.coverImage && (
        <CoverImage id={document._id} imgUrl={document.coverImage} preview />
      )}
      <Toolbar document={document} preview />
      <Editor
        id={document._id}
        initialContent={document.content}
        editable={false}
      />
    </>
  );
};

export default PreviewPage;
