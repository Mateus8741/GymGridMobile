import React from 'react'
import { Image, Text, View } from 'react-native'

import { useProfileInfo } from '@api'
import { ChevronRight } from 'lucide-react-native'

type ExerciseCardsProps = {
  imageUrl: string
  title: string
  description: string
}

export function ExerciseCards() {
  const { ProfileInfo } = useProfileInfo()

  console.log(ProfileInfo?.display_name)

  return (
    <View className="bg-black rounded-md p-2.5 flex-row items-center mb-2 border-l-4 border-gray-g300">
      <Image
        source={{ uri: 'https://via.placeholder.com/150' }}
        className="w-20 h-20 mr-3 -ml-1 rounded-md"
        alt="Exercícios"
      />

      <View className="flex-1 space-y-2">
        <Text className="text-white font-700">Agachamento</Text>
        <Text className="text-white font-400 text-xs">
          3 séries de 15 repetições
        </Text>
      </View>

      <ChevronRight className="text-lemon-300" size={24} />
    </View>
  )
}
