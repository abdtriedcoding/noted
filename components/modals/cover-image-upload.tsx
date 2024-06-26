"use client";

import { useState } from "react";
import { useEdgeStore } from "@/lib/edgestore";
import { SingleImageDropzone } from "@/components/single-image-dropzone";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

interface CoverImageModalProps {
  children: React.ReactNode;
  id: Id<"documents">;
  imgUrl?: string;
}

export const CoverImageModal = ({
  children,
  id,
  imgUrl,
}: CoverImageModalProps) => {
  const { edgestore } = useEdgeStore();

  const [file, setFile] = useState<File>();
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateDocument = useMutation(api.documents.updateDocument);

  const handelImageUpload = async (file?: File) => {
    if (!file) return;
    setIsSubmitting(true);
    setFile(file);

    const res = await edgestore.publicFiles.upload({
      file,
      options: {
        replaceTargetUrl: imgUrl,
      },
    });
    await updateDocument({
      id: id,
      coverImage: res.url,
    });
    setDialogOpen(false);
    setFile(undefined);
    setIsSubmitting(false);
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <h2 className="text-center text-lg font-semibold">Cover Image</h2>
        </DialogHeader>
        <SingleImageDropzone
          className="w-full outline-none"
          disabled={isSubmitting}
          value={file}
          onChange={handelImageUpload}
        />
      </DialogContent>
    </Dialog>
  );
};
