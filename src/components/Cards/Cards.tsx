import React from 'react'
import { Image, Text, View } from 'react-native'

import { cardsHome } from '@utils'

export function Cards() {
  return cardsHome.map((card, index) => (
    <View className="w-[182px] mb-3 -mx-3 p-3 rounded-xl bg-black" key={index}>
      <Image
        source={card.image}
        className="w-14 h-14 mb-3 rounded-lg"
        alt="Exercícios"
      />
      <Text className="text-white font-700 text-base">{card.title}</Text>
      <Text className="text-white font-500 text-xs">{card.description}</Text>
    </View>
  ))
}
