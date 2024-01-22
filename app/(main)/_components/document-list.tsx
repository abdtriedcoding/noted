"use client";

import { FileIcon } from "lucide-react";
import { useState } from "react";

const DocumentList = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`max-h-[460px] mt-4  h-full transition-scrollbar ${
        isHovered ? "overflow-y-auto" : "overflow-y-hidden"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        role="button"
        className="px-4 py-2 text-sm w-full hover:bg-primary/5 flex items-center text-muted-foreground font-medium rounded-md"
      >
        <FileIcon className="shrink-0 h-[18px] w-[18px] mr-2 text-muted-foreground" />
        <span className="truncate">Untitled</span>
      </div>
      <div
        role="button"
        className="px-4 py-2 text-sm w-full hover:bg-primary/5 flex items-center text-muted-foreground font-medium rounded-md"
      >
        <FileIcon className="shrink-0 h-[18px] w-[18px] mr-2 text-muted-foreground" />
        <span className="truncate">Untitled</span>
      </div>
      <div
        role="button"
        className="px-4 py-2 text-sm w-full hover:bg-primary/5 flex items-center text-muted-foreground font-medium rounded-md"
      >
        <FileIcon className="shrink-0 h-[18px] w-[18px] mr-2 text-muted-foreground" />
        <span className="truncate">Untitled</span>
      </div>
      <div
        role="button"
        className="px-4 py-2 text-sm w-full hover:bg-primary/5 flex items-center text-muted-foreground font-medium rounded-md"
      >
        <FileIcon className="shrink-0 h-[18px] w-[18px] mr-2 text-muted-foreground" />
        <span className="truncate">Untitled</span>
      </div>
      <div
        role="button"
        className="px-4 py-2 text-sm w-full hover:bg-primary/5 flex items-center text-muted-foreground font-medium rounded-md"
      >
        <FileIcon className="shrink-0 h-[18px] w-[18px] mr-2 text-muted-foreground" />
        <span className="truncate">Untitled</span>
      </div>
      <div
        role="button"
        className="px-4 py-2 text-sm w-full hover:bg-primary/5 flex items-center text-muted-foreground font-medium rounded-md"
      >
        <FileIcon className="shrink-0 h-[18px] w-[18px] mr-2 text-muted-foreground" />
        <span className="truncate">Untitled</span>
      </div>
      <div
        role="button"
        className="px-4 py-2 text-sm w-full hover:bg-primary/5 flex items-center text-muted-foreground font-medium rounded-md"
      >
        <FileIcon className="shrink-0 h-[18px] w-[18px] mr-2 text-muted-foreground" />
        <span className="truncate">Untitled</span>
      </div>
      <div
        role="button"
        className="px-4 py-2 text-sm w-full hover:bg-primary/5 flex items-center text-muted-foreground font-medium rounded-md"
      >
        <FileIcon className="shrink-0 h-[18px] w-[18px] mr-2 text-muted-foreground" />
        <span className="truncate">Untitled</span>
      </div>
      <div
        role="button"
        className="px-4 py-2 text-sm w-full hover:bg-primary/5 flex items-center text-muted-foreground font-medium rounded-md"
      >
        <FileIcon className="shrink-0 h-[18px] w-[18px] mr-2 text-muted-foreground" />
        <span className="truncate">Untitled</span>
      </div>
      <div
        role="button"
        className="px-4 py-2 text-sm w-full hover:bg-primary/5 flex items-center text-muted-foreground font-medium rounded-md"
      >
        <FileIcon className="shrink-0 h-[18px] w-[18px] mr-2 text-muted-foreground" />
        <span className="truncate">Untitled</span>
      </div>
      <div
        role="button"
        className="px-4 py-2 text-sm w-full hover:bg-primary/5 flex items-center text-muted-foreground font-medium rounded-md"
      >
        <FileIcon className="shrink-0 h-[18px] w-[18px] mr-2 text-muted-foreground" />
        <span className="truncate">Untitled</span>
      </div>
      <div
        role="button"
        className="px-4 py-2 text-sm w-full hover:bg-primary/5 flex items-center text-muted-foreground font-medium rounded-md"
      >
        <FileIcon className="shrink-0 h-[18px] w-[18px] mr-2 text-muted-foreground" />
        <span className="truncate">Untitled</span>
      </div>
      <div
        role="button"
        className="px-4 py-2 text-sm w-full hover:bg-primary/5 flex items-center text-muted-foreground font-medium rounded-md"
      >
        <FileIcon className="shrink-0 h-[18px] w-[18px] mr-2 text-muted-foreground" />
        <span className="truncate">Untitled</span>
      </div>
      <div
        role="button"
        className="px-4 py-2 text-sm w-full hover:bg-primary/5 flex items-center text-muted-foreground font-medium rounded-md"
      >
        <FileIcon className="shrink-0 h-[18px] w-[18px] mr-2 text-muted-foreground" />
        <span className="truncate">Untitled</span>
      </div>
    </div>
  );
};

export default DocumentList;
