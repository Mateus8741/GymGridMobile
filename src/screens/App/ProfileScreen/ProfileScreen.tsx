/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Text, View } from 'react-native'

import { useSignOut } from '@api'
import { useUserStorage } from '@contexts'
import { useQuery } from '@tanstack/react-query'
import { supabase } from 'src/lib/supabase'

import {
  Box,
  GreenButton,
  HeaderText,
  ProfilePicture,
  TextInput,
} from '@components'
import { useAppSafeArea } from '@hooks'

export function ProfileScreen() {
  const { bottom } = useAppSafeArea()

  const { user } = useUserStorage()

  const { signOut } = useSignOut()

  const { data: ProfileInfo } = useQuery({
    queryKey: ['profile-info', user?.user.id],
    queryFn: async () => {
      const response = await supabase
        .from('profile')
        .select()
        .eq('id', user?.user.id || '')
        .single()

      return response.data
    },
  })

  console.log(ProfileInfo)

  return (
    <Box style={{ paddingBottom: -bottom }}>
      <HeaderText title="Perfil" />

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
      </View>
    </Box>
  )
}
