import React from 'react'
import { Text, View } from 'react-native'

import { Box, EvolutionMonthList, Graphic } from '@components'

export function EvolutionScreen() {
  return (
    <Box>
      <Text className="text-white text-lg text-center font-700">Evolução</Text>

      <EvolutionMonthList />

      <View className="flex-row items-center space-x-1 mb-6">
        <Text className="text-white text-xs text-left font-400">
          Atualizado:
        </Text>

        <Text className="text-white text-xs text-left font-700">
          ontem as 21h
        </Text>
      </View>

      <Graphic month="Jan" progress={50} />
      <Graphic month="Jan" progress={50} />
      <Graphic month="Jan" progress={50} />
      <Graphic month="Jan" progress={50} />
    </Box>
  )
}
