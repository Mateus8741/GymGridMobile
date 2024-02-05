import React from 'react'
import { Image, Text, View } from 'react-native'

import Sl1 from '@assets/Icons/legs.png'

export function Cards() {
  return (
    <View className="w-auto mb-3 -mx-2 p-3 rounded-xl bg-black">
      <Image source={Sl1} className="w-14 h-14 mb-3" alt="Exercícios" />
      <Text className="text-white font-700 text-base">Treino A</Text>
      <Text className="text-white font-500 text-xs">
        Costas, Abdôme e Bíceps
      </Text>
    </View>
  )
}
