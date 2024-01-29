import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useTheme } from "next-themes";

interface ItemProps {
  initialContent?: string;
}

export const PreviewEditor = ({ initialContent }: ItemProps) => {
  const { resolvedTheme } = useTheme();
  const editor = useCreateBlockNote({
    initialContent: initialContent ? JSON.parse(initialContent) : undefined,
  });

  return (
    <BlockNoteView
      editor={editor}
      editable={false}
      theme={resolvedTheme === "dark" ? "dark" : "light"}
    />
  );
};
