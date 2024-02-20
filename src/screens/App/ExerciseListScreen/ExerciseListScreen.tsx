import React from 'react'
import { FlatList, ListRenderItemInfo } from 'react-native'

import { $trainingMA, $trainingMB, $trainingMC, $trainingMD } from '@mock'

import { Box, ExerciseCards, ExerciseCardsProps, HeaderText } from '@components'
import { AppScreenProps } from '@routes'

export function ExerciseListScreen({
  navigation,
  route,
}: AppScreenProps<'ExerciseListScreen'>) {
  const { card } = route.params

  console.log('card', card.title)

  function goToExerciseDetails() {
    // navigation.navigate('ExerciseDetailsScreen')
    console.log('goToExerciseDetails')
  }

  function switchBetweenExercises() {
    switch (card.title) {
      case 'Treino A':
        return $trainingMA
      case 'Treino B':
        return $trainingMB
      case 'Treino C':
        return $trainingMC
      case 'Treino D':
        return $trainingMD
    }
  }

  function renderItem({ item }: ListRenderItemInfo<ExerciseCardsProps>) {
    return <ExerciseCards item={item.item} />
  }

  return (
    <Box>
      <HeaderText title={card.title} canGoBack />

      <FlatList
        data={switchBetweenExercises()}
        keyExtractor={(item, index) => String(index)}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        className="mt-6"
      />
    </Box>
  )
}
