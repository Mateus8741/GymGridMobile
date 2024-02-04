import React from 'react'
import { ActivityIndicator, View } from 'react-native'

import { themeExtracted } from '@theme'

export function Loading() {
  const { colors } = themeExtracted

  return (
    <View className="flex-1 items-center justify-center bg-black">
      <ActivityIndicator size="large" color={colors.lemon[300]} />
    </View>
  )
}
