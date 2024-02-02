import { toast } from 'sonner'
import { useState } from 'react'
import { useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { Input } from '@/components/ui/input'
import { useOrigin } from '@/hooks/use-origin'
import { Button } from '@/components/ui/button'
import { Check, Copy, Globe } from 'lucide-react'
import { type Id } from '@/convex/_generated/dataModel'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

interface ItemProps {
  id: Id<'documents'>
  isPublished: boolean
}

export default function PublishButton({ id, isPublished }: ItemProps) {
  const origin = useOrigin()
  const [copied, setCopied] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const updateDocument = useMutation(api.documents.updateDocument)

  const url = `${origin}/preview/${id}`

  const onCopy = async () => {
    await navigator?.clipboard?.writeText(url)
    setCopied(true)
    toast.success('Link copied successfully')
    setTimeout(() => {
      setCopied(false)
    }, 1000)
  }

  const onPublish = () => {
    setIsSubmitting(true)

    const promise = updateDocument({
      id,
      isPublished: true,
    })
    setIsSubmitting(false)
    toast.promise(promise, {
      loading: 'Publishing...',
      success: 'Note published',
      error: 'Failed to publish note',
    })
  }

  const onUnpublish = () => {
    setIsSubmitting(true)

    const promise = updateDocument({
      id,
      isPublished: false,
    })
    setIsSubmitting(false)

    toast.promise(promise, {
      loading: 'Unpublishing...',
      success: 'Note unpublished',
      error: 'Failed to unpublish note.',
    })
  }

  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button size="sm" variant="ghost">
            Publish
            {isPublished && <Globe className="ml-2 h-4 w-4 text-sky-500" />}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-72" align="end" alignOffset={8} forceMount>
          {isPublished ? (
            <div className="space-y-4">
              <div className="flex items-center gap-x-2">
                <Globe className="h-4 w-4 animate-pulse text-sky-500" />
                <p className="text-xs font-medium text-sky-500">
                  This note is live on web.
                </p>
              </div>
              <div className="flex items-center">
                <Input
                  className="h-8 flex-1 truncate rounded-r-none text-xs"
                  value={url}
                  disabled
                />
                <Button
                  onClick={onCopy}
                  disabled={copied}
                  className="h-8 rounded-l-none"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
              <Button
                size="sm"
                className="w-full text-xs"
                disabled={isSubmitting}
                onClick={onUnpublish}
              >
                Unpublish
              </Button>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center">
              <Globe className="mb-2 h-8 w-8" />
              <p className="mb-2 text-sm font-medium">Publish this note</p>
              <span className="mb-4 text-xs">Share your work with others.</span>
              <Button
                disabled={isSubmitting}
                onClick={onPublish}
                className="w-full text-xs"
                size="sm"
              >
                Publish
              </Button>
            </div>
          )}
        </PopoverContent>
      </Popover>
    </>
  )
}
