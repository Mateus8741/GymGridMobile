import React from 'react'
import { View } from 'react-native'

import { useProfileInfo } from '@api'
import { Card, cardsHome } from '@utils'

import { Box, Cards, HeaderHome } from '@components'

export function HomeScreen() {
  const { ProfileInfo } = useProfileInfo()

  function goToExercises(card: Card) {
    console.log('Go to exercises', card)
  }

  return (
    <>
      <HeaderHome avatarUrl={ProfileInfo?.avatar_url || undefined} />

      <Box>
        <View className="flex-1 flex-row flex-wrap justify-between">
          {cardsHome.map((card, index) => (
            <Cards
              key={index}
              data={card}
              onPress={() => goToExercises(card)}
            />
          ))}
        </View>
      </Box>
    </>
  )
}
