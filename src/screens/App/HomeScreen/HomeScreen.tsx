import React from 'react'
import { View } from 'react-native'

import { Box, Cards, Header } from '@components'

export function HomeScreen() {
  return (
    <>
      <Header />

      <Box>
        <View className="flex-1 flex-row flex-wrap justify-between">
          <Cards />

          <Cards />

          <Cards />

          <Cards />
        </View>
      </Box>
    </>
  )
}
