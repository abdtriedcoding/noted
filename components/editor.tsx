import { toast } from 'sonner'
import { useTheme } from 'next-themes'
import { useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { useEdgeStore } from '@/lib/edgestore'
import { type Id } from '@/convex/_generated/dataModel'

import '@blocknote/core/fonts/inter.css'
import { useCreateBlockNote } from '@blocknote/react'
import { BlockNoteView } from '@blocknote/mantine'
import '@blocknote/mantine/style.css'

interface ItemProps {
  id: Id<'documents'>
  initialContent?: string
  editable: boolean
}

export default function Editor({ id, initialContent, editable }: ItemProps) {
  const { resolvedTheme } = useTheme()
  const { edgestore } = useEdgeStore()

  const updateDocument = useMutation(api.documents.updateDocument)

  const onEditorChange = (content: string) => {
    updateDocument({
      id,
      content,
    }).catch(() => toast.error('Failed to update document'))
  }

  const handleUpload = async (file: File) => {
    const response = await edgestore.publicFiles.upload({
      file,
    })

    return response.url
  }

  const editor = useCreateBlockNote({
    initialContent: initialContent ? JSON.parse(initialContent) : undefined,
    uploadFile: handleUpload,
  })

  return (
    <>
      {editable ? (
        <BlockNoteView
          editor={editor}
          sideMenu={false}
          editable={true}
          onChange={() => {
            onEditorChange(JSON.stringify(editor.document))
          }}
          theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
        />
      ) : (
        <BlockNoteView
          editor={editor}
          editable={false}
          theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
        />
      )}
    </>
  )
}
