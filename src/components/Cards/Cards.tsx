import React from 'react'
import { Image, Text, TouchableOpacity } from 'react-native'

import { Card, cardsHome } from '@utils'

export function Cards() {
  function handlePress(card: Card) {
    console.log('Card pressed', card)
  }

  return cardsHome.map((card, index) => (
    <TouchableOpacity
      key={index}
      className="w-[182px] mb-3 -mx-3 p-3 rounded-xl bg-black"
      onPress={() => handlePress(card)}
    >
      <Image
        source={card.image}
        className="w-14 h-14 mb-3 rounded-lg"
        alt="Exercícios"
      />
      <Text className="text-white font-700 text-base">{card.title}</Text>
      <Text className="text-white font-500 text-xs">{card.description}</Text>
    </TouchableOpacity>
  ))
}
