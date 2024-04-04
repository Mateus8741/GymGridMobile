import React from 'react'
import { FlatList } from 'react-native'

import { Box, HeaderText, HistoryCards } from '@components'

export function HistoryScreen() {
  return (
    <Box>
      <HeaderText title="Histórico" />

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
