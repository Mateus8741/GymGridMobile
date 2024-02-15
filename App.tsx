/* eslint-disable camelcase */

import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  useFonts,
} from '@expo-google-fonts/montserrat'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { Loading } from '@components'
import { Routes } from '@routes'

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  })

  const queryClient = new QueryClient()

  // useEffect(() => {
  //   const { data: authListener } = supabase.auth.onAuthStateChange(
  //     (event, session) => {
  //       console.log('onAuthStateChange', { event, session })
  //     },
  //   )

  //   return () => {
  //     authListener?.subscription?.unsubscribe()
  //   }
  // }, [])

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          {fontsLoaded ? <Routes /> : <Loading />}
        </SafeAreaProvider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  )
}
