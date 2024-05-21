import { useTheme } from "next-themes";
import { useEdgeStore } from "@/lib/edgestore";

import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";

import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

interface ItemProps {
  id: Id<"documents">;
  initialContent?: string;
}

export const Editor = ({ id, initialContent }: ItemProps) => {
  const { resolvedTheme } = useTheme();
  const { edgestore } = useEdgeStore();

  const updateDocument = useMutation(api.documents.updateDocument);

  const onEditorChange = (content: string) => {
    updateDocument({
      id: id,
      content,
    });
  };

  const handleUpload = async (file: File) => {
    const response = await edgestore.publicFiles.upload({
      file,
    });

    return response.url;
  };

  const editor = useCreateBlockNote({
    initialContent: initialContent ? JSON.parse(initialContent) : undefined,
    uploadFile: handleUpload,
  });

  return (
    <BlockNoteView
      editor={editor}
      sideMenu={false}
      editable={true}
      onChange={() => {
        onEditorChange(JSON.stringify(editor.document));
      }}
      theme={resolvedTheme === "dark" ? "dark" : "light"}
    />
  );
};
