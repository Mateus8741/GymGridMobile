import { useUserStorage } from '@contexts'
import { useQuery } from '@tanstack/react-query'
import { supabase } from 'src/lib/supabase'

export const useBucket = () => {
  const { user } = useUserStorage()

  const {
    data: Bucket,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['bucket', user?.user.id],
    queryFn: async () => {
      const response = await supabase.storage.from('bucket').download('file')

      return response.data
    },
    enabled: !!user?.user.id,
  })

  return { Bucket, isLoading, isError }
}
