import { ImageIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface CoverImageProps {
  imgUrl: string;
  preview?: boolean;
}

const CoverImage = ({ imgUrl, preview }: CoverImageProps) => {
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
          <Button
            onClick={() => {}}
            className="text-muted-foreground text-xs"
            variant="outline"
            size="sm"
          >
            <ImageIcon className="h-4 w-4 mr-2" />
            Change cover
          </Button>
          <Button
            onClick={() => {}}
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

export default CoverImage;
