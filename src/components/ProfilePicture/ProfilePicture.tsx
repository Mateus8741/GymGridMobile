import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'

export function ProfilePicture() {
  function handleChangeProfilePicture() {
    console.log('trocar foto de perfil')
  }

  return (
    <View className="items-center mt-4">
      <View className="bg-gray-g300 w-[118px] h-[118px] items-center justify-center rounded-full">
        <Image
          source={{
            uri: 'https://github.com/Mateus8741.png',
          }}
          alt="Profile Picture"
          resizeMode="cover"
          className="w-28 h-28 rounded-full"
        />
      </View>

      <Pressable onPress={handleChangeProfilePicture}>
        <Text className="text-lemon-400 font-700 text-md mt-4">
          Alterar foto
        </Text>
      </Pressable>
    </View>
  )
}
