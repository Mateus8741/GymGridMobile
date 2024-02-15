import React from 'react'
import { View } from 'react-native'

import { useSignOut } from '@api'

import {
  Box,
  CustomButton,
  HeaderText,
  ProfilePicture,
  TextInput,
} from '@components'
import { useAppSafeArea } from '@hooks'

export function ProfileScreen() {
  const { bottom } = useAppSafeArea()

  const { signOut } = useSignOut()

  return (
    <Box style={{ paddingBottom: -bottom }}>
      <HeaderText title="Perfil" />

      <View className="flex-1 items-center mt-4">
        <ProfilePicture />
      </View>

      <CustomButton title="Sair" onPress={signOut} />

      <View className="bg-gray-g800 justify-end rounded-t-2xl flex-shrink -mx-5 p-5">
        <TextInput placeholder="Nome" />
        <TextInput placeholder="Nome" />
        <TextInput placeholder="Nome" />
        <TextInput placeholder="Nome" />
        <TextInput placeholder="Nome" />
      </View>
    </Box>
  )
}
