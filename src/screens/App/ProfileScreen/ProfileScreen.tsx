/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { View } from 'react-native'

import { useSignOut } from '@api'
import { useUserStorage } from '@contexts'
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

  // const { data: ProfileInfo } = useQuery({
  //   queryKey: ['profile-info', user?.user.id],
  //   queryFn: () =>
  //     supabase.from('profile').select('display_name').eq('id', user?.user.id),
  //   refetchInterval: 1000,
  // })

  async function test() {
    const { data } = await supabase
      .from('profile')
      .select()
      .eq('id', user?.user.id)
      .single()

    console.log(data)
  }

  test()

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
