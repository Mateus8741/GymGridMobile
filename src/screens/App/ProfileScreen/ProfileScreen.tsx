/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { View } from 'react-native'

import { useSignOut } from '@api'
import { useUserStorage } from '@contexts'
import { useQuery } from '@tanstack/react-query'
import { supabase } from 'src/lib/supabase'

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
