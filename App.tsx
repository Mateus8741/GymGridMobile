import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>

    <View className='flex-1 items-center justify-center bg-slate-900'>
      <Text className='text-white'>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
