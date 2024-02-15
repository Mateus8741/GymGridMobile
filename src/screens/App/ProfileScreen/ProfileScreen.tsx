import React from 'react'
import { View } from 'react-native'

import { Box, HeaderText, ProfilePicture, TextInput } from '@components'
import { useAppSafeArea } from '@hooks'

export function ProfileScreen() {
  const { bottom } = useAppSafeArea()

  return (
    <Box
      style={{
        paddingBottom: -bottom,
      }}
    >
      <HeaderText title="Perfil" />

      <View className="flex-1 items-center mt-4">
        <ProfilePicture />
      </View>

      <View className="bg-gray-g800 justify-end rounded-t-2xl flex-shrink -mx-5 p-5">
        <TextInput label="Nome" />
        <TextInput label="Nome" />
        <TextInput label="Nome" />
        <TextInput label="Nome" />
        <TextInput label="Nome" />
      </View>
    </Box>
  )
}
