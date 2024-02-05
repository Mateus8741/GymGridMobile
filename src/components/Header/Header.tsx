import React from 'react'
import { Image, StatusBar, Text, View } from 'react-native'

import { useAppSafeArea } from '@hooks'

export function Header() {
  const { top } = useAppSafeArea()

  return (
    <View className="bg-black">
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
            <Text className="text-white text-xl font-bold">Matt</Text>
          </View>

          <View className="flex-col border-2 rounded-full border-lemon-400">
            <View className="items-center justify-center w-16 h-16 rounded-full">
              <Image
                source={{ uri: 'https://i.pravatar.cc/800' }}
                className="w-16 h-16 rounded-full"
                alt="Profile Picture"
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}
