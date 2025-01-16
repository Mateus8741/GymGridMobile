import React from 'react'
import { Text, View } from 'react-native'

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

  function goToObjective() {
    console.log('goToObjective')
  }

  function handleSignOut() {
    console.log('SignOut')
  }

  function uploadProfilePicture() {
    console.log('uploadProfilePicture')
  }

  return (
    <Box style={{ paddingBottom: -bottom }}>
      <HeaderText title="Perfil" logout={handleSignOut} />

      <View className="items-center mt-4">
        <ProfilePicture
          avatarUrl="https://avatars.githubusercontent.com/u/39461509?v=4"
          onPress={uploadProfilePicture}
          className="transition-transform transform hover:scale-105"
        />
      </View>

      <View className="bg-gray-g800 rounded-t-2xl flex-1 -mx-5 p-5 mt-6">
        <Text className="text-white text-lg font-bold mb-4">
          Dados pessoais
        </Text>

        <TextInput placeholder="Nome" value="Mateus Tavares" editable={false} />

        <View className="flex-row ">
          <TextInput
            placeholder="Idade"
            value="25"
            editable={false}
            keyboardType="number-pad"
            moreClassName="flex-1"
          />

          <TextInput
            placeholder="Altura"
            value="1.75"
            editable={false}
            keyboardType="number-pad"
            moreClassName="flex-1 mx-3"
          />

          <TextInput
            placeholder="Peso"
            value="89"
            editable={false}
            keyboardType="number-pad"
            moreClassName="flex-1"
          />
        </View>

        <TextInput placeholder="Sexo" value="Masculino" editable={false} />

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
