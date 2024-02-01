import { toast } from 'sonner'
import { useEdgeStore } from '@/lib/edgestore'
import { createImageUpload } from 'novel/plugins'

export function useImageUpload() {
  const { edgestore } = useEdgeStore()

  const handleImageUpload = async (file: File): Promise<string> => {
    const response = await edgestore.publicFiles.upload({
      file,
    })

    return response.url
  }

  const onUpload = (file: File) => {
    const promise = handleImageUpload(file)

    return new Promise((resolve, reject) => {
      toast.promise(
        promise.then(async (url) => {
          // Successfully uploaded image
          if (url) {
            // Preload the image
            const image = new Image()
            image.src = url
            image.onload = () => {
              resolve(url)
            }
          } else {
            reject(new Error('Error uploading image. Please try again.'))
          }
        }),
        {
          loading: 'Uploading image...',
          success: 'Image uploaded successfully',
          error: 'Error in uploading image',
        }
      )
    })
  }

  const uploadFn = createImageUpload({
    onUpload,
    validateFn: (file: File) => {
      if (!file.type.includes('image/')) {
        toast.error('File type not supported.')
        return false
      }
      if (file.size / 1024 / 1024 > 20) {
        toast.error('File size too big (max 20MB).')
        return false
      }
      return true
    },
  })

  return { uploadFn }
}
