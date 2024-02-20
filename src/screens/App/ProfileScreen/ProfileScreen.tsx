import React from 'react'
import { Text, View } from 'react-native'

import { useProfileInfo, useSignOut } from '@api'
import * as FileSystem from 'expo-file-system'
import * as ImagePicker from 'expo-image-picker'
import { supabase } from 'src/lib/supabase'

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

  async function uploadProfilePicture() {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()

    if (status !== 'granted') {
      alert('Precisamos de permissão para acessar sua galeria de fotos')
      return
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    if (!result.canceled) {
      const img = result.assets[0]
      const base64 = await FileSystem.readAsStringAsync(img.uri, {
        encoding: 'base64',
      })
      const filePath = `${ProfileInfo?.id}/avatar.png`
      const contentType = 'image/png'

      const resultUP = await supabase.storage
        .from('avatar')
        .upload(filePath, decodeURI(base64), {
          cacheControl: '3600',
          contentType,
          upsert: true,
        })

      console.log(resultUP)
    }
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
