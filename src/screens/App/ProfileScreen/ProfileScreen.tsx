/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Text, View } from 'react-native'

import { useProfileInfo, useSignOut } from '@api'

import {
  Box,
  DarkButton,
  GreenButton,
  HeaderText,
  ProfilePicture,
  TextInput,
} from '@components'
import { useAppSafeArea } from '@hooks'

export function ProfileScreen() {
  const { bottom } = useAppSafeArea()

  const { signOut } = useSignOut()

  const { ProfileInfo } = useProfileInfo()

  function goToObjective() {
    console.log('goToObjective')
  }

  function handleSignOut() {
    signOut()
  }

  return (
    <Box style={{ paddingBottom: -bottom }}>
      <HeaderText title="Perfil" logout={handleSignOut} />

      <View className="flex-1 items-center mt-4">
        <ProfilePicture avatarUrl={ProfileInfo?.avatar_url || undefined} />
      </View>

      <GreenButton title="Sair" onPress={signOut} />

      <View className="bg-gray-g800 justify-end rounded-t-2xl flex-shrink -mx-5 p-5">
        <Text className="text-white text-lg font-bold mb-4">
          Dados pessoais
        </Text>

        <TextInput placeholder="Nome" />

        <View className="flex-row ">
          <TextInput
            placeholder="Idade"
            keyboardType="number-pad"
            moreClassName="flex-1"
          />

          <TextInput
            placeholder="Altura"
            keyboardType="number-pad"
            moreClassName="flex-1 mx-3"
          />

          <TextInput
            placeholder="Peso"
            keyboardType="number-pad"
            moreClassName="flex-1"
          />
        </View>

        <TextInput placeholder="Sexo" />

        <Text className="text-white text-lg font-bold my-4">Objetivo</Text>

        <DarkButton
          title="Objetivo do treinamento"
          rightComponent="ChevronRight"
          onPress={goToObjective}
        />
      </View>
    </Box>
  )
}
