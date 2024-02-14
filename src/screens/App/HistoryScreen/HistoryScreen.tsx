import React from 'react'
import { FlatList, Text } from 'react-native'

import { Box, HistoryCards } from '@components'

export function HistoryScreen() {
  return (
    <Box>
      <Text className="text-white text-lg text-center font-700">Histórico</Text>

      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        keyExtractor={(item) => String(item)}
        renderItem={() => <HistoryCards />}
        showsVerticalScrollIndicator={false}
        className="mt-5"
      />
    </Box>
  )
}
