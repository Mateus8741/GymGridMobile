import { useUserStorage } from '@contexts'
import { useQuery } from '@tanstack/react-query'
import { supabase } from 'src/lib/supabase'

type UploadResponse = {
  data: any
}

export function useUpload({ data }: UploadResponse) {
  const { user } = useUserStorage()

  const {
    data: Upload,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['upload', user?.user.id],
    queryFn: async () => {
      const response = await supabase.storage
        .from('avatar')
        .upload('public/avatar.png', data)

      return response.data
    },
    enabled: !!user?.user.id,
  })

  return { Upload, isLoading, isError }
}
