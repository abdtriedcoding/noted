import { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useUser } from "@clerk/nextjs";
import Menu from "./menu";

const Title = ({
  id,
  title,
  icon,
}: {
  id: Id<"documents">;
  title: string;
  icon?: string;
}) => {
  const { user } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [userTitle, setUserTitle] = useState(title || "Untitled");
  const inputRef = useRef<HTMLInputElement>(null);
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
    if (!user) return;
    setUserTitle(event.target.value);
    console.log(event.target.value.trim());
    update({
      id: id,
      userId: user.id,
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
      <Menu id={id} />
    </div>
  );
};

export default Title;
