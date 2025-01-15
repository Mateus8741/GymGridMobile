import React from 'react'

import { NavigationContainer } from '@react-navigation/native'

import { AppStack } from './AppStack'
import { AuthStack } from './AuthStack'

export function Routes() {
  // const { user } = useUserStorage()
  const user = true

  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  )
}
