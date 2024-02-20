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
        data={Array.from({ length: 10 })}
        keyExtractor={(item, index) => String(index)}
        renderItem={() => <ExerciseCards />}
        showsVerticalScrollIndicator={false}
        className="mt-6"
      />
    </Box>
  )
}
