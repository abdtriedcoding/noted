import { Button } from "@/components/ui/button";
import { Doc } from "@/convex/_generated/dataModel";
import { ImageIcon, Smile, X } from "lucide-react";
import React, { useState } from "react";
import IconPicker from "./icon-picker";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import { CoverImageModal } from "@/components/modals/cover-image-upload";

const Toolbar = ({
  document,
  preview,
}: {
  document: Doc<"documents">;
  preview?: boolean;
}) => {
  const { user } = useUser();
  const update = useMutation(api.documents.update);
  const removeIcon = useMutation(api.documents.removeIcon);

  const onIconSelect = (icon: string) => {
    if (!user) return;
    update({
      id: document._id,
      userId: user.id,
      icon,
    });
  };

  const onRemoveIcon = () => {
    if (!user) return;
    removeIcon({
      id: document._id,
      userId: user.id,
    });
  };

  const onUpload = () => {
    console.log("Upload Image");
  };

  return (
    <>
      {!!document.icon && !preview && (
        <div className="flex group items-center gap-x-2 pt-6">
          <IconPicker onChange={onIconSelect}>
            <p className="text-6xl hover:opacity-75 transition">
              {document.icon}
            </p>
          </IconPicker>
          <Button
            onClick={onRemoveIcon}
            className="rounded-full opacity-0 group-hover:opacity-100 transition text-muted-foreground text-xs"
            variant="outline"
            size="icon"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      )}
      {!!document.icon && preview && (
        <p className="text-6xl pt-6">{document.icon}</p>
      )}
      <div className="opacity-100 flex items-center gap-x-1 py-4">
        {!document.icon && !preview && (
          <IconPicker asChild onChange={onIconSelect}>
            <Button
              className="text-muted-foreground text-xs"
              variant="outline"
              size="sm"
            >
              <Smile className="h-4 w-4 mr-2" />
              Add icon
            </Button>
          </IconPicker>
        )}
        <CoverImageModal onUpload={onUpload}>
          {!document.coverImage && !preview && (
            <Button
              className="text-muted-foreground text-xs"
              variant="outline"
              size="sm"
            >
              <ImageIcon className="h-4 w-4 mr-2" />
              Add cover
            </Button>
          )}
        </CoverImageModal>
      </div>
    </>
  );
};

export default Toolbar;
