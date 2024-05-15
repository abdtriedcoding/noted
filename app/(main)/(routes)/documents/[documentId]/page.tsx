"use client";

import { Title } from "./_components/title";
import { Banner } from "./_components/banner";
import { Editor } from "@/components/editor";
import { Spinner } from "@/components/spinner";
import { Toolbar } from "@/components/toolbar";
import { CoverImage } from "@/components/cover-image";

import { useQuery } from "convex/react";
import { useParams } from "next/navigation";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

const DocumentPage = () => {
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
    return null;
  }

  return (
    <>
      {document.isArchived && <Banner id={document._id} />}
      {document.coverImage && (
        <CoverImage id={document._id} imgUrl={document.coverImage} />
      )}
      <div>
        <Title
          id={document._id}
          title={document.title}
          icon={document.icon}
          isPublished={document.isPublished}
        />
        <Toolbar document={document} />
        <Editor id={document._id} initialContent={document.content} />
      </div>
    </>
  );
};

export default DocumentPage;
