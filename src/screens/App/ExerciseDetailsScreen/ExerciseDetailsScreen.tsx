import React from 'react'
import { Text, View } from 'react-native'

import { Box, CardDetails, GreenButton, HeaderText } from '@components'
import { AppScreenProps } from '@routes'

export function ExerciseDetailsScreen({
  route,
}: AppScreenProps<'ExerciseDetailsScreen'>) {
  const { card } = route.params

  console.log('card', card)

  return (
    <Box>
      <HeaderText title={card.item.title} tag={card.item.tag} canGoBack />

      <CardDetails card={card.item} />

      <GreenButton
        title="Ta feitoo!!"
        className="my-12 w-2/4 rounded-full self-center"
      />

      <View className="h-px bg-gray-g700" />

      <View className="my-7">
        <Text className="text-white font-700 text-left">Resumo</Text>

        <Text className="text-white font-500 text-left mt-4">
          {card.item.resume}
        </Text>
      </View>

      <View className="h-px bg-gray-g700 mb-7" />

      <Text className="text-white font-700 text-left">
        Escolha seu próximo exercício
      </Text>
    </Box>
  )
}
