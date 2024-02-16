import { useUserStorage } from '@contexts'
import { useQuery } from '@tanstack/react-query'
import { supabase } from 'src/lib/supabase'

export const useProfileInfo = () => {
  const { user } = useUserStorage()

  const {
    data: ProfileInfo,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['profile-info', user?.user.id],
    queryFn: async () => {
      const response = await supabase
        .from('profile')
        .select()
        .eq('id', user?.user.id || '')
        .single()

      return response.data
    },
    enabled: !!user?.user.id,
  })

  return { ProfileInfo, isLoading, isError }
}
