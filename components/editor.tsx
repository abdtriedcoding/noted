import { useTheme } from "next-themes";
import { BlockNoteEditor } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import { Id } from "@/convex/_generated/dataModel";
import { useEdgeStore } from "@/lib/edgestore";
import "@blocknote/react/style.css";

const Editor = ({
  id,
  initialContent,
}: {
  id: Id<"documents">;
  initialContent?: string;
}) => {
  const { user } = useUser();
  const { resolvedTheme } = useTheme();
  const { edgestore } = useEdgeStore();

  const update = useMutation(api.documents.update);

  const onChange = (content: string) => {
    if (!user) return;
    update({
      id: id,
      userId: user?.id,
      content,
    });
  };

  const handleUpload = async (file: File) => {
    const response = await edgestore.publicFiles.upload({
      file,
    });

    return response.url;
  };

  const editor: BlockNoteEditor = useBlockNote({
    initialContent: initialContent ? JSON.parse(initialContent) : undefined,
    onEditorContentChange: (editor) => {
      onChange(JSON.stringify(editor.topLevelBlocks, null, 2));
    },
    uploadFile: handleUpload,
  });

  return (
    <div>
      <BlockNoteView
        editor={editor}
        theme={resolvedTheme === "dark" ? "dark" : "light"}
      />
    </div>
  );
};

export default Editor;
