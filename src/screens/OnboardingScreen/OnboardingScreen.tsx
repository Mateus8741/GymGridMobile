import React from 'react'
import { FlatList, Image } from 'react-native'

import { onboarding } from '@utils'

export function OnboardingScreen() {
  return (
    <FlatList
      data={onboarding}
      renderItem={({ item }) => (
        <Image
          source={item.image}
          resizeMode="cover"
          style={{ width: '100%', height: '100%' }}
          alt="Onboarding Images"
        />
      )}
      keyExtractor={(item) => item.id}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ flex: 1 }}
    />
  )
}
