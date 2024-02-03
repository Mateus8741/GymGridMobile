import { StatusBar } from 'react-native'

import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { LoginScreen } from '@screens'

export default function App() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <LoginScreen />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  )
}
