import { cn } from "@/lib/utils";
import { File, MoreHorizontal, Trash } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import { toast } from "sonner";
import { useUser } from "@clerk/nextjs";
import { useParams, useRouter } from "next/navigation";
import { useSidebarStore } from "@/lib/useSidebarStore";

import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

interface ItemProps {
  id: Id<"documents">;
  label: string;
  documentIcon?: string;
}

export const DocumentItem = ({ id, label, documentIcon }: ItemProps) => {
  const { setOpen } = useSidebarStore();
  const { isLoaded, isSignedIn, user } = useUser();

  const router = useRouter();
  const params = useParams();

  const active = params.documentId === id;

  const archiveDocument = useMutation(api.documents.archiveDocument);

  const onArchiveNote = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
    const promise = archiveDocument({ id }).then(() =>
      router.push("/documents")
    );

    toast.promise(promise, {
      loading: "Moving to trash...",
      success: "Note moved to trash!",
      error: "Failed to archive note.",
    });
  };

  const handleRedirect = () => {
    router.push(`/documents/${id}`);
    setOpen(false);
  };

  return (
    <div
      onClick={handleRedirect}
      role="button"
      className={cn(
        "group px-4 py-2 text-sm w-full hover:bg-primary/5 flex items-center font-medium rounded-md",
        active && "bg-primary/5 text-primary"
      )}
    >
      {documentIcon ? (
        <div className="shrink-0 mr-2 text-[18px]">{documentIcon}</div>
      ) : (
        <File className="shrink-0 h-[18px] w-[18px] mr-2" />
      )}
      <span className="truncate">{label}</span>
      <DropdownMenu>
        <DropdownMenuTrigger onClick={(e) => e.stopPropagation()} asChild>
          <div
            role="button"
            className="opacity-0 group-hover:opacity-100 h-full ml-auto rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600"
          >
            <MoreHorizontal className="h-4 w-4" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-60"
          align="start"
          side="right"
          forceMount
        >
          <DropdownMenuItem onClick={onArchiveNote}>
            <Trash className="h-4 w-4 mr-2" />
            Delete
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          {isLoaded && isSignedIn && user && (
            <div className="text-xs p-2">Last edited by: {user.fullName}</div>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
