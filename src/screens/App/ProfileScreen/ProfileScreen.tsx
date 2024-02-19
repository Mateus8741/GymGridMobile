import React from 'react'
import { Text, View } from 'react-native'

import { useProfileInfo, useSignOut } from '@api'

import {
  Box,
  DarkButton,
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

  function uploadProfilePicture() {
    console.log('uploadProfilePicture')
  }

  return (
    <Box style={{ paddingBottom: -bottom }}>
      <HeaderText title="Perfil" logout={handleSignOut} />

      <View className="items-center mt-4">
        <ProfilePicture
          avatarUrl={ProfileInfo?.avatar_url || undefined}
          onPress={uploadProfilePicture}
        />
      </View>

      <View className="bg-gray-g800 rounded-t-2xl flex-1 -mx-5 p-5 mt-6">
        <Text className="text-white text-lg font-bold mb-4">
          Dados pessoais
        </Text>

        <TextInput
          placeholder="Nome"
          value={ProfileInfo?.display_name?.toString()}
          editable={false}
        />

        <View className="flex-row ">
          <TextInput
            placeholder="Idade"
            value={ProfileInfo?.age?.toString()}
            editable={false}
            keyboardType="number-pad"
            moreClassName="flex-1"
          />

          <TextInput
            placeholder="Altura"
            value={ProfileInfo?.height?.toString()}
            editable={false}
            keyboardType="number-pad"
            moreClassName="flex-1 mx-3"
          />

          <TextInput
            placeholder="Peso"
            value={ProfileInfo?.weight?.toString()}
            editable={false}
            keyboardType="number-pad"
            moreClassName="flex-1"
          />
        </View>

        <TextInput
          placeholder="Sexo"
          value={ProfileInfo?.gender?.toString()}
          editable={false}
        />

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
