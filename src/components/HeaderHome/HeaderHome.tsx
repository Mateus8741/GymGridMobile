import React from 'react'
import { Image, StatusBar, Text, View } from 'react-native'

import { useProfileInfo } from '@api'

import { useAppSafeArea } from '@hooks'

type HeaderHomeProps = {
  avatarUrl: string | undefined
  displayName: string
}

export function HeaderHome({ avatarUrl, displayName }: HeaderHomeProps) {
  const { top } = useAppSafeArea()

  const { ProfileInfo } = useProfileInfo()

  return (
    <View className="bg-bgColor-800">
      <View
        className="pb-4 bg-lemon-900 rounded-b-3xl"
        style={{
          paddingTop: top,
        }}
      >
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />

        <View
          className="flex-row justify-between items-center px-5"
          style={{
            paddingTop: 10,
          }}
        >
          <View className="flex-col items-left">
            <Text className="text-white text-xl font-500">Olá,</Text>
            <Text className="text-white text-xl font-bold">{displayName}</Text>
          </View>

          <View className="flex-col border-2 rounded-full border-lemon-400 bg-gray-g700">
            <View className="items-center justify-center w-16 h-16 rounded-full">
              {avatarUrl ? (
                <Image
                  source={{ uri: avatarUrl }}
                  className="w-16 h-16 rounded-full"
                  alt="Profile Picture"
                />
              ) : (
                <Text className="text-4xl font-700 text-gray-g100">?</Text>
              )}
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}
