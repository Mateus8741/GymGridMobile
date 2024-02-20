import React from 'react'
import { View } from 'react-native'

import { useProfileInfo } from '@api'
import { Card, cardsHome } from '@utils'

import { Box, Cards, HeaderHome } from '@components'
import { AppTabScreenProps } from '@routes'

export function HomeScreen({ navigation }: AppTabScreenProps<'HomeScreen'>) {
  const { ProfileInfo } = useProfileInfo()

  function goToExercises(card: Card) {
    console.log('Go to exercises', card)
    navigation.navigate('ExerciseListScreen', { card })
  }

  return (
    <>
      <HeaderHome
        avatarUrl={ProfileInfo?.avatar_url || undefined}
        displayName={ProfileInfo?.display_name || 'Usuário'}
      />

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
