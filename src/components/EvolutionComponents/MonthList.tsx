import React from 'react'
import { FlatList, Text, View } from 'react-native'

import { MONTHS } from '@utils'

export function EvolutionMonthList() {
  const currentMonth = new Date().getMonth()

  const isCurrentMonth = MONTHS[currentMonth]

  const toggleViewStyle = (month: string) => {
    if (month === isCurrentMonth) {
      return 'border-lemon-400 bg-lemon-400'
    }
    return 'border-gray-g300/30'
  }

  const toggleTextStyle = (month: string) => {
    if (month === isCurrentMonth) {
      return 'text-black'
    }
    return 'text-lemon-400'
  }

  return (
    <View className="mb-6">
      <FlatList
        data={MONTHS}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View
            className={`border ${toggleViewStyle(item)} rounded-full mr-2 p-2`}
          >
            <Text
              className={`${toggleTextStyle(item)} text-xs text-center font-500`}
            >
              {item}
            </Text>
          </View>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        className="mt-5"
      />
    </View>
  )
}
