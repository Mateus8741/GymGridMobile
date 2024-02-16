import React from 'react'
import { View } from 'react-native'

import { useProfileInfo } from '@api'

import { Box, Cards, HeaderHome } from '@components'

export function HomeScreen() {
  const { ProfileInfo } = useProfileInfo()

  return (
    <>
      <HeaderHome avatarUrl={ProfileInfo?.avatar_url || undefined} />

      <Box>
        <View className="flex-1 flex-row flex-wrap justify-between">
          <Cards />
        </View>
      </Box>
    </>
  )
}
