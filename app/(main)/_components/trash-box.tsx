"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Search, TrashIcon, Undo } from "lucide-react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import { Spinner } from "@/components/spinner";

const TrashBox = () => {
  const { user } = useUser();
  const [search, setSearch] = useState("");

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
