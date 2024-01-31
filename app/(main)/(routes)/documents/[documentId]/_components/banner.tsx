import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ConfirmModal } from "@/components/modals/confirm-modal";

import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

export const Banner = ({ id }: { id: Id<"documents"> }) => {
  const router = useRouter();

  const removeDocument = useMutation(api.documents.removeDocument);
  const restoreDocument = useMutation(api.documents.restoreDocument);

  const onRemoveNote = () => {
    const promise = removeDocument({ id });

    toast.promise(promise, {
      loading: "Deleting note...",
      success: "Note deleted!",
      error: " Failed to delete note.",
    });
    router.push("/documents");
  };

  const onRestoreNote = () => {
    const promise = restoreDocument({ id });

    toast.promise(promise, {
      loading: "Restoring note...",
      success: "Note restored!",
      error: " Failed to restore note.",
    });
  };

  return (
    <div className="w-full bg-rose-500 text-center p-2 text-white flex items-center gap-x-2 justify-center">
      <p className="hidden md:block">This page is in the Trash.</p>
      <Button size="sm" onClick={onRestoreNote}>
        Restore page
      </Button>
      <ConfirmModal onConfirm={onRemoveNote}>
        <Button size="sm">Delete forever</Button>
      </ConfirmModal>
    </div>
  );
};
