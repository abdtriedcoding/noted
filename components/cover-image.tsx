"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { ImageIcon, X } from "lucide-react";
import { useEdgeStore } from "@/lib/edgestore";
import { Button } from "@/components/ui/button";
import { CoverImageModal } from "@/components/modals/cover-image-upload";

import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

interface CoverImageProps {
  id: Id<"documents">;
  imgUrl: string;
  preview?: boolean;
}

export const CoverImage = ({ id, imgUrl, preview }: CoverImageProps) => {
  const { edgestore } = useEdgeStore();
  const removeCoverImage = useMutation(api.documents.removeCoverImage);

  const onRemove = async () => {
    if (imgUrl) {
      await edgestore.publicFiles.delete({
        url: imgUrl,
      });
    }
    removeCoverImage({
      id,
    });
  };

  return (
    <div
      className={cn(
        "relative w-full h-[35vh] group",
        !imgUrl && "h-[12vh]",
        imgUrl && "bg-muted"
      )}
    >
      {!!imgUrl && (
        <Image src={imgUrl} fill alt="Cover" className="object-cover" />
      )}
      {imgUrl && !preview && (
        <div className="opacity-0 group-hover:opacity-100 absolute bottom-5 right-5 flex items-center gap-x-2">
          <CoverImageModal id={id} imgUrl={imgUrl}>
            <Button
              className="text-muted-foreground text-xs"
              variant="outline"
              size="sm"
            >
              <ImageIcon className="h-4 w-4 mr-2" />
              Change cover
            </Button>
          </CoverImageModal>
          <Button
            onClick={onRemove}
            className="text-muted-foreground text-xs"
            variant="outline"
            size="sm"
          >
            <X className="h-4 w-4 mr-2" />
            Remove
          </Button>
        </div>
      )}
    </div>
  );
};
