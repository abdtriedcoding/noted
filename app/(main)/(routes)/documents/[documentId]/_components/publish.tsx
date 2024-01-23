import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, Copy, Globe } from "lucide-react";

const Publish = () => {
  const isPublished = false;
  const copied = false;
  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button size="sm" variant="ghost">
            Publish
            {isPublished && <Globe className="text-sky-500 w-4 h-4 ml-2" />}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-72" align="end" alignOffset={8} forceMount>
          {isPublished ? (
            <div className="space-y-4">
              <div className="flex items-center gap-x-2">
                <Globe className="text-sky-500 animate-pulse h-4 w-4" />
                <p className="text-xs font-medium text-sky-500">
                  This note is live on web.
                </p>
              </div>
              <div className="flex items-center">
                <input
                  className="flex-1 px-2 text-xs border rounded-l-md h-8 bg-muted truncate"
                  // value={url}
                  disabled
                />
                <Button
                  // onClick={onCopy}
                  // disabled={copied}
                  className="h-8 rounded-l-none"
                >
                  {copied ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
              <Button
                size="sm"
                className="w-full text-xs"
                // disabled={isSubmitting}
                // onClick={onUnpublish}
              >
                Unpublish
              </Button>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center">
              <Globe className="h-8 w-8 text-muted-foreground mb-2" />
              <p className="text-sm font-medium mb-2">Publish this note</p>
              <span className="text-xs text-muted-foreground mb-4">
                Share your work with others.
              </span>
              <Button
                // disabled={isSubmitting}
                // onClick={onPublish}
                className="w-full text-xs"
                size="sm"
              >
                Publish
              </Button>
            </div>
          )}
        </PopoverContent>
      </Popover>
    </>
  );
};

export default Publish;
