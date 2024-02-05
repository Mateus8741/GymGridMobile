import React from 'react'

import { useOnboardStorage } from '@contexts'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { LoginScreen, OnboardingScreen } from '@screens'

export type AuthStackParamList = {
  LoginScreen: undefined
  OnboardingScreen: undefined
}

export function AuthStack() {
  const { Navigator, Screen } = createNativeStackNavigator<AuthStackParamList>()

  const { onboard } = useOnboardStorage()

  const initialRoute = onboard ? 'LoginScreen' : 'OnboardingScreen'

  return (
    <Navigator
      initialRouteName={initialRoute}
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}
    >
      <Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Screen name="LoginScreen" component={LoginScreen} />
    </Navigator>
  )
}
