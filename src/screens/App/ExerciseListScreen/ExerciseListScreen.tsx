import React from 'react'
import { FlatList } from 'react-native'

import { Box, ExerciseCards, HeaderText } from '@components'
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

  return (
    <Box>
      <HeaderText title={card.title} canGoBack />

      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        keyExtractor={(item) => String(item)}
        renderItem={() => <ExerciseCards />}
        showsVerticalScrollIndicator={false}
        className="mt-6"
      />
    </Box>
  )
}
