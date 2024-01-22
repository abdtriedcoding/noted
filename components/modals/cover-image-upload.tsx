"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Button } from "../ui/button";
import { useEdgeStore } from "@/lib/edgestore";
import { SingleImageDropzone } from "../single-image-dropzone";

interface CoverImageModalProps {
  children: React.ReactNode;
}

export const CoverImageModal = ({ children }: CoverImageModalProps) => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const { edgestore } = useEdgeStore();

  const [file, setFile] = useState<File>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handelImageUpload = async (file?: File) => {
    if (!file) return;
    setIsSubmitting(true);
    setFile(file);

    const res = await edgestore.publicFiles.upload({
      file,
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
