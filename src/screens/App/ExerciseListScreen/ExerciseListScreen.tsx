import React from 'react'
import { FlatList, ListRenderItemInfo } from 'react-native'

import { $trainingA } from '@mock'

import { Box, ExerciseCards, ExerciseCardsProps, HeaderText } from '@components'
import { AppScreenProps } from '@routes'

export function ExerciseListScreen({
  navigation,
  route,
}: AppScreenProps<'ExerciseListScreen'>) {
  const { card } = route.params

  function goToExerciseDetails() {
    // navigation.navigate('ExerciseDetailsScreen')
    console.log('goToExerciseDetails')
  }

  function renderItem({ item }: ListRenderItemInfo<ExerciseCardsProps>) {
    return <ExerciseCards {...item} />
  }

  return (
    <Box>
      <HeaderText title={card.title} canGoBack />

      <FlatList
        data={$trainingA}
        keyExtractor={(item, index) => String(index)}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        className="mt-6"
      />
    </Box>
  )
}
