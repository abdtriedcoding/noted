"use client";

import { useMemo } from "react";
import { useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { notFound, useParams } from "next/navigation";
import { Id } from "@/convex/_generated/dataModel";
import { api } from "@/convex/_generated/api";
import { Spinner } from "@/components/spinner";
import dynamic from "next/dynamic";

import CoverImage from "@/app/(main)/(routes)/documents/[documentId]/_components/cover-image";
import Toolbar from "@/app/(main)/(routes)/documents/[documentId]/_components/toolbar";

const Page = () => {
  const Editor = useMemo(
    () => dynamic(() => import("@/components/editor"), { ssr: false }),
    []
  );

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

  if (document?.isPublished === false) {
    notFound();
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

export default Page;
