"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Search, Trash, TrashIcon, Undo } from "lucide-react";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import { Spinner } from "@/components/spinner";
import { useParams, useRouter } from "next/navigation";
import { ConfirmModal } from "@/components/modals/confirm-modal";
import { Id } from "@/convex/_generated/dataModel";
import { toast } from "sonner";

const TrashBox = () => {
  const { user } = useUser();
  const router = useRouter();
  const params = useParams();
  const [search, setSearch] = useState("");
  const remove = useMutation(api.documents.remove);

  const documents = useQuery(api.documents.getTrash, {
    userId: user?.id || "",
  });

  const filteredDocuments = documents?.filter((document) => {
    return document.title.toLowerCase().includes(search.toLowerCase());
  });

  if (documents === undefined) {
    return (
      <div className="h-full flex items-center justify-center p-4">
        <Spinner size="lg" />
      </div>
    );
  }

  const onRemove = (id: Id<"documents">) => {
    if (!user) return;
    const promise = remove({ id: id, userId: user?.id });

    toast.promise(promise, {
      loading: "Deleting note...",
      success: "Note deleted!",
      error: " Failed to delete note.",
    });

    if (params.documentId === id) {
      router.push("/documents");
    }
  };

  return (
    <Popover>
      <PopoverTrigger className="w-full">
        <div
          role="button"
          className="px-4 py-2 text-sm w-full hover:bg-primary/5 flex items-center text-muted-foreground font-medium rounded-md"
        >
          <TrashIcon className="shrink-0 h-[18px] w-[18px] mr-2 text-muted-foreground" />
          <span className="truncate">Trash</span>
        </div>
      </PopoverTrigger>
      <PopoverContent className="p-0 w-72" side="right">
        <div className="text-sm">
          <div className="flex items-center gap-x-1 p-2">
            <Search className="h-4 w-4" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-7 px-2 focus-visible:ring-transparent bg-secondary"
              placeholder="Filter by page title..."
            />
          </div>
          <div className="mt-2 px-1 pb-1">
            <p className="hidden last:block text-xs text-center text-muted-foreground pb-2">
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
                    className="rounded-sm p-2 hover:bg-neutral-200 dark:hover:bg-neutral-600"
                  >
                    <Undo className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <ConfirmModal onConfirm={() => onRemove(document._id)}>
                    <div
                      role="button"
                      className="rounded-sm p-2 hover:bg-neutral-200 dark:hover:bg-neutral-600"
                    >
                      <Trash className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </ConfirmModal>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default TrashBox;
