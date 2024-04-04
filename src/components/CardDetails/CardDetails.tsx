import React from 'react'
import { Image, ImageSourcePropType, Text, View } from 'react-native'

import { Dumbbell, RefreshCw, Timer } from 'lucide-react-native'

type ExerciseDetailsScreenProps = {
  card: {
    imageUrl: ImageSourcePropType | undefined
    series: number
    repetitions: number
    holding: number
  }
}

export function CardDetails({ card }: ExerciseDetailsScreenProps) {
  return (
    <View className="flex-row items-center space-x-4 mt-8">
      <Image
        source={card.imageUrl}
        className="w-40 h-40 rounded-md"
        alt="Exercícios"
      />

      <View className="space-y-4">
        <View className="flex-row items-center">
          <View className="rotate-45 mr-3">
            <Dumbbell className="text-lemon-300 rotate-90" size={24} />
          </View>

          <Text className="text-white font-500">
            {card.series > 1 ? `${card.series} séries` : `${card.series} série`}{' '}
          </Text>
        </View>

        <View className="flex-row items-center">
          <RefreshCw className="text-lemon-300 mr-3" size={24} />

          <Text className="text-white font-500">
            {card.repetitions > 1
              ? `${card.repetitions} repetições`
              : `${card.repetitions} repetição`}
          </Text>
        </View>

        <View className="flex-row items-center">
          <Timer className="text-lemon-300 mr-3" size={24} />

          <Text className="text-white font-500">
            {card.holding === 10 ? '----' : `${card.holding} seg segurando`}
          </Text>
        </View>
      </View>
    </View>
  )
}
