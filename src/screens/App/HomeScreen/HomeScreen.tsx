import React from 'react'
import { View } from 'react-native'

import { Box, Cards, HeaderHome } from '@components'

export function HomeScreen() {
  return (
    <>
      <HeaderHome />

      <Box>
        <View className="flex-1 flex-row flex-wrap justify-between">
          <Cards />
        </View>
      </Box>
    </>
  )
}
