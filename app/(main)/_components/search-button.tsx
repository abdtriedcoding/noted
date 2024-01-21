"use client";

import * as React from "react";
import { File, SearchIcon } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Spinner } from "@/components/spinner";
import { useRouter } from "next/navigation";

const SearchButton = () => {
  const { user } = useUser();
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const documents = useQuery(api.documents.getSearch, {
    userId: user?.id || "",
  });

  if (documents === undefined) {
    return (
      <div className="px-4 py-2">
        <Spinner size="lg" />
      </div>
    );
  }

  const onSelect = (id: string) => {
    router.push(`/documents/${id}`);
    setOpen(false);
  };

  return (
    <>
      <div
        role="button"
        onClick={() => setOpen(true)}
        className="px-4 py-2 text-sm w-full hover:bg-primary/5 flex items-center text-muted-foreground font-medium rounded-md"
      >
        <SearchIcon className="shrink-0 h-[18px] w-[18px] mr-2 text-muted-foreground" />
        <span className="truncate">Search</span>
        <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
          <span className="text-xs">⌘</span>K
        </kbd>
      </div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder={`Search ${user?.fullName}'s Jotion...`} />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Documents">
            {documents?.map((document) => (
              <CommandItem
                key={document._id}
                value={`${document._id}-${document.title}`}
                title={document.title}
                onSelect={() => onSelect(document._id)}
              >
                {document.icon ? (
                  <p className="mr-2 text-[18px]">{document.icon}</p>
                ) : (
                  <File className="mr-2 h-4 w-4" />
                )}
                <span>{document.title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default SearchButton;
