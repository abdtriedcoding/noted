import { type ReactNode } from "react";
import { EditorBubble, useEditor } from "novel";

interface GenerativeMenuSwitchProps {
  children: ReactNode;
}

export default function GenerativeMenuSwitch({
  children,
}: GenerativeMenuSwitchProps) {
  const { editor } = useEditor();

  return (
    <EditorBubble
      tippyOptions={{
        placement: "top-end",
        onHidden: () => {
          editor?.chain().unsetHighlight().run();
        },
      }}
      className="flex w-fit max-w-[90vw] overflow-hidden rounded-md border border-muted bg-background shadow-xl"
    >
      {<>{children}</>}
    </EditorBubble>
  );
}
