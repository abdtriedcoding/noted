import { Button } from "@/components/ui/button";
import { Doc } from "@/convex/_generated/dataModel";
import { ImageIcon, Smile, X } from "lucide-react";
import React from "react";
import IconPicker from "./icon-picker";

const Toolbar = ({
  document,
  preview,
}: {
  document: Doc<"documents">;
  preview?: boolean;
}) => {
  return (
    <>
      {!!document.icon && !preview && (
        <div className="flex items-center gap-x-2 pt-6">
          <IconPicker onChange={() => {}}>
            <p className="text-6xl hover:opacity-75 transition">
              {document.icon}
            </p>
          </IconPicker>
          <Button
            onClick={() => {}}
            className="rounded-full opacity-100 transition text-muted-foreground text-xs"
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
          <IconPicker asChild onChange={() => {}}>
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
      </div>
    </>
  );
};

export default Toolbar;
