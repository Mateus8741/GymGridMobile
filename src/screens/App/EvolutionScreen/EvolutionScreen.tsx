import React from 'react'
import { Text, View } from 'react-native'

import { isCurrentMonth } from '@utils'

import { Box, EvolutionMonthList, Graphic } from '@components'

export function EvolutionScreen() {
  const abrvMonth = isCurrentMonth.slice(0, 3)

  return (
    <Box>
      <Text className="text-white text-lg text-center mt-6 mb-4 font-700">
        Evolução
      </Text>

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
