import { useUserStorage } from '@contexts'
import { useQuery } from '@tanstack/react-query'
import { supabase } from 'src/lib/supabase'

export const useEvolution = () => {
  const { user } = useUserStorage()

  const {
    data: Evolution,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['evolution', user?.user.id],
    queryFn: async () => {
      const response = await supabase
        .from('evolution')
        .select()
        .eq('id', user?.user.id || '')
        .single()

      return response.data
    },
    enabled: !!user?.user.id,
  })

  return { Evolution, isLoading, isError }
}
