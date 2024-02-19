import React from 'react'
import { Image, Pressable, PressableProps, Text, View } from 'react-native'

type ProfilePictureProps = PressableProps & {
  avatarUrl: string | undefined
}

export function ProfilePicture({ avatarUrl, ...rest }: ProfilePictureProps) {
  return (
    <View className="items-center mt-4">
      <View className="bg-gray-g300 w-[118px] h-[118px] items-center justify-center rounded-full">
        {avatarUrl ? (
          <Image
            source={{
              uri: avatarUrl,
            }}
            alt="Profile Picture"
            resizeMode="cover"
            className="w-28 h-28 rounded-full"
          />
        ) : (
          <Text className="text-4xl font-700 text-gray-g600">?</Text>
          // <ActivityIndicator size="large" color={colors.gray.g900} />
        )}
      </View>

      <Pressable {...rest}>
        <Text className="text-lemon-400 font-700 text-md mt-4">
          Alterar foto
        </Text>
      </Pressable>
    </View>
  )
}
