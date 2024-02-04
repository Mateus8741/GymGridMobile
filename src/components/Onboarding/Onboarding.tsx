import React from 'react'
import { ImageBackground, ImageSourcePropType, Text, View } from 'react-native'

type OnboardingProps = {
  item: {
    image: ImageSourcePropType
    title: string
    subtitle: string
  }
}

export function Onboarding({ item }: OnboardingProps) {
  return (
    <ImageBackground
      source={item.image}
      resizeMode="cover"
      style={{ width: '100%', height: '100%' }}
      alt="Onboarding Images"
      className="justify-center"
    >
      <View className="px-6">
        <Text className="text-white font-bold text-4xl">{item.title}</Text>
        <Text className="text-white font-normal text-lg mt-6">
          {item.subtitle}
        </Text>
      </View>
    </ImageBackground>
  )
}
