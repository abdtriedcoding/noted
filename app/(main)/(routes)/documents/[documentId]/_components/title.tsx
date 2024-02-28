import { useRef, useState } from "react";
import { MenuButton } from "./menu-button";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PublishButton } from "./publish-button";

import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

interface ItemProps {
  id: Id<"documents">;
  title: string;
  icon?: string;
  isPublished: boolean;
}

export const Title = ({ id, title, icon, isPublished }: ItemProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [userTitle, setUserTitle] = useState(title || "Untitled");

  const update = useMutation(api.documents.update);

  const enableInput = () => {
    setUserTitle(title);
    setIsEditing(true);
    setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.setSelectionRange(0, inputRef.current.value.length);
    }, 0);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserTitle(event.target.value);
    update({
      id: id,
      title: event.target.value.trim() || "Untitled",
    });
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setIsEditing(false);
    }
  };

  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center gap-x-1">
        {!!icon && <p>{icon}</p>}
        {isEditing ? (
          <Input
            className="h-7 px-2 focus-visible:ring-transparent"
            ref={inputRef}
            value={userTitle}
            onChange={onChange}
            onKeyDown={onKeyDown}
            onBlur={() => {
              setIsEditing(false);
            }}
          />
        ) : (
          <Button onClick={enableInput} variant={"ghost"}>
            <span className="truncate">{title}</span>
          </Button>
        )}
      </div>
      <div className="space-x-2 flex items-center">
        <PublishButton id={id} isPublished={isPublished} />
        <MenuButton id={id} />
      </div>
    </div>
  );
};
