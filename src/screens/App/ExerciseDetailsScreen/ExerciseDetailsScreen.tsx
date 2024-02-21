import React from 'react'
import { Text } from 'react-native'

import { Box, HeaderText } from '@components'
import { AppScreenProps } from '@routes'

export function ExerciseDetailsScreen({
  route,
}: AppScreenProps<'ExerciseDetailsScreen'>) {
  const { card } = route.params

  console.log('card', card)

  return (
    <Box>
      <HeaderText title={card.item.title} tag={card.item.tag} canGoBack />

      <Text>ExerciseDetailsScreen</Text>
    </Box>
  )
}
