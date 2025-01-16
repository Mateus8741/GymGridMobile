import React from 'react'
import { View } from 'react-native'

import { CardProps, cardsHomeMale } from '@utils'

import { Box, Cards, HeaderHome } from '@components'
import { AppTabScreenProps } from '@routes'

export function HomeScreen({ navigation }: AppTabScreenProps<'HomeScreen'>) {
  function goToExercises(card: CardProps) {
    console.log('Go to exercises', card)
    navigation.navigate('ExerciseListScreen', { card })
  }

  return (
    <>
      <HeaderHome
        avatarUrl="https://avatars.githubusercontent.com/u/39461509?v=4"
        displayName="Mateus Tavares"
      />

      <Box>
        <View className="flex-1 flex-row flex-wrap justify-between">
          {cardsHomeMale.map((card, index) => (
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
