import { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Title = ({ title, icon }: { title: string; icon?: string }) => {
  const [userTitle, setUserTitle] = useState(title || "Untitled");
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const enableInput = () => {
    setIsEditing(true);
    setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.setSelectionRange(0, inputRef.current.value.length);
    }, 0);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserTitle(event.target.value);
    console.log(userTitle);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setIsEditing(false);
    }
  };

  return (
    <>
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
    </>
  );
};

export default Title;
