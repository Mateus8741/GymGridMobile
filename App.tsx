import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { LoginScreen } from '@screens'

export default function App() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <LoginScreen />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  )
}
