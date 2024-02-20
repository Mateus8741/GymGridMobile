import React from 'react'
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native'

import { ChevronRight } from 'lucide-react-native'

export type ExerciseCardsProps = TouchableOpacityProps & {
  item: {
    imageUrl: ImageSourcePropType | undefined
    title: string
    resume: string
    series: number
    repetitions: number
    holding: number
  }
}

export function ExerciseCards({ item, ...rest }: ExerciseCardsProps) {
  function showImage() {
    if (item.imageUrl) {
      return item.imageUrl
    }

    return { uri: 'https://via.placeholder.com/150' }
  }

  return (
    <TouchableOpacity
      className="bg-black rounded-md p-2.5 flex-row items-center mb-2 border-l-4 border-gray-g300"
      {...rest}
    >
      <Image
        source={showImage()}
        className="w-20 h-20 mr-3 -ml-1 rounded-md"
        alt="Exercícios"
      />

      <View className="flex-1 space-y-2">
        <Text className="text-white font-700 uppercase">{item.title}</Text>
        <Text className="text-white font-400 text-xs">
          {item.series > 1 ? `${item.series} séries` : `${item.series} série`}{' '}
          de{' '}
          {item.repetitions > 1
            ? `${item.repetitions} repetições`
            : `${item.repetitions} repetição`}
        </Text>
      </View>

      <ChevronRight className="text-lemon-300" size={24} />
    </TouchableOpacity>
  )
}
