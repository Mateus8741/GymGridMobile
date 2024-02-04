import React from 'react'
import { FlatList, Image } from 'react-native'

import { onboarding } from '@utils'

import { Box } from '@components'

export function OnboardingScreen() {
  return (
    <Box>
      <FlatList
        data={onboarding}
        renderItem={({ item }) => (
          <Image
            source={item.image}
            style={{ width: '100%', height: '100%' }}
            alt="Onboarding Images"
          />
        )}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
    </Box>
  )
}
