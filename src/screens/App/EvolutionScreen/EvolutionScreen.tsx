import React from 'react'
import { Text, View } from 'react-native'

import { MONTHS } from '@utils'
import { FlatList } from 'react-native-gesture-handler'

import { Box, EvolutionMonthList, Graphic } from '@components'

export function EvolutionScreen() {
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

      <FlatList
        data={MONTHS}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => (
          <Graphic month={item} progress={Math.floor(Math.random() * 100)} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </Box>
  )
}
