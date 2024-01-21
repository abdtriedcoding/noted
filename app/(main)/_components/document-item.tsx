import { Id } from "@/convex/_generated/dataModel";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ItemProps {
  id: Id<"documents">;
  label: string;
  icon: LucideIcon;
  documentIcon?: string;
  active: boolean;
  onClick: () => void;
}

const DocumentItem = ({
  id,
  label,
  icon: Icon,
  documentIcon,
  active,
  onClick,
}: ItemProps) => {
  return (
    <div
      onClick={onClick}
      role="button"
      className={cn(
        "px-4 py-2 text-sm w-full hover:bg-primary/5 flex items-center text-muted-foreground font-medium rounded-md",
        active && "bg-primary/5 text-primary"
      )}
    >
      {documentIcon ? (
        <div className="shrink-0 mr-2 text-[18px]">{documentIcon}</div>
      ) : (
        <Icon className="shrink-0 h-[18px] w-[18px] mr-2 text-muted-foreground" />
      )}
      <span className="truncate">{label}</span>
    </div>
  );
};

export default DocumentItem;
