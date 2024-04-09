import React from 'react'

import { useUserStorage } from '@contexts'
import { NavigationContainer } from '@react-navigation/native'

import { AppStack } from './AppStack'
import { AuthStack } from './AuthStack'

export function Routes() {
  const { user } = useUserStorage()
  // const user = false

  return (
    <NavigationContainer>
      {user?.user.id != null ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  )
}
