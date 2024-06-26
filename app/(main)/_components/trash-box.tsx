"use client";

import { toast } from "sonner";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Search, Trash, TrashIcon, Undo } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { ConfirmModal } from "@/components/modals/confirm-modal";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useMutation, useQuery } from "convex/react";
import { ScrollArea } from "@/components/ui/scroll-area";

export const TrashBox = () => {
  const router = useRouter();
  const params = useParams();
  const [search, setSearch] = useState("");

  const documents = useQuery(api.documents.getTrashDocuments);
  const removeDocument = useMutation(api.documents.removeDocument);
  const restoreDocument = useMutation(api.documents.restoreDocument);

  const filteredDocuments = documents?.filter((document) =>
    document.title.toLowerCase().includes(search.toLowerCase())
  );

  if (documents === undefined) {
    return <Skeleton className="px-4 py-4 w-full" />;
  }

  const onRemoveNote = (id: Id<"documents">) => {
    const promise = removeDocument({ id });

    toast.promise(promise, {
      loading: "Deleting note...",
      success: "Note deleted!",
      error: " Failed to delete note.",
    });

    if (params.documentId === id) {
      router.push("/documents");
    }
  };

  const onRestoreNote = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    id: Id<"documents">
  ) => {
    event.stopPropagation();
    const promise = restoreDocument({ id });

    toast.promise(promise, {
      loading: "Restoring note...",
      success: "Note restored!",
      error: " Failed to restore note.",
    });
  };

  return (
    <Popover>
      <PopoverTrigger className="w-full">
        <div
          role="button"
          className="px-4 py-2 text-sm w-full hover:bg-primary/5 flex items-center font-medium rounded-md"
        >
          <TrashIcon className="shrink-0 h-[18px] w-[18px] mr-2" />
          <span className="truncate">Trash</span>
        </div>
      </PopoverTrigger>
      <PopoverContent className="p-0 w-72">
        <div className="flex items-center gap-x-1 p-2">
          <Search className="h-4 w-4" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-7 px-2 focus-visible:ring-transparent bg-secondary"
            placeholder="Filter by note title..."
          />
        </div>
        <ScrollArea className="h-96">
          <div className="p-2 mr-2 space-y-1">
            <p className="hidden last:block text-xs text-center pb-2">
              No documents found.
            </p>
            {filteredDocuments?.map((document) => (
              <div
                key={document._id}
                onClick={() => router.push(`/documents/${document._id}`)}
                role="button"
                className="text-sm rounded-sm w-full hover:bg-primary/5 flex items-center text-primary justify-between"
              >
                <span className="truncate pl-2">{document.title}</span>
                <div className="flex items-center">
                  <div
                    role="button"
                    onClick={(e) => onRestoreNote(e, document._id)}
                    className="rounded-sm p-2 hover:bg-neutral-200 dark:hover:bg-neutral-600"
                  >
                    <Undo className="h-4 w-4" />
                  </div>
                  <ConfirmModal onConfirm={() => onRemoveNote(document._id)}>
                    <div
                      role="button"
                      className="rounded-sm p-2 hover:bg-neutral-200 dark:hover:bg-neutral-600"
                    >
                      <Trash className="h-4 w-4" />
                    </div>
                  </ConfirmModal>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </PopoverContent>
    </Popover>
  );
};
