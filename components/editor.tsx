import { toast } from 'sonner'
import { useState } from 'react'
import { useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { Separator } from '@/components/ui/separator'
import { type Id } from '@/convex/_generated/dataModel'
import { handleImageDrop, handleImagePaste } from 'novel/plugins'
import { ImageResizer, handleCommandNavigation } from 'novel/extensions'
import {
  EditorCommand,
  EditorCommandEmpty,
  EditorCommandItem,
  EditorCommandList,
  EditorContent,
  type EditorInstance,
  EditorRoot,
} from 'novel'

import TextButtons from './editor/text-buttons'
import LinkSelector from './editor/link-selector'
import { uploadFn } from './editor/image-upload'
import NodeSelector from './editor/node-selector'
import ColorSelector from './editor/color-selector'
import { defaultExtensions } from './editor/extensions'
import GenerativeMenuSwitch from './editor/generative-menu-switch'
import { slashCommand, suggestionItems } from './editor/slash-command'

const extensions = [...defaultExtensions, slashCommand]

interface ItemProps {
  id: Id<'documents'>
  initialContent?: string
  editable: boolean
}

export default function Editor({ id, initialContent, editable }: ItemProps) {
  const [openNode, setOpenNode] = useState(false)
  const [openColor, setOpenColor] = useState(false)
  const [openLink, setOpenLink] = useState(false)

  const updateDocument = useMutation(api.documents.updateDocument)

  const onEditorChange = (editor: EditorInstance) => {
    updateDocument({
      id,
      content: JSON.stringify(editor.getJSON()),
    }).catch(() => toast.error('Failed to update document'))
  }

  return (
    <EditorRoot>
      <EditorContent
        initialContent={initialContent ? JSON.parse(initialContent) : undefined}
        editable={editable}
        extensions={extensions}
        editorProps={{
          handleDOMEvents: {
            keydown: (_view, event) => handleCommandNavigation(event),
          },
          handlePaste: (view, event) => handleImagePaste(view, event, uploadFn),
          handleDrop: (view, event, _slice, moved) =>
            handleImageDrop(view, event, moved, uploadFn),
          attributes: {
            class:
              'prose prose-lg dark:prose-invert prose-headings:font-title font-default focus:outline-none max-w-full',
          },
        }}
        onUpdate={({ editor }) => {
          onEditorChange(editor)
        }}
        slotAfter={<ImageResizer />}
      >
        <EditorCommand className="z-50 h-auto max-h-[330px] overflow-y-auto rounded-md border border-muted bg-background px-1 py-2 shadow-md transition-all">
          <EditorCommandEmpty className="px-2 text-muted-foreground">
            No results
          </EditorCommandEmpty>
          <EditorCommandList>
            {suggestionItems.map((item) => (
              <EditorCommandItem
                value={item.title}
                onCommand={(val) => item.command!(val)}
                className="flex w-full items-center space-x-2 rounded-md px-2 py-1 text-left text-sm hover:bg-accent aria-selected:bg-accent"
                key={item.title}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-muted bg-background">
                  {item.icon}
                </div>
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </EditorCommandItem>
            ))}
          </EditorCommandList>
        </EditorCommand>

        <GenerativeMenuSwitch>
          <Separator orientation="vertical" />
          <NodeSelector open={openNode} onOpenChange={setOpenNode} />
          <Separator orientation="vertical" />

          <LinkSelector open={openLink} onOpenChange={setOpenLink} />
          <Separator orientation="vertical" />
          <TextButtons />
          <Separator orientation="vertical" />
          <ColorSelector open={openColor} onOpenChange={setOpenColor} />
        </GenerativeMenuSwitch>
      </EditorContent>
    </EditorRoot>
  )
}
