import React from 'react'
import { FlatList, Text, View } from 'react-native'

import { MONTHS } from '@utils'

import { Box } from '@components'

export function EvolutionScreen() {
  const currentMonth = new Date().getMonth()

  const isCurrentMonth = MONTHS[currentMonth]

  const toggleStyle = (month: string) => {
    if (month === isCurrentMonth) {
      return 'border-lemon-400 bg-lemon-400'
    }
    return 'border-gray-g300/30'
  }

  return (
    <Box>
      <Text className="text-white text-lg text-center font-700">Evolução</Text>

      <View>
        <FlatList
          data={MONTHS}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <View
              className={`border ${toggleStyle(item)} rounded-full mr-2 p-2`}
            >
              <Text className="text-lemon-400 text-xs text-center font-500">
                {item}
              </Text>
            </View>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mt-5"
        />
      </View>
    </Box>
  )
}
