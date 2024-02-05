import React from 'react'
import { Text } from 'react-native'

import { Box, Header } from '@components'

export function HomeScreen() {
  return (
    <>
      <Header />

      <Box>
        <Text className="text-white">HomeScreen</Text>
      </Box>
    </>
  )
}
